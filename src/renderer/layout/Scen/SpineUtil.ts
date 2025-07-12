import { Spine, SpineDebugRenderer } from "@/renderer/lib/spine/spine-pixi/src"
import type { TextureAtlas, SkeletonData } from "../../lib/spine/spine-core/src"
import { setCurrentBone, setCurrentSpineData } from "../../store/canvasSlice"
import { store } from "@/renderer/store"
import { getGlobalTreeViewRef } from "@/renderer/store/globalContext"
// 导出全局 debugRenderer 实例
export let currentDebugRenderer: SpineDebugRenderer | null = null

export function initSkeletonStore(spineInstance: Spine) {
    currentSpineInstanceData.skel = spineInstance.skeleton.data
    currentSpineInstanceData.spineInstance = spineInstance
    const animationList = spineInstance.skeleton.data.animations
    const skinList = spineInstance.skeleton.data.skins
    const skel = {
        animations: animationList.map(item => ({ name: item.name })),
        skins: skinList.map(item => ({ name: item.name })),
    }
    const spineStore = store.getState().canvas.currentSpineData
    store.dispatch(setCurrentSpineData({
        ...spineStore,
        skel: skel,
    }))
}

export function initTextureAtlas(atlas: TextureAtlas) {
    currentSpineInstanceData.atlas = atlas

    const pageAtlas = atlas.pages.map((page) => {
        const { name, regions } = page
        const img = page.texture.getImage()

        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')!
        ctx.drawImage(img, 0, 0)

        const regionsImgs = regions.map(region => {
            const { x, y, width, height, name, degrees } = region

            // 简单按bounds截取
            const extractedCanvas = extractByBounds(canvas, x, y, width, height, degrees || 0)
            const imgBase64 = extractedCanvas.toDataURL("image/png")

            return { name, imgBase64, x, y, width, height }
        })


        return { name, regionsImgs }
    })

    const spineStore = store.getState().canvas.currentSpineData
    store.dispatch(setCurrentSpineData({
            ...spineStore,
            atlas: pageAtlas,
        }))

    return pageAtlas
}


function extractByBounds(
    sourceCanvas: HTMLCanvasElement,
    x: number, y: number, width: number, height: number,
    degrees: number
): HTMLCanvasElement {

    // 1. 按bounds截取原始区域
    const regionCanvas = document.createElement('canvas')
    regionCanvas.width = width
    regionCanvas.height = height
    const regionCtx = regionCanvas.getContext('2d')!
    regionCtx.drawImage(sourceCanvas, x, y, width, height, 0, 0, width, height)

    // 2. 如果有旋转，进行反向旋转恢复
    if (degrees !== 0) {
        const angle = -degrees * Math.PI / 180  // 反向旋转

        const finalCanvas = document.createElement('canvas')
        const finalCtx = finalCanvas.getContext('2d')!

        if (degrees === 90 || degrees === 270) {
            // 90度旋转：交换宽高
            finalCanvas.width = height
            finalCanvas.height = width
        } else {
            finalCanvas.width = width
            finalCanvas.height = height
        }

        finalCtx.save()
        finalCtx.translate(finalCanvas.width / 2, finalCanvas.height / 2)
        finalCtx.rotate(angle)
        finalCtx.drawImage(regionCanvas, -width / 2, -height / 2)
        finalCtx.restore()

        return finalCanvas
    }

    return regionCanvas
}

export async function createDebuger() {

    const debugRenderer = await SpineDebugRenderer.createInstance();

    // 可以配置调试选项
    debugRenderer.drawBones = true;
    debugRenderer.drawBoundingBoxes = false;
    debugRenderer.drawRegionAttachments = false;
    debugRenderer.drawPaths = false;
    debugRenderer.drawMeshTriangles = false;
    debugRenderer.drawMeshHull = false;
    debugRenderer.drawClipping = false;
    debugRenderer.drawEvents = false;
    debugRenderer.setOperationPanelTheme(store.getState().global.isBlackUISkin ? 'dark' : 'light')
    debugRenderer.onBoneSelect = (boneName: string) => {
        const treeViewRef = getGlobalTreeViewRef()
        const handleExpandToNode = () => {
            treeViewRef.current?.expandToNode(boneName)
        }
        handleExpandToNode()
        store.dispatch(setCurrentBone(boneName))
    }
    
    // 设置全局引用
    currentDebugRenderer = debugRenderer
    
    return debugRenderer
}

export const currentSpineInstanceData: {
    atlas: TextureAtlas | null,
    skel: SkeletonData | null,
    spineInstance: Spine | null,
} = {
    atlas: null,
    skel: null,
    spineInstance: null
}

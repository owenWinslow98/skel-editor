import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isNull, debounce } from 'lodash';
// import * as spine from 'spine-webgl40';
import { initPixi, spriteMap } from './PixiUtil';
import { Application, Point, Assets, Sprite, ALPHA_MODES, } from 'pixi.js';
import { setBonesTreeData } from '@/renderer/store/canvasSlice';
import { useAppDispatch, useAppSelector } from '@/renderer/hooks/redux';
import { Viewport } from 'pixi-viewport';
import * as spine from '../../lib/spine/spine-pixi/src'
import { SpineDebugRenderer } from '../../lib/spine/spine-pixi/src/SpineDebugRenderer';
import { TreeDataItem } from '../../ui/tree-view';
import { initTextureAtlas, initSkeletonStore } from './SpineUtil';
interface TreeNode extends TreeDataItem {
    children: TreeNode[]
}
const Scene: React.FC<{ className: string }> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch();
    const { currentSpineAssets } = useAppSelector(state => state.global);

    const pixiAppRef = useRef<{ app: Application, spriteMap: spriteMap }>(null)
    const [isPixiAppReady, setIsPixiAppReady] = useState(false)


    const initSpineAnimation = async (pixiApp: { app: Application, spriteMap: spriteMap }) => {
        try {
            const { spriteMap } = pixiApp
            const viewport = spriteMap.get('viewport') as Viewport

            const { skins, atlas, json, skel } = currentSpineAssets
            skins.map((skin) => {
                Assets.add({ alias: skin.name, src: skin.file as string, loadParser: 'loadTextures', format: 'png', data: { alphaMode: skin.pma ? ALPHA_MODES.PMA : ALPHA_MODES.UNPACK } })
            })
            Assets.add({ alias: skel.name, src: skel.file as string, loadParser: 'spineSkeletonLoader', format: 'skel' })
            Assets.add({ alias: atlas.name, src: atlas.file as string, loadParser: 'spineTextureAtlasLoader', format: 'atlas' })
            await Assets.load(skel.name)
            const textureAtlas = await Assets.load(atlas.name)
            initTextureAtlas(textureAtlas)
            
            const spineboy = await spine.Spine.from(skel.name, atlas.name, {
                scale: 1
            })
            const originPoint = spriteMap.get('originPoint') as Point
            spineboy.x = originPoint.x
            spineboy.y = originPoint.y
            initSkeletonStore(spineboy)

            // 创建调试渲染器实例
            const debugRenderer = new SpineDebugRenderer();
            // 可以配置调试选项
            debugRenderer.drawBones = true;
            debugRenderer.drawBoundingBoxes = false;
            debugRenderer.drawRegionAttachments = false;
            debugRenderer.drawPaths = false;
            debugRenderer.drawMeshTriangles = false;
            debugRenderer.drawMeshHull = false;
            debugRenderer.drawClipping = false;
            debugRenderer.drawEvents = false;
            spineboy.debug = debugRenderer;

            const { bones } = spineboy.skeleton.data
            const bonesMap = new Map<string, TreeDataItem>()
            const boneRoot: TreeDataItem = { id: '0', name: '0-root', children: [] }
            bonesMap.set(boneRoot.id, boneRoot)
            bones.forEach((bone) => {
                if (isNull(bone.parent)) return
                const treeNode: TreeDataItem = {
                    id: bone.index.toString(),
                    name: `${bone.index}-${bone.name}`,
                    children: null
                }
                bonesMap.set(treeNode.id, treeNode)
                const parentNode = bonesMap.get(bone.parent.index.toString())
                if (isNull(parentNode.children)) parentNode.children = []
                parentNode.children.push(treeNode)
            })
            dispatch(setBonesTreeData(boneRoot))
            // initBones(bonesData)
            // spineboy.skeleton.setToSetupPose();
            // spineboy.state.setAnimation(0, spineboy.state.data.skeletonData.animations[2].name, true)
            const list = spineboy.state.data.skeletonData.animations
            viewport.addChild(spineboy);
        } catch (error) {
            console.error('Spine 动画初始化失败:', error)
        }
    }

    const initBones = (bonesData: any[]) => {
        const { spriteMap } = pixiAppRef.current!
        const viewport = spriteMap.get('viewport') as Viewport
        const BoneSprite = spriteMap.get('BoneSprite') as typeof Sprite
        const originPoint = spriteMap.get('originPoint') as Point

        bonesData.forEach((bone) => {
            const boneSprite = new BoneSprite()

            boneSprite.x = bone.x
            boneSprite.y = bone.y
            const scale = bone.length / 5
            boneSprite.scale.set(scale, 1)
            boneSprite.rotation = bone.rotation || 0

            viewport.addChild(boneSprite)
        })
    }

    useEffect(() => {
        (async () => {
            pixiAppRef.current = await initPixi(canvasRef.current, containerRef.current)
            setIsPixiAppReady(true)
            windowResizeCallback()

        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (isNull(currentSpineAssets)) return
            Assets.reset()
            const { skel, atlas, json, skins } = currentSpineAssets
            const isSkelFile = skel.file !== null
            initSpineAnimation(pixiAppRef.current)
        })()
    }, [currentSpineAssets])
    /*pixijs */

    const windowResizeCallback = useCallback(() => {
        if (!pixiAppRef.current) return
        const { spriteMap } = pixiAppRef.current!
        const viewport = spriteMap.get('viewport') as Viewport
        if (!viewport) return

        viewport.resize(window.innerWidth, window.innerHeight)
    }, [])

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                canvasRef.current!.width = width
                canvasRef.current!.height = height
                const { app, spriteMap } = pixiAppRef.current!
                const viewport = spriteMap.get('viewport') as Viewport
                
                canvasRef.current!.style.width = `${width}px`
                canvasRef.current!.style.height = `${height}px`
                viewport.resize(window.innerWidth, window.innerHeight)
                app.renderer.resize(width, height);
            }
        })
        observer.observe(containerRef.current!)
        return () => {
            // window.removeEventListener('resize', windowResizeCallback)
            observer.disconnect()
        }
    }, [])

    useEffect(() => {

    }, [])

    return (
        <div className={className} ref={containerRef} style={{ margin: 0, padding: 0, background: '#333', flex: 1
         }}>
            <canvas
                ref={canvasRef}
            />
        </div>
    );
};

export default Scene;
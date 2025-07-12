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
import { initTextureAtlas, initSkeletonStore, createDebuger } from './SpineUtil';
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
            const spineboy = await spine.Spine.from(skel.name, atlas.name, {
                scale: 1
            })
            const originPoint = spriteMap.get('originPoint') as Point
            spineboy.x = originPoint.x
            spineboy.y = originPoint.y
            initSkeletonStore(spineboy)
            initTextureAtlas(textureAtlas)
            // 创建调试渲染器实例
            const debugRenderer = await createDebuger()
            spineboy.debug = debugRenderer;

            const { app } = pixiApp

            const { bones } = spineboy.skeleton.data
            console.log(bones)
            const bonesMap = new Map<string, TreeDataItem>()
            const boneRoot: TreeDataItem = { id: '0', name: '0-root', children: [], length: 0 }
            bonesMap.set(boneRoot.id, boneRoot)
            bones.forEach((bone) => {
                if (isNull(bone.parent)) return
                const treeNode: TreeDataItem = {
                    id: bone.index.toString(),
                    name: `${bone.index}-${bone.name}`,
                    children: null,
                    length: bone.length
                }
                bonesMap.set(treeNode.id, treeNode)
                const parentNode = bonesMap.get(bone.parent.index.toString())
                if (isNull(parentNode.children)) parentNode.children = []
                parentNode.children.push(treeNode)
            })
            dispatch(setBonesTreeData(boneRoot))
            viewport.addChild(spineboy);
        } catch (error) {
            console.error('Spine 动画初始化失败:', error)
        }
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
        <div className={className} ref={containerRef} style={{
            margin: 0, padding: 0, background: '#333', flex: 1
        }}>
            <canvas
                ref={canvasRef}
            />
        </div>
    );
};

export default Scene;
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isNull } from 'lodash';
// import * as spine from 'spine-webgl40';
import { initPixi, spriteMap } from './PixiUtil';
import { Application, Point, Assets, Sprite, } from 'pixi.js';
import { setBonesTreeData } from '@/renderer/store/canvasSlice';
import { useAppDispatch, useAppSelector } from '@/renderer/hooks/redux';
import { Viewport } from 'pixi-viewport';
import * as spine from '../../lib/spine/spine-pixi/src'
import { SpineDebugRenderer } from '../../lib/spine/spine-pixi/src/SpineDebugRenderer';
import { TreeDataItem } from '../../ui/tree-view';

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
            const { app, spriteMap } = pixiApp
            const viewport = spriteMap.get('viewport') as Viewport
            const spineboy = await spine.Spine.fromRaw(currentSpineAssets, {
                scale: 1
            });
            const originPoint = spriteMap.get('originPoint') as Point
            spineboy.x = originPoint.x
            spineboy.y = originPoint.y

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
            const boneRoot: TreeDataItem = { id: '0', name: 'root', children: [] }
            bonesMap.set(boneRoot.id, boneRoot)
            bones.forEach((bone) => {
                if (isNull(bone.parent)) return
                const treeNode: TreeDataItem = {
                    id: bone.index.toString(),
                    name: bone.name,
                    children: null
                }
                bonesMap.set(treeNode.id, treeNode)
                const parentNode = bonesMap.get(bone.parent.index.toString())
                if (isNull(parentNode.children)) parentNode.children = []
                parentNode.children.push(treeNode)
            })
            dispatch(setBonesTreeData(boneRoot))
            // initBones(bonesData)
            // spineboy.state.setAnimation(0, spineboy.state.data.skeletonData.animations[0].name, true)
            viewport.addChild(spineboy);
        } catch (error) {
            console.error('Spine 动画初始化失败:', error)
        }
    }

    const initBones = (bonesData: any[]) => {
        // const { bones } = useAppSelector((state) => state.canvas)
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
            // const { app } = pixiAppRef.current
            // await    .load('../../assets/npc400011.skel')
            // await Assets.load('../../assets/npc400011.atlas', {
            //     dataParser: () => {
            //         console.log('dataParser')
            //     }
            // })

            // console.log(Assets)
            // // 初始化 Spine 动画
            // await initSpineAnimation(pixiAppRef.current)

        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (isNull(currentSpineAssets)) return
            Assets.reset()
            const { skel, atlas, json, skins } = currentSpineAssets
            const isSkelFile = skel.file !== null
            initSpineAnimation(pixiAppRef.current)
            // Assets.addBundle('spine', [currentSpineAssets.skel.file, currentSpineAssets.atlas.file])


            // await Assets.load(currentSpineAssets.skel.file)
            // await Assets.load(currentSpineAssets.atlas.file)
            // await initSpineAnimation(pixiAppRef.current)
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
        window.addEventListener('resize', windowResizeCallback)
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                canvasRef.current!.width = width
                canvasRef.current!.height = height
                const { app, spriteMap } = pixiAppRef.current!
                const viewport = spriteMap.get('viewport') as Viewport

                canvasRef.current!.style.width = `${width}px`
                canvasRef.current!.style.height = `${height}px`
                viewport.resize(width, height)
            }
        })
        observer.observe(containerRef.current!)
        return () => {
            window.removeEventListener('resize', windowResizeCallback)
            observer.disconnect()
        }
    }, [])

    useEffect(() => {

    }, [])

    return (
        <div className={className} ref={containerRef} style={{ margin: 0, padding: 0, background: '#333', flex: 1, overflow: 'hidden' }}>
            <canvas
                ref={canvasRef}
            />
        </div>
    );
};

export default Scene;
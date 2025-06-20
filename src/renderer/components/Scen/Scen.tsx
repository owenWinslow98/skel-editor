import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isNull } from 'lodash';
import * as spine from 'spine-webgl40';
import { initPixi, spriteMap, TILE_SIZE } from './PixiUtil';
import { Application, Container, Graphics, Point } from 'pixi.js';
import { app } from 'electron';
import { useSelector } from 'react-redux';
import { RootState } from '@/renderer/store';
import { setMousePosition } from '@/renderer/store/CanvasSlice';
import { useAppDispatch } from '@/renderer/hooks/redux';

// const MAX_SCALE = 10

const MIN_SCALE = 0.2;
const MAX_SCALE = 4.0;

const Scene: React.FC<{ className: string }> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const scale = useRef(1)
    const [scaleNum, setScaleNum] = useState(1)
    const dispatch = useAppDispatch();

    const skeletonRef = useRef<spine.Skeleton>(null)

    const pixiAppRef = useRef<{ app: Application, spriteMap: spriteMap }>(null)
    // const [isPixiAppReady, setIsPixiAppReady] = useState(false)

    useEffect(() => {
        (async () => {
            pixiAppRef.current = await initPixi(canvasRef.current)
            windowResizeCallback()
        })()
    }, [])
    /*pixijs */
    const moueMoveCallback = useCallback((e: MouseEvent) => {
        const screen = new Point(e.clientX, e.clientY);
        const { spriteMap, app } = pixiAppRef.current!
        const world = spriteMap.get('world') as Container
        const worldPos = world.toLocal(screen, app.stage);
        const x = Number(worldPos.x.toFixed(1))
        const y = Number(worldPos.y.toFixed(1))

        dispatch(setMousePosition({ x, y }))
    }, [])
    const wheelResizeCallback = useCallback((e: WheelEvent) => {
        e.preventDefault();
        if (isNull(pixiAppRef.current)) return

        const scaleFactor = e.deltaY < 0 ? 1.1 : 0.9;
        
        const count = e.deltaY < 0 ? scale.current + 1 : scale.current - 1;
        scale.current = count
        setScaleNum(count)
        const { spriteMap } = pixiAppRef.current!


        const world = spriteMap.get('world') as Container
        const cross = spriteMap.get('cross') as Graphics
        const grid = spriteMap.get('grid') as Graphics
        const app = pixiAppRef.current!.app


        const mouse = new Point(e.clientX, e.clientY);
        const worldBefore = world.toLocal(mouse, app.stage);
        let newScale = world.scale.x * scaleFactor;
        newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale)); 

        // world.scale.x *= scaleFactor;
        // world.scale.y *= scaleFactor;
        world.scale.set(newScale, newScale);
        const worldAfter = world.toLocal(mouse, app.stage);

        world.x += (worldAfter.x - worldBefore.x) * world.scale.x;
        world.y += (worldAfter.y - worldBefore.y) * world.scale.y;



        // const { spriteMap } = pixiAppRef.current!
        // const background = spriteMap.get('background') as TilingSprite

        // let scaleNum = parseFloat((scale.current -(e.deltaY / 1000)).toFixed(1));
        // if ((scaleNum == MIN_SCALE && e.deltaY < 0) || (scaleNum == MAX_SCALE && e.deltaY > 0)) return
        // scaleNum = scaleNum < MIN_SCALE ? MIN_SCALE : scaleNum > MAX_SCALE ? MAX_SCALE : scaleNum;
        // scale.current = scaleNum
        // background.tileScale.set(scaleNum, scaleNum)
    }, [])

    const windowResizeCallback = useCallback(() => {
        // const { spriteMap } = pixiAppRef.current!
        // const backgroundTexture = spriteMap.get('backgroundTexture') as TilingSprite
        // const { innerWidth, innerHeight } = window
        // backgroundTexture.width = innerWidth
        // backgroundTexture.height = innerHeight
    }, [])

    useEffect(() => {
        canvasRef.current!.addEventListener('wheel', wheelResizeCallback)
        window.addEventListener('resize', windowResizeCallback)
        canvasRef.current!.addEventListener('mousemove', moueMoveCallback)
        return () => {
            canvasRef.current!.removeEventListener('wheel', wheelResizeCallback)
            window.removeEventListener('resize', windowResizeCallback)
            canvasRef.current!.removeEventListener('mousemove', moueMoveCallback)
        }
    }, [])



    return (
        <div className={className} style={{ margin: 0, padding: 0, background: '#333' }}>
            <canvas
                ref={canvasRef}
            // width={3840}
            // height={2160}
            />
        </div>
    );
};

export default Scene;
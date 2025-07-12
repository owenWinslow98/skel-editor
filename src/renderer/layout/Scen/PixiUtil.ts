import { isNull } from 'lodash';
import { Viewport } from 'pixi-viewport';
import { Application, Container, Graphics, Sprite, Texture, Ticker, Text, TilingSprite, Point, RenderTexture } from 'pixi.js';
import store from '@/renderer/store'; // 导入 store
import { setScale } from '@/renderer/store/canvasSlice';

// 声明 globalThis 类型
declare global {
    var __PIXI_APP__: Application;
}

type PixiEl = Sprite | Graphics | Ticker | Texture | Text | TilingSprite | Viewport | Container | Point
type PixiClass = typeof Sprite
export type spriteMap = Map<string, PixiEl | PixiClass>

let pixiApp: { app: Application, spriteMap: spriteMap } | null = null

export const TILE_SIZE = 50
export const WORLD_BACKGROUND = 0x1a1a1a; // 深灰色 - 世界外部


const WORLD_WIDTH = 3840
const WORLD_HEIGHT = 2160

export async function initPixi(canvas: HTMLCanvasElement, container: HTMLDivElement): Promise<{ app: Application, spriteMap: spriteMap }> {
    if (!isNull(pixiApp)) return pixiApp
    const app = new Application({
        view: canvas,
        backgroundColor: WORLD_BACKGROUND, // 世界外部背景色
        antialias: true, // 禁用抗锯齿以避免线条发虚
        autoDensity: true,
        resizeTo: container
    });
    globalThis.__PIXI_APP__ = app;
    // 将 canvas 传给 app
    const spriteMap = new Map<string, PixiEl | PixiClass>();
    pixiApp = { app, spriteMap }

    const viewport = new Viewport({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        worldWidth: WORLD_WIDTH,
        worldHeight: WORLD_HEIGHT,
        events: app.renderer.events,
    }).drag().wheel({
        smooth: 10,  //
    }).clampZoom({
        minScale: 0.1,
        maxScale: 10
    });

    // 创建世界背景
    const createBackgroundTexture = () => {
        const graphics = new Graphics();
        const size = 50;
        const light = 0xf0f0f0;
        const dark = 0xa0a0a0;
        graphics.lineStyle({ alignment: 0, })
        // 左上（浅）
        graphics.beginFill(light).drawRect(0, 0, size, size)
            .beginFill(dark).drawRect(size, 0, size, size)
            .beginFill(dark).drawRect(0, size, size, size)
            .beginFill(light).drawRect(size, size, size, size).endFill()
        // 添加清晰的网格线
        graphics.drawRect(0, 0, size * 2, size * 2);

        // 生成纹理
        const rt = RenderTexture.create({ width: size * 2, height: size * 2 });
        app.renderer.render(graphics, { renderTexture: rt })
        return rt
    }

    function createBoneTexture(): RenderTexture {
        const graphics = new Graphics()
        graphics.beginFill(0x00ff00) // 绿色填充
        graphics.drawRect(0, -2.5, 5, 5) // 绘制 5x5 的正方形
        graphics.endFill()
        const rt = RenderTexture.create({ width: 5, height: 5 })
        app.renderer.render(graphics, { renderTexture: rt })
        return rt
    }

    const boneTexture = createBoneTexture()
    class BoneSprite extends Sprite {
        constructor() {
            super(boneTexture)
        }
    }

    const backgroundSprite = createBackgroundTexture()
    const tiling = new TilingSprite(backgroundSprite, WORLD_WIDTH, WORLD_HEIGHT)
    viewport.addChild(tiling)

    const originPoint = new Point(WORLD_WIDTH / 2, WORLD_HEIGHT / 2)
    viewport.moveCenter(originPoint)
    // viewport.on('pointermove', (event) => {
    //     const worldPos = viewport.toWorld(event.global.x, event.global.y);
    //     const relativeX = worldPos.x - originPoint.x;
    //     const relativeY = worldPos.y - originPoint.y;
    //     store.dispatch(setMousePosition({ x: Number(relativeX.toFixed(1)), y: Number(relativeY.toFixed(1)) }))
    // })

    // 监听缩放事件 - pixi-viewport 5.x 的正确事件名称
    viewport.on('zoomed', () => {
        store.dispatch(setScale(parseFloat(viewport.scale.x.toFixed(1))))
    })

    const cross = new Graphics()
    viewport.addChild(cross)
    drawCross(cross, viewport.scale.x)
    app.stage.addChild(viewport)

    app.ticker.add(() => {
        drawCross(cross, viewport.scale.x)
    })

    spriteMap.set('viewport', viewport)
    spriteMap.set('originPoint', originPoint)
    spriteMap.set('cross', cross)
    spriteMap.set('BoneSprite', BoneSprite)
    pixiApp = { app, spriteMap };
    return pixiApp
}


export function drawCross(g: Graphics, scale: number) {
    const lineWidth = Math.max(1, Math.round(1 / scale)) // 确保最小线宽为1像素
    g.clear()
    g.lineStyle({
        width: lineWidth,
        color: 0x000000,
        alignment: 0.5 // 确保线条居中对齐
    })

    // 确保坐标是整数，避免像素偏移
    const centerX = Math.round(WORLD_WIDTH / 2)
    const centerY = Math.round(WORLD_HEIGHT / 2)

    g.moveTo(0, centerY).lineTo(WORLD_WIDTH, centerY)
    g.moveTo(centerX, 0).lineTo(centerX, WORLD_HEIGHT)
}


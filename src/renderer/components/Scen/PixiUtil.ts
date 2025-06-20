import { isNull } from 'lodash';
import { Viewport } from 'pixi-viewport';
import { Application, Container, Graphics, Sprite, Texture, Ticker, Text, TilingSprite, } from 'pixi.js';
type PixiEl = Sprite | Graphics | Ticker | Texture | Text | TilingSprite | Viewport | Container
export type spriteMap = Map<string, PixiEl>


let pixiApp: { app: Application, spriteMap: spriteMap } | null = null

export const TILE_SIZE = 50
const lightGray = 0xc0c0c0; // 浅灰
const darkGray = 0x808080;  // 深灰

export async function initPixi(canvas: HTMLCanvasElement): Promise<{ app: Application, spriteMap: spriteMap }> {
    if (!isNull(pixiApp)) return pixiApp
    const app = new Application();
    globalThis.__PIXI_APP__ = app;
    // 将 canvas 传给 app
    const spriteMap = new Map<string, PixiEl>();
    pixiApp = { app, spriteMap }
    await app.init({
        canvas: canvas,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: lightGray
    });
    const world = new Container()
    const grid = new Graphics()
    const cross = new Graphics()
    app.stage.addChild(world)
    world.addChild(grid)
    world.addChild(cross)

    spriteMap.set('world', world)
    spriteMap.set('grid', grid)
    spriteMap.set('cross', cross)

    function drawGrid() {
        cross.clear();
        grid.clear();
        const gridSize = 50;
        // 当前视图在世界坐标中的范围
        const left = -world.x / world.scale.x;
        const top = -world.y / world.scale.y;
        const right = (app.screen.width - world.x) / world.scale.x;
        const bottom = (app.screen.height - world.y) / world.scale.y;

        const startX = Math.floor(left / gridSize) * gridSize;
        const endX = Math.ceil(right / gridSize) * gridSize;
        const startY = Math.floor(top / gridSize) * gridSize;
        const endY = Math.ceil(bottom / gridSize) * gridSize;
        cross.moveTo(startX, 0).lineTo(endX, 0).moveTo(0, startY).lineTo(0, endY).stroke({ color: 0x000000, pixelLine: true, width: 1 });
    }
    const ticker = new Ticker();
    app.ticker.add(drawGrid)
    spriteMap.set('ticker', ticker);
    ticker.start();
    pixiApp = { app, spriteMap };
    return pixiApp
}

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { isNull } from 'lodash';
import * as spine from 'spine-webgl40';
const Scene: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [scale, setScale] = useState(1)

    const skeletonRef = useRef<spine.Skeleton>(null)

    /*pixijs */
    const resizeCallback = useCallback((e: WheelEvent) => {
        e.preventDefault();
        if (isNull(skeletonRef.current)) return
        const scale = -e.deltaY / 1000
        const skeleton = skeletonRef.current
        console.log(skeleton.scaleX)
        const { scaleX, scaleY } = skeleton
        skeleton.scaleX + scale <= 0 ? skeleton.scaleX = 0.1 : skeleton.scaleX = parseFloat((scaleX + scale).toFixed(1))
        skeleton.scaleY + scale <= 0 ? skeleton.scaleY = 0.1 : skeleton.scaleY = parseFloat((scaleY + scale).toFixed(1))

    }, [])
    useEffect(() => {
        const canvas = canvasRef.current
        const gl = canvas.getContext('webgl', { alpha: false })!
        const assetManager = new spine.AssetManager(gl, 'http://localhost:6387/spine/')

        // 设置资源路径（这里以 "spineboy" 为例，你要换成自己的）
        assetManager.loadTextureAtlas('C010_00.atlas')
        assetManager.loadBinary('C010_00.skel')

        let shader: any
        let batcher: any
        let skeletonRenderer: any
        let animationState: any
        let skeleton: any
        let bounds: any

        const premultipliedAlpha = true
        const mvp = new spine.Matrix4()

        function load() {
            const atlas = assetManager.get('C010_00.atlas')
            const atlasLoader = new spine.AtlasAttachmentLoader(atlas)
            const skeletonJson = new spine.SkeletonBinary(atlasLoader)

            const skeletonData = skeletonJson.readSkeletonData(assetManager.get('C010_00.skel'))

            skeleton = new spine.Skeleton(skeletonData)
            skeletonRef.current = skeleton
            skeleton.setToSetupPose()
            skeleton.updateWorldTransform()
            const skins = skeletonData.skins;
            if (skins.length > 0) {
                // Use the first available skin
                skeleton.setSkinByName(skins[1].name);
                console.log('Available skins:', skins.map(skin => skin.name));
            } else {
                console.error('No skins found in skeleton data');
            }

            const animationStateData = new spine.AnimationStateData(skeleton.data)
            animationState = new spine.AnimationState(animationStateData)
            animationState.setAnimation(0, 'action', true)

            bounds = calculateSetupPoseBounds(skeleton)

            shader = spine.Shader.newTwoColoredTextured(gl)
            batcher = new spine.PolygonBatcher(gl)
            skeletonRenderer = new spine.SkeletonRenderer(gl)
            skeletonRenderer.premultipliedAlpha = premultipliedAlpha
            skeleton.x = canvas.width / 2
            skeleton.y = canvas.height / 2
            skeleton.scaleX = 0.3
            skeleton.scaleY = 0.3
            skeleton.updateWorldTransform()
            resize()
            requestAnimationFrame(render)
        }

        function calculateSetupPoseBounds(skeleton: any) {
            skeleton.setToSetupPose()
            skeleton.updateWorldTransform()
            const offset = new spine.Vector2()
            const size = new spine.Vector2()
            skeleton.getBounds(offset, size, [])
            return { offset, size }
        }

        function resize() {
            const w = canvas.clientWidth
            const h = canvas.clientHeight
            canvas.width = w
            canvas.height = h
            gl.viewport(0, 0, w, h)
            mvp.ortho2d(0, 0, w, h)
        }

        function render(time: number) {
            resize()
            const delta = 0.016
            animationState.update(delta)
            animationState.apply(skeleton)
            skeleton.updateWorldTransform()

            gl.clearColor(0.1, 0.1, 0.1, 1)
            gl.clear(gl.COLOR_BUFFER_BIT)

            gl.enable(gl.BLEND)
            gl.blendFunc(gl.ONE, premultipliedAlpha ? gl.ONE_MINUS_SRC_ALPHA : gl.SRC_ALPHA)

            shader.bind()
            shader.setUniform4x4f(spine.Shader.MVP_MATRIX, mvp.values)

            batcher.begin(shader)
            skeletonRenderer.premultipliedAlpha = premultipliedAlpha
            skeletonRenderer.draw(batcher, skeleton)
            batcher.end()

            shader.unbind()
            requestAnimationFrame(render)
        }

        function checkAssetsLoaded() {
            if (assetManager.isLoadingComplete()) {
                load()
            } else {
                requestAnimationFrame(checkAssetsLoaded)
            }
        }

        checkAssetsLoaded()

        return () => {
            shader?.dispose?.()
            batcher?.dispose?.()
        }
    }, [])

    useEffect(() => {
        const canvasDom = canvasRef.current
        canvasDom.addEventListener('wheel', resizeCallback)
        return () => {
            canvasDom.removeEventListener('wheel', resizeCallback)
        }
    }, [])

    return (
        <div style={{ margin: 0, padding: 0, background: '#333', width: '100%', height: '100vh' }}>
            <canvas
                ref={canvasRef}
                width={3840}
                height={2160}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default Scene;
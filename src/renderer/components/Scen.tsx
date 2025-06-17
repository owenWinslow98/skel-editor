import React, { useEffect, useRef } from 'react';
// import * as spine from '@esotericsoftware/spine-canvas';
import { AssetManager, IPCDownloader } from '../lib/spine/V4.2';
import { useAppSelector } from '../hooks/redux';
import { isNull } from 'lodash';
import * as spineModule from '../lib/spine';
const Scene: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { currentSpineAssets } = useAppSelector(state => state.global);

    useEffect(() => {
        let lastFrameTime = Date.now() / 1000;
        let canvas: HTMLCanvasElement | null;
        let context: CanvasRenderingContext2D | null;
        let assetManager: any;
        let skeleton: any, animationState: any, bounds: any;
        let skeletonRenderer: any;

        if (isNull(currentSpineAssets)) return;
        const { skelFile, atlasFile, textureFiles, fileVersion } = currentSpineAssets;
        let spine = (spineModule as any)[`spineV${fileVersion.split('.').join('')}`];
        async function load42() {
            try {
                canvas = canvasRef.current;
            if (!canvas) return;
            
            context = canvas.getContext("2d");
            if (!context) return;
            
            skeletonRenderer = new spine.SkeletonRenderer(context);
            skeletonRenderer.triangleRendering = true;
            

            // Load the assets.
            assetManager = new AssetManager('', new IPCDownloader());
            assetManager.setRawDataURI(skelFile.name, skelFile.data);
            assetManager.setRawDataURI(atlasFile.name, atlasFile.data);
            textureFiles.forEach(file => {
                assetManager.setRawDataURI(file.name, file.data);
            })
            assetManager.loadBinary(skelFile.name);
            
            assetManager.loadTextureAtlas(atlasFile.name);
            await assetManager.loadAll();
  
            // // Create the texture atlas and skeleton data.
            let atlas = assetManager.require(atlasFile.name);
            
            let atlasLoader = new spine.AtlasAttachmentLoader(atlas);
            let skeletonBinary = new spine.SkeletonBinary(atlasLoader);
            let skeletonData = skeletonBinary.readSkeletonData(assetManager.require(skelFile.name));

            // // Instantiate a new skeleton based on the atlas and skeleton data.
            skeleton = new spine.Skeleton(skeletonData);
            skeleton.setToSetupPose();
            skeleton.updateWorldTransform(spine.Physics.update);
            bounds = skeleton.getBoundsRect();

            // // Setup an animation state with a default mix of 0.2 seconds.
            var animationStateData = new spine.AnimationStateData(skeleton.data);
            animationStateData.defaultMix = 0.2;
            animationState = new spine.AnimationState(animationStateData);

            // // Set the run animation, looping.
            animationState.setAnimation(0, "run", true);

            // // Start rendering.
            requestAnimationFrame(render);
            } catch (error) {
                console.log(error)
            }
        }
        async function load40() {
            try {
                canvas = canvasRef.current;
            if (!canvas) return;
            
            context = canvas.getContext("2d");
            if (!context) return;
            
            skeletonRenderer = new spine.SkeletonRenderer(context);
            skeletonRenderer.triangleRendering = true;
            

            // Load the assets.
            assetManager = new AssetManager('', new IPCDownloader());
            assetManager.setRawDataURI(skelFile.name, skelFile.data);
            assetManager.setRawDataURI(atlasFile.name, atlasFile.data);
            textureFiles.forEach(file => {
                assetManager.setRawDataURI(file.name, file.data);
            })
            assetManager.loadBinary(skelFile.name);
            
            assetManager.loadTextureAtlas(atlasFile.name);
            await assetManager.loadAll();
  
            // // Create the texture atlas and skeleton data.
            let atlas = assetManager.require(atlasFile.name);
            
            let atlasLoader = new spine.AtlasAttachmentLoader(atlas);
            let skeletonBinary = new spine.SkeletonBinary(atlasLoader);
            let skeletonData = skeletonBinary.readSkeletonData(assetManager.require(skelFile.name));
            console.log(assetManager)
            // // Instantiate a new skeleton based on the atlas and skeleton data.
            skeleton = new spine.Skeleton(skeletonData);
            skeleton.setToSetupPose();
            skeleton.updateWorldTransform();
            bounds = skeleton.getBoundsRect();

            // // Setup an animation state with a default mix of 0.2 seconds.
            var animationStateData = new spine.AnimationStateData(skeleton.data);
            animationStateData.defaultMix = 0.2;
            animationState = new spine.AnimationState(animationStateData);

            // // Set the run animation, looping.
            const animations = skeleton.data.animations;

            // 打印所有动画名称
            console.log("可用的动画:");
            animations.forEach((animation: any, index: number) => {
            console.log(`${index}: ${animation.name}`);
            });
            animationState.setAnimation(0, 'action', true);

            // // Start rendering.
            requestAnimationFrame(render);
            } catch (error) {
                console.log(error)
            }
        }


        function render() {
            if (!canvas || !context || !skeleton || !bounds || !animationState) return;

            // Calculate the delta time between this and the last frame in seconds.
            var now = Date.now() / 1000;
            var delta = now - lastFrameTime;
            lastFrameTime = now;

            // Resize the canvas drawing buffer if the canvas CSS width and height changed
            // and clear the canvas.
            if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            }
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Center the skeleton and resize it so it fits inside the canvas.
            skeleton.x = canvas.width / 2;
            skeleton.y = canvas.height - canvas.height * 0.1;
            let scale = canvas.height / bounds.height * 0.8;
            skeleton.scaleX = scale;
            skeleton.scaleY = -scale;

            // Update and apply the animation state, update the skeleton's
            // world transforms and render the skeleton.
            animationState.update(delta);
            animationState.apply(skeleton);
            fileVersion === '4.0' ? skeleton.updateWorldTransform() : skeleton.updateWorldTransform(spine.Physics.update);
            skeletonRenderer.draw(skeleton);

            requestAnimationFrame(render);
        }

        fileVersion === '4.0' ? load40() : load42();

        // 清理函数
        return () => {
            if (assetManager) {
                assetManager.dispose();
            }
        };
    }, [currentSpineAssets]);

    return (
        <div style={{ margin: 0, padding: 0, background: '#333', width: '100%', height: '100vh' }}>
            <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default Scene;
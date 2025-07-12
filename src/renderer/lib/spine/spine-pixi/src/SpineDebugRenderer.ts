/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/

import { Container } from "@pixi/display";
import { Graphics } from "@pixi/graphics";
import { Text } from "@pixi/text";
import { Sprite } from "@pixi/sprite";
import { Assets } from "@pixi/assets";
import { Texture } from "@pixi/core";
import type { Spine } from "./Spine.js";
import type { AnimationStateListener } from "../../spine-core/src";
import { ClippingAttachment, MeshAttachment, PathAttachment, RegionAttachment, SkeletonBounds } from "../../spine-core/src";
import moveSvg from './assets/move.svg'
import rotateSvg from './assets/rotate-cw.svg'
import scaleSvg from './assets/move-diagonal.svg'
import tiltSvg from './assets/rotate-3d.svg'
import { Resource } from "@pixi/core";
import { ColorMatrixFilter } from "@pixi/filter-color-matrix";
const DARK_BACKCROUND = '#f7f7f7';
const DARK_TEXT = '#fcfcfc'
const LIGHT_BACKCROUND = '#2e2e2e';
const LIGHT_TEXT = '#151515'

/**
 * Make a class that extends from this interface to create your own debug renderer.
 * @public
 */
export interface ISpineDebugRenderer {
	/**
	 * This will be called every frame, after the spine has been updated.
	 */
	renderDebug(spine: Spine): void;

	/**
	 *  This is called when the `spine.debug` object is set to null or when the spine is destroyed.
	 */
	unregisterSpine(spine: Spine): void;

	/**
	 * This is called when the `spine.debug` object is set to a new instance of a debug renderer.
	 */
	registerSpine(spine: Spine): void;
}

type DebugDisplayObjects = {
	bones: Container;
	skeletonXY: Graphics;
	regionAttachmentsShape: Graphics;
	meshTrianglesLine: Graphics;
	meshHullLine: Graphics;
	clippingPolygon: Graphics;
	boundingBoxesRect: Graphics;
	boundingBoxesCircle: Graphics;
	boundingBoxesPolygon: Graphics;
	pathsCurve: Graphics;
	pathsLine: Graphics;
	parentDebugContainer: Container;
	eventText: Container;
	boneSquare: Container;
	eventCallback: AnimationStateListener;
};

/**
 * This is a debug renderer that uses PixiJS Graphics under the hood.
 * @public
 */
export class SpineDebugRenderer implements ISpineDebugRenderer {
	private registeredSpines: Map<Spine, DebugDisplayObjects> = new Map();

	public drawMeshHull = true;
	public drawMeshTriangles = true;
	public drawBones = true;
	public drawPaths = true;
	public drawBoundingBoxes = true;
	public drawClipping = true;
	public drawRegionAttachments = true;
	public drawEvents = true;

	public lineWidth = 1;
	public regionAttachmentsColor = 0x0078ff;
	public meshHullColor = 0x0078ff;
	public meshTrianglesColor = 0xffcc00;
	public clippingPolygonColor = 0xff00ff;
	public boundingBoxesRectColor = 0x00ff00;
	public boundingBoxesPolygonColor = 0x00ff00;
	public boundingBoxesCircleColor = 0x00ff00;
	public pathsCurveColor = 0xff0000;
	public pathsLineColor = 0xff00ff;
	public skeletonXYColor = 0xff0000;
	public bonesColor = 0x00eecc;
	public eventFontSize: number = 24;
	public eventFontColor: number = 0x0;
	public hoveredBone: string | null = null;
	public selectedBone: string | null = null;
	public onBoneSelect?: (boneName: string) => void;
	public operationPanelTheme: 'dark' | 'light' = 'light';
	public panelSvgMap: Map<string, CornerWidget> = new Map();
	public panelCornerMap: Map<string, CornerWidget> = new Map();
	public selectBone: (boneName: string) => void = (boneName: string) => {
		this.selectedBone = boneName;
	}

	public hoverBone: (boneName: string) => void = (boneName: string) => {
		this.hoveredBone = boneName;
	}

	public setOperationPanelTheme: (theme: 'dark' | 'light') => void = (theme: 'dark' | 'light') => {
		this.operationPanelTheme = theme;
	}
	static async createInstance() {
		const move = Assets.load(moveSvg)
		const rotate = Assets.load(rotateSvg) 
		const scale = Assets.load(scaleSvg)
		const tilt = Assets.load(tiltSvg)
		const [moveTexture, rotateTexture, scaleTexture, tiltTexture] = await Promise.all([move, rotate, scale, tilt])
		
		const instance = new SpineDebugRenderer()
		
		// 使用 CornerWidget 创建并存储，只创建一次
		const moveCorner = new CornerWidget(16, new Sprite(moveTexture), LIGHT_BACKCROUND, 0.9, 'move');
		const rotateCorner = new CornerWidget(16, new Sprite(rotateTexture), LIGHT_BACKCROUND, 0.9, 'rotate');
		const scaleCorner = new CornerWidget(16, new Sprite(scaleTexture), LIGHT_BACKCROUND, 0.9, 'scale');
		const tiltCorner = new CornerWidget(16, new Sprite(tiltTexture), LIGHT_BACKCROUND, 0.9, 'tilt');
	
		instance.panelCornerMap.set('move', moveCorner);
		instance.panelCornerMap.set('rotate', rotateCorner);
		instance.panelCornerMap.set('scale', scaleCorner);
		instance.panelCornerMap.set('tilt', tiltCorner);
	
		return instance
	}
	/**
	 * The debug is attached by force to each spine object. So we need to create it inside the spine when we get the first update
	 */
	public registerSpine(spine: Spine): void {
		if (this.registeredSpines.has(spine)) {
			console.warn("SpineDebugRenderer.registerSpine() - this spine is already registered!", spine);
			return;
		}

		const debugDisplayObjects: DebugDisplayObjects = {
			parentDebugContainer: new Container(),
			bones: new Container(),
			skeletonXY: new Graphics(),
			regionAttachmentsShape: new Graphics(),
			meshTrianglesLine: new Graphics(),
			meshHullLine: new Graphics(),
			clippingPolygon: new Graphics(),
			boundingBoxesRect: new Graphics(),
			boundingBoxesCircle: new Graphics(),
			boundingBoxesPolygon: new Graphics(),
			pathsCurve: new Graphics(),
			pathsLine: new Graphics(),
			eventText: new Container(),
			boneSquare: new BoneSquareComponent(this.panelCornerMap),
			eventCallback: {
				event: (_, event) => {
					if (this.drawEvents) {
						const scale = Math.abs(spine.scale.x || spine.scale.y || 1);
						const text = new Text(event.data.name, { fontSize: this.eventFontSize / scale, fill: this.eventFontColor, fontFamily: "monospace" });
						text.scale.x = Math.sign(spine.scale.x);
						text.anchor.set(0.5);
						debugDisplayObjects.eventText.addChild(text);
						setTimeout(() => {
							if (!text.destroyed) {
								text.destroy();
							}
						}, 250);
					}
				},
			},
		};
		debugDisplayObjects.bones.sortableChildren = true;
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.bones);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.skeletonXY);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.regionAttachmentsShape);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.meshTrianglesLine);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.meshHullLine);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.clippingPolygon);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.boundingBoxesRect);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.boundingBoxesCircle);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.boundingBoxesPolygon);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.pathsCurve);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.pathsLine);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.eventText);
		debugDisplayObjects.parentDebugContainer.addChild(debugDisplayObjects.boneSquare);
		debugDisplayObjects.parentDebugContainer.zIndex = 999;

		// Disable screen reader and mouse input on debug objects.
		(debugDisplayObjects.parentDebugContainer as any).accessibleChildren = true;
		// (debugDisplayObjects.parentDebugContainer as any).eventMode = "none";
		(debugDisplayObjects.parentDebugContainer as any).interactiveChildren = true;

		spine.addChild(debugDisplayObjects.parentDebugContainer);

		spine.state.addListener(debugDisplayObjects.eventCallback);

		this.registeredSpines.set(spine, debugDisplayObjects);
	}
	public renderDebug(spine: Spine): void {
		if (!this.registeredSpines.has(spine)) {
			// This should never happen. Spines are registered when you assign spine.debug
			this.registerSpine(spine);
		}

		const debugDisplayObjects = this.registeredSpines.get(spine);

		if (!debugDisplayObjects) {
			return;
		}
		spine.addChild(debugDisplayObjects.parentDebugContainer);

		debugDisplayObjects.skeletonXY.clear();
		debugDisplayObjects.regionAttachmentsShape.clear();
		debugDisplayObjects.meshTrianglesLine.clear();
		debugDisplayObjects.meshHullLine.clear();
		debugDisplayObjects.clippingPolygon.clear();
		debugDisplayObjects.boundingBoxesRect.clear();
		debugDisplayObjects.boundingBoxesCircle.clear();
		debugDisplayObjects.boundingBoxesPolygon.clear();
		debugDisplayObjects.pathsCurve.clear();
		debugDisplayObjects.pathsLine.clear();

		for (let len = debugDisplayObjects.bones.children.length; len > 0; len--) {
			debugDisplayObjects.bones.children[len - 1].destroy({ children: true, texture: true, baseTexture: true });
		}


		const scale = Math.abs(spine.scale.x || spine.scale.y || 1);
		const lineWidth = this.lineWidth / scale;

		if (this.drawBones) {
			this.drawBonesFunc(spine, debugDisplayObjects, lineWidth, scale);
			this.drawBoneSquare(spine, debugDisplayObjects, lineWidth, scale);
		}

		if (this.drawPaths) {
			this.drawPathsFunc(spine, debugDisplayObjects, lineWidth);
		}

		if (this.drawBoundingBoxes) {
			this.drawBoundingBoxesFunc(spine, debugDisplayObjects, lineWidth);
		}

		if (this.drawClipping) {
			this.drawClippingFunc(spine, debugDisplayObjects, lineWidth);
		}

		if (this.drawMeshHull || this.drawMeshTriangles) {
			this.drawMeshHullAndMeshTriangles(spine, debugDisplayObjects, lineWidth);
		}

		if (this.drawRegionAttachments) {
			this.drawRegionAttachmentsFunc(spine, debugDisplayObjects, lineWidth);
		}

		if (this.drawEvents) {
			for (const child of debugDisplayObjects.eventText.children) {
				child.alpha -= 0.05;
				child.y -= 2;
			}
		}

	}
	private drawBoneSquare(spine: Spine, debugDisplayObjects: DebugDisplayObjects, lineWidth: number, scale: number): void {
		const skeleton = spine.skeleton;
		const bones = skeleton.bones;
		const boneSquareComponent = debugDisplayObjects.boneSquare as BoneSquareComponent;
	
		// 只有当有选中的骨骼时才显示
		if (!this.selectedBone) {
			boneSquareComponent.hide();
			return;
		}
	
		// 找到选中的骨骼
		const selectedBoneData = bones.find(bone => bone.data.name === this.selectedBone);
		if (!selectedBoneData) {
			boneSquareComponent.hide();
			return;
		}
	
		const bone = selectedBoneData;
		if (bone.data.name === "root" || bone.data.parent === null) {
			boneSquareComponent.hide();
			return;
		}
	
		// 更新组件
		boneSquareComponent.update(bone, skeleton, lineWidth, scale, this.operationPanelTheme);
	}
	

	private drawBonesFunc(spine: Spine, debugDisplayObjects: DebugDisplayObjects, lineWidth: number, scale: number): void {
		const skeleton = spine.skeleton;
		const skeletonX = skeleton.x;
		const skeletonY = skeleton.y;
		const bones = skeleton.bones;

		debugDisplayObjects.skeletonXY.lineStyle(lineWidth, this.skeletonXYColor, 1);

		for (let i = 0, len = bones.length; i < len; i++) {
			const bone = bones[i];
			const boneLen = bone.data.length;
			const starX = skeletonX + bone.worldX;
			const starY = skeletonY + bone.worldY;
			const endX = skeletonX + boneLen * bone.a + bone.worldX;
			const endY = skeletonY + boneLen * bone.b + bone.worldY;

			if (bone.data.name === "root" || bone.data.parent === null) {
				continue;
			}

			const w = Math.abs(starX - endX);
			const h = Math.abs(starY - endY);
			const a2 = Math.pow(w, 2);
			const b = h;
			const b2 = Math.pow(h, 2);
			const c = Math.sqrt(a2 + b2);
			const c2 = Math.pow(c, 2);
			const rad = Math.PI / 180;
			const B = Math.acos((c2 + b2 - a2) / (2 * b * c)) || 0;

			if (c === 0) {
				continue;
			}

			const gp = new Graphics();
			gp.zIndex = this.hoveredBone ? 1001 : 999
			debugDisplayObjects.bones.addChild(gp);

			// 启用交互
			(gp as any).eventMode = 'static';
			(gp as any).cursor = 'pointer';


			// 绘制骨骼的函数
			const drawBone = () => {
				gp.clear();
				const refRation = c / 50 / scale;
				const isShowBone = bone.data.name === this.selectedBone || bone.data.name === this.hoveredBone
				const color = isShowBone ? this.bonesColor : this.bonesColor
				const alpha = isShowBone ? 1 : 0.001
				gp.beginFill(color, alpha);
				gp.drawPolygon(0, 0, 0 - refRation, c - refRation * 3, 0, c - refRation, 0 + refRation, c - refRation * 3);
				// gp.endFill();

				// 绘制关节点
				gp.lineStyle(lineWidth + refRation / 2.4, color, alpha);
				gp.beginFill(0x000000, 0.001);
				gp.drawCircle(0, c, refRation * 1.2);
				gp.endFill();
			};

			// 初始绘制
			drawBone();

			// 添加鼠标事件
			(gp as any).on('pointerover', () => {
				this.hoveredBone = bone.data.name
			});

			(gp as any).on('pointerout', () => {
				this.hoveredBone = null
			});

			(gp as any).on('pointerdown', () => {
				this.selectedBone = bone.data.name
				if (this.onBoneSelect) {
					this.onBoneSelect(bone.data.name);
				}
			})

			gp.x = starX;
			gp.y = starY;
			gp.pivot.y = c;

			// 计算旋转角度
			let rotation = 0;
			if (starX < endX && starY < endY) {
				rotation = -B + 180 * rad;
			} else if (starX > endX && starY < endY) {
				rotation = 180 * rad + B;
			} else if (starX > endX && starY > endY) {
				rotation = -B;
			} else if (starX < endX && starY > endY) {
				rotation = B;
			} else if (starY === endY && starX < endX) {
				rotation = 90 * rad;
			} else if (starY === endY && starX > endX) {
				rotation = -90 * rad;
			} else if (starX === endX && starY < endY) {
				rotation = 180 * rad;
			} else if (starX === endX && starY > endY) {
				rotation = 0;
			}
			gp.rotation = rotation;
		}

		// 绘制骨架起点 "X" 形状
		const startDotSize = lineWidth * 3;
		debugDisplayObjects.skeletonXY.moveTo(skeletonX - startDotSize, skeletonY - startDotSize);
		debugDisplayObjects.skeletonXY.lineTo(skeletonX + startDotSize, skeletonY + startDotSize);
		debugDisplayObjects.skeletonXY.moveTo(skeletonX + startDotSize, skeletonY - startDotSize);
		debugDisplayObjects.skeletonXY.lineTo(skeletonX - startDotSize, skeletonY + startDotSize);
	}

	private drawRegionAttachmentsFunc(spine: Spine, debugDisplayObjects: DebugDisplayObjects, lineWidth: number): void {
		const skeleton = spine.skeleton;
		const slots = skeleton.slots;

		debugDisplayObjects.regionAttachmentsShape.lineStyle(lineWidth, this.regionAttachmentsColor, 1);

		for (let i = 0, len = slots.length; i < len; i++) {
			const slot = slots[i];
			const attachment = slot.getAttachment();

			if (attachment == null || !(attachment instanceof RegionAttachment)) {
				continue;
			}

			const regionAttachment = attachment;

			const vertices = new Float32Array(8);

			regionAttachment.computeWorldVertices(slot, vertices, 0, 2);
			debugDisplayObjects.regionAttachmentsShape.drawPolygon(Array.from(vertices.slice(0, 8)));
		}
	}

	private drawMeshHullAndMeshTriangles(spine: Spine, debugDisplayObjects: DebugDisplayObjects, lineWidth: number): void {
		const skeleton = spine.skeleton;
		const slots = skeleton.slots;

		debugDisplayObjects.meshHullLine.lineStyle(lineWidth, this.meshHullColor, 1);
		debugDisplayObjects.meshTrianglesLine.lineStyle(lineWidth, this.meshTrianglesColor, 1);

		for (let i = 0, len = slots.length; i < len; i++) {
			const slot = slots[i];

			if (!slot.bone.active) {
				continue;
			}
			const attachment = slot.getAttachment();

			if (attachment == null || !(attachment instanceof MeshAttachment)) {
				continue;
			}

			const meshAttachment = attachment;

			const vertices = new Float32Array(meshAttachment.worldVerticesLength);
			const triangles = meshAttachment.triangles;
			let hullLength = meshAttachment.hullLength;

			meshAttachment.computeWorldVertices(slot, 0, meshAttachment.worldVerticesLength, vertices, 0, 2);
			// draw the skinned mesh (triangle)
			if (this.drawMeshTriangles) {
				for (let i = 0, len = triangles.length; i < len; i += 3) {
					const v1 = triangles[i] * 2;
					const v2 = triangles[i + 1] * 2;
					const v3 = triangles[i + 2] * 2;

					debugDisplayObjects.meshTrianglesLine.moveTo(vertices[v1], vertices[v1 + 1]);
					debugDisplayObjects.meshTrianglesLine.lineTo(vertices[v2], vertices[v2 + 1]);
					debugDisplayObjects.meshTrianglesLine.lineTo(vertices[v3], vertices[v3 + 1]);
				}
			}

			// draw skin border
			if (this.drawMeshHull && hullLength > 0) {
				hullLength = (hullLength >> 1) * 2;
				let lastX = vertices[hullLength - 2];
				let lastY = vertices[hullLength - 1];

				for (let i = 0, len = hullLength; i < len; i += 2) {
					const x = vertices[i];
					const y = vertices[i + 1];

					debugDisplayObjects.meshHullLine.moveTo(x, y);
					debugDisplayObjects.meshHullLine.lineTo(lastX, lastY);
					lastX = x;
					lastY = y;
				}
			}
		}
	}

	private drawClippingFunc(spine: Spine, debugDisplayObjects: DebugDisplayObjects, lineWidth: number): void {
		const skeleton = spine.skeleton;
		const slots = skeleton.slots;

		debugDisplayObjects.clippingPolygon.lineStyle(lineWidth, this.clippingPolygonColor, 1);
		for (let i = 0, len = slots.length; i < len; i++) {
			const slot = slots[i];

			if (!slot.bone.active) {
				continue;
			}
			const attachment = slot.getAttachment();

			if (attachment == null || !(attachment instanceof ClippingAttachment)) {
				continue;
			}

			const clippingAttachment = attachment;

			const nn = clippingAttachment.worldVerticesLength;
			const world = new Float32Array(nn);

			clippingAttachment.computeWorldVertices(slot, 0, nn, world, 0, 2);
			debugDisplayObjects.clippingPolygon.drawPolygon(Array.from(world));
		}
	}

	private drawBoundingBoxesFunc(spine: Spine, debugDisplayObjects: DebugDisplayObjects, lineWidth: number): void {
		// draw the total outline of the bounding box
		debugDisplayObjects.boundingBoxesRect.lineStyle(lineWidth, this.boundingBoxesRectColor, 5);

		const bounds = new SkeletonBounds();

		bounds.update(spine.skeleton, true);
		debugDisplayObjects.boundingBoxesRect.drawRect(bounds.minX, bounds.minY, bounds.getWidth(), bounds.getHeight());

		const polygons = bounds.polygons;
		const drawPolygon = (polygonVertices: ArrayLike<number>, _offset: unknown, count: number): void => {
			debugDisplayObjects.boundingBoxesPolygon.lineStyle(lineWidth, this.boundingBoxesPolygonColor, 1);
			debugDisplayObjects.boundingBoxesPolygon.beginFill(this.boundingBoxesPolygonColor, 0.1);

			if (count < 3) {
				throw new Error("Polygon must contain at least 3 vertices");
			}
			const paths = [];
			const dotSize = lineWidth * 2;

			for (let i = 0, len = polygonVertices.length; i < len; i += 2) {
				const x1 = polygonVertices[i];
				const y1 = polygonVertices[i + 1];

				// draw the bounding box node
				debugDisplayObjects.boundingBoxesCircle.lineStyle(0);
				debugDisplayObjects.boundingBoxesCircle.beginFill(this.boundingBoxesCircleColor);
				debugDisplayObjects.boundingBoxesCircle.drawCircle(x1, y1, dotSize);
				debugDisplayObjects.boundingBoxesCircle.endFill();

				paths.push(x1, y1);
			}

			// draw the bounding box area
			debugDisplayObjects.boundingBoxesPolygon.drawPolygon(paths);
			debugDisplayObjects.boundingBoxesPolygon.endFill();
		};

		for (let i = 0, len = polygons.length; i < len; i++) {
			const polygon = polygons[i];

			drawPolygon(polygon, 0, polygon.length);
		}
	}

	private drawPathsFunc(spine: Spine, debugDisplayObjects: DebugDisplayObjects, lineWidth: number): void {
		const skeleton = spine.skeleton;
		const slots = skeleton.slots;

		debugDisplayObjects.pathsCurve.lineStyle(lineWidth, this.pathsCurveColor, 1);
		debugDisplayObjects.pathsLine.lineStyle(lineWidth, this.pathsLineColor, 1);

		for (let i = 0, len = slots.length; i < len; i++) {
			const slot = slots[i];

			if (!slot.bone.active) {
				continue;
			}
			const attachment = slot.getAttachment();

			if (attachment == null || !(attachment instanceof PathAttachment)) {
				continue;
			}

			const pathAttachment = attachment;
			let nn = pathAttachment.worldVerticesLength;
			const world = new Float32Array(nn);

			pathAttachment.computeWorldVertices(slot, 0, nn, world, 0, 2);
			let x1 = world[2];
			let y1 = world[3];
			let x2 = 0;
			let y2 = 0;

			if (pathAttachment.closed) {
				const cx1 = world[0];
				const cy1 = world[1];
				const cx2 = world[nn - 2];
				const cy2 = world[nn - 1];

				x2 = world[nn - 4];
				y2 = world[nn - 3];

				// curve
				debugDisplayObjects.pathsCurve.moveTo(x1, y1);
				debugDisplayObjects.pathsCurve.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);

				// handle
				debugDisplayObjects.pathsLine.moveTo(x1, y1);
				debugDisplayObjects.pathsLine.lineTo(cx1, cy1);
				debugDisplayObjects.pathsLine.moveTo(x2, y2);
				debugDisplayObjects.pathsLine.lineTo(cx2, cy2);
			}
			nn -= 4;
			for (let ii = 4; ii < nn; ii += 6) {
				const cx1 = world[ii];
				const cy1 = world[ii + 1];
				const cx2 = world[ii + 2];
				const cy2 = world[ii + 3];

				x2 = world[ii + 4];
				y2 = world[ii + 5];
				// curve
				debugDisplayObjects.pathsCurve.moveTo(x1, y1);
				debugDisplayObjects.pathsCurve.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);

				// handle
				debugDisplayObjects.pathsLine.moveTo(x1, y1);
				debugDisplayObjects.pathsLine.lineTo(cx1, cy1);
				debugDisplayObjects.pathsLine.moveTo(x2, y2);
				debugDisplayObjects.pathsLine.lineTo(cx2, cy2);
				x1 = x2;
				y1 = y2;
			}
		}
	}

	public unregisterSpine(spine: Spine): void {
		if (!this.registeredSpines.has(spine)) {
			console.warn("SpineDebugRenderer.unregisterSpine() - spine is not registered, can't unregister!", spine);
		}
		const debugDisplayObjects = this.registeredSpines.get(spine);

		if (!debugDisplayObjects) {
			return;
		}

		spine.state.removeListener(debugDisplayObjects.eventCallback);

		debugDisplayObjects.parentDebugContainer.destroy({ baseTexture: true, children: true, texture: true });
		this.registeredSpines.delete(spine);
	}
}


class CornerWidget extends Container {
    private graphics: Graphics;
    private sprite: Sprite;
    private cornerSize: number;
    private hoverFilter: ColorMatrixFilter;
	
    // Remove this line - use inherited alpha property instead
    // private alpha: number;
	public type: 'rotate' | 'move' | 'tilt' | 'scale' = 'rotate';

    constructor(cornerSize: number, sprite: Sprite, theme: string = LIGHT_BACKCROUND, alpha: number = 0.9, type: 'rotate' | 'move' | 'tilt' | 'scale' = 'rotate') {
        super();

        this.cornerSize = cornerSize;
        this.alpha = alpha; // Use inherited alpha property
		this.type = type;
        (this as any).interactive = true;
        (this as any).cursor = 'pointer'; // 可选，变成手型
        // 创建Graphics背景
        this.graphics = new Graphics();
        this.graphics.beginFill(theme, alpha);
        this.graphics.drawRect(0, 0, cornerSize, cornerSize);
        this.graphics.endFill();

        // 设置sprite
        this.sprite = sprite;
        this.sprite.width = cornerSize * 2 / 3;
        this.sprite.height = cornerSize * 2 / 3;

		this.sprite.x = cornerSize / 6;
		this.sprite.y = cornerSize / 6;
        // 添加到container
        this.addChild(this.graphics);
        this.addChild(this.sprite);
		this.hoverFilter = new ColorMatrixFilter();	
		this.on('pointerover', () => {
			this.setAlpha(1);
            this.hoverFilter.brightness(1.5, false); // 提亮整体
            this.filters = [this.hoverFilter];
        });

        this.on('pointerout', () => {
            this.setAlpha(alpha);
            this.filters = []; // 移除滤镜
        });

        // 为move类型添加拖拽功能
        if (this.type === 'move') {
            this.setupMoveDrag();
        }
    }

	private setupMoveDrag(): void {
		this.on('pointerdown', (event: any) => {
			// 阻止事件冒泡到viewport
			event.stopPropagation();
			
			this.isDragging = true;
			this.setAlpha(1);
			this.hoverFilter.brightness(1.5, false);
			this.filters = [this.hoverFilter];
			
			// 记录开始拖拽的位置
			this.dragStartPos = { x: event.data.global.x, y: event.data.global.y };
			
			// 记录父容器的原始位置
			if (this.parent) {
				this.originalParentPos = { x: this.parent.x, y: this.parent.y };
			}
		});
	
		this.on('pointermove', (event: any) => {
			if (this.isDragging && this.parent) {
				// 阻止事件冒泡到viewport
				event.stopPropagation();
				console.log(this.parent)
				const deltaX = event.data.global.x - this.dragStartPos.x;
				const deltaY = event.data.global.y - this.dragStartPos.y;
				
				// 更新父容器位置
				this.parent.x = this.originalParentPos.x + deltaX;
				this.parent.y = this.originalParentPos.y + deltaY;
			}
		});
	
		this.on('pointerup', (event: any) => {
			// 阻止事件冒泡到viewport
			event.stopPropagation();
			
			this.isDragging = false;
			this.setAlpha(0.9);
			this.filters = [];
		});
	
		this.on('pointerupoutside', (event: any) => {
			// 阻止事件冒泡到viewport
			event.stopPropagation();
			
			this.isDragging = false;
			this.setAlpha(0.9);
			this.filters = [];
		});
	}
    setTheme(theme: string, alpha?: number): void {
        if (alpha !== undefined) {
            this.alpha = alpha; // Use inherited alpha
        }

        // 重新绘制graphics
        this.graphics.clear();
		// here disabled set theme
		// const color = theme === 'dark' ? DARK_BACKCROUND : LIGHT_BACKCROUND;
		const color = LIGHT_BACKCROUND;
        this.graphics.beginFill(color, this.alpha);
        this.graphics.drawRect(0, 0, this.cornerSize, this.cornerSize);
        this.graphics.endFill();
    }

    setAlpha(alpha: number): void {
        this.alpha = alpha; // Use inherited alpha
        this.graphics.alpha = alpha;
        this.sprite.alpha = alpha;
    }
}

class BoneSquareComponent extends Container {
    private mainRect: Graphics;
    private moveCorner: CornerWidget;
    private rotateCorner: CornerWidget;
    private scaleCorner: CornerWidget;
    private tiltCorner: CornerWidget;

    constructor(panelCornerMap: Map<string, CornerWidget>) {
        super();

        // 创建主矩形
        this.mainRect = new Graphics();
        this.addChild(this.mainRect);

        // 为这个实例创建独立的角标（重用纹理但创建新实例）
        const moveTemplate = panelCornerMap.get('move')!;
        const rotateTemplate = panelCornerMap.get('rotate')!;
        const scaleTemplate = panelCornerMap.get('scale')!;
        const tiltTemplate = panelCornerMap.get('tilt')!;

        this.moveCorner = moveTemplate;
        this.rotateCorner = rotateTemplate;
        this.scaleCorner = scaleTemplate;
        this.tiltCorner = tiltTemplate;

        this.addChild(this.moveCorner);
        this.addChild(this.rotateCorner);
        this.addChild(this.scaleCorner);
        this.addChild(this.tiltCorner);

        // 初始状态不可见
        this.visible = false;
    }
	setTheme(theme: string): void {
		this.moveCorner.setTheme(theme);
		this.rotateCorner.setTheme(theme);
		this.scaleCorner.setTheme(theme);
		this.tiltCorner.setTheme(theme);
	}	

    update(bone: any, skeleton: any, lineWidth: number, scale: number, operationPanelTheme: 'dark' | 'light' = 'light'): void {

        const boneLen = bone.data.length;
        const starX = skeleton.x + bone.worldX;
        const starY = skeleton.y + bone.worldY;
        const endX = skeleton.x + boneLen * bone.a + bone.worldX;
        const endY = skeleton.y + boneLen * bone.b + bone.worldY;

        // 计算骨骼长度和角度
        const w = Math.abs(starX - endX);
        const h = Math.abs(starY - endY);
        const c = Math.sqrt(w * w + h * h);

        if (c === 0) {
            this.visible = false;
            return;
        }

        this.visible = true;

        // 更新主矩形
        const boxWidth = 20;
        const boxLength = boneLen + 10;
        const borderOffset = 0.25;

        this.mainRect.clear();
        this.mainRect.lineStyle(0.5, '#02fcfc', 1);
        this.mainRect.beginFill(0x000000, 0);
        this.mainRect.drawRect(-boxWidth / 2, 0, boxWidth, boxLength);
        this.mainRect.endFill();

        // 更新四个角的位置
        const cornerSize = 16;

		this.setTheme(operationPanelTheme);
        this.tiltCorner.position.set(-boxWidth / 2 - cornerSize - borderOffset, -cornerSize - borderOffset);
        this.scaleCorner.position.set(boxWidth / 2 + borderOffset, -cornerSize - borderOffset);
        this.moveCorner.position.set(-boxWidth / 2 - cornerSize - borderOffset, boxLength + borderOffset);
        this.rotateCorner.position.set(boxWidth / 2 + borderOffset, boxLength + borderOffset);
        // 更新容器的位置和旋转
        this.x = starX;
        this.y = starY;
        this.pivot.y = c;

        // 计算旋转角度
        const rad = Math.PI / 180;
        const a2 = w * w;
        const b2 = h * h;
        const c2 = c * c;
        const B = Math.acos((c2 + b2 - a2) / (2 * h * c)) || 0;

        let rotation = 0;
        if (starX < endX && starY < endY) {
            rotation = -B + 180 * rad;
        } else if (starX > endX && starY < endY) {
            rotation = 180 * rad + B;
        } else if (starX > endX && starY > endY) {
            rotation = -B;
        } else if (starX < endX && starY > endY) {
            rotation = B;
        } else if (starY === endY && starX < endX) {
            rotation = 90 * rad;
        } else if (starY === endY && starX > endX) {
            rotation = -90 * rad;
        } else if (starX === endX && starY < endY) {
            rotation = 180 * rad;
        } else if (starX === endX && starY > endY) {
            rotation = 0;
        }
        this.rotation = rotation;
    }

    hide(): void {
        this.visible = false;
    }
}
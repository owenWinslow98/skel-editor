import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 定义画布状态的类型
interface CanvasState {
  // 画布尺寸
  width: number;
  height: number;
  
  // 缩放状态
  scale: number;
  minScale: number;
  maxScale: number;
  
  // 视图位置
  viewportX: number;
  viewportY: number;
  
  // 画布设置
  backgroundColor: string;
  showGrid: boolean;
  gridSize: number;
  
  // 渲染设置
  antialias: boolean;
  preserveDrawingBuffer: boolean;
  
  // 交互状态
  isDragging: boolean;
  isZooming: boolean;
  
  // 坐标显示
  showCoordinates: boolean;
  mouseX: number;
  mouseY: number;
}

// 初始状态
const initialState: CanvasState = {
  width: 1920,
  height: 1080,
  
  scale: 1.0,
  minScale: 0.1,
  maxScale: 10.0,
  
  viewportX: 0,
  viewportY: 0,
  
  backgroundColor: '#333333',
  showGrid: true,
  gridSize: 50,
  
  antialias: true,
  preserveDrawingBuffer: true,
  
  isDragging: false,
  isZooming: false,
  
  showCoordinates: true,
  mouseX: 0,
  mouseY: 0,
};

// 创建 slice
const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    // 画布尺寸管理
    setCanvasSize: (state, action: PayloadAction<{ width: number; height: number }>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
    
    // 缩放控制
    setScale: (state, action: PayloadAction<number>) => {
      state.scale = Math.max(state.minScale, Math.min(state.maxScale, action.payload));
    },
    
    setScaleLimits: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.minScale = action.payload.min;
      state.maxScale = action.payload.max;
      // 确保当前缩放在范围内
      state.scale = Math.max(state.minScale, Math.min(state.maxScale, state.scale));
    },
    
    zoomIn: (state) => {
      state.scale = Math.min(state.maxScale, state.scale * 1.2);
    },
    
    zoomOut: (state) => {
      state.scale = Math.max(state.minScale, state.scale / 1.2);
    },
    
    resetZoom: (state) => {
      state.scale = 1.0;
    },
    
    // 视图位置控制
    setViewportPosition: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.viewportX = action.payload.x;
      state.viewportY = action.payload.y;
    },
    
    panViewport: (state, action: PayloadAction<{ deltaX: number; deltaY: number }>) => {
      state.viewportX += action.payload.deltaX;
      state.viewportY += action.payload.deltaY;
    },
    
    // 画布设置
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    
    toggleGrid: (state) => {
      state.showGrid = !state.showGrid;
    },
    
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = Math.max(10, action.payload);
    },
    
    // 渲染设置
    setAntialias: (state, action: PayloadAction<boolean>) => {
      state.antialias = action.payload;
    },
    
    setPreserveDrawingBuffer: (state, action: PayloadAction<boolean>) => {
      state.preserveDrawingBuffer = action.payload;
    },
    
    // 交互状态
    setDragging: (state, action: PayloadAction<boolean>) => {
      state.isDragging = action.payload;
    },
    
    setZooming: (state, action: PayloadAction<boolean>) => {
      state.isZooming = action.payload;
    },
    
    // 坐标显示
    toggleCoordinates: (state) => {
      state.showCoordinates = !state.showCoordinates;
    },
    
    setMousePosition: (state, action: PayloadAction<{ x: number; y: number }>) => {
      console.log(action.payload)
      state.mouseX = action.payload.x;
      state.mouseY = action.payload.y;
    },
    
    // 重置画布状态
    resetCanvasState: () => initialState,
  },
});

// 导出 actions
export const {
  setCanvasSize,
  setScale,
  setScaleLimits,
  zoomIn,
  zoomOut,
  resetZoom,
  setViewportPosition,
  panViewport,
  setBackgroundColor,
  toggleGrid,
  setGridSize,
  setAntialias,
  setPreserveDrawingBuffer,
  setDragging,
  setZooming,
  toggleCoordinates,
  setMousePosition,
  resetCanvasState,
} = canvasSlice.actions;

// 导出 reducer
export default canvasSlice.reducer;

// 导出类型
export type { CanvasState };
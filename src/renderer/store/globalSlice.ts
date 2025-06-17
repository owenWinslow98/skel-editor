import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 定义 Spine 文件数据的类型
interface SpineFileData {
  name: string;
  data: string; // blob URL 字符串
  path: string;
}

interface SpineRawData {
  name: string;
  data: Uint8Array;
  path: string;
}

interface SpineAssets {
  skelFile: SpineFileData | null;
  atlasFile: SpineFileData | null;
  textureFiles: SpineFileData[] | null;
  fileVersion: string;
}

// 定义全局状态的类型
interface GlobalState {
  // 窗口状态
  isMaximized: boolean;

  // Spine 相关状态
  currentSpineAssets: SpineAssets | null;
  isSpineLoaded: boolean;
  spineLoadError: string | null;

  // 动画状态
  currentAnimation: string | null;
  isPlaying: boolean;
  animationSpeed: number;

  // UI 状态
  showGrid: boolean;
  showBounds: boolean;
  backgroundColor: string;

  // 文件状态
  currentFilePath: string | null;
  hasUnsavedChanges: boolean;
}

// 初始状态
const initialState: GlobalState = {
  isMaximized: false,

  currentSpineAssets: null,
  isSpineLoaded: false,
  spineLoadError: null,

  currentAnimation: null,
  isPlaying: false,
  animationSpeed: 1.0,

  showGrid: false,
  showBounds: false,
  backgroundColor: '#333333',

  currentFilePath: null,
  hasUnsavedChanges: false,
};

// 创建 slice
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    // 窗口状态管理
    setMaximized: (state, action: PayloadAction<boolean>) => {
      state.isMaximized = action.payload;
    },

    // Spine 资源管理
    setSpineAssets: (state, action: PayloadAction<SpineAssets>) => {
      state.currentSpineAssets = action.payload;
      state.isSpineLoaded = false;
      state.spineLoadError = null;
    },

    setSpineLoaded: (state, action: PayloadAction<boolean>) => {
      state.isSpineLoaded = action.payload;
      if (action.payload) {
        state.spineLoadError = null;
      }
    },

    setSpineLoadError: (state, action: PayloadAction<string>) => {
      state.spineLoadError = action.payload;
      state.isSpineLoaded = false;
    },

    clearSpineAssets: (state) => {
      state.currentSpineAssets = null;
      state.isSpineLoaded = false;
      state.spineLoadError = null;
      state.currentAnimation = null;
      state.isPlaying = false;
    },

    // 动画控制
    setCurrentAnimation: (state, action: PayloadAction<string>) => {
      state.currentAnimation = action.payload;
    },

    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },

    setAnimationSpeed: (state, action: PayloadAction<number>) => {
      state.animationSpeed = Math.max(0.1, Math.min(5.0, action.payload));
    },

    // UI 控制
    toggleGrid: (state) => {
      state.showGrid = !state.showGrid;
    },

    setShowGrid: (state, action: PayloadAction<boolean>) => {
      state.showGrid = action.payload;
    },

    toggleBounds: (state) => {
      state.showBounds = !state.showBounds;
    },

    setShowBounds: (state, action: PayloadAction<boolean>) => {
      state.showBounds = action.payload;
    },

    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },

    // 文件状态管理
    setCurrentFilePath: (state, action: PayloadAction<string | null>) => {
      state.currentFilePath = action.payload;
    },

    setUnsavedChanges: (state, action: PayloadAction<boolean>) => {
      state.hasUnsavedChanges = action.payload;
    },

    // 重置所有状态
    resetGlobalState: () => initialState,
  },
});

// 导出 actions
export const {
  setMaximized,
  setSpineAssets,
  setSpineLoaded,
  setSpineLoadError,
  clearSpineAssets,
  setCurrentAnimation,
  setPlaying,
  setAnimationSpeed,
  toggleGrid,
  setShowGrid,
  toggleBounds,
  setShowBounds,
  setBackgroundColor,
  setCurrentFilePath,
  setUnsavedChanges,
  resetGlobalState,
} = globalSlice.actions;

// 导出 reducer
export default globalSlice.reducer;

// 导出类型
export type { GlobalState, SpineAssets, SpineFileData, SpineRawData };
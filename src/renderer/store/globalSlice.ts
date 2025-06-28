import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 定义 Spine 文件数据的类型
interface SpineFile {
  file: string | null,
  path: string | null,
  name: string,
}

interface SpineRawData {
  name: string;
  data: Uint8Array;
  path: string;
}

interface SpineAssets {
  skel: SpineFile | null;
  atlas: SpineFile | null;
  json: SpineFile | null;
  skins: SpineFile[] | null;
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

  // UI 状态
  showGrid: boolean;
  showBounds: boolean;

  // 文件状态
  currentFilePath: string | null;
  hasUnsavedChanges: boolean;
  isBlackUISkin: boolean;
  isAssetsReady: boolean;
}

// 初始状态
const initialState: GlobalState = {
  isMaximized: false,

  currentSpineAssets: null, // 当前 Spine 资源
  isSpineLoaded: false, // Spine 资源是否加载完成
  spineLoadError: null, // Spine 资源加载错误

  showGrid: false,
  showBounds: false,

  currentFilePath: null,
  hasUnsavedChanges: false,
  isBlackUISkin: false, // 黑夜模式
  isAssetsReady: false, // 资源是否加载完成
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
      state.isAssetsReady = true;
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

    // 文件状态管理
    setCurrentFilePath: (state, action: PayloadAction<string | null>) => {
      state.currentFilePath = action.payload;
    },

    setUnsavedChanges: (state, action: PayloadAction<boolean>) => {
      state.hasUnsavedChanges = action.payload;
    },

    toggleBlackUISkin: (state) => {
      state.isBlackUISkin = !state.isBlackUISkin;
    },

    setAssetsReady: (state, action: PayloadAction<boolean>) => {
      state.isAssetsReady = action.payload;
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
  toggleGrid,
  setShowGrid,
  toggleBounds,
  setShowBounds,
  setCurrentFilePath,
  setUnsavedChanges,
  resetGlobalState,
  toggleBlackUISkin,
} = globalSlice.actions;

// 导出 reducer
export default globalSlice.reducer;

// 导出类型
export type { GlobalState, SpineAssets, SpineFile, SpineRawData };
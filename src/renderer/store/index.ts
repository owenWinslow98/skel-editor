import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalSlice';
import canvasReducer from './canvasSlice';
// 配置 store
export const store = configureStore({
  reducer: {
    global: globalReducer,
    canvas: canvasReducer,
  },
  // 开发环境下启用 Redux DevTools
  devTools: process.env.NODE_ENV !== 'production',
});

// 导出类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 导出 store
export default store;
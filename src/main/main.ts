import { app, BrowserWindow, dialog, ipcMain, screen } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import { setSkelPath } from './module/Store';
import fs from 'node:fs';
import httpServer from './module/HttpHelper';
import { TextureAtlas } from '@esotericsoftware/spine-core';
import { SpineRawData } from '../renderer/store/globalSlice';
import { readVersionFromSkel } from './module/Utils';
process.stdout.write = ((write) => {
  return function (chunk: any, encoding?: any, callback?: any) {
    return write.call(process.stdout, '[main] ' + chunk, encoding, callback);
  };
})(process.stdout.write);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}
ipcMain.handle('dialog:openFile', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      { name: '*.skel,*.json', extensions: ['skel', 'json'] },
    ]
  });
  if (canceled) return null;

  setSkelPath(filePaths[0]);
  // 读取文件为 Buffer，然后转换为可传输的格式
  const fileBuffer = fs.readFileSync(filePaths[0]);
  const version = readVersionFromSkel(fileBuffer)

  const fileExtension = path.extname(filePaths[0]);

  // 同时读取相关的 atlas 和 png 文件（如果存在）
  const basePath = path.dirname(filePaths[0]);
  const baseName = path.basename(filePaths[0], fileExtension);
  const result = {
    skelFile: {
      name: path.basename(filePaths[0]),
      data: fileBuffer, // 转换为数组以便传输
      path: filePaths[0]
    },
    atlasFile: null as any,
    textureFiles: null as any,
    fileVersion: version
  };

  // 尝试找到对应的 atlas 文件
  const atlasPath = path.join(basePath, baseName + '.atlas');
  if (fs.existsSync(atlasPath)) {
    
    const atlasBuffer = fs.readFileSync(atlasPath);
    result.atlasFile = {
      name: baseName + '.atlas',
      data: atlasBuffer,
      path: atlasPath
    };

    // find png file
    const pngString  = atlasBuffer.toString('utf8');
    let atlas = new TextureAtlas(pngString);

    const textureFiles: SpineRawData[] = []
    atlas.pages.forEach(page => {
      const textureFile = path.join(basePath, page.name)
      if (fs.existsSync(textureFile)) {
        const textureBuffer = fs.readFileSync(textureFile);
        textureFiles.push({
          name: page.name,
          data: textureBuffer,
          path: textureFile
        })
      }
    })
    result.textureFiles = textureFiles
  }

  return result;
});
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false,               // 🚫 不使用系统窗口框
    titleBarStyle: 'hidden',  // 添加这行
    titleBarOverlay: false,   // 添加这行
  });
  // 添加窗口控制事件监听
  ipcMain.on('window-minimize', () => {
    mainWindow.minimize();
  });

  ipcMain.on('window-maximize', () => {
    const ismax = mainWindow.isMaximized()
    if (ismax) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.on('window-close', () => {
    mainWindow.close();
  });

  // 添加窗口状态变化监听
  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('window-maximize-change', true);
  });

  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('window-maximize-change', false);
  });
  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  httpServer.start();
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', async () => {
  if (process.platform !== 'darwin') {
    await httpServer.stop();
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

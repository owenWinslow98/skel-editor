import { app, BrowserWindow, dialog, screen, session } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import { setSkelPath } from './module/Store';
import fs from 'node:fs';
import httpServer from './module/HttpHelper';
import { TextureAtlas } from '@esotericsoftware/spine-core';
import { SpineRawData } from '../renderer/store/globalSlice';
import { getResources } from './module/Utils';
import { ipcMain } from 'electron-better-ipc'
// import { getResources } from './module/getResource';

process.stdout.write = ((write) => {
  return function (chunk: any, encoding?: any, callback?: any) {
    return write.call(process.stdout, '[main] ' + chunk, encoding, callback);
  };
})(process.stdout.write);


const validFileList = (fileList: string[]): boolean => {
  const mainWindow = BrowserWindow.getAllWindows()[0]
  if (fileList.length === 0) return false;
  if (fileList.length < 2) {
    ipcMain.callRenderer(mainWindow, 'toast-message', 'at least two files are required.')
    return false;
  }
  if (!fileList.some(file => file.endsWith('.skel') || file.endsWith('.json'))) {
    ipcMain.callRenderer(mainWindow, 'toast-message', 'please select one skel(.skel) or json(.json) file.')
    return false;
  }
  if (!fileList.some(file => file.endsWith('.atlas'))) {
    ipcMain.callRenderer(mainWindow, 'toast-message', 'please select one atlas(.atlas) file.')
    return false;
  }
  return true;
}

// proxy
app.commandLine.appendSwitch('proxy-server', '127.0.0.1:10809');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}
ipcMain.answerRenderer('open-file', async () => {
  try {
    const result = await dialog.showOpenDialog({
      properties: ['openFile', 'multiSelections'],
      filters: [
        {
          name: '*.skel, *.json, *.atlas',
          extensions: ['skel', 'json', 'atlas']
        }
      ]
    })
    if (!validFileList(result.filePaths)) return
    const fileList = await getResources(result.filePaths, BrowserWindow.getAllWindows()[0])
    return fileList
  } catch (error) {
    return error
  }
})


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
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

  loadExtension();
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


// extension
async function loadExtension() {
  try {
    const extensionPath = path.resolve(__dirname, '../../assets/aamddddknhcagpehecnhphigffljadon');
    const { id, name } = await session.defaultSession.extensions.loadExtension(extensionPath);
    console.log(`Loaded extension ${name} (${id})`)
  } catch (error) {
    console.error(error)
  }
};


const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const router = require('./backend/routes');

app.commandLine.appendSwitch('no-sandbox');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  // Единый IPC обработчик — роутер
  ipcMain.handle('api', async (event, route, params) => {
    return router.handle(route, params);
  });
  
  createWindow();
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

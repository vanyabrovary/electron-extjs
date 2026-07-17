const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  request: (route, params) => ipcRenderer.invoke('api', route, params)
});

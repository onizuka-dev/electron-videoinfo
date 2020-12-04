const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true }
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, filePath) => {
  ffmpeg.ffprobe(filePath, (err, metadata) => {
    mainWindow.webContents.send(
      'video:metadata',
      metadata.format.duration
    );
  });
});

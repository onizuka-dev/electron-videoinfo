const electron = require('electron');
const { app } = electron;

app.on('ready', () => {
  console.log('Electron App is ready');
});

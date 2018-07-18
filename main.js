const {app, BrowserWindow} = require('electron')

app.on ('ready', function () {
  let mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.webContents.session.setProxy ({proxyRules : '<ENTER PROXY HERE!>'}, () => {
    mainWindow.loadFile('index.html');
  });

  // mainWindow.webContents.openDevTools();

  mainWindow.on ( 'closed', function () {
    mainWindow = null;
  });
});
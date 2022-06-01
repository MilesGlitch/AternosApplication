const {app, BrowserWindow} = require('electron')

if (process.platform == 'darwin') { // NOT REQUIRED! Feel free to remove.
  app.whenReady().then(() => {
    global.frame = false;
    global.titleBarStyle = 'hiddenInset';
  })}
else if(process.platform == 'win32'){
  app.whenReady().then(() => {
    global.frame = false;
    global.titleBarStyle = 'hidden';
  })}
else{
  app.whenReady().then(() => {
    global.frame = true;
    global.titleBarStyle = 'hidden';
  })}

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 854,
    height: 480,
    autoHideMenuBar: true,
    frame: global.frame, // NOT REQUIRED! Feel free to remove.
    titleBarStyle: global.titleBarStyle, // NOT REQUIRED! Feel free to remove.
    titleBarOverlay: {
      color: '#191919',
      symbolColor: 'white'
    },
    webPreferences: {
      webviewTag: true // Required for any webview to be loaded
    }
  })
  mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {createWindow()})
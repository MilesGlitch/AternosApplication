const {app, BrowserWindow , session, Menu} = require('electron')
const path = require('path');
if (process.platform == 'darwin') {
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
    frame: global.frame,
    titleBarStyle: global.titleBarStyle,
    titleBarOverlay: {
      color: '#191919',
      symbolColor: 'white'
    },
    webPreferences: {
      webviewTag: true,
      devTools:true,
      preload: path.join(__dirname,'../../js/electron/preload.js')
    }
  })
  mainWindow.loadFile('./src/index.html')
}

app.whenReady().then(() => {createWindow()})
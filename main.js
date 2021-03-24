const {
  app,
  BrowserWindow,
  Menu,
  screen,
  dialog,
  ipcMain,
  remote,
} = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');
const storage = require('electron-json-storage');
const isDev = require('electron-is-dev');
storage.getDataPath();

let appIcon = null;
let window = null;

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`),
  });
}

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  // Menu.setApplicationMenu(false);

  window = new BrowserWindow({
    width: 1000,
    height: 600,
    icon: __dirname + '/public/assets/images/flameplayer-03.png',
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      backgroundThrottling: false,
    },
  });

  window.loadURL(
    url.format({
      pathname: path.join(__dirname, 'public/index.html'),
      protocol: 'file',
      slashes: true,
    })
  );

  if (isDev) window.webContents.openDevTools();

  window.on('closed', (e) => {
    window = null;
  });

  // set screen bounds
  storage.set('config', { bound: window.getBounds() }, function (error) {
    if (error) throw error;
  });
  // console.log(window.getBounds());
};

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
    if (appIcon) appIcon.destroy();
  }
});

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});

// Open file dialog
ipcMain.on('open-file-dialog', function (event) {
  dialog
    .showOpenDialog(window, {
      properties: ['openDirectory'],
    })
    .then(
      (result) => {
        const filePath = result.filePaths[0];
        if (filePath) {
          event.sender.send('selectedItem', filePath);
        }
      },
      (error) => {
        throw error;
      }
    );
});

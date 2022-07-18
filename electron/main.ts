import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as url from "url";
// import * as fs from "fs";

let win: Electron.BrowserWindow;

function createWindow() {
  win = new BrowserWindow({ width: 1024, height: 768 });
  win.loadURL(path.join(__dirname, '../../dist/hs-pricing-tool/index.html'));

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
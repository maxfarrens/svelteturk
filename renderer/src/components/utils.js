// Utilities functions used throughout the app
const { ipcRenderer } = require('electron');

export const deleteDoc = async (dbName, id) => {
  let resp;
  try {
    resp = await ipcRenderer.invoke('deleteDoc', dbName, id);
  } catch (err) {
    console.error(err);
    resp = { text: err, type: 'error' };
  }
  return resp;
};

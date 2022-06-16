// skip 1st line
lockPref('xpinstall.signatures.required', false);

const { XPIDatabase } = Cu.import('resource://gre/modules/addons/XPIDatabase.jsm');
XPIDatabase.SIGNED_TYPES.delete('extension');

try {
  let cmanifest = Cc['@mozilla.org/file/directory_service;1'].getService(Ci.nsIProperties).get('UChrm', Ci.nsIFile);
  cmanifest.append('utils');
  cmanifest.append('chrome.manifest');
  Components.manager.QueryInterface(Ci.nsIComponentRegistrar).autoRegister(cmanifest);

  Cu.import('chrome://userchromejs/content/BootstrapLoader.jsm');
} catch (ex) {};

try {
  Cu.import('chrome://userchromejs/content/userChrome.jsm');
} catch (ex) {};

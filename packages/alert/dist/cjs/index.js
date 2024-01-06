"use strict";

exports.__esModule = true;
var _exportNames = {
  Alert: true,
  AlertDescription: true,
  AlertIcon: true,
  AlertTitle: true
};
exports.Alert = void 0;
var _styles = require("./styles");
Object.keys(_styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _styles[key]) return;
  exports[key] = _styles[key];
});
var _alert = require("./alert");
exports.AlertDescription = _alert.AlertDescription;
exports.AlertIcon = _alert.AlertIcon;
exports.AlertTitle = _alert.AlertTitle;
var Alert = exports.Alert = _alert.Alert;
Alert.CloseButton = _alert.AlertCloseButton;
//# sourceMappingURL=index.js.map
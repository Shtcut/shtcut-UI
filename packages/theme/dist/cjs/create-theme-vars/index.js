"use strict";

exports.__esModule = true;
var _calc = require("./calc");
Object.keys(_calc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calc[key]) return;
  exports[key] = _calc[key];
});
//# sourceMappingURL=index.js.map
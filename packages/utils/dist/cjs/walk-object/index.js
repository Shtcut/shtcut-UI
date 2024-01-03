"use strict";

exports.__esModule = true;
exports.walkObject = walkObject;
var _index = require("../index");
function walkObject(target, predicate) {
  function inner(value, path) {
    if (path === void 0) {
      path = [];
    }
    if ((0, _index.isArray)(value)) {
      return value.map(function (item, idx) {
        return inner(item, [].concat(path, [String(idx)]));
      });
    }
    if ((0, _index.isObject)(value)) {
      return Object.fromEntries(Object.entries(value).map(function (_ref) {
        var key = _ref[0],
          child = _ref[1];
        return [key, inner(child, [].concat(path, [key]))];
      }));
    }
    return predicate(value, path);
  }
  return inner(target);
}
//# sourceMappingURL=index.js.map
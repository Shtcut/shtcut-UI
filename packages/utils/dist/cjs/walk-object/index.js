"use strict";

exports.__esModule = true;
exports.walkObject = walkObject;
var _index = require("../index");
/**
 * The `walkObject` function recursively walks through an object and applies a predicate function to
 * each leaf node, returning a new object with the same structure but with the leaf values transformed
 * according to the predicate.
 * @param {Target} target - The `target` parameter is the object that you want to walk through and
 * apply the `predicate` function to its leaf values.
 * @param predicate - The `predicate` parameter is a function that takes two arguments: `value` and
 * `path`.
 * @returns The function `walkObject` returns a mapped object where the values of the original object
 * have been transformed based on the provided `predicate` function. The type of the returned object is
 * `MappedLeavesObject<Target, ReturnType<WalkObjectPredicate<LeafType>>>`.
 */
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
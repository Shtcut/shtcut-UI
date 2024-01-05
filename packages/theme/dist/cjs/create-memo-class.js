"use strict";

exports.__esModule = true;
exports.createMemoClass = createMemoClass;
var _react = require("react");
/**
 * The `createMemoClass` function returns a memoized version of a class component.
 * @param func - A function that takes a single argument of type "props" and returns a string.
 * @returns The `createMemoClass` function returns a new function called `useMemoClass`.
 */
function createMemoClass(func) {
  return function useMemoClass(args) {
    var dependencies = typeof args === 'object' && args !== null ? Object.keys(args).filter(function (key) {
      return key !== 'theme';
    }).map(function (key) {
      return args[key];
    }) : [];
    return (0, _react.useMemo)(function () {
      return func(args);
    }, dependencies);
  };
}
//# sourceMappingURL=create-memo-class.js.map
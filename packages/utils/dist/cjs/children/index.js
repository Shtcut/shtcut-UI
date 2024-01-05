"use strict";

exports.__esModule = true;
exports.getValidChildren = getValidChildren;
var _react = require("react");
/**
 * The function `getValidChildren` filters out invalid React elements from a given array of children.
 * @param children - The `children` parameter is of type `React.ReactNode`, which is a type that
 * represents the children of a React component. It can be any valid React node, such as a React
 * element, a string, a number, or an array of React nodes.
 * @returns an array of valid React elements.
 */
function getValidChildren(children) {
  return _react.Children.toArray(children).filter(function (child) {
    return /*#__PURE__*/(0, _react.isValidElement)(child);
  });
}
//# sourceMappingURL=index.js.map
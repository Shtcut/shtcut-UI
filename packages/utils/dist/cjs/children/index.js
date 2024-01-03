"use strict";

exports.__esModule = true;
exports.getValidChildren = getValidChildren;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * The function `getValidChildren` filters out invalid React elements from a given array of children.
 * @param children - The `children` parameter is of type `React.ReactNode`, which is a type that
 * represents the children of a React component. It can be any valid React node, such as a React
 * element, a string, a number, or an array of React nodes.
 * @returns an array of valid React elements.
 */
function getValidChildren(children) {
  return React.Children.toArray(children).filter(function (child) {
    return /*#__PURE__*/React.isValidElement(child);
  });
}
//# sourceMappingURL=index.js.map
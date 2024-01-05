"use strict";

exports.__esModule = true;
exports.primitiveOmitComponent = exports.primitiveComponent = exports.polymorphicComponent = void 0;
var _react = require("react");
var polymorphicComponent = exports.polymorphicComponent = function polymorphicComponent(render) {
  return /*#__PURE__*/(0, _react.forwardRef)(render);
};
var primitiveComponent = exports.primitiveComponent = function primitiveComponent(render) {
  return /*#__PURE__*/(0, _react.forwardRef)(render);
};
var primitiveOmitComponent = exports.primitiveOmitComponent = function primitiveOmitComponent(render) {
  return /*#__PURE__*/(0, _react.forwardRef)(render);
};
//# sourceMappingURL=index.js.map
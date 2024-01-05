"use strict";

exports.__esModule = true;
exports.XIcon = exports.XCircleIcon = exports.SelectorIcon = exports.QuestionCircleIon = exports.InfoIcon = exports.ExclamationIcon = exports.EditIcon = exports.DotIcon = exports.ConfigIcon = exports.ComputerIcon = exports.CloseIcon = exports.ClipboardCheckIcon = exports.ChevronUpIcon = exports.ChevronRightIcon = exports.CheckCircleIcon = exports.ArrowRightIcon = void 0;
var React = _interopRequireWildcard(require("react"));
var _excluded = ["color"],
  _excluded2 = ["color"],
  _excluded3 = ["color"],
  _excluded4 = ["color"],
  _excluded5 = ["color"],
  _excluded6 = ["color"],
  _excluded7 = ["color"],
  _excluded8 = ["color"],
  _excluded9 = ["color"],
  _excluded10 = ["color"],
  _excluded11 = ["color"],
  _excluded12 = ["color"],
  _excluded13 = ["color"],
  _excluded14 = ["color"],
  _excluded15 = ["color"],
  _excluded16 = ["color"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var QuestionCircleIon = exports.QuestionCircleIon = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'currentColor' : _ref$color,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
});
var InfoIcon = exports.InfoIcon = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? 'currentColor' : _ref2$color,
    rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
});
var CheckCircleIcon = exports.CheckCircleIcon = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? 'currentColor' : _ref3$color,
    rest = _objectWithoutPropertiesLoose(_ref3, _excluded3);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
});
var XCircleIcon = exports.XCircleIcon = /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
  var _ref4$color = _ref4.color,
    color = _ref4$color === void 0 ? 'currentColor' : _ref4$color,
    rest = _objectWithoutPropertiesLoose(_ref4, _excluded4);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
});
var XIcon = exports.XIcon = /*#__PURE__*/React.forwardRef(function (_ref5, ref) {
  var _ref5$color = _ref5.color,
    color = _ref5$color === void 0 ? 'currentColor' : _ref5$color,
    rest = _objectWithoutPropertiesLoose(_ref5, _excluded5);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }));
});
var ExclamationIcon = exports.ExclamationIcon = /*#__PURE__*/React.forwardRef(function (_ref6, ref) {
  var _ref6$color = _ref6.color,
    color = _ref6$color === void 0 ? 'currentColor' : _ref6$color,
    rest = _objectWithoutPropertiesLoose(_ref6, _excluded6);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }));
});
var SelectorIcon = exports.SelectorIcon = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var _ref7$color = _ref7.color,
    color = _ref7$color === void 0 ? 'currentColor' : _ref7$color,
    rest = _objectWithoutPropertiesLoose(_ref7, _excluded7);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 9l4-4 4 4m0 6l-4 4-4-4"
  }));
});
var ChevronUpIcon = exports.ChevronUpIcon = /*#__PURE__*/React.forwardRef(function (_ref8, ref) {
  var _ref8$color = _ref8.color,
    color = _ref8$color === void 0 ? 'currentColor' : _ref8$color,
    rest = _objectWithoutPropertiesLoose(_ref8, _excluded8);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 15l7-7 7 7"
  }));
});
var ArrowRightIcon = exports.ArrowRightIcon = /*#__PURE__*/React.forwardRef(function (_ref9, ref) {
  var _ref9$color = _ref9.color,
    color = _ref9$color === void 0 ? 'currentColor' : _ref9$color,
    rest = _objectWithoutPropertiesLoose(_ref9, _excluded9);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M14 5l7 7m0 0l-7 7m7-7H3"
  }));
});
var ChevronRightIcon = exports.ChevronRightIcon = /*#__PURE__*/React.forwardRef(function (_ref10, ref) {
  var _ref10$color = _ref10.color,
    color = _ref10$color === void 0 ? 'currentColor' : _ref10$color,
    rest = _objectWithoutPropertiesLoose(_ref10, _excluded10);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M9 5l7 7-7 7"
  }));
});
var ClipboardCheckIcon = exports.ClipboardCheckIcon = /*#__PURE__*/React.forwardRef(function (_ref11, ref) {
  var _ref11$color = _ref11.color,
    color = _ref11$color === void 0 ? 'currentColor' : _ref11$color,
    rest = _objectWithoutPropertiesLoose(_ref11, _excluded11);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  }));
});
var CloseIcon = exports.CloseIcon = /*#__PURE__*/React.forwardRef(function (_ref12, ref) {
  var _ref12$color = _ref12.color,
    color = _ref12$color === void 0 ? 'currentColor' : _ref12$color,
    rest = _objectWithoutPropertiesLoose(_ref12, _excluded12);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M6 18L18 6M6 6l12 12"
  }));
});
var ComputerIcon = exports.ComputerIcon = /*#__PURE__*/React.forwardRef(function (_ref13, ref) {
  var _ref13$color = _ref13.color,
    color = _ref13$color === void 0 ? 'currentColor' : _ref13$color,
    rest = _objectWithoutPropertiesLoose(_ref13, _excluded13);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M6 18L18 6M6 6l12 12"
  }));
});
var ConfigIcon = exports.ConfigIcon = /*#__PURE__*/React.forwardRef(function (_ref14, ref) {
  var _ref14$color = _ref14.color,
    color = _ref14$color === void 0 ? 'currentColor' : _ref14$color,
    rest = _objectWithoutPropertiesLoose(_ref14, _excluded14);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }));
});
var DotIcon = exports.DotIcon = /*#__PURE__*/React.forwardRef(function (_ref15, ref) {
  var _ref15$color = _ref15.color,
    color = _ref15$color === void 0 ? 'currentColor' : _ref15$color,
    rest = _objectWithoutPropertiesLoose(_ref15, _excluded15);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"
  }));
});
var EditIcon = exports.EditIcon = /*#__PURE__*/React.forwardRef(function (_ref16, ref) {
  var _ref16$color = _ref16.color,
    color = _ref16$color === void 0 ? 'currentColor' : _ref16$color,
    rest = _objectWithoutPropertiesLoose(_ref16, _excluded16);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  }));
});
//# sourceMappingURL=core.js.map
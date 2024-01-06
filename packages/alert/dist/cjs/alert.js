"use strict";

exports.__esModule = true;
exports.AlertTitle = exports.AlertIcon = exports.AlertDescription = exports.AlertCloseButton = exports.Alert = void 0;
var React = _interopRequireWildcard(require("react"));
var _icon = require("@shtcut-ui/icon");
var _utils = require("@shtcut-ui/utils");
var _styles = require("./styles");
var _excluded = ["color", "variants", "className", "children"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "variants"],
  _excluded4 = ["className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var _createContext = (0, _utils.createContext)({
    name: 'AlertContext',
    strict: true
  }),
  AlertProvider = _createContext[0],
  useAlertContext = _createContext[1];
var AlertCloseButton = exports.AlertCloseButton = (0, _utils.primitiveComponent)(function (props, ref) {
  var _useAlertContext = useAlertContext(),
    color = _useAlertContext.color;
  var classes = (0, _styles.useAlertCloseButton)();
  var className = props.className;
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    "data-color": color ? color : undefined,
    className: (0, _utils.cx)(classes, className)
  }, /*#__PURE__*/React.createElement(_icon.Icon, {
    as: _icon.XIcon,
    label: "x",
    className: "inline-block w-4 h-4 text-current align-text-bottom fill-current"
  }));
});
if (_utils.__DEV__) {
  AlertCloseButton.displayName = 'AlertCloseButton';
}
var Alert = exports.Alert = (0, _utils.primitiveComponent)(function (props, ref) {
  var _props$color = props.color,
    color = _props$color === void 0 ? 'primary' : _props$color,
    _props$variants = props.variants,
    variants = _props$variants === void 0 ? 'subtle' : _props$variants,
    className = props.className,
    children = props.children,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = (0, _styles.useAlertClass)({
    variants: variants,
    color: color
  });
  var context = {
    color: color
  };
  return /*#__PURE__*/React.createElement(AlertProvider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    ref: ref,
    "data-color": color ? color : undefined,
    className: (0, _utils.cx)(classes, className)
  }, rest), children));
});
if (_utils.__DEV__) {
  Alert.displayName = 'Alert';
}
var AlertTitle = exports.AlertTitle = (0, _utils.primitiveComponent)(function (props, ref) {
  var className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded2);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: (0, _utils.cx)('font-medium', className),
    ref: ref
  }, rest));
});
var AlertDescription = exports.AlertDescription = (0, _utils.primitiveComponent)(function (props, ref) {
  var className = props.className,
    variants = props.variants,
    rest = _objectWithoutPropertiesLoose(props, _excluded3);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: (0, _utils.cx)(variants != 'solid' && 'text-black', className),
    ref: ref
  }, rest));
});
var AlertIcon = exports.AlertIcon = function AlertIcon(props) {
  var className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded4);
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: (0, _utils.cx)("shrink-0", className)
  }));
};
//# sourceMappingURL=alert.js.map
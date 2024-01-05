"use strict";

exports.__esModule = true;
exports.Icon = void 0;
var React = _interopRequireWildcard(require("react"));
var _core = require("./core");
var _visuallyHidden = _interopRequireDefault(require("@shtcut-ui/visually-hidden"));
var _utils = require("@shtcut-ui/utils");
var _excluded = ["as", "inline", "className", "role", "label"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Icon = exports.Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
    Comp = _props$as === void 0 ? _core.QuestionCircleIon : _props$as,
    _props$inline = props.inline,
    inline = _props$inline === void 0 ? true : _props$inline,
    className = props.className,
    _props$role = props.role,
    role = _props$role === void 0 ? 'presentation' : _props$role,
    label = props.label,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    className: (0, _utils.cx)(inline ? 'icon-inline' : 'icon-block', className),
    role: role,
    "aria-hidden": true,
    focusable: false
  }, rest)), /*#__PURE__*/React.createElement(_visuallyHidden["default"], null, label));
});
if (_utils.__DEV__) {
  Icon.displayName = 'Icon';
}
//# sourceMappingURL=icon.js.map
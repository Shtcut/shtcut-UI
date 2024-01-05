"use strict";

exports.__esModule = true;
exports["default"] = exports.VisuallyHidden = void 0;
var React = _interopRequireWildcard(require("react"));
var _utils = require("@shtcut-ui/utils");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["as", "style"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var VisuallyHidden = exports.VisuallyHidden = /*#__PURE__*/React.forwardRef(function VisuallyHidden(_ref, ref) {
  var _ref$as = _ref.as,
    Span = _ref$as === void 0 ? 'span' : _ref$as,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Span, _extends({
    ref: ref,
    style: _extends({
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
      whitespace: 'nowrap',
      wordWrap: 'normal'
    }, style)
  }, props));
});
if (_utils.__DEV__) {
  VisuallyHidden.displayName = 'VisuallyHidden';
  VisuallyHidden.propTypes = {
    as: _propTypes["default"].any,
    children: _propTypes["default"].node
  };
}
var _default = exports["default"] = VisuallyHidden;
//# sourceMappingURL=index.js.map
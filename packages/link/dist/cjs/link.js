"use strict";

exports.__esModule = true;
exports.Link = void 0;
var _utils = require("@shtcut-ui/utils");
var _excluded = ["disabled", "external", "onClick", "as", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Link = exports.Link = (0, _utils.primitiveComponent)(function (props, ref) {
  var disabled = props.disabled,
    external = props.external,
    onClick = props.onClick,
    _props$as = props.as,
    Comp = _props$as === void 0 ? 'a' : _props$as,
    className = props.className,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : null;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    tabIndex: disabled ? -1 : undefined,
    "aria-disabled": disabled,
    onClick: disabled ? function (e) {
      return e.preventDefault();
    } : onClick,
    className: (0, _utils.cx)('link', disabled && 'link-disabled', className)
  }, externalProps, rest));
});
if (_utils.__DEV__) {
  Link.displayName = 'Link';
}
//# sourceMappingURL=link.js.map
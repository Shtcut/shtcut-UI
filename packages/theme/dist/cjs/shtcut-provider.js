"use strict";

exports.__esModule = true;
exports.ShtcutContext = void 0;
exports.ShtcutProvider = ShtcutProvider;
exports.extendTheme = extendTheme;
exports.useShtcut = useShtcut;
var _utils = require("@shtcut-ui/utils");
var _react = require("react");
var _defaultTheme = require("./default-theme");
var _utils2 = require("./utils");
var _lodash = _interopRequireDefault(require("lodash.set"));
var _toCssVar = require("./to-css-var");
var _react2 = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ShtcutContext = exports.ShtcutContext = /*#__PURE__*/(0, _react.createContext)(undefined);
ShtcutContext.displayName = 'ShtcutContext';
function ShtcutProvider(_ref) {
  var _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? _defaultTheme.defaultTheme : _ref$theme,
    _ref$colorScheme = _ref.colorScheme,
    colorScheme = _ref$colorScheme === void 0 ? 'light' : _ref$colorScheme,
    _ref$density = _ref.density,
    density = _ref$density === void 0 ? 'comfortable' : _ref$density,
    _ref$cssVarsRoot = _ref.cssVarsRoot,
    cssVarsRoot = _ref$cssVarsRoot === void 0 ? ':host, :root' : _ref$cssVarsRoot,
    children = _ref.children;
  var computedTheme = (0, _react.useMemo)(function () {
    var _theme$colorSchemes$c;
    var omittedTheme = (0, _utils.omit)(theme, ['colorSchemes', 'density']);
    var _ref2 = (_theme$colorSchemes$c = theme.colorSchemes[colorScheme]) != null ? _theme$colorSchemes$c : {},
      colors = _ref2.colors,
      type = _ref2.type;
    if (_utils2.isBrowser) {
      if (type === 'dark') document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');
    }
    (0, _utils.walkObject)(colors, function (value, path) {
      if (!(0, _utils.isString)(value)) return;
      var rgb = (0, _utils.toRGB)(value);
      if (rgb) (0, _lodash["default"])(colors, path, rgb.join(','));
    });
    var normalizedTheme = _extends({}, omittedTheme, {
      density: theme.density[density],
      colors: colors
    });
    return (0, _toCssVar.toCSSVar)(normalizedTheme);
  }, [theme, colorScheme, density]);
  var value = (0, _react.useMemo)(function () {
    return {
      theme: computedTheme
    };
  }, [computedTheme]);
  return /*#__PURE__*/React.createElement(ShtcutContext.Provider, {
    value: value
  }, /*#__PURE__*/React.createElement(_react2.Global, {
    styles: function styles() {
      var _ref3;
      return _ref3 = {}, _ref3[cssVarsRoot] = computedTheme.__cssVars, _ref3;
    }
  }), children);
}
function useShtcut() {
  var theme = (0, _react.useContext)(ShtcutContext);
  if (!theme) {
    throw Error('useShtcut: `theme` is defined. Maybe you have not to wrap your app in <ShtcutProvider />');
  }
  return theme;
}
function extendTheme(themeOverride) {
  return (0, _utils.deepMerge)(_defaultTheme.defaultTheme, themeOverride, {
    clone: true
  });
}
//# sourceMappingURL=shtcut-provider.js.map
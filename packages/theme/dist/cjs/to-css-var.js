"use strict";

exports.__esModule = true;
exports.toCSSVar = toCSSVar;
var _themeTokens = require("./create-theme-vars/theme-tokens");
var _createThemeVars2 = require("./create-theme-vars/create-theme-vars");
/**
 * The `toCSSVar` function converts a raw theme object into a theme object with CSS variables.
 * @param {T} rawTheme - The `rawTheme` parameter is an object that represents the raw theme data. It
 * should be a dictionary-like object with key-value pairs representing the theme properties and their
 * values. The type `T` is a generic type that extends the `Dict` type, which is a type alias for `{ [
 * @returns the `theme` object with two additional properties: `__cssVars` and `__cssMap`. The `theme`
 * object is casted to type `WithCSSVar<T>`, which is a generic type that extends the original `Dict`
 * type.
 */
function toCSSVar(rawTheme) {
  var _theme$config;
  /**
   * In the case the theme has already been converted to css-var(e.g extending the theme),
   * we can omit the compted css vars and recompute it for the extended theme,
   */
  var theme = (0, _themeTokens.omitVars)(rawTheme);

  // omit components and breakpoints from  css variable map
  var token = (0, _themeTokens.extractTokens)(theme);
  var cssVarPrefix = ((_theme$config = theme.config) == null ? void 0 : _theme$config.cssVarPrefix) || 'vc';
  var _createThemeVars = (0, _createThemeVars2.createThemeVars)(token, {
      cssVarPrefix: cssVarPrefix
    }),
    cssMap = _createThemeVars.cssMap,
    cssVars = _createThemeVars.cssVars;
  Object.assign(theme, {
    __cssVars: cssVars,
    __cssMap: cssMap
  });
  return theme;
}
//# sourceMappingURL=to-css-var.js.map
import { extractTokens, omitVars } from './create-theme-vars/theme-tokens';
import { createThemeVars } from './create-theme-vars/create-theme-vars';

/**
 * The `toCSSVar` function converts a raw theme object into a theme object with CSS variables.
 * @param {T} rawTheme - The `rawTheme` parameter is an object that represents the raw theme data. It
 * should be a dictionary-like object with key-value pairs representing the theme properties and their
 * values. The type `T` is a generic type that extends the `Dict` type, which is a type alias for `{ [
 * @returns the `theme` object with two additional properties: `__cssVars` and `__cssMap`. The `theme`
 * object is casted to type `WithCSSVar<T>`, which is a generic type that extends the original `Dict`
 * type.
 */
export function toCSSVar(rawTheme) {
  var _theme$config;
  /**
   * In the case the theme has already been converted to css-var(e.g extending the theme),
   * we can omit the compted css vars and recompute it for the extended theme,
   */
  var theme = omitVars(rawTheme);

  // omit components and breakpoints from  css variable map
  var token = extractTokens(theme);
  var cssVarPrefix = ((_theme$config = theme.config) == null ? void 0 : _theme$config.cssVarPrefix) || 'vc';
  var {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable
     */
    cssMap,
    /**
     * The extracted css variables will be stored here and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars
  } = createThemeVars(token, {
    cssVarPrefix
  });
  Object.assign(theme, {
    __cssVars: cssVars,
    __cssMap: cssMap
  });
  return theme;
}
//# sourceMappingURL=to-css-var.js.map
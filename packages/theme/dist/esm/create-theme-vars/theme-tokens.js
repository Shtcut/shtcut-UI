var _excluded = ["_cssMap", "__cssVars", "__breakpoints"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { pick } from '@shtcut-ui/utils';
var tokens = ['colors', 'cursor', 'rounded', 'density'];
/**
 * The function "extractTokens" takes a theme object and returns a subset of the theme containing only
 * the tokens specified in the "tokens" array.
 * @param {Dict} theme - The `theme` parameter is a dictionary object that contains various key-value
 * pairs representing different tokens.
 * @returns a subset of the `theme` object, containing only the properties specified in the `_tokens`
 * array.
 */
export function extractTokens(theme) {
  var _tokens = tokens;
  return pick(theme, _tokens);
}

/**
 * The function `omitVars` takes in a raw theme object and returns a new object without the `_cssMap`,
 * `__cssVars`, and `__breakpoints` properties.
 * @param {Dict} rawTheme - The `rawTheme` parameter is an object of type `Dict`. It represents the
 * original theme object that contains various properties and values.
 * @returns the `cleanTheme` object, which is the `rawTheme` object with the `_cssMap`, `__cssVars`,
 * and `__breakpoints` properties omitted.
 */
export function omitVars(rawTheme) {
  var cleanTheme = _objectWithoutPropertiesLoose(rawTheme, _excluded);
  return cleanTheme;
}
//# sourceMappingURL=theme-tokens.js.map
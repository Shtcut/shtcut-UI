import { Dict, pick } from "@shtcut-ui/utils";


const tokens = ['colors', 'cursor', 'rounded', 'density'] as const;

export type ThemeScale = | typeof tokens[number] | "transition.duration" | 'transition.property' | 'transition.easing';

/**
 * The function "extractTokens" takes a theme object and returns a subset of the theme containing only
 * the tokens specified in the "tokens" array.
 * @param {Dict} theme - The `theme` parameter is a dictionary object that contains various key-value
 * pairs representing different tokens.
 * @returns a subset of the `theme` object, containing only the properties specified in the `_tokens`
 * array.
 */
export function extractTokens(theme: Dict) {
    const _tokens = (tokens as unknown) as string[];
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
export function omitVars(rawTheme: Dict) {
    const { _cssMap, __cssVars, __breakpoints, ...cleanTheme} = rawTheme;
    return cleanTheme;
}


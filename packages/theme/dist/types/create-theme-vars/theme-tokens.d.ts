import { Dict } from '@shtcut-ui/utils';
declare const tokens: readonly ["colors", "cursor", "rounded", "density"];
export type ThemeScale = (typeof tokens)[number] | 'transition.duration' | 'transition.property' | 'transition.easing';
/**
 * The function "extractTokens" takes a theme object and returns a subset of the theme containing only
 * the tokens specified in the "tokens" array.
 * @param {Dict} theme - The `theme` parameter is a dictionary object that contains various key-value
 * pairs representing different tokens.
 * @returns a subset of the `theme` object, containing only the properties specified in the `_tokens`
 * array.
 */
export declare function extractTokens(theme: Dict): {
    [x: string]: any;
};
/**
 * The function `omitVars` takes in a raw theme object and returns a new object without the `_cssMap`,
 * `__cssVars`, and `__breakpoints` properties.
 * @param {Dict} rawTheme - The `rawTheme` parameter is an object of type `Dict`. It represents the
 * original theme object that contains various properties and values.
 * @returns the `cleanTheme` object, which is the `rawTheme` object with the `_cssMap`, `__cssVars`,
 * and `__breakpoints` properties omitted.
 */
export declare function omitVars(rawTheme: Dict): {
    [x: string]: any;
};
export {};

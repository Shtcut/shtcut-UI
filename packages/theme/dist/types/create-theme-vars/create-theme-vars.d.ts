import { Dict } from '@shtcut-ui/utils';
export interface CreateThemeVarsOptions {
    cssVarPrefix?: string;
}
export interface ThemeVars {
    cssVars: Dict;
    cssMap: Dict;
}
/**
 * The `createThemeVars` function takes a target object and options, and returns a context object
 * containing CSS variables and a CSS map.
 * @param {Dict} target - The `target` parameter is an object that contains the theme variables that
 * you want to create. It can be any JavaScript object that represents the theme variables.
 * @param {CreateThemeVarsOptions} options - The `options` parameter is an object that contains
 * additional configuration options for creating theme variables. It is of type
 * `CreateThemeVarsOptions`.
 * @returns The function `createThemeVars` returns an object of type `ThemeVars`.
 */
export declare const createThemeVars: (target: Dict, options: CreateThemeVarsOptions) => ThemeVars;

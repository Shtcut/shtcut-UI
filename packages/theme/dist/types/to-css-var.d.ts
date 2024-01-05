import { Dict, WithCSSVar } from '@shtcut-ui/utils';
/**
 * The `toCSSVar` function converts a raw theme object into a theme object with CSS variables.
 * @param {T} rawTheme - The `rawTheme` parameter is an object that represents the raw theme data. It
 * should be a dictionary-like object with key-value pairs representing the theme properties and their
 * values. The type `T` is a generic type that extends the `Dict` type, which is a type alias for `{ [
 * @returns the `theme` object with two additional properties: `__cssVars` and `__cssMap`. The `theme`
 * object is casted to type `WithCSSVar<T>`, which is a generic type that extends the original `Dict`
 * type.
 */
export declare function toCSSVar<T extends Dict>(rawTheme: T): WithCSSVar<T>;

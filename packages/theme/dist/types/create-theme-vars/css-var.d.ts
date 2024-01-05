/**
 * The addPrefix function takes a string value and an optional prefix, and returns the value with the
 * prefix added, separated by a hyphen.
 * @param {string} value - The `value` parameter is a string that represents the value to which the
 * prefix will be added.
 * @param [prefix] - The `prefix` parameter is an optional parameter that specifies a string to be
 * added as a prefix to the `value` parameter. If no `prefix` is provided, it defaults to an empty
 * string.
 * @returns The function `addPrefix` returns a string that is the concatenation of the `prefix`, the
 * escaped `value`, and a hyphen ("-").
 */
export declare const addPrefix: (value: string, prefix?: string) => string;
/**
 * The function `toVarReference` returns a CSS variable reference string with an optional fallback
 * value.
 * @param {string} name - The `name` parameter is a string that represents the name of the variable
 * reference.
 * @param {string} [fallback] - The `fallback` parameter is an optional parameter that specifies a
 * default value to use if the variable reference is not defined. If `fallback` is provided, it will be
 * appended to the variable reference using a comma separator.
 * @returns The function `toVarReference` returns a string that represents a CSS variable reference.
 * The returned string is constructed using the `name` parameter as the variable name, and the
 * `fallback` parameter (if provided) as the fallback value. The `escape` function is used to escape
 * the variable name before constructing the final string.
 */
export declare const toVarReference: (name: string, fallback?: string) => string;
/**
 * The function `toVarDefinition` returns a variable definition string with an optional prefix.
 * @param {string} value - The `value` parameter is a string that represents the value you want to
 * convert to a variable definition.
 * @param [prefix] - The `prefix` parameter is an optional parameter that specifies a prefix to be
 * added to the `value` parameter. If no prefix is provided, it defaults to an empty string.
 * @returns a string that starts with "--" followed by the value with the prefix added.
 */
export declare const toVarDefinition: (value: string, prefix?: string) => string;
/**
 * The `cssVar` function returns an object with a CSS variable definition and a reference to that
 * variable.
 * @param {string} name - The `name` parameter is a string that represents the name of the CSS
 * variable. It is used to define and reference the CSS variable.
 * @param {string} [fallback] - The `fallback` parameter is an optional string that specifies a
 * fallback value for the CSS variable. If the CSS variable is not defined or supported, the fallback
 * value will be used instead.
 * @param {string} [cssVarPrefix] - The `cssVarPrefix` parameter is an optional prefix that can be
 * added to the CSS variable name. It is used to avoid naming conflicts with other CSS variables.
 * @returns An object is being returned with two properties: "variable" and "reference".
 */
export declare const cssVar: (name: string, fallback?: string, cssVarPrefix?: string) => {
    variable: string;
    reference: string;
};

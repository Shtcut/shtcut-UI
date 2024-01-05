/**
 * The function replaces all white spaces in a string with a specified replace value.
 * @param {string} value - The `value` parameter is a string that represents the input value that you
 * want to replace the white spaces in.
 * @param [replaceValue=-] - The `replaceValue` parameter is an optional parameter that specifies the
 * value to replace the white space with. If no value is provided, it defaults to '-' (hyphen).
 * @returns The function `replaceWhiteSpace` returns a string with all whitespace characters replaced
 * by the `replaceValue` parameter. If no `replaceValue` is provided, it defaults to '-' as the
 * replacement.
 */
var replaceWhiteSpace = function replaceWhiteSpace(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = '-';
  }
  return value.replace(/\s+/g, replaceValue);
};

/**
 * The function "escape" takes a string or number as input and returns the input with any whitespace
 * replaced, and if the input is a decimal number, it replaces the decimal point with a backslash
 * followed by a period.
 * @param {string | number} value - The `value` parameter can be either a string or a number.
 * @returns either the modified string value with escaped decimal point if the input is a decimal
 * number, or the original value if it is an integer or a string.
 */
function escape(value) {
  var strValue = replaceWhiteSpace(value.toString());
  if (strValue.includes('\\.')) return false;
  var isDecimal = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal ? strValue.replace('.', "\\.") : value;
}

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
export var addPrefix = function addPrefix(value, prefix) {
  if (prefix === void 0) {
    prefix = '';
  }
  return [prefix, escape(value)].filter(Boolean).join('-');
};

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
export var toVarReference = (name, fallback) => {
  return "var(" + escape(name) + (fallback ? ", " + fallback : '') + ")";
};

/**
 * The function `toVarDefinition` returns a variable definition string with an optional prefix.
 * @param {string} value - The `value` parameter is a string that represents the value you want to
 * convert to a variable definition.
 * @param [prefix] - The `prefix` parameter is an optional parameter that specifies a prefix to be
 * added to the `value` parameter. If no prefix is provided, it defaults to an empty string.
 * @returns a string that starts with "--" followed by the value with the prefix added.
 */
export var toVarDefinition = function toVarDefinition(value, prefix) {
  if (prefix === void 0) {
    prefix = '';
  }
  return "--" + addPrefix(value, prefix);
};

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
export var cssVar = (name, fallback, cssVarPrefix) => {
  var cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
};
//# sourceMappingURL=css-var.js.map
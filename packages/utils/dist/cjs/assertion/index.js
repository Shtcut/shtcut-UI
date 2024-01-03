"use strict";

exports.__esModule = true;
exports.__DEV__ = void 0;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isFunction = isFunction;
exports.isInputEvent = isInputEvent;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isString = isString;
/**
 * The function checks if a value is an array.
 * @param {any} value - The `value` parameter is the variable that you want to check if it is an array.
 * @returns a boolean value.
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * The function checks if a value is an object (excluding arrays).
 * @param {any} value - The parameter "value" is of type "any", which means it can accept any value.
 * @returns a boolean value.
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function') && !isArray(value);
}

/**
 * The function `isBoolean` checks if a value is of type boolean.
 * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value.
 */
function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * The function checks if a value is a number.
 * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value.
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * The function `isString` checks if a value is of type string.
 * @param {unknown} value - The parameter "value" is of type "unknown", which means it can be any type.
 * @returns a boolean value.
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * The function checks if a value is a function.
 * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value indicating whether the input value is a function or not.
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * The function checks if a value is an input event object with a target property of type
 * HTMLInputElement.
 * @param {any} value - The `value` parameter is of type `any`, which means it can accept any value.
 * @returns a boolean value.
 */
function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
}
var __DEV__ = exports.__DEV__ = process.env.NODE_ENV !== 'production';
//# sourceMappingURL=index.js.map
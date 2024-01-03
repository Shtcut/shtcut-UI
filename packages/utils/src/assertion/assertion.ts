import { Dict } from "../index";

/**
 * The function checks if a value is an array.
 * @param {any} value - The `value` parameter is the variable that you want to check if it is an array.
 * @returns a boolean value.
 */
export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

/**
 * The function checks if a value is an object (excluding arrays).
 * @param {any} value - The parameter "value" is of type "any", which means it can accept any value.
 * @returns a boolean value.
 */
export function isObject(value: any): value is Dict {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function') && !isArray(value);
}

/**
 * The function `isBoolean` checks if a value is of type boolean.
 * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * The function checks if a value is a number.
 * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

/**
 * The function `isString` checks if a value is of type string.
 * @param {unknown} value - The parameter "value" is of type "unknown", which means it can be any type.
 * @returns a boolean value.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * The function checks if a value is a function.
 * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value indicating whether the input value is a function or not.
 */
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * The function checks if a value is an input event object with a target property of type
 * HTMLInputElement.
 * @param {any} value - The `value` parameter is of type `any`, which means it can accept any value.
 * @returns a boolean value.
 */
export function isInputEvent(value: any): value is { target: HTMLInputElement } {
  return value && isObject(value) && isObject(value.target);
}

export const __DEV__ = process.env.NODE_ENV !== 'production';

import { Dict } from "../index";
/**
 * The function checks if a value is an array.
 * @param {any} value - The `value` parameter is the variable that you want to check if it is an array.
 * @returns a boolean value.
 */
export declare function isArray<T>(value: any): value is Array<T>;
/**
 * The function checks if a value is an object (excluding arrays).
 * @param {any} value - The parameter "value" is of type "any", which means it can accept any value.
 * @returns a boolean value.
 */
export declare function isObject(value: any): value is Dict;
/**
 * The function `isBoolean` checks if a value is of type boolean.
 * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value.
 */
export declare function isBoolean(value: unknown): value is boolean;
/**
 * The function checks if a value is a number.
 * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value.
 */
export declare function isNumber(value: unknown): value is number;
/**
 * The function `isString` checks if a value is of type string.
 * @param {unknown} value - The parameter "value" is of type "unknown", which means it can be any type.
 * @returns a boolean value.
 */
export declare function isString(value: unknown): value is string;
/**
 * The function checks if a value is a function.
 * @param {unknown} value - The `value` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value indicating whether the input value is a function or not.
 */
export declare function isFunction(value: unknown): value is Function;
/**
 * The function checks if a value is an input event object with a target property of type
 * HTMLInputElement.
 * @param {any} value - The `value` parameter is of type `any`, which means it can accept any value.
 * @returns a boolean value.
 */
export declare function isInputEvent(value: any): value is {
    target: HTMLInputElement;
};
export declare const __DEV__: boolean;

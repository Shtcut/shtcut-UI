import { Dict } from '../index';
/**
 * The `omit` function in TypeScript allows you to create a new object that excludes specified keys
 * from an existing object.
 * @param {T} object - The `object` parameter is an object of type `T`, where `T` is a generic type
 * that extends `Dict`. `Dict` is a type that represents a dictionary object with string keys and any
 * value.
 * @param {K[]} keys - An array of keys that you want to omit from the object.
 * @returns an object that is the same type as the input object, but with the specified keys omitted.
 */
export declare function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]): Omit<T, K>;
/**
 * The `pick` function in TypeScript takes an object and an array of keys, and returns a new object
 * with only the specified keys from the original object.
 * @param {T} object - The `object` parameter is the object from which you want to pick specific keys
 * and their corresponding values.
 * @param {K[]} keys - An array of keys that you want to pick from the object.
 * @returns The `pick` function returns a new object that contains only the specified keys from the
 * original object. The returned object has the same type as the original object, but only includes the
 * selected keys and their corresponding values.
 */
export declare function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]): { [P in K]: T[P]; };
/**
 * The `deepMerge` function merges two objects deeply, recursively merging nested objects if they
 * exist.
 * @param target - The `target` parameter is the object that will be merged with the `source` object.
 * It is of type `Partial<T1>`, which means it can be an object of any type `T1` or a partial object of
 * type `T1` (i.e., an object that
 * @param source - The `source` parameter is an object of type `Partial<T2>`, which means it is a
 * partial representation of an object of type `T2`. It contains properties and values that you want to
 * merge into the `target` object.
 * @param options - The `options` parameter is an optional object that can have a property called
 * `clone`. The `clone` property is a boolean value that determines whether the `target` object should
 * be cloned before merging. If `clone` is set to `true`, a shallow copy of the `target` object
 * @returns the merged object, which is the result of merging the `target` and `source` objects.
 */
export declare function deepMerge<T1, T2>(target: Partial<T1>, source: Partial<T2>, options?: {
    clone: boolean;
}): Partial<T1>;

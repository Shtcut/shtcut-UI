import { Dict, isObject } from '../index';

/**
 * The `omit` function in TypeScript allows you to create a new object that excludes specified keys
 * from an existing object.
 * @param {T} object - The `object` parameter is an object of type `T`, where `T` is a generic type
 * that extends `Dict`. `Dict` is a type that represents a dictionary object with string keys and any
 * value.
 * @param {K[]} keys - An array of keys that you want to omit from the object.
 * @returns an object that is the same type as the input object, but with the specified keys omitted.
 */
export function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
  const result: Dict = {};

  Object.keys(object).forEach((key) => {
    if (keys.includes(key as K)) return;
    result[key] = object[key];
  });
  return result as Omit<T, K>;
}

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
export function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
  const result = {} as { [P in K]: T[P] };

  keys.forEach((key) => {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}

export function deepMerge<T1, T2>(
  target: Partial<T1>,
  source: Partial<T2>,
  options: { clone: boolean } = { clone: false },
) {
  const output = options.clone ? { ...target } : target;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === '__proto__') return;

      // @ts-ignore
      if (isObject(source[key]) && key in target) {
        // @ts-ignore
        output[key] = deepMerge(target[key], source[key], options);
      } else {
        // @ts-ignore
        output[key] = source[key];
      }
    });
  }
  return output;
}

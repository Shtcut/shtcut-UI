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

/**
 * The `split` function takes an object and an array of keys, and returns two new objects - one
 * containing the picked keys and their corresponding values, and the other containing the omitted keys
 * and their corresponding values.
 * @param {T} object - The `object` parameter is an object of type `T`, where `T` is a generic type
 * that extends `Dict`. `Dict` is a type that represents a dictionary object with string keys and any
 * value.
 * @param {K[]} keys - The `keys` parameter is an array of keys that you want to pick from the `object`
 * parameter. These keys should be present in the `object` parameter.
 * @returns an array with two elements. The first element is an object that contains the properties
 * specified in the `keys` parameter, with their corresponding values from the `object` parameter. The
 * second element is an object that contains the remaining properties from the `object` parameter,
 * excluding the ones specified in the `keys` parameter.
 */
export function spilt<T extends Dict, K extends keyof T>(object: T, keys: K[]) {
  const picked: Dict = {};
  const omitted: Dict = {};

  Object.keys(object).forEach((key) => {
    if (keys.includes(key as T[K])) {
      picked[key] = object[key];
    } else {
      omitted[key] = object[key];
    }
  });
  return [picked, omitted] as [{ [P in K]: T[P] }, Omit<T, K>];
}

import { isArray, isObject } from '../index';
/**
 * The `walkObject` function recursively walks through an object and applies a predicate function to
 * each leaf node, returning a new object with the same structure but with the leaf values transformed
 * according to the predicate.
 * @param {Target} target - The `target` parameter is the object that you want to walk through and
 * apply the `predicate` function to its leaf values.
 * @param predicate - The `predicate` parameter is a function that takes two arguments: `value` and
 * `path`.
 * @returns The function `walkObject` returns a mapped object where the values of the original object
 * have been transformed based on the provided `predicate` function. The type of the returned object is
 * `MappedLeavesObject<Target, ReturnType<WalkObjectPredicate<LeafType>>>`.
 */
export function walkObject(target, predicate) {
  function inner(value, path) {
    if (path === void 0) {
      path = [];
    }
    if (isArray(value)) {
      return value.map((item, idx) => inner(item, [...path, String(idx)]));
    }
    if (isObject(value)) {
      return Object.fromEntries(Object.entries(value).map(_ref => {
        var [key, child] = _ref;
        return [key, inner(child, [...path, key])];
      }));
    }
    return predicate(value, path);
  }
  return inner(target);
}
//# sourceMappingURL=index.js.map
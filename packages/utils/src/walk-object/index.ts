import { isArray, isObject } from '../index';

export type WalkObjectPredicate<L = unknown> = (value: unknown, path: string[]) => L;

export type MappedLeavesObject<Obj, LeafType> = {
  [Prop in keyof Obj]: Obj[Prop] extends Array<any>
    ? MappedLeavesObject<Obj[Prop][number], LeafType>[]
    : Obj[Prop] extends object
    ? MappedLeavesObject<Obj[Prop], LeafType>
    : LeafType;
};

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
export function walkObject<Target, LeafType>(
  target: Target,
  predicate: WalkObjectPredicate<LeafType>,
): MappedLeavesObject<Target, ReturnType<WalkObjectPredicate<LeafType>>> {
  function inner(value: unknown, path: string[] = []): any {
    if (isArray(value)) {
      return value.map((item, idx) => inner(item, [...path, String(idx)]));
    }

    if (isObject(value)) {
      return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, inner(child, [...path, key])]));
    }
    return predicate(value, path);
  }
  return inner(target);
}

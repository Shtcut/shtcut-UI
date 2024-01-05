/**
 * The `createMemoClass` function returns a memoized version of a class component.
 * @param func - A function that takes a single argument of type "props" and returns a string.
 * @returns The `createMemoClass` function returns a new function called `useMemoClass`.
 */
export declare function createMemoClass(func: (props: any) => string): (args?: any) => string;

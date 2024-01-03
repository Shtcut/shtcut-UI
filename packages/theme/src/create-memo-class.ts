import { useMemo } from 'react';

/**
 * The `createMemoClass` function returns a memoized version of a class component.
 * @param func - A function that takes a single argument of type "props" and returns a string.
 * @returns The `createMemoClass` function returns a new function called `useMemoClass`.
 */
export function createMemoClass(func: (props: any) => string) {
  return function useMemoClass(args?: any) {
    const dependencies =
      typeof args === 'object' && args !== null
        ? Object.keys(args)
            .filter((key) => key !== 'theme')
            .map((key) => args[key])
        : [];
    return useMemo(() => func(args), dependencies);
  };
}

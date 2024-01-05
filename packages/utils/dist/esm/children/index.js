import { Children, isValidElement } from 'react';

/**
 * The function `getValidChildren` filters out invalid React elements from a given array of children.
 * @param children - The `children` parameter is of type `React.ReactNode`, which is a type that
 * represents the children of a React component. It can be any valid React node, such as a React
 * element, a string, a number, or an array of React nodes.
 * @returns an array of valid React elements.
 */
export function getValidChildren(children) {
  return Children.toArray(children).filter(child => /*#__PURE__*/isValidElement(child));
}
//# sourceMappingURL=index.js.map
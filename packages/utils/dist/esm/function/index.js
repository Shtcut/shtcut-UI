import { isFunction } from '../assertion';
/**
 * The `runIfFn` function takes a value or a function and executes the function with the provided
 * arguments if the input is a function, otherwise it returns the input value.
 * @param {T | ((...args: U[]) => T)} valueOrFun - The `valueOrFun` parameter can be either a value of
 * type `T` or a function that takes `U` arguments and returns a value of type `T`.
 * @param {U[]} args - The `args` parameter is a rest parameter that allows you to pass in an arbitrary
 * number of arguments of type `U`. These arguments will be used when invoking the function
 * `valueOrFun` if it is a function.
 * @returns The function `runIfFn` returns the result of executing the `valueOrFun` function if it is a
 * function, otherwise it returns the `valueOrFun` itself.
 */
export var runIfFn = function runIfFn(valueOrFun) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return isFunction(valueOrFun) ? valueOrFun(...args) : valueOrFun;
};
//# sourceMappingURL=index.js.map
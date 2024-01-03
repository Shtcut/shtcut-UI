import { isObject } from '@shtcut-ui/utils';

export type Operand = string | number | { reference: string };

type Operator = '+' | '-' | '*' | '/';

/**
 * The function `resolveReference` takes an `operand` and returns its reference if it is an object with
 * a reference property, otherwise it returns the operand as a string.
 * @param {Operand} operand - The `operand` parameter is of type `Operand`.
 * @returns a string.
 */
export const resolveReference = (operand: Operand): string => {
  return isObject(operand) && operand.reference ? operand.reference : String(operand);
};

/**
 * The `toExpression` function takes an operator and a list of operands, resolves any references in the
 * operands, joins them with the operator, and removes any occurrences of "/calc/g" in the resulting
 * expression.
 * @param {Operator} operator - The `operator` parameter is a variable of type `Operator`. It
 * represents the mathematical operator that will be used in the expression. Examples of operators
 * could be `+`, `-`, `*`, `/`, etc.
 * @param operands - An array of operands, which can be numbers or references to other values.
 */
const toExpression = (operator: Operator, ...operands: Array<Operand>) =>
  operands.map(resolveReference).join(` ${operator} `).replace('/calc/g', '');

/**
 * The function `add` takes in multiple operands and returns a string representing the addition
 * operation.
 * @param {Operand[]} operands - The `operands` parameter is a rest parameter that allows you to pass
 * in any number of `Operand` objects. The `Operand` type is not defined in the code snippet you
 * provided, so I cannot provide specific information about its structure. However, based on the usage
 * in the code, it can
 */
const add = (...operands: Operand[]) => `calc(${toExpression('+', ...operands)})`;

/**
 * The function subtract takes in multiple operands and returns a string representing the subtraction
 * operation.
 * @param {Operand[]} operands - An array of operands.
 */
const subtract = (...operands: Operand[]) => `calc(${toExpression('-', ...operands)})`;

/**
 * The `multiply` function takes in multiple operands and returns a string representing the
 * multiplication operation.
 * @param {Operand[]} operands - An array of operands.
 */
const multiply = (...operands: Operand[]) => `calc(${toExpression('*', ...operands)})`;

/**
 * The `divide` function takes in multiple operands and returns a string representing the division
 * operation.
 * @param {Operand[]} operands - An array of operands. Each operand can be a number or a string
 * representing a number.
 */
const divide = (...operands: Operand[]) => `calc(${toExpression('/', ...operands)})`;

/**
 * The `negate` function takes an operand and returns its negated value, either by changing the sign or
 * multiplying it by -1.
 * @param {Operand} x - Operand
 * @returns The function `negate` returns the negated value of the input `x`. If the input `x` is a
 * valid number, it returns the negated value as a string. If the input `x` is not a valid number, it
 * returns the result of multiplying `x` by -1.
 */
const negate = (x: Operand) => {
  const value = resolveReference(x);

  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value.startsWith('-')) ? String(value).slice(1) : `-${value}`;
  }
  return multiply(value, -1);
};

interface CalcChain {
  add: (...operand: Array<Operand>) => CalcChain;
  subtract: (...operand: Array<Operand>) => CalcChain;
  multiply: (...operand: Array<Operand>) => CalcChain;
  divide: (...operand: Array<Operand>) => CalcChain;
  negate: (...operand: Array<Operand>) => CalcChain;
  toString: () => string;
}

export const calc = Object.assign(
  (x: Operand): CalcChain => ({
    add: (...operands) => calc(add(x, ...operands)),
    subtract: (...operands) => calc(subtract(x, ...operands)),
    multiply: (...operands) => calc(multiply(x, ...operands)),
    divide: (...operands) => calc(divide(x, ...operands)),
    negate: (...operands) => calc(negate(x)),
    toString: () => x.toString(),
  }),
  {
    add,
    subtract,
    multiply,
    divide,
    negate,
  },
);

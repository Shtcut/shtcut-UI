export type Operand = string | number | {
    reference: string;
};
/**
 * The function `resolveReference` takes an `operand` and returns its reference if it is an object with
 * a reference property, otherwise it returns the operand as a string.
 * @param {Operand} operand - The `operand` parameter is of type `Operand`.
 * @returns a string.
 */
export declare const resolveReference: (operand: Operand) => string;
interface CalcChain {
    add: (...operand: Array<Operand>) => CalcChain;
    subtract: (...operand: Array<Operand>) => CalcChain;
    multiply: (...operand: Array<Operand>) => CalcChain;
    divide: (...operand: Array<Operand>) => CalcChain;
    negate: (...operand: Array<Operand>) => CalcChain;
    toString: () => string;
}
export declare const calc: ((x: Operand) => CalcChain) & {
    add: (...operands: Operand[]) => string;
    subtract: (...operands: Operand[]) => string;
    multiply: (...operands: Operand[]) => string;
    divide: (...operands: Operand[]) => string;
    negate: (x: Operand) => string;
};
export {};

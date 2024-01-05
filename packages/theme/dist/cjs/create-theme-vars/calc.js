"use strict";

exports.__esModule = true;
exports.resolveReference = exports.calc = void 0;
var _utils = require("@shtcut-ui/utils");
/**
 * The function `resolveReference` takes an `operand` and returns its reference if it is an object with
 * a reference property, otherwise it returns the operand as a string.
 * @param {Operand} operand - The `operand` parameter is of type `Operand`.
 * @returns a string.
 */
var resolveReference = exports.resolveReference = function resolveReference(operand) {
  return (0, _utils.isObject)(operand) && operand.reference ? operand.reference : String(operand);
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
var toExpression = function toExpression(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }
  return operands.map(resolveReference).join(" " + operator + " ").replace('/calc/g', '');
};

/**
 * The function `add` takes in multiple operands and returns a string representing the addition
 * operation.
 * @param {Operand[]} operands - The `operands` parameter is a rest parameter that allows you to pass
 * in any number of `Operand` objects. The `Operand` type is not defined in the code snippet you
 * provided, so I cannot provide specific information about its structure. However, based on the usage
 * in the code, it can
 */
var _add = function add() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }
  return "calc(" + toExpression.apply(void 0, ['+'].concat(operands)) + ")";
};

/**
 * The function subtract takes in multiple operands and returns a string representing the subtraction
 * operation.
 * @param {Operand[]} operands - An array of operands.
 */
var _subtract = function subtract() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }
  return "calc(" + toExpression.apply(void 0, ['-'].concat(operands)) + ")";
};

/**
 * The `multiply` function takes in multiple operands and returns a string representing the
 * multiplication operation.
 * @param {Operand[]} operands - An array of operands.
 */
var _multiply = function multiply() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }
  return "calc(" + toExpression.apply(void 0, ['*'].concat(operands)) + ")";
};

/**
 * The `divide` function takes in multiple operands and returns a string representing the division
 * operation.
 * @param {Operand[]} operands - An array of operands. Each operand can be a number or a string
 * representing a number.
 */
var _divide = function divide() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }
  return "calc(" + toExpression.apply(void 0, ['/'].concat(operands)) + ")";
};

/**
 * The `negate` function takes an operand and returns its negated value, either by changing the sign or
 * multiplying it by -1.
 * @param {Operand} x - Operand
 * @returns The function `negate` returns the negated value of the input `x`. If the input `x` is a
 * valid number, it returns the negated value as a string. If the input `x` is not a valid number, it
 * returns the result of multiplying `x` by -1.
 */
var _negate = function negate(x) {
  var value = resolveReference(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value.startsWith('-')) ? String(value).slice(1) : "-" + value;
  }
  return _multiply(value, -1);
};
var calc = exports.calc = Object.assign(function (x) {
  return {
    add: function add() {
      for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        operands[_key6] = arguments[_key6];
      }
      return calc(_add.apply(void 0, [x].concat(operands)));
    },
    subtract: function subtract() {
      for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        operands[_key7] = arguments[_key7];
      }
      return calc(_subtract.apply(void 0, [x].concat(operands)));
    },
    multiply: function multiply() {
      for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        operands[_key8] = arguments[_key8];
      }
      return calc(_multiply.apply(void 0, [x].concat(operands)));
    },
    divide: function divide() {
      for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        operands[_key9] = arguments[_key9];
      }
      return calc(_divide.apply(void 0, [x].concat(operands)));
    },
    negate: function negate() {
      return calc(_negate(x));
    },
    toString: function toString() {
      return x.toString();
    }
  };
}, {
  add: _add,
  subtract: _subtract,
  multiply: _multiply,
  divide: _divide,
  negate: _negate
});
//# sourceMappingURL=calc.js.map
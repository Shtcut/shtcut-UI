"use strict";

exports.__esModule = true;
exports.pascalCase = exports.camelCase = void 0;
/**
 * The `camelCase` function converts a string to camel case by removing spaces, hyphens, and
 * underscores, and capitalizing the first letter of each word except the first one.
 * @param {string} str - The `str` parameter is a string that you want to convert to camel case.
 */
var camelCase = exports.camelCase = function camelCase(str) {
  return str.trim().replace(/[-_\s]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};
var pascalCase = exports.pascalCase = function pascalCase(str) {
  return (str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || []).join('-').toLowerCase();
};
//# sourceMappingURL=index.js.map
/**
 * The `camelCase` function converts a string to camel case by removing spaces, hyphens, and
 * underscores, and capitalizing the first letter of each word except the first one.
 * @param {string} str - The `str` parameter is a string that you want to convert to camel case.
 */
export var camelCase = str => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
export var pascalCase = str => (str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || []).join('-').toLowerCase();
//# sourceMappingURL=index.js.map
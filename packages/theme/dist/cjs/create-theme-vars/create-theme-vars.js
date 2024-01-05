"use strict";

exports.__esModule = true;
exports.createThemeVars = void 0;
var _utils = require("@shtcut-ui/utils");
var _cssVar2 = require("./css-var");
/**
 * The `createThemeVars` function takes a target object and options, and returns a context object
 * containing CSS variables and a CSS map.
 * @param {Dict} target - The `target` parameter is an object that contains the theme variables that
 * you want to create. It can be any JavaScript object that represents the theme variables.
 * @param {CreateThemeVarsOptions} options - The `options` parameter is an object that contains
 * additional configuration options for creating theme variables. It is of type
 * `CreateThemeVarsOptions`.
 * @returns The function `createThemeVars` returns an object of type `ThemeVars`.
 */
var createThemeVars = exports.createThemeVars = function createThemeVars(target, options) {
  var context = {
    cssVars: {},
    cssMap: {}
  };
  (0, _utils.walkObject)(target, function (value, path) {
    var _tokenHandlerMap$firs;
    var firstKey = path[0];

    // @ts-ignore
    var handler = (_tokenHandlerMap$firs = tokenHandlerMap[firstKey]) != null ? _tokenHandlerMap$firs : tokenHandlerMap.defaultHandler;
    var _handler = handler(path, value, options),
      cssVars = _handler.cssVars,
      cssMap = _handler.cssMap;
    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });
  return context;
};
/* The `tokenHandlerMap` is an object that maps different keys (of type `ThemeScale`) to corresponding
handler functions. Each handler function takes in `keys`, `value`, and `options` as parameters and
returns an object with `cssVars` and `cssMap` properties. */
var tokenHandlerMap = {
  defaultHandler: function defaultHandler(keys, value, options) {
    var _cssVars, _cssMap;
    var lookupKey = keys.join('.');
    var varKey = keys.join('-');
    var _cssVar = (0, _cssVar2.cssVar)(varKey, undefined, options.cssVarPrefix),
      variable = _cssVar.variable,
      reference = _cssVar.reference;
    return {
      cssVars: (_cssVars = {}, _cssVars[variable] = value, _cssVars),
      cssMap: (_cssMap = {}, _cssMap[lookupKey] = {
        value: value,
        "var": variable,
        varRef: reference
      }, _cssMap)
    };
  }
};
//# sourceMappingURL=create-theme-vars.js.map
import { walkObject } from '@shtcut-ui/utils';
import { cssVar } from './css-var';
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
export var createThemeVars = (target, options) => {
  var context = {
    cssVars: {},
    cssMap: {}
  };
  walkObject(target, (value, path) => {
    var _tokenHandlerMap$firs;
    var [firstKey] = path;

    // @ts-ignore
    var handler = (_tokenHandlerMap$firs = tokenHandlerMap[firstKey]) != null ? _tokenHandlerMap$firs : tokenHandlerMap.defaultHandler;
    var {
      cssVars,
      cssMap
    } = handler(path, value, options);
    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });
  return context;
};
/* The `tokenHandlerMap` is an object that maps different keys (of type `ThemeScale`) to corresponding
handler functions. Each handler function takes in `keys`, `value`, and `options` as parameters and
returns an object with `cssVars` and `cssMap` properties. */
var tokenHandlerMap = {
  defaultHandler: (keys, value, options) => {
    var lookupKey = keys.join('.');
    var varKey = keys.join('-');
    var {
      variable,
      reference
    } = cssVar(varKey, undefined, options.cssVarPrefix);
    return {
      cssVars: {
        [variable]: value
      },
      cssMap: {
        [lookupKey]: {
          value,
          var: variable,
          varRef: reference
        }
      }
    };
  }
};
//# sourceMappingURL=create-theme-vars.js.map
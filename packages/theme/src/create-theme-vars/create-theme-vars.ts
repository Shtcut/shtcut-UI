import { Dict, walkObject } from '@shtcut-ui/utils';
import { ThemeScale } from './theme-tokens';
import { cssVar } from './css-var';

export interface CreateThemeVarsOptions {
  cssVarPrefix?: string;
}

export interface ThemeVars {
  cssVars: Dict;
  cssMap: Dict;
}

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
export const createThemeVars = (target: Dict, options: CreateThemeVarsOptions) => {
  const context: ThemeVars = {
    cssVars: {},
    cssMap: {},
  };

  walkObject(target, (value, path) => {
    const [firstKey] = path;

    // @ts-ignore
    const handler = tokenHandlerMap[firstKey] ?? tokenHandlerMap.defaultHandler;

    const { cssVars, cssMap } = handler(path, value, options);
    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });
  return context;
};

type TokenHandler = (
  keys: string[],
  value: unknown | { reference: string },
  options: CreateThemeVarsOptions,
) => ThemeVars;

/* The `tokenHandlerMap` is an object that maps different keys (of type `ThemeScale`) to corresponding
handler functions. Each handler function takes in `keys`, `value`, and `options` as parameters and
returns an object with `cssVars` and `cssMap` properties. */
const tokenHandlerMap: Partial<Record<ThemeScale, TokenHandler>> & {
  defaultHandler: TokenHandler;
} = {
  defaultHandler: (keys, value, options) => {
    const lookupKey = keys.join('.');
    const varKey = keys.join('-');

    const { variable, reference } = cssVar(varKey, undefined, options.cssVarPrefix);

    return {
      cssVars: {
        [variable]: value,
      },
      cssMap: {
        [lookupKey]: {
          value,
          var: variable,
          varRef: reference,
        },
      },
    };
  },
};

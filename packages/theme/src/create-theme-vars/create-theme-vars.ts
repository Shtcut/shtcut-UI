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

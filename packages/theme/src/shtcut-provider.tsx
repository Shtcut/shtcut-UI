import { Dict, WithCSSVar, deepMerge, isString, omit, toRGB, walkObject } from '@shtcut-ui/utils';
import { Context, ReactNode, createContext, useContext, useMemo } from 'react';
import { ShtcutThemeOverride, ShtcutUiTheme } from './types';
import { defaultTheme } from './default-theme';
import { isBrowser } from './utils';
import set from 'lodash.set';
import { toCSSVar } from './to-css-var';
import { Global } from '@emotion/react';

interface DictShtcutTheme extends Dict {}

export const ShtcutContext = createContext<{ theme: WithCSSVar<DictShtcutTheme> } | undefined>(undefined);

ShtcutContext.displayName = 'ShtcutContext';

export interface ShtcutProviderProps {
  children: ReactNode;
  theme?: ShtcutUiTheme;
  density?: 'compact' | 'comfortable' | 'unset';
  colorScheme?: string;
  cssVarsRoot?: string;
}

export function ShtcutProvider({
  theme = defaultTheme,
  colorScheme = 'light',
  density = 'comfortable',
  cssVarsRoot = ':host, :root',
  children,
}: ShtcutProviderProps) {
  const computedTheme = useMemo(() => {
    const omittedTheme = omit(theme, ['colorSchemes', 'density']);
    const { colors, type } = theme.colorSchemes[colorScheme] ?? {};
    if (isBrowser) {
      if (type === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    }
    walkObject(colors, (value, path) => {
      if (!isString(value)) return;
      const rgb = toRGB(value);
      if (rgb) set(colors, path, rgb.join(','));
    });
    const normalizedTheme = {
      ...omittedTheme,
      density: theme.density[density],
      colors,
    };
    return toCSSVar(normalizedTheme);
  }, [theme, colorScheme, density]);

  const value = useMemo(
    () => ({
      theme: computedTheme,
    }),
    [computedTheme],
  );
  return (
    <ShtcutContext.Provider value={value}>
      <Global styles={() => ({ [cssVarsRoot]: computedTheme.__cssVars })} />
      {children}
    </ShtcutContext.Provider>
  );
}

export function useShtcut<T extends object = Dict>() {
  const theme = useContext(ShtcutContext as unknown as Context<T | undefined>);
  if (!theme) {
    throw Error('useShtcut: `theme` is defined. Maybe you have not to wrap your app in <ShtcutProvider />');
  }
  return theme as WithCSSVar<T>;
}

export function extendTheme(themeOverride: ShtcutThemeOverride): ShtcutUiTheme {
  return deepMerge(defaultTheme, themeOverride, { clone: true }) as ShtcutUiTheme;
}

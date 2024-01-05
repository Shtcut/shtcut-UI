import { Dict, WithCSSVar } from '@shtcut-ui/utils';
import { Context, ReactNode } from 'react';
import { ShtcutThemeOverride, ShtcutUiTheme } from './types';
interface DictShtcutTheme extends Dict {
}
export declare const ShtcutContext: Context<{
    theme: WithCSSVar<DictShtcutTheme>;
} | undefined>;
export interface ShtcutProviderProps {
    children: ReactNode;
    theme?: ShtcutUiTheme;
    density?: 'compact' | 'comfortable' | 'unset';
    colorScheme?: string;
    cssVarsRoot?: string;
}
export declare function ShtcutProvider({ theme, colorScheme, density, cssVarsRoot, children, }: ShtcutProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useShtcut<T extends object = Dict>(): WithCSSVar<T>;
export declare function extendTheme(themeOverride: ShtcutThemeOverride): ShtcutUiTheme;
export {};

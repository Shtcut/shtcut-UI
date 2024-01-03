import { DeepPartials } from '@shtcut-ui/utils';

export type RecursiveProp<N = string | number> = RecursiveObject<N> | N;

export interface RecursiveObject<N = string | number> {
  [p: string]: RecursiveProp<N>;
}

export interface ColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type Colors = RecursiveObject<Record<string, Partial<ColorHues>> | string>;

export interface ColorScheme {
  id: string;
  type: 'light' | 'dark';
  colors: {
    bg: {
      base: string;
      fill: string;
    };
    text: {
      foreground: string;
      muted: string;
    };
    primary: ColorHues;
    neutral: ColorHues;
  } & Colors;
}

export interface Density {}

export interface ShtcutUiTheme {
  readonly cursor: 'default' | 'pointer';
  readonly rounded: string;
  readonly colorSchemes: Record<string, ColorScheme>;
  readonly density: Record<'compact' | 'comfortable' | 'unset', Density>;
  readonly config: Record<string, unknown>;
}

export interface DefaultProps {
  className?: string;
}

export type ShtcutThemeOverride = DeepPartials<ShtcutUiTheme>;

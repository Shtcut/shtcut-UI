import { DeepPartials, Dict } from '@shtcut-ui/utils';
import type { BaseTheme, CSSProperties, MaybeArray } from '@twind/core';

export type RecursiveProp<N = string | number> = RecursiveObject<N> | N;

declare module '@twind/core' {
  export interface CustomProps {
    '--sht-backdrop-blur'?: string;
    '--sht-backdrop-brightness'?: string;
    '--sht-backdrop-contrast'?: string;
    '--sht-backdrop-grayscale'?: string;
    '--sht-backdrop-hue-rotate'?: string;
    '--sht-backdrop-invert'?: string;
    '--sht-backdrop-opacity'?: string;
    '--sht-backdrop-saturate'?: string;
    '--sht-backdrop-sepia'?: string;
    '--sht-bg-opacity'?: string | number;
    '--sht-blur'?: string;
    '--sht-border-opacity'?: string | number;
    '--sht-border-spacing-x'?: string | number;
    '--sht-border-spacing-y'?: string | number;
    '--sht-brightness'?: string;
    '--sht-contrast'?: string;
    '--sht-divide-opacity'?: string | number;
    '--sht-divide-x-reverse'?: string | number;
    '--sht-divide-y-reverse'?: string | number;
    '--sht-drop-shadow'?: string;
    '--sht-gradient-from'?: string;
    '--sht-gradient-stops'?: string;
    '--sht-gradient-to'?: string;
    '--sht-gradient-via'?: string;
    '--sht-grayscale'?: string;
    '--sht-hue-rotate'?: string;
    '--sht-invert'?: string;
    '--sht-numeric-figure'?: string;
    '--sht-numeric-fraction'?: string;
    '--sht-numeric-spacing'?: string;
    '--sht-opacity'?: string | number;
    '--sht-ordinal'?: string;
    '--sht-placeholder-opacity'?: string;
    '--sht-ring-color'?: string;
    '--sht-ring-inset'?: string;
    '--sht-ring-offset-color'?: string;
    '--sht-ring-offset-shadow'?: string;
    '--sht-ring-offset-width'?: string;
    '--sht-ring-opacity'?: string | number;
    '--sht-ring-shadow'?: string;
    '--sht-rotate'?: string;
    '--sht-saturate'?: string;
    '--sht-scale-x'?: string;
    '--sht-scale-y'?: string;
    '--sht-sepia'?: string;
    '--sht-shadow'?: string;
    '--sht-shadow-color'?: string;
    '--sht-shadow-colored'?: string;
    '--sht-skew-x'?: string;
    '--sht-skew-y'?: string;
    '--sht-slashed-zero'?: string;
    '--sht-scroll-snap-strictness'?: string;
    '--sht-text-opacity'?: string;
    '--sht-pan-x'?: string;
    '--sht-pan-y'?: string;
    '--sht-pinch-zoom'?: string;
    '--sht-touch-action'?: string;
    '--sht-transform'?: string;
    '--sht-translate-x'?: string;
    '--sht-translate-y'?: string;
  }
}

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

export type FontSizeValue =
  | string
  | [size: string, lineHeight: string]
  | [size: string, options: { lineHeight?: string; letterSpacing?: string; fontWeight?: string }];

export type FontFamilyValue =
  | MaybeArray<string>
  | [fontFamily: MaybeArray<string>, configuration: { fontFeatureSettings?: string }];

export type Container = {
  screen?: BaseTheme['screens'];
  center?: boolean;
  padding?: string | Dict<string>;
};

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

type BaseThemeColor = BaseTheme['colors'];
type DictString = Dict<string>;
type DictMaybeArray = Dict<MaybeArray<string>>;

export type ShtcutTheme = BaseTheme & {
  columns: DictString;
  spacing: Dict<string>;
  durations: DictMaybeArray;

  accentColor: BaseThemeColor;
  animation: DictMaybeArray;
  aria: DictString;
  aspectRatio: DictString;

  backdropBlur: DictString;
  backdropBrightness: DictString;
  backdropContrast: DictString;
  backdropGrayscale: DictString;
  backdropInvert: DictString;
  backdropOpacity: DictString;
  backdropSaturate: DictString;
  backdropSepia: DictString;

  backgroundColor: BaseThemeColor;
  backgroundImage: DictMaybeArray;
  backgroundOpacity: DictString;
  backgroundPosition: DictString;
  backgroundSize: DictString;

  blur: DictString;
  borderColor: BaseThemeColor;
  borderOpacity: DictString;
  borderRadius: DictString;
  borderSpacing: DictString;
  borderWidth: DictString;

  boxShadow: DictString;
  boxShadowColor: BaseThemeColor;
  brightness: DictString;
  caretColor: BaseThemeColor;
  container: Container;
  content: DictString;
  contrast: Dict<string>;
  cursor: DictString;

  data: DictString;
  divideColor: BaseThemeColor;
  divideOpacity: DictString;
  divideWidth: DictString;
  dropShadow: DictString;

  fill: BaseThemeColor;
  flex: DictString;
  flexBasis: DictString;
  fontWeight: DictString;
  flexGrow: Dict<string | number>;
  flexShrink: Dict<string | number>;
  fontFamily: Dict<FontFamilyValue>;
  fontSize: Dict<FontSizeValue>;

  gap: DictString;
  gradientColorStops: BaseThemeColor;
  grayscale: DictString;
  gridAutoColumns: DictString;
  gridAutoRows: DictString;
  gridColumn: DictString;
  gridColumnEnd: DictString;
  gridColumnStart: DictString;
  gridRow: DictString;
  gridRowEnd: DictString;
  gridRowStart: DictString;
  gridTemplateColumns: DictString;
  gridTemplateRows: DictString;

  height: DictString;
  hueRotate: DictString;

  inset: DictString;
  invert: DictString;

  keyframes: Dict<Record<string, CSSProperties>>;

  letterSpacing: DictString;
  lineHeight: DictString;
  listStyleType: DictString;

  margin: DictString;
  maxHeight: DictString;
  maxWidth: DictString;
  minHeight: DictString;
  minWidth: DictString;

  objectPosition: DictString;
  opacity: DictString;
  order: DictString;
  outlineColor: BaseThemeColor;
  outlineOffset: DictString;
  outlineWidth: DictString;

  padding: DictString;
  placeholderColor: BaseThemeColor;
  placeholderOpacity: DictString;

  ringColor: BaseThemeColor;
  ringOffsetColor: BaseThemeColor;
  ringOffsetWidth: DictString;
  ringOpacity: DictString;
  ringWidth: DictString;
  rotate: DictString;

  saturate: DictString;
  scale: DictString;
  scrollMargin: DictString;
  scrollPadding: DictString;
  sepia: DictString;
  skew: DictString;
  space: DictString;
  stroke: BaseThemeColor;
  strokeWidth: DictString;
  supports: DictString;

  textColor: BaseThemeColor;
  textDecorationColor: BaseThemeColor;
  textDecorationThickness: DictString;
  textIndent: DictString;
  textOpacity: DictString;
  textUnderlineOffset: DictString;
  transformOrigin: DictString;
  transitionDelay: DictString;
  transitionDuration: DictString;
  transitionProperty: DictString;
  transitionTimingFunction: DictString;
  translate: DictString;

  width: DictString;
  willChange: DictString;

  zIndex: DictString;
};

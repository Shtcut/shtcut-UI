import type { ThemeSection, ThemeSectionResolver } from '@twind/core';
import { ShtcutTheme } from '@shtcut-ui/theme';
import colors from '../tokens/colors';
import screens from '../tokens/screen';
import { Dict } from '@shtcut-ui/utils';

export type OmittedSections =
  | 'aria'
  | 'backgroundPosition'
  | 'container'
  | 'data'
  | 'gridColumnEnd'
  | 'gridColumnStart'
  | 'gridRowEnd'
  | 'gridRowStart'
  | 'listStyleType'
  | 'objectPosition'
  | 'supports'
  | 'transformOrigin';

export type StableSections =
  | 'screens'
  | 'columns'
  | 'durations'
  | 'borderRadius'
  | 'borderWidth'
  | 'borderShadow'
  | 'boxShadow'
  | 'fontFamily'
  | 'fontSize';

export type Theme = {
  colors: typeof colors;
} & {
  [Section in StableSections]: Section extends 'fontSize'
    ? {
        xs: [size: string, lineHeight: string];
        sm: [size: string, lineHeight: string];
        base: [size: string, lineHeight: string];
        lg: [size: string, lineHeight: string];
        xl: [size: string, lineHeight: string];
      }
    : //@ts-ignore
      ShtcutTheme[Section];
} & {
  [Section in Exclude<keyof ShtcutTheme, 'colors' | StableSections | OmittedSections>]: ThemeSection<
    ShtcutTheme[Section],
    ShtcutTheme
  >;
} & {
  [Section in OmittedSections]?: ThemeSection<ShtcutTheme[Section], ShtcutTheme>;
};

const theme: Theme = {
  screens,
  colors,
  columns: {
    auto: 'auto',
    '3xs': '16rem',
    '2xs': '18rem',
    xs: '20rem',
  },
  spacing: {
    px: '1px',
    0: '0px',
    .../* #__PURE__*/ linear(4, 'rem', 4, 0.5, 0.5),
    // 1: "0.25rem",
    // 2: "0.5rem",
    // 3: "0.75rem",
    // 4: "1rem",
    // 0.5: "0.125rem",
    // 1.5: "0.375rem",
    // 2.5: "0.625rem",
    // 3.5: "0.875rem"
    .../* #__PURE__*/ linear(12, 'rem', 4, 5),
    // 5: "1.25rem",
    // 6: "1.5rem",
    // 7: "1.75rem",
    // 8: "2rem",
    // 9: "2.25rem",
    // 10: "2.5rem",
    // 11: "2.75rem",
    // 12: "3rem",
    14: '3.5rem',
    .../* #__PURE__*/ linear(16, 'rem', 4, 16, 4),
    // 16: "4rem",
    // 20: "5rem",
    // 24: "6rem",
    // 28: "7rem",
    // 32: "8rem",
    // 36: "9rem",
    // 40: "10rem",
    // 44: "11rem",
    // 48: "12rem",
    // 52: "13rem",
    // 56: "14rem",
    // 60: "15rem",
    // 64: "16rem" ,
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  durations: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  animation: {
    none: 'none',
  },
};

function linear(stop: number, unit = '', dividedBy = 1, start = 0, step = 1, result: Dict<string> = {}): Dict<string> {
  for (; start <= stop; start += step) {
    result[start] = start / dividedBy + unit;
  }
  return result;
}

export default theme;

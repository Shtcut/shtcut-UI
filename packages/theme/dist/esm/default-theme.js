import { colors } from './colors';
import { comfortableDensity, compactDensity } from './density';
export var lightSchema = {
  id: 'light',
  type: 'light',
  colors: {
    bg: {
      base: colors.white,
      fill: colors.gray['100']
    },
    text: {
      foreground: colors.gray['900'],
      muted: colors.gray['700']
    },
    primary: colors.teal,
    neutral: colors.gray
  }
};
export var darkSchema = {
  id: 'light',
  type: 'dark',
  colors: {
    bg: {
      base: colors.gray['800'],
      fill: colors.gray['900']
    },
    text: {
      foreground: colors.gray['100'],
      muted: colors.gray['300']
    },
    primary: colors.teal,
    neutral: colors.gray
  }
};
export var defaultTheme = {
  cursor: 'default',
  rounded: '0.375rem',
  colorSchemes: {
    light: lightSchema,
    dark: darkSchema
  },
  density: {
    compact: compactDensity,
    comfortable: comfortableDensity,
    unset: {}
  },
  config: {}
};
//# sourceMappingURL=default-theme.js.map
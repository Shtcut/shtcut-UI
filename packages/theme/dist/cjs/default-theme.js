"use strict";

exports.__esModule = true;
exports.lightSchema = exports.defaultTheme = exports.darkSchema = void 0;
var _colors = require("./colors");
var _density = require("./density");
var lightSchema = exports.lightSchema = {
  id: 'light',
  type: 'light',
  colors: {
    bg: {
      base: _colors.colors.white,
      fill: _colors.colors.gray['100']
    },
    text: {
      foreground: _colors.colors.gray['900'],
      muted: _colors.colors.gray['700']
    },
    primary: _colors.colors.teal,
    neutral: _colors.colors.gray
  }
};
var darkSchema = exports.darkSchema = {
  id: 'light',
  type: 'dark',
  colors: {
    bg: {
      base: _colors.colors.gray['800'],
      fill: _colors.colors.gray['900']
    },
    text: {
      foreground: _colors.colors.gray['100'],
      muted: _colors.colors.gray['300']
    },
    primary: _colors.colors.teal,
    neutral: _colors.colors.gray
  }
};
var defaultTheme = exports.defaultTheme = {
  cursor: 'default',
  rounded: '0.375rem',
  colorSchemes: {
    light: lightSchema,
    dark: darkSchema
  },
  density: {
    compact: _density.compactDensity,
    comfortable: _density.comfortableDensity,
    unset: {}
  },
  config: {}
};
//# sourceMappingURL=default-theme.js.map
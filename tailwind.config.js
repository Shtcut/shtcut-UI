/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  presets: [require('./packages/twind/tailwind.config.cjs')],
  mode: 'jit',
  purge: ['./public/**/*.html', './packages/*/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./packages/core')({
      colors: ['blue'],
      cssBase: true,
    }),
  ],
};

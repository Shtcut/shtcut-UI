const withOpacity = require('./with-opacity');

const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const reduceWithOpacityAndColor = (color: string) =>
  weights.reduce((acc, num) => {
    acc[num] = withOpacity(`--sht-colors-${color}-${num}`);
    return acc;
  }, {});
module.exports = {
  primary: reduceWithOpacityAndColor('primary'),
  neutral: reduceWithOpacityAndColor('neutral'),
  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.26)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)',
  },
  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0 0.06)',
    200: 'rgba(0, 0, 0 0.08)',
    300: 'rgba(0, 0, 0 0.16)',
    400: 'rgba(0, 0, 0 0.26)',
    500: 'rgba(0, 0, 0 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)',
  },
};

"use strict";

exports.__esModule = true;
exports.hslToRgb = hslToRgb;
exports.hwbToRgb = hwbToRgb;
exports.regexColor = void 0;
exports.toColor = toColor;
exports.toRGB = toRGB;
exports.toRGBA = toRGBA;
var _colorString = _interopRequireDefault(require("color-string"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * The function `hslToRgb` converts a color from HSL (Hue, Saturation, Lightness) format to RGB (Red,
 * Green, Blue) format.
 * @param {number} h - The parameter `h` represents the hue value of the HSL color. It ranges from 0 to
 * 360, where 0 represents red, 120 represents green, and 240 represents blue.
 * @param {number} s - The parameter `s` in the `hslToRgb` function represents the saturation of the
 * color. Saturation determines the intensity or purity of the color. A saturation value of 0 means the
 * color is completely gray, while a saturation value of 100 means the color is fully saturated and
 * vibrant
 * @param {number} l - The parameter "l" in the hslToRgb function represents the lightness value of the
 * HSL color. It ranges from 0 to 100, where 0 represents black and 100 represents white.
 * @returns The function `hslToRgb` returns an array of three numbers representing the RGB values of
 * the corresponding HSL color. The array contains the red, green, and blue values in that order.
 */
function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  if (h >= 360) {
    h %= 360;
  }
  var chroma = (1 - Math.abs(2 * l - 1)) * s;
  var x = chroma * (1 - Math.abs(h / 60 % 2 - 1));
  var m = l - chroma / 2;
  var r, g, b;
  switch (true) {
    case h < 60:
      r = chroma;
      g = x;
      b = 0;
      break;
    case h < 120:
      r = x;
      g = chroma;
      b = 0;
      break;
    case h < 180:
      r = 0;
      g = chroma;
      b = x;
      break;
    case h < 240:
      r = 0;
      g = x;
      b = chroma;
      break;
    case h < 300:
      r = x;
      g = 0;
      b = chroma;
      break;
    default:
      r = chroma;
      g = 0;
      b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return [r, g, b];
}

/**
 * The function converts a color from HWB (Hue, Whiteness, Blackness) color space to RGB (Red, Green,
 * Blue) color space.
 * @param {number} h - The parameter `h` represents the hue value, which determines the color tone. It
 * is a number between 0 and 360, where 0 represents red, 120 represents green, and 240 represents
 * blue.
 * @param {number} w - The parameter `w` represents the whiteness value in the HWB color model. It
 * determines the amount of white added to the color. A value of 0 means no white added, while a value
 * of 100 means maximum white added.
 * @param {number} b - The parameter "b" in the above code represents the blackness component of the
 * HWB (Hue-Whiteness-Blackness) color model. It determines the amount of black added to the color. A
 * value of 0 represents no blackness (fully saturated color), while a value
 * @returns an array of three numbers representing the RGB values of a color.
 */
function hwbToRgb(h, w, b) {
  var rgb = hslToRgb(h, 100, 50);
  for (var i = 0; i < 3; ++i) {
    var c = rgb[i] / 255;
    c *= 1 - w / 100 - b / 100;
    c += w / 100;
    rgb[i] = Math.round(c * 255);
  }
  return rgb;
}

/**
 * The function `regexColor` tests if a given regular expression matches a given color string.
 * @param {RegExp} regex - A regular expression that will be used to test the color string.
 * @param {string} color - The `color` parameter is a string that represents a color value.
 */
var regexColor = exports.regexColor = function regexColor(regex, color) {
  return regex.test(color);
};

/**
 * The `toRGBA` function converts a color string in various formats (hsla, rgba, hwb) to an RGBA color
 * value.
 * @param {string} color - The `color` parameter is a string representing a color value. It can be in
 * various formats such as `rgb()`, `rgba()`, `hsl()`, `hsla()`, or named colors like `"red"`,
 * `"blue"`, etc.
 * @returns a Color object or undefined.
 */
function toRGBA(color) {
  var _colorString$get;
  var colorType = {
    hsla: /^hsla?/,
    rgba: /^rgba?/
  };
  if (regexColor(colorType.hsla, color)) {
    var colorTuple = _colorString["default"].get.hsl(color);
    if (!colorTuple) return;
    return [].concat(hslToRgb(colorTuple[0], colorTuple[1], colorTuple[2]), [colorTuple[3]]);
  } else if (regexColor(colorType.rgba, color)) {
    var _colorTuple = _colorString["default"].get.rgb(color);
    if (!_colorTuple) return;
    return _colorTuple;
  } else if (color.startsWith('hwb')) {
    var _colorTuple2 = _colorString["default"].get.hwb(color);
    if (!_colorTuple2) return;
    return [].concat(hwbToRgb(_colorTuple2[0], _colorTuple2[1], _colorTuple2[2]), [_colorTuple2[3]]);
  }
  return (_colorString$get = _colorString["default"].get(color)) == null ? void 0 : _colorString$get.value;
}

/**
 * The function "toRGB" takes a color string as input and returns an array of RGB values or undefined
 * if the input is invalid.
 * @param {string} color - A string representing a color in any valid CSS color format.
 * @returns an array of numbers representing the RGB values of the given color.
 */
function toRGB(color) {
  var _toRGBA;
  return (_toRGBA = toRGBA(color)) == null ? void 0 : _toRGBA.slice(0, 3);
}

/**
 * The function `toColor` takes a color string and returns an object with the color in RGB format and the
 * opacity as a string.
 * @param {string} colorStr - The `colorStr` parameter is a string representing a color value. It can
 * be in various formats such as hex code (#RRGGBB), RGB value (rgb(r, g, b)), or RGBA value (rgba(r,
 * g, b, a)).
 * @returns An object with two properties: "color" and "opacity".
 */
function toColor(colorStr) {
  var rgba = toRGBA(colorStr);
  var color = rgba ? rgba.slice(0, 3).join(', ') : colorStr;
  var opacity = rgba ? rgba[3].toString() : '1';
  return {
    color: color,
    opacity: opacity
  };
}
//# sourceMappingURL=index.js.map
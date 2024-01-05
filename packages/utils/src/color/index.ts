import colorString from 'color-string';
import type { Color } from 'color-string';

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
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;

  if (h >= 360) {
    h %= 360;
  }

  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - chroma / 2;

  let r, g, b;

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
export function hwbToRgb(h: number, w: number, b: number): [number, number, number] {
  const rgb = hslToRgb(h, 100, 50);

  for (let i = 0; i < 3; ++i) {
    let c = rgb[i] / 255;

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
export const regexColor = (regex: RegExp, color: string) => regex.test(color);

/**
 * The `toRGBA` function converts a color string in various formats (hsla, rgba, hwb) to an RGBA color
 * value.
 * @param {string} color - The `color` parameter is a string representing a color value. It can be in
 * various formats such as `rgb()`, `rgba()`, `hsl()`, `hsla()`, or named colors like `"red"`,
 * `"blue"`, etc.
 * @returns a Color object or undefined.
 */
export function toRGBA(color: string): Color | undefined {
  const colorType = {
    hsla: /^hsla?/,
    rgba: /^rgba?/,
  };
  if (regexColor(colorType.hsla, color)) {
    const colorTuple = colorString.get.hsl(color);
    if (!colorTuple) return;
    return [...hslToRgb(colorTuple[0], colorTuple[1], colorTuple[2]), colorTuple[3]];
  } else if (regexColor(colorType.rgba, color)) {
    const colorTuple = colorString.get.rgb(color);
    if (!colorTuple) return;
    return colorTuple;
  } else if (color.startsWith('hwb')) {
    const colorTuple = colorString.get.hwb(color);
    if (!colorTuple) return;
    return [...hwbToRgb(colorTuple[0], colorTuple[1], colorTuple[2]), colorTuple[3]];
  }
  return colorString.get(color)?.value;
}

/**
 * The function "toRGB" takes a color string as input and returns an array of RGB values or undefined
 * if the input is invalid.
 * @param {string} color - A string representing a color in any valid CSS color format.
 * @returns an array of numbers representing the RGB values of the given color.
 */
export function toRGB(color: string): number[] | undefined {
  return toRGBA(color)?.slice(0, 3);
}

/**
 * The function `toColor` takes a color string and returns an object with the color in RGB format and the
 * opacity as a string.
 * @param {string} colorStr - The `colorStr` parameter is a string representing a color value. It can
 * be in various formats such as hex code (#RRGGBB), RGB value (rgb(r, g, b)), or RGBA value (rgba(r,
 * g, b, a)).
 * @returns An object with two properties: "color" and "opacity".
 */
export function toColor(colorStr: string): { color: string; opacity: string } {
  const rgba = toRGBA(colorStr);
  const color = rgba ? rgba.slice(0, 3).join(', ') : colorStr;
  const opacity = rgba ? rgba[3].toString() : '1';

  return { color, opacity };
}

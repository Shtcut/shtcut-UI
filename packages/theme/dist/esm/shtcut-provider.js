function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { deepMerge, isString, omit, toRGB, walkObject } from '@shtcut-ui/utils';
import { createContext, useContext, useMemo } from 'react';
import { defaultTheme } from './default-theme';
import { isBrowser } from './utils';
import set from 'lodash.set';
import { toCSSVar } from './to-css-var';
import { Global } from '@emotion/react';
export var ShtcutContext = /*#__PURE__*/createContext(undefined);
ShtcutContext.displayName = 'ShtcutContext';
export function ShtcutProvider(_ref) {
  var {
    theme = defaultTheme,
    colorScheme = 'light',
    density = 'comfortable',
    cssVarsRoot = ':host, :root',
    children
  } = _ref;
  var computedTheme = useMemo(() => {
    var _theme$colorSchemes$c;
    var omittedTheme = omit(theme, ['colorSchemes', 'density']);
    var {
      colors,
      type
    } = (_theme$colorSchemes$c = theme.colorSchemes[colorScheme]) != null ? _theme$colorSchemes$c : {};
    if (isBrowser) {
      if (type === 'dark') document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');
    }
    walkObject(colors, (value, path) => {
      if (!isString(value)) return;
      var rgb = toRGB(value);
      if (rgb) set(colors, path, rgb.join(','));
    });
    var normalizedTheme = _extends({}, omittedTheme, {
      density: theme.density[density],
      colors
    });
    return toCSSVar(normalizedTheme);
  }, [theme, colorScheme, density]);
  var value = useMemo(() => ({
    theme: computedTheme
  }), [computedTheme]);
  return /*#__PURE__*/React.createElement(ShtcutContext.Provider, {
    value: value
  }, /*#__PURE__*/React.createElement(Global, {
    styles: () => ({
      [cssVarsRoot]: computedTheme.__cssVars
    })
  }), children);
}
export function useShtcut() {
  var theme = useContext(ShtcutContext);
  if (!theme) {
    throw Error('useShtcut: `theme` is defined. Maybe you have not to wrap your app in <ShtcutProvider />');
  }
  return theme;
}
export function extendTheme(themeOverride) {
  return deepMerge(defaultTheme, themeOverride, {
    clone: true
  });
}
//# sourceMappingURL=shtcut-provider.js.map
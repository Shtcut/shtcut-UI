var _excluded = ["as", "inline", "className", "role", "label"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
import { QuestionCircleIon } from './core';
import VisuallyHidden from '@shtcut-ui/visually-hidden';
import { __DEV__, cx } from '@shtcut-ui/utils';
export var Icon = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      as: Comp = QuestionCircleIon,
      inline = true,
      className,
      role = 'presentation',
      label
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    className: cx(inline ? 'icon-inline' : 'icon-block', className),
    role: role,
    "aria-hidden": true,
    focusable: false
  }, rest)), /*#__PURE__*/React.createElement(VisuallyHidden, null, label));
});
if (__DEV__) {
  Icon.displayName = 'Icon';
}
//# sourceMappingURL=icon.js.map
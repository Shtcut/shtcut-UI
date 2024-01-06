var _excluded = ["color", "variants", "className", "children"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "variants"],
  _excluded4 = ["className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
import { Icon, XIcon } from '@shtcut-ui/icon';
import { __DEV__, createContext, cx, primitiveComponent } from '@shtcut-ui/utils';
import { useAlertClass, useAlertCloseButton } from './styles';
var [AlertProvider, useAlertContext] = createContext({
  name: 'AlertContext',
  strict: true
});
export var AlertCloseButton = primitiveComponent((props, ref) => {
  var {
    color
  } = useAlertContext();
  var classes = useAlertCloseButton();
  var {
    className
  } = props;
  return /*#__PURE__*/React.createElement("button", {
    ref: ref,
    "data-color": color ? color : undefined,
    className: cx(classes, className)
  }, /*#__PURE__*/React.createElement(Icon, {
    as: XIcon,
    label: "x",
    className: "inline-block w-4 h-4 text-current align-text-bottom fill-current"
  }));
});
if (__DEV__) {
  AlertCloseButton.displayName = 'AlertCloseButton';
}
export var Alert = primitiveComponent((props, ref) => {
  var {
      color = 'primary',
      variants = 'subtle',
      className,
      children
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = useAlertClass({
    variants,
    color
  });
  var context = {
    color
  };
  return /*#__PURE__*/React.createElement(AlertProvider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    ref: ref,
    "data-color": color ? color : undefined,
    className: cx(classes, className)
  }, rest), children));
});
if (__DEV__) {
  Alert.displayName = 'Alert';
}
export var AlertTitle = primitiveComponent((props, ref) => {
  var {
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded2);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx('font-medium', className),
    ref: ref
  }, rest));
});
export var AlertDescription = primitiveComponent((props, ref) => {
  var {
      className,
      variants
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded3);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(variants != 'solid' && 'text-black', className),
    ref: ref
  }, rest));
});
export var AlertIcon = props => {
  var {
      className
    } = props,
    rest = _objectWithoutPropertiesLoose(props, _excluded4);
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: cx("shrink-0", className)
  }));
};
//# sourceMappingURL=alert.js.map
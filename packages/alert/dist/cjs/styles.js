"use strict";

exports.__esModule = true;
exports.useAlertCloseButton = exports.useAlertClass = void 0;
var _theme = require("@shtcut-ui/theme");
var _utils = require("@shtcut-ui/utils");
/**
 * The function `alertVariants` returns the corresponding CSS classes for different alert variants
 * based on the provided key and optional color.
 * @param {string} key - The `key` parameter is a string that represents the variant of the alert. It
 * can have the following values:
 * @param {string} [color] - The `color` parameter is an optional parameter of type string. It
 * represents the color variant for the alert. If provided, it will be used to generate the appropriate
 * CSS classes for the alert's color.
 * @returns The function `alertVariants` returns the value associated with the `key` parameter in the
 * `variantClasses` object.
 */
var alertVariants = function alertVariants(key, color) {
  var variantClasses = {
    subtle: 'alert-subtle',
    solid: 'alert-solid',
    'left-accent': 'alert-left-accent',
    light: "border-transparent bg-" + color + "-100 text-" + color + "-500",
    outline: "border-" + color + "-500 text-" + color + "-500 bg-white"
  };
  return variantClasses[key];
};
var useAlertCloseButton = exports.useAlertCloseButton = (0, _theme.createMemoClass)(function () {
  return (0, _utils.cx)('alert-close-button');
});
var useAlertClass = exports.useAlertClass = (0, _theme.createMemoClass)(function (props) {
  var _props$variant = props.variant,
    variant = _props$variant.variant,
    color = _props$variant.color;
  return (0, _utils.cx)('alert', alertVariants(variant, color));
});
//# sourceMappingURL=styles.js.map
import { createMemoClass } from '@shtcut-ui/theme';
import { Dict, cx } from '@shtcut-ui/utils';

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
const alertVariants = (key: string, color?: string) => {
  const variantClasses: Dict<string> = {
    subtle: 'alert-subtle',
    solid: 'alert-solid',
    'left-accent': 'alert-left-accent',
    light: `border-transparent bg-${color}-100 text-${color}-500`,
    outline: `border-${color}-500 text-${color}-500 bg-white`,
  };
  return variantClasses[key];
};

export const useAlertCloseButton = createMemoClass(() => {
  return cx('alert-close-button');
});

export const useAlertClass = createMemoClass((props) => {
  const { variant, color } = props.variant;
  return cx('alert', alertVariants(variant, color));
});

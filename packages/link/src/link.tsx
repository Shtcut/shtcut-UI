import { ElementType, MouseEventHandler, ReactNode } from 'react';

import { cx, __DEV__, primitiveComponent } from '@shtcut-ui/utils';
import { DefaultProps } from '@shtcut-ui/theme';

interface LinkProps extends DefaultProps {
  disabled?: boolean;
  external?: boolean;
  as?: ElementType;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
}

export const Link = primitiveComponent<'a', LinkProps>((props, ref) => {
  const { disabled, external, onClick, as: Comp = 'a', className, ...rest } = props;
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : null;
  return (
    <Comp
      ref={ref}
      tabIndex={disabled ? -1 : undefined}
      aria-disabled={disabled}
      onClick={disabled ? (e: any) => e.preventDefault() : onClick}
      className={cx('link', disabled && 'link-disabled', className)}
      {...externalProps}
      {...rest}
    />
  );
});

export type { LinkProps };

if (__DEV__) {
  Link.displayName = 'Link';
}

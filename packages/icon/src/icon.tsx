import { DefaultProps } from '@shtcut-ui/theme';
import * as React from 'react';
import { QuestionCircleIon } from './core';
import VisuallyHidden from '@shtcut-ui/visually-hidden';
import { __DEV__, cx } from '@shtcut-ui/utils';

export interface IconProps extends DefaultProps {
  as?: React.ElementType;
  inline?: boolean;
  role?: string;
  color?: string;
  label: string;
}

export const Icon = React.forwardRef<any, IconProps>((props, ref) => {
  const { as: Comp = QuestionCircleIon, inline = true, className, role = 'presentation', label, ...rest } = props;

  return (
    <>
      <Comp
        ref={ref}
        className={cx(inline ? 'icon-inline' : 'icon-block', className)}
        role={role}
        aria-hidden={true}
        focusable={false}
        {...rest}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </>
  );
});

if (__DEV__) {
  Icon.displayName = 'Icon';
}

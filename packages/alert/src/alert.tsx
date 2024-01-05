import * as React from 'react';

import { DefaultProps } from '@shtcut-ui/theme';
import { Icon, XIcon } from '@shtcut-ui/icon';
import { __DEV__, createContext, cx, primitiveComponent, PrimitiveComponentProps } from '@shtcut-ui/utils';

import { useAlertClass, useAlertCloseButton } from './styles';

interface AlertContext {
  color?: string;
}

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: 'AlertContext',
  strict: true,
});

interface IAlertCloseButtonProps extends DefaultProps {}

export interface AlertCloseButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IAlertCloseButtonProps {}

export const AlertCloseButton = primitiveComponent<'button', AlertCloseButtonProps>((props, ref) => {
  const { color } = useAlertContext();
  const classes = useAlertCloseButton();
  const { className } = props;

  return (
    <button ref={ref} data-color={color ? color : undefined} className={cx(classes, className)}>
      <Icon as={XIcon} label="x" className="inline-block w-4 h-4 text-current align-text-bottom fill-current" />
    </button>
  );
});

if (__DEV__) {
  AlertCloseButton.displayName = 'AlertCloseButton';
}

interface IAlertProps extends DefaultProps {
  color?: string;
  variants?: 'subtle' | 'solid' | 'left-accent' | 'light' | 'outline';
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, IAlertProps {}

export const Alert = primitiveComponent<'div', AlertProps>((props, ref) => {
  const { color = 'primary', variants = 'subtle', className, children, ...rest } = props;
  const classes = useAlertClass({
    variants,
    color,
  });
  const context = { color };

  return (
    <AlertProvider value={context}>
      <div role="alert" ref={ref} data-color={color ? color : undefined} className={cx(classes, className)} {...rest}>
        {children}
      </div>
    </AlertProvider>
  );
});

if (__DEV__) {
  Alert.displayName = 'Alert';
}

export const AlertTitle = primitiveComponent<'div'>((props, ref) => {
  const { className, ...rest } = props;
  return <div className={cx('font-medium', className)} ref={ref} {...rest} />;
});


export const AlertDescription = primitiveComponent<'div', IAlertProps>((props, ref) => {
  const { className, variants, ...rest } = props;
  return <div className={cx(variants != 'solid' && 'text-black', className)} ref={ref} {...rest} />;
});


export const AlertIcon = (props: PrimitiveComponentProps<'span'>) => {
  const { className, ...rest } = props;
  return <span {...rest} className={cx(`shrink-0`, className)} />;
};

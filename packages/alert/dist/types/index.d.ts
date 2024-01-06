import * as React from 'react';
export * from './styles';
import { AlertProps, AlertCloseButton, AlertCloseButtonProps, AlertDescription, AlertIcon, AlertTitle } from './alert';
interface Alert extends React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>> {
    CloseButton: typeof AlertCloseButton;
}
declare const Alert: Alert;
export type { AlertProps, AlertCloseButtonProps };
export { Alert, AlertDescription, AlertTitle, AlertIcon };

import * as React from 'react';
import { DefaultProps } from '@shtcut-ui/theme';
import { PrimitiveComponentProps } from '@shtcut-ui/utils';
interface IAlertCloseButtonProps extends DefaultProps {
}
export interface AlertCloseButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IAlertCloseButtonProps {
}
export declare const AlertCloseButton: React.ForwardRefExoticComponent<Omit<import("@shtcut-ui/utils").Merge<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
}, AlertCloseButtonProps>, "ref"> & React.RefAttributes<unknown>>;
interface IAlertProps extends DefaultProps {
    color?: string;
    variants?: 'subtle' | 'solid' | 'left-accent' | 'light' | 'outline';
}
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, IAlertProps {
}
export declare const Alert: React.ForwardRefExoticComponent<Omit<import("@shtcut-ui/utils").Merge<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, AlertProps>, "ref"> & React.RefAttributes<unknown>>;
export declare const AlertTitle: React.ForwardRefExoticComponent<Omit<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, never>, "ref"> & React.RefAttributes<unknown>>;
export declare const AlertDescription: React.ForwardRefExoticComponent<Omit<import("@shtcut-ui/utils").Merge<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, IAlertProps>, "ref"> & React.RefAttributes<unknown>>;
export declare const AlertIcon: (props: PrimitiveComponentProps<'span'>) => import("react/jsx-runtime").JSX.Element;
export {};

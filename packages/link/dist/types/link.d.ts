import { ElementType, MouseEventHandler, ReactNode } from 'react';
import { DefaultProps } from '@shtcut-ui/theme';
interface LinkProps extends DefaultProps {
    disabled?: boolean;
    external?: boolean;
    as?: ElementType;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    children?: ReactNode;
}
export declare const Link: import("react").ForwardRefExoticComponent<Omit<import("@shtcut-ui/utils").Merge<Omit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    ref?: ((instance: HTMLAnchorElement | null) => void) | import("react").RefObject<HTMLAnchorElement> | null | undefined;
}, LinkProps>, "ref"> & import("react").RefAttributes<unknown>>;
export type { LinkProps };

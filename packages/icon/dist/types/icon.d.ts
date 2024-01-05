import { DefaultProps } from '@shtcut-ui/theme';
import * as React from 'react';
export interface IconProps extends DefaultProps {
    as?: React.ElementType;
    inline?: boolean;
    role?: string;
    color?: string;
    label: string;
}
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<any>>;

import { ComponentPropsWithRef, ElementType, ForwardRefRenderFunction, ReactElement } from 'react';
import { Merge } from '../types';
type As<Props = any> = ElementType<Props>;
type PropsOf<T extends As> = ComponentPropsWithRef<T> & {
    as?: As;
};
type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<Target, 'as' | OmitAdditionalProps>;
type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;
type PolymorphicComponent<C extends ElementType = 'div', Props = {}> = Merge<ComponentPropsWithRef<C>, Props>;
export type PrimitiveComponentProps<C extends ElementType = 'div', Props = {}> = Merge<ComponentPropsWithRef<C>, Props>;
export declare const polymorphicComponent: <C extends As<any>, Props extends object>(render: ForwardRefRenderFunction<any, OmitCommonProps<PropsOf<C>, keyof Props> & Props & {
    as?: As<any> | undefined;
}>) => PolymorphicComponent<C, Props>;
export declare const primitiveComponent: <C extends ElementType = "div", Props = {}>(render: (props: Merge<ComponentPropsWithRef<C>, Props>, ref?: ComponentPropsWithRef<C>["ref"] | undefined) => ReactElement | null) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<Merge<ComponentPropsWithRef<C>, Props>> & import("react").RefAttributes<unknown>>;
export declare const primitiveOmitComponent: <C extends ElementType = "div", K extends string | number | symbol = never>(render: (props: Omit<ComponentPropsWithRef<C>, K>, ref?: ComponentPropsWithRef<C>["ref"] | undefined) => ReactElement | null) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<Omit<ComponentPropsWithRef<C>, K>> & import("react").RefAttributes<unknown>>;
export {};

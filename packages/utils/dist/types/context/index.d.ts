import { Context, Provider } from 'react';
export type CreateContextOptions = {
    name: string;
    strict?: boolean;
    errorMessage?: string;
};
type CreateContextReturn<T> = [Provider<T>, () => T, Context<T>];
export declare function createContext<ContextValueType>(options: CreateContextOptions): CreateContextReturn<ContextValueType>;
export {};

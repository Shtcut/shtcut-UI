export declare const useClipboard: (timeout?: number) => {
    value: string;
    copied: boolean;
    onCopy: (source: string) => Promise<void>;
};

export type WalkObjectPredicate<L = unknown> = (value: unknown, path: string[]) => L;
export type MappedLeavesObject<Obj, LeafType> = {
    [Prop in keyof Obj]: Obj[Prop] extends Array<any> ? MappedLeavesObject<Obj[Prop][number], LeafType>[] : Obj[Prop] extends object ? MappedLeavesObject<Obj[Prop], LeafType> : LeafType;
};
export declare function walkObject<Target, LeafType>(target: Target, predicate: WalkObjectPredicate<LeafType>): MappedLeavesObject<Target, ReturnType<WalkObjectPredicate<LeafType>>>;

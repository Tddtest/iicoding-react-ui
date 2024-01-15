import { Attr } from '@antv/x6/es/registry';
export type EdgeAttrs = {
    [k: string]: Attr.ComplexAttrs;
};
export declare const getLine: (attrs: EdgeAttrs, opacity?: number) => Record<string, any>;
export declare const setEdgeRunningAttrs: (oldAttrs: EdgeAttrs) => {
    [x: string]: Attr.ComplexAttrs;
};
export declare const setEdgeWaitingAttrs: (oldAttrs: EdgeAttrs) => {
    [x: string]: Attr.ComplexAttrs;
};
export declare const setEdgeInitAttrs: (oldAttrs: EdgeAttrs, data: Record<string, any>) => {
    line: {
        strokeDasharray: number;
    };
};

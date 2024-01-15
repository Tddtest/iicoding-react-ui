import type { X6GraphicsOptions } from './interface';
export declare const defaultEdgeLineConfig: {
    line: {
        stroke: {
            type: string;
            stops: {
                offset: string;
                color: string;
            }[];
        };
        strokeWidth: number;
        strokeDasharray: number;
        targetMarker: {
            name: string;
            args: {
                width: number;
                height: number;
                fill: string;
            };
        };
    };
};
declare const flowOptions: X6GraphicsOptions;
export default flowOptions;

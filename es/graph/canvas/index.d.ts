import { Edge, Node } from '@antv/x6';
import type { HTMLAttributes } from 'react';
import React from 'react';
import { X6GraphicsOptions } from '../core';
import './index.less';
type TFn = (...args: any[]) => any;
interface IProps extends HTMLAttributes<HTMLDivElement> {
    graphId: string;
    data: {
        nodes: Node.Metadata[];
        edges: Edge.Metadata[];
    };
    loading?: boolean;
    graphOptions?: X6GraphicsOptions;
    onGraphRenderDataBefore?: TFn;
    onGraphMounted?: TFn;
}
declare const GraphCanvas: React.NamedExoticComponent<IProps>;
export default GraphCanvas;

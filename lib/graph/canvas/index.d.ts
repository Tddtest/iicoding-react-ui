import React from 'react';
import { Node, Edge } from '@antv/x6';
import type { HTMLAttributes } from 'react';
import { X6GraphicsOptions } from '../core';
import './index.less';
interface IProps extends HTMLAttributes<HTMLDivElement> {
    graphId: string;
    data: {
        nodes: Node.Metadata[];
        edges: Edge.Metadata[];
    };
    loading?: boolean;
    graphOptions?: X6GraphicsOptions;
}
declare const GraphCanvas: React.NamedExoticComponent<IProps>;
export default GraphCanvas;

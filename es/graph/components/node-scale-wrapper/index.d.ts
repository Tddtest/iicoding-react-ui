import React from 'react';
import { Graph, Node } from '@antv/x6';
import type { ReactNode, HTMLAttributes } from 'react';
import './index.less';
interface IProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    graph?: Graph;
    node?: Node<{
        data: any;
    }>;
    show?: boolean;
    minWidth?: number;
    minHeight?: number;
}
declare const NodeScaleWrapper: React.NamedExoticComponent<IProps>;
export default NodeScaleWrapper;

import { Graph, Node } from '@antv/x6';
import type { HTMLAttributes } from 'react';
import React from 'react';
import type { NodeData } from './interface';
import './index.less';
interface IProps extends HTMLAttributes<HTMLDivElement> {
    graph?: Graph;
    node?: Node<{
        data: NodeData;
    }>;
    isNode?: boolean;
}
declare const TextNode: React.NamedExoticComponent<IProps>;
export default TextNode;

import type { Graph, Node } from '@antv/x6';
import type { Execution, NodeData } from './interface';
export declare const executeNodeMethods: (ex: Execution, info: NodeData['info'], node: Node<{
    data: NodeData;
}>, graph: Graph) => Promise<void>;

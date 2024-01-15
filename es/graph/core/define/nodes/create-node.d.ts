import type { Graph } from '@antv/x6';
import type { NodeData } from './text-node/interface';
export declare const defaultData: NodeData;
declare const createNode: (graph: Graph, event: MouseEvent, nodeInfo: Record<string, any>) => void;
export default createNode;

import { Cell, Graph, Node } from '@antv/x6';
export declare const handleStartExecuteFlow: (graph: Graph) => void;
export declare const validateFlowNodes: (graph: Graph) => boolean;
export declare const handleExecuteFlowFromThatNode: (node: Node) => void;
export declare const handleExecuteFlowAtThatNode: (node: Node) => void;
export declare const getGraphData: (graph?: Graph) => Cell.Properties[];

import type { Graph, Node } from '@antv/x6';
type TFn = (...args: any[]) => any;
export interface IToolsViewProps {
    node: Node;
    graph: Graph;
    pos: MenuPosition;
    onClose: TFn;
    visible?: boolean;
    isDebug?: boolean;
}
export interface MenuPosition {
    x: number;
    y: number;
}
export {};

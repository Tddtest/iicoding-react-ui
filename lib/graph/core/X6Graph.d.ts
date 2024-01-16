import { Graph } from '@antv/x6';
import './define/connector';
import './define/nodes';
import type { X6GraphicsOptions } from './interface';
declare class X6Graph {
    graph?: Graph;
    init: (options?: X6GraphicsOptions) => void;
    rerender: (data: import("@antv/x6").Model.FromJSONData, options?: import("@antv/x6").Model.FromJSONOptions | undefined) => void;
    dispose: () => void;
    private register;
}
export default X6Graph;

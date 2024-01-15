import { Graph } from '@antv/x6';
export interface X6GraphicsOptions extends Partial<Graph.Options> {
    disabledScroll?: boolean;
    disabledCV?: boolean;
}

/**
 * @auth: dmx
 * @time: 2024/1/8
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { Node } from '@antv/x6';
export declare function executeFnByString(...args: any[]): Function;
export declare function changeNodeStatus(node: Node, status: 1 | 2 | 3 | 4 | 5): void;
export declare function changeNodeData(source: Record<string, any> | Record<string, any>[], node: Node): void;

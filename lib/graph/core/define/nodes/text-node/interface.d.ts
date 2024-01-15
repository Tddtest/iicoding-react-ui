/**
 * @auth: dmx
 * @time: 2024/1/7
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { CSSProperties } from 'react';
export type nodeType = 'text-node';
export interface NodeData {
    info: {
        nodeType: nodeType;
        selected: boolean;
        value: string;
        code?: string;
        deps?: boolean;
        subject?: boolean;
        skip?: boolean;
    };
    execution: Execution;
    style: CSSProperties;
}
export interface Execution {
    status: 1 | 2 | 3 | 4 | 5;
    prevNodeInfo: PreNodeInfo;
    type: 0 | 1 | 2 | 3 | 4;
}
export interface PreNodeInfo {
    status: Execution['status'];
    result: any;
}

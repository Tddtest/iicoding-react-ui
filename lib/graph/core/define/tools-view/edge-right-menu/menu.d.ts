/**
 * @auth: dmx
 * @time: 2024/1/6
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { Edge, Graph } from '@antv/x6';
import React from 'react';
import './index.less';
type TFn = (...args: any[]) => any;
interface IProps {
    edge: Edge;
    graph: Graph;
    pos: MenuPosition;
    onClose: TFn;
    visible?: boolean;
}
export interface MenuPosition {
    x: number;
    y: number;
}
declare const Menu: React.NamedExoticComponent<IProps>;
export default Menu;

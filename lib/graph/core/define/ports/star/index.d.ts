import React from 'react';
import type { Node } from '@antv/x6';
import { PortManager } from '@antv/x6/es/model/port';
import Port = PortManager.Port;
import './index.less';
interface IProps {
    node: Node;
    port: Port;
}
declare const Start: React.NamedExoticComponent<IProps>;
export default Start;

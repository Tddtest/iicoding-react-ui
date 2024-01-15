import React from 'react';
import { ModalProps } from 'antd';
import type { IToolsViewProps } from '../../interface';
import './index.less';
interface IProps extends ModalProps, Pick<IToolsViewProps, 'node' | 'graph'> {
}
declare const NodeConfigModal: React.NamedExoticComponent<IProps>;
export default NodeConfigModal;

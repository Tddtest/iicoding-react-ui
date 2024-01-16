import type { DropdownProps } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';
interface IProps extends DropdownProps {
    children: ReactNode;
}
declare const DropdownDefineUI: React.NamedExoticComponent<IProps>;
export default DropdownDefineUI;

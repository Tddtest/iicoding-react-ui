import React from 'react';
import type { DropdownProps } from 'antd';
import type { ReactNode } from 'react';
interface IProps extends DropdownProps {
    children: ReactNode;
}
declare const DropdownDefineUI: React.NamedExoticComponent<IProps>;
export default DropdownDefineUI;

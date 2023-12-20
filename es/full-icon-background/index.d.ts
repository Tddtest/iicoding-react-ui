import React, { ReactNode, CSSProperties } from 'react';
import './index.module.less';
export type IconBgMode = 'background' | 'double' | 'color';
interface IProps {
    icon: any | ReactNode;
    bgColor?: CSSProperties['color'];
    style?: CSSProperties;
    mode?: IconBgMode;
    bgStyle?: CSSProperties;
    ffStyle?: CSSProperties;
}
declare const FillIconBg: React.NamedExoticComponent<IProps>;
export default FillIconBg;

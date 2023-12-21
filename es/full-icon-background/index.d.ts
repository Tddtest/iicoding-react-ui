import * as React from 'react';
import './index.less';
export type IconBgMode = 'background' | 'double' | 'color';
export interface FullIconBackgroundProps {
    icon: any | React.ReactNode;
    bgColor?: React.CSSProperties['color'];
    style?: React.CSSProperties;
    mode?: IconBgMode;
    bgStyle?: React.CSSProperties;
    ffStyle?: React.CSSProperties;
}
declare const FullIconBackground: React.NamedExoticComponent<FullIconBackgroundProps>;
export default FullIconBackground;

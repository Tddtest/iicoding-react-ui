import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import React from 'react';
import './index.less';
export interface IGlassBoxProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    bgColor?: CSSProperties['backgroundColor'];
    bgOpacity?: CSSProperties['opacity'];
    shadowColor?: CSSProperties['color'];
    boxShadow?: CSSProperties['boxShadow'];
    bdf?: CSSProperties['backdropFilter'];
    saturate?: number | string;
    blur?: CSSProperties['width'];
}
declare const GlassBox: React.NamedExoticComponent<IGlassBoxProps>;
export default GlassBox;

import * as React from 'react';
import './index.less';
interface IProps {
}
export interface MagicMouseMoveEffectOptions {
    starAnimationDuration?: number;
    minimumTimeBetweenStars?: number;
    glowDuration?: number;
    maximumGlowPointSpacing?: number;
    colors?: string[];
    sizes?: [number, number, number];
}
export declare const MagicMouseMoveEffect: React.NamedExoticComponent<IProps>;
export default MagicMouseMoveEffect;

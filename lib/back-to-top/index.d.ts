import * as React from 'react';
import './index.less';
interface IProps {
    textStyle?: React.CSSProperties;
    lineStyle?: React.CSSProperties;
    onGoToBack?(): void;
}
declare const BackToTop: React.NamedExoticComponent<IProps>;
export default BackToTop;

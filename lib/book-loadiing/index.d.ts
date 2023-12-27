import * as React from 'react';
import './index.less';
type TColor = React.CSSProperties['color'];
interface IProps {
    bgColor?: {
        start: TColor;
        end: TColor;
        deg?: number;
    };
    shadowColor?: TColor;
    textColor?: TColor;
    text?: React.ReactNode;
    pageColor?: TColor;
    pageFoldColor?: TColor;
    duration?: number;
    pageSize?: number;
    maskBgColor?: TColor;
    maskStyle?: React.CSSProperties;
}
declare const BookLoading: React.NamedExoticComponent<IProps>;
export default BookLoading;

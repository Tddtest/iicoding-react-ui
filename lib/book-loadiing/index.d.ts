import * as React from 'react';
import './index.less';
interface IProps {
    bgColor?: {
        start: string;
        end: string;
        deg?: number;
    };
    shadowColor?: string;
    textColor?: string;
    text?: React.ReactNode;
    pageColor?: string;
    pageFoldColor?: string;
    duration?: number;
    pageSize?: number;
}
declare const BookLoading: React.NamedExoticComponent<IProps>;
export default BookLoading;

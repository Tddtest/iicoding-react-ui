import * as React from 'react';
import './index.less';
interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    noBorder?: boolean;
    fallback?: HTMLImageElement['src'];
}
declare const ImageIcd: React.NamedExoticComponent<IProps>;
export default ImageIcd;

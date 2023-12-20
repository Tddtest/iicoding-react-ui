import React, { ImgHTMLAttributes } from 'react';
import './index.module.less';
interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
    noBorder?: boolean;
    fallback?: HTMLImageElement['src'];
}
declare const ImageIcd: React.NamedExoticComponent<IProps>;
export default ImageIcd;

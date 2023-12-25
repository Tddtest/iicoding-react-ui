import * as React from 'react';
import './index.less';
interface IProps {
    text: React.ReactNode;
    noStar?: boolean;
    starCount?: number;
    noAnimation?: boolean;
}
declare const MagicText: React.NamedExoticComponent<IProps>;
export default MagicText;

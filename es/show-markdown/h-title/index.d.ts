/**
 * @auth: dmx
 * @time: 2022/6/15
 * @func: h3
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import './index.less';
interface IProps extends ITagProps {
    level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}
declare const TitleTag: React.NamedExoticComponent<IProps>;
export default TitleTag;

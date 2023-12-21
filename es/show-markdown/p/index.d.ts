/**
 * @auth: dmx
 * @time: 2022/6/15
 * @func: p 标签
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import './index.less';
interface IProps extends ITagProps {
    isBlockquote?: boolean;
}
declare const TagP: React.NamedExoticComponent<IProps>;
export default TagP;

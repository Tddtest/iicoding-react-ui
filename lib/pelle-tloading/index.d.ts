/**
 * @auth: dmx
 * @time: 2021/3/4
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import './index.less';
interface IProps {
    tip?: React.ReactNode;
    loading?: boolean;
    style?: React.CSSProperties;
}
declare const SingleLoading: React.NamedExoticComponent<IProps>;
export default SingleLoading;

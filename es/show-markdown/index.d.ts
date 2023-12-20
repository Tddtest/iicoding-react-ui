/**
 * @auth: dmx
 * @time: 2022/5/28
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import React from 'react';
import { MarkdownToJSX } from 'markdown-to-jsx';
export * from './markdown-content-actions';
import './index.less';
interface IProps {
    mdContent: string;
    options?: MarkdownToJSX.Options;
}
declare const ShowMarkdown: React.NamedExoticComponent<IProps>;
export default ShowMarkdown;

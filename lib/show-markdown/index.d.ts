/**
 * @auth: dmx
 * @time: 2022/5/28
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { MarkdownToJSX } from 'markdown-to-jsx';
import * as React from 'react';
export * from './markdown-content-actions';
import './index.less';
interface IProps {
    mdContent: string;
    options?: MarkdownToJSX.Options;
}
export declare const ShowMarkdown: React.NamedExoticComponent<IProps>;
export default ShowMarkdown;

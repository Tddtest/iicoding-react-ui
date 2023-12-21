/**
 * @auth: dmx
 * @time: 2022/5/28
 * @func: markdown 代码高亮
 **/
import * as React from 'react';
import { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import type { TPickPropsBySyntax } from './interface';
interface IProps extends Partial<Pick<SyntaxHighlighterProps, TPickPropsBySyntax>> {
    children: any;
    theme?: string;
}
declare const CodeBlockHighlight: React.NamedExoticComponent<IProps>;
export default CodeBlockHighlight;

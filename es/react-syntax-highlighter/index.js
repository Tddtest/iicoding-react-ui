var _excluded = ["children", "theme"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @auth: dmx
 * @time: 2022/5/28
 * @func: markdown 代码高亮
 **/
import * as React from 'react';
import { PrismLight } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import less from 'react-syntax-highlighter/dist/cjs/languages/prism/less';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
PrismLight.registerLanguage('tsx', tsx);
PrismLight.registerLanguage('scss', scss);
PrismLight.registerLanguage('less', less);
PrismLight.registerLanguage('bash', bash);
PrismLight.registerLanguage('json', json);
PrismLight.registerLanguage('markdown', markdown);
PrismLight.registerLanguage('javascript', javascript);
PrismLight.registerLanguage('typescript', typescript);
var C = function C(props) {
  var children = props.children,
    theme = props.theme,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(PrismLight, _extends({
    style: dracula
  }, other), children);
};
var CodeBlockHighlight = /*#__PURE__*/React.memo(C);
export default CodeBlockHighlight;
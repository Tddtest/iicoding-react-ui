/**
 * @auth: dmx
 * @time: 2022/5/29
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
// import ClipboardJS from 'clipboard';
// import domtoimage from 'dom-to-image';
// import { saveAs } from 'file-saver';
import CodeBlockHighlight from "../../react-syntax-highlighter";
import SvgCircle from "../svg-circle";
import "./index.less";
var C = function C(props) {
  var _match$;
  var className = props.className,
    children = props.children;
  var downloadRef = React.useRef(null);

  // react-syntax-highlight 是 lang-  highlightJS 是 language-
  var match = /lang-(\w+)/.exec(className || '');
  var language = (_match$ = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$ !== void 0 ? _match$ : 'typescript';

  // const handleCopy = useCallback(() => {
  //   const copy = new ClipboardJS('.iiCoding-copy');
  //   copy.on('success', (e) => {
  //     // message.success('复制成功');
  //     // 必须卸载了，否则下次还会继续创建
  //     copy.destroy();
  //   });
  //   copy.on('error', (e) => {
  //     // message.warning('复制失败');
  //     // 必须卸载了，否则下次还会继续创建
  //     copy.destroy();
  //   });
  // }, []);

  // const handleDownload = useCallback(() => {
  //   if (downloadRef.current) {
  //     domtoimage.toBlob(downloadRef.current).then((blob) => {
  //       saveAs(blob, 'code.png');
  //     });
  //   } else {
  //     console.log('code 下载失败-----');
  //   }
  // }, []);

  if (match) {
    return /*#__PURE__*/React.createElement("div", {
      ref: downloadRef,
      className: "icd-code"
    }, /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left"
    }, /*#__PURE__*/React.createElement(SvgCircle, null), /*#__PURE__*/React.createElement("div", {
      className: "info"
    }, /*#__PURE__*/React.createElement("p", {
      className: "language"
    }, "language\uFF1A", /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, language)), /*#__PURE__*/React.createElement("p", {
      className: "language"
    }, "author\uFF1A", /*#__PURE__*/React.createElement("span", {
      className: "text"
    }, "iiCoding")))), /*#__PURE__*/React.createElement("span", {
      className: "right"
    }))), /*#__PURE__*/React.createElement(CodeBlockHighlight, {
      language: language,
      showLineNumbers: true,
      showInlineLineNumbers: true,
      CodeTag: "div",
      PreTag: "section",
      codeTagProps: {
        className: "icd-syntax-".concat(language)
      },
      lineProps: {
        className: 'line'
      },
      lineNumberStyle: {
        color: 'red'
      },
      lineNumberContainerStyle: {
        color: 'red'
      },
      customStyle: {
        backgroundColor: '#22212C',
        paddingTop: '76px'
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("code", {
    className: "icd-no-match"
  }, children);
};
var CodeBlock = /*#__PURE__*/React.memo(C);
export default CodeBlock;
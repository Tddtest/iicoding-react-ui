/**
 * @auth: dmx
 * @time: 2022/5/29
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import { IconComp2Shadow
// IconComp75Shadow,
// IconComp51Shadow,
// SingleImgShadow,
} from '@iicoding/react-icons';
// import dom2img from 'dom-to-image';
import { copy } from '@iicoding/utils';
import CodeBlockHighlight from "../../react-syntax-highlighter";
import SvgCircle from "../svg-circle";
// import { LINE_REPLACE_STR } from '../../show-markdown/constants';

import "./index.less";
var iconColor = '#f06292';
var C = function C(props) {
  var _match$;
  var className = props.className,
    children = props.children;

  // const [downing, setDowning] = React.useState(false);

  var downloadRef = React.useRef(null);

  // react-syntax-highlight 是 lang-  highlightJS 是 language-
  var match = /lang-(\w+)/.exec(className || '');
  var language = (_match$ = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$ !== void 0 ? _match$ : 'typescript';
  var handleCopy = React.useCallback(function () {
    copy(children);
  }, []);

  // const handleDownload = React.useCallback(() => {
  //   if (downloadRef.current) {
  //     setDowning(true);
  //     dom2img
  //       .toPng(downloadRef.current, { quality: 0.95 })
  //       .then(function (dataUrl) {
  //         const link = document.createElement('a');
  //         link.download = 'code.png';
  //         link.href = dataUrl;
  //         link.click();
  //         setDowning(false);
  //       })
  //       .catch((err) => {
  //         console.log('转换图片出错', err);
  //         setDowning(false);
  //       });
  //
  //     // dom2img
  //     //   .toBlob(downloadRef.current)
  //     //   .then((blob) => {
  //     //     saveAs(blob, 'code.png');
  //     //     setDowning(false);
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log('转换图片出错', err);
  //     //     setDowning(false);
  //     //   });
  //   } else {
  //     console.log('code 下载失败-----');
  //   }
  // }, []);

  if (match) {
    // let onlySingle = false;
    //
    // if (isString(children)) {
    //   // @ts-expect-error
    //   const replaceStr = children.replaceAll('\n', LINE_REPLACE_STR);
    //   const replaceArr = replaceStr.split(LINE_REPLACE_STR);
    //   onlySingle = replaceArr.length === 1;
    // }

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
    }, /*#__PURE__*/React.createElement(IconComp2Shadow, {
      onClick: handleCopy,
      style: {
        fontSize: 18
      },
      color: iconColor
    })))), /*#__PURE__*/React.createElement(CodeBlockHighlight, {
      language: language,
      showLineNumbers: true,
      showInlineLineNumbers: true,
      CodeTag: "div",
      PreTag: "section",
      codeTagProps: {
        className: "icd-syntax-".concat(language, " icd-syntax-code")
      },
      lineProps: {
        className: 'line'
      },
      lineNumberStyle: {
        color: '#fff'
      },
      lineNumberContainerStyle: {
        color: 'red'
      },
      customStyle: {
        backgroundColor: 'rgba(30,29,29,0.7)',
        paddingTop: '76px',
        backdropFilter: 'saturate(2) blur(80px)'
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("code", {
    className: "icd-no-match"
  }, children);
};
var CodeBlock = /*#__PURE__*/React.memo(C);
export default CodeBlock;
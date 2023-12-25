function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @auth: dmx
 * @time: 2022/5/29
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { IconComp2Shadow, IconComp75Shadow,
// IconComp51Shadow,
SingleImgShadow } from '@iicoding/react-icons';
import { copy } from '@iicoding/utils';
import dom2img from 'dom-to-image';
import * as React from 'react';
// import { saveAs } from 'file-saver';
import CodeBlockHighlight from "../../react-syntax-highlighter";
import SvgCircle from "../svg-circle";
// import { LINE_REPLACE_STR } from '../../show-markdown/constants';

import "./index.less";
var iconColor = '#f06292';
var C = function C(props) {
  var _match$;
  var className = props.className,
    children = props.children;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    downing = _React$useState2[0],
    setDowning = _React$useState2[1];
  var downloadRef = React.useRef(null);

  // react-syntax-highlight 是 lang-  highlightJS 是 language-
  var match = /lang-(\w+)/.exec(className || '');
  var language = (_match$ = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$ !== void 0 ? _match$ : 'typescript';
  var handleCopy = React.useCallback(function () {
    copy(children);
  }, []);
  var handleDownload = React.useCallback(function () {
    if (downloadRef.current) {
      setDowning(true);
      dom2img.toPng(downloadRef.current, {
        quality: 0.95
      }).then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'code.png';
        link.href = dataUrl;
        link.click();
        setDowning(false);
      }).catch(function (err) {
        console.log('转换图片出错', err);
        setDowning(false);
      });

      // dom2img
      //   .toBlob(downloadRef.current)
      //   .then((blob) => {
      //     saveAs(blob, 'code.png');
      //     setDowning(false);
      //   })
      //   .catch((err) => {
      //     console.log('转换图片出错', err);
      //     setDowning(false);
      //   });
    } else {
      console.log('code 下载失败-----');
    }
  }, []);
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
    }, downing ? /*#__PURE__*/React.createElement(IconComp75Shadow, {
      className: "icd-load",
      style: {
        fontSize: 21
      },
      color: iconColor
    }) : /*#__PURE__*/React.createElement(SingleImgShadow, {
      onClick: handleDownload,
      style: {
        fontSize: 21
      },
      color: iconColor
    }), /*#__PURE__*/React.createElement(IconComp2Shadow, {
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
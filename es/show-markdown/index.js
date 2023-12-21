function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * @auth: dmx
 * @time: 2022/5/28
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import HrDepartment from "./hr-department";
import TitleTag from "./h-title";
import CodeBlock from "./code";
import PreBlock from "./pre";
import TargetOpen from "./taget-open";
import ImageTag from "./img";
import TagP from "./p";
import TagBlockquote from "./blockquote";
import TagTable from "./table";
import Kbd from "./kbd";
import Em from "./em";
import Del from "./del";
import Ol from "./ol";
import Li from "./li";
import Ul from "./ul";
export * from "./markdown-content-actions";
import "./index.less";
var getTitleTag = function getTitleTag(level) {
  // eslint-disable-next-line react/display-name
  return function (titleProps) {
    return /*#__PURE__*/React.createElement(TitleTag, _extends({}, titleProps, {
      level: level
    }));
  };
};
var S = function S(props) {
  var mdContent = props.mdContent,
    options = props.options;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 0 0",
    style: {
      position: 'absolute',
      zIndex: -1,
      opacity: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "boxGradient",
    gradientUnits: "userSpaceOnUse",
    x1: "0",
    y1: "0",
    x2: "25",
    y2: "25"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#27FDC7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#0FC0F5"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "lineGradient"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#27FDC7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#c827fd",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("path", {
    id: "icd-line",
    stroke: "url(#lineGradient)",
    d: "M21 12.3h168v0.1z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "icd-box",
    stroke: "url(#boxGradient)",
    d: "M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
  }), /*#__PURE__*/React.createElement("path", {
    id: "icd-check",
    stroke: "url(#boxGradient)",
    d: "M10 13l2 2 5-5"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "icd-circle",
    cx: "13.5",
    cy: "12.5",
    r: "10"
  }))), /*#__PURE__*/React.createElement(Markdown, {
    className: "show-markdown",
    options: _objectSpread(_objectSpread({
      slugify: function slugify(str) {
        return str;
      }
    }, options), {}, {
      overrides: _objectSpread({
        hr: {
          component: HrDepartment,
          props: {
            type: 'bookends'
          }
        },
        img: {
          component: ImageTag,
          props: {
            alt: 'icd-img'
          }
        },
        h1: {
          component: getTitleTag(1)
        },
        h2: {
          component: getTitleTag(2)
        },
        h3: {
          component: getTitleTag(3)
        },
        h4: {
          component: getTitleTag(4)
        },
        h5: {
          component: getTitleTag(5)
        },
        h6: {
          component: getTitleTag(6)
        },
        blockquote: {
          component: TagBlockquote
        },
        code: {
          component: CodeBlock
        },
        table: {
          component: TagTable
        },
        pre: {
          component: PreBlock
        },
        a: {
          component: TargetOpen
        },
        kbd: {
          component: Kbd
        },
        del: {
          component: Del
        },
        p: {
          component: TagP
        },
        em: {
          component: Em
        },
        ul: {
          component: Ul
        },
        ol: {
          component: Ol
        },
        li: {
          component: Li
        }
      }, options === null || options === void 0 ? void 0 : options.overrides)
    })
  }, mdContent));
};
var ShowMarkdown = /*#__PURE__*/React.memo(S);
export default ShowMarkdown;
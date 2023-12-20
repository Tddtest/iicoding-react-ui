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
import React, { memo } from 'react';
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
// import Em from './tip';

// import Ol from './ol';
// import Li from './li';

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
  console.log(props);
  return /*#__PURE__*/React.createElement(Markdown, {
    className: "show-markdown",
    options: _objectSpread(_objectSpread({}, options), {}, {
      slugify: function slugify(str) {
        return str;
      },
      overrides: {
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
        code: {
          component: CodeBlock
        },
        pre: {
          component: PreBlock
        },
        a: {
          component: TargetOpen
        },
        p: {
          component: TagP
        },
        hr: {
          component: HrDepartment,
          props: {
            type: 'bookends'
          }
        },
        blockquote: {
          component: TagBlockquote
        },
        table: {
          component: TagTable
        },
        img: {
          component: ImageTag,
          props: {
            alt: 'icd-img'
          }
        },
        kbd: {
          component: Kbd
        }
        // tip: { component: Em },
        // ol: { component: Ol },
        // li: { component: Li },
      }
    })
  }, mdContent);
};
var ShowMarkdown = /*#__PURE__*/memo(S);
export default ShowMarkdown;
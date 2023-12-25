function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children", "level"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @auth: dmx
 * @time: 2022/6/15
 * @func: h3
 * @params:
 * @return:
 * @updateTime:
 **/
import { Full202312179Full, Full23943115Full, Full23943118Full, Full23943258Full, Full23943308Full, FullIconCc22Full, FullIconCc42Full } from '@iicoding/react-icons';
import classNames from 'classnames';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import FullIconBackground from "../../full-icon-background";
import { DIRECTORY_ID_SPLIT } from "../constants";
import "./index.less";
var hIcon = [{
  style: {
    fontSize: 36,
    margin: '-6px 10px 0 -3px'
  },
  icon: /*#__PURE__*/React.createElement(Full202312179Full, null)
}, {
  style: {
    fontSize: 36,
    margin: '-6px 10px 0 -5px'
  },
  icon: /*#__PURE__*/React.createElement(Full23943115Full, null),
  bgStyle: {
    zIndex: 0
  }
}, {
  style: {
    fontSize: 30,
    marginTop: -6,
    marginRight: 10
  },
  icon: /*#__PURE__*/React.createElement(FullIconCc42Full, null),
  bgStyle: {
    zIndex: 0
  },
  mode: 'double'
}, {
  style: {
    fontSize: 24,
    margin: '-6px 10px 0 3px'
  },
  icon: /*#__PURE__*/React.createElement(FullIconCc22Full, null),
  mode: 'double',
  bgStyle: {
    zIndex: 0
  }
}, {
  style: {
    fontSize: 26,
    marginTop: -6,
    marginRight: 10
  },
  icon: /*#__PURE__*/React.createElement(Full23943118Full, null),
  bgStyle: {
    zIndex: 0
  }
}, {
  style: {
    fontSize: 24,
    marginTop: -6,
    marginRight: 10
  },
  icon: /*#__PURE__*/React.createElement(Full23943258Full, null),
  bgStyle: {
    zIndex: 0
  }
}, {
  style: {
    fontSize: 22,
    marginTop: -2,
    marginRight: 10
  },
  icon: /*#__PURE__*/React.createElement(Full23943308Full, null),
  bgStyle: {
    zIndex: 0
  }
}];
var H = function H(props) {
  var children = props.children,
    level = props.level,
    other = _objectWithoutProperties(props, _excluded);
  var _useParams = useParams(),
    id = _useParams.id;
  var tagProps = React.useMemo(function () {
    var key = window.location.href;
    // 这里的目的就是给标签注入id 注入的id来自于文章渲染之前 改造目录生成的id
    var idStr = localStorage.getItem(key || '') || '';
    var idArr = idStr.split(DIRECTORY_ID_SPLIT);
    var newID = idArr.shift();
    localStorage.setItem(key, idArr.join(DIRECTORY_ID_SPLIT));
    return _objectSpread(_objectSpread({}, other), {}, {
      id: newID,
      className: classNames("icd-h".concat(level), 'data-target-title')
    });
  }, [id]);
  var tagChildren = /*#__PURE__*/React.createElement("div", {
    className: "icd-title-box"
  }, /*#__PURE__*/React.createElement(FullIconBackground, hIcon[level]), /*#__PURE__*/React.createElement("span", {
    className: "icd-title-text"
  }, children));
  return /*#__PURE__*/React.createElement("h".concat(level), tagProps, tagChildren);
};
var TitleTag = /*#__PURE__*/React.memo(H);
export default TitleTag;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @auth: dmx
 * @time: 2024/1/6
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import React, { memo, useState, useRef } from 'react';
import classNames from 'classnames';
import DropdownDefineUI from "../../../../..//dropdown-define-ui";
import { RefreshShadow } from '@iicoding/react-icons';
import { ColorPicker, Tooltip } from 'antd';
import GlassBoxWrap from "../components/glass-box-wrap";
import { COLORS } from "../constants";
import "./index.less";
var colorSection = [{
  title: '文本颜色',
  key: 'text',
  type: 'color'
}, {
  title: '背景颜色',
  key: 'background',
  type: 'color'
}, {
  title: '字体大小',
  key: 'fontSize',
  type: 'text'
}];
var N = function N(props) {
  var pos = props.pos,
    node = props.node;
  var _useState = useState(COLORS[0]),
    _useState2 = _slicedToArray(_useState, 2),
    textColor = _useState2[0],
    setTextColor = _useState2[1];
  var _useState3 = useState(COLORS[0]),
    _useState4 = _slicedToArray(_useState3, 2),
    bgColor = _useState4[0],
    setBgColor = _useState4[1];
  var _useState5 = useState(node.data.style.fontSize || 14),
    _useState6 = _slicedToArray(_useState5, 2),
    fontSize = _useState6[0],
    setFontSize = _useState6[1];
  var initColorRef = useRef(undefined);
  if (!initColorRef.current && node.data.style) {
    initColorRef.current = {
      text: node.data.style.color,
      background: node.data.style.background
    };
  }
  var setNodeData = function setNodeData(nodeData) {
    var _node$data = node.data,
      data = _node$data === void 0 ? {} : _node$data;
    node.setData(_objectSpread(_objectSpread({}, data), {}, {
      style: _objectSpread(_objectSpread({}, data.style), nodeData)
    }));
  };

  // 颜色设置
  var handleToggleColor = function handleToggleColor(item) {
    if (item.key === 'text') {
      setTextColor(item.color);
      setNodeData({
        color: item.color
      });
    } else if (item.key === 'background') {
      setBgColor(item.color);
      setNodeData({
        background: item.color
      });
    }
  };

  // 字体设置
  var handleFontSizeChange = function handleFontSizeChange(e) {
    setFontSize(e.target.value);
    setNodeData({
      fontSize: "".concat(e.target.value, "px")
    });
  };
  var handleColorChange = function handleColorChange(value, hex, key) {
    handleToggleColor({
      color: hex,
      key: key
    });
  };
  var handleResetColor = function handleResetColor(key) {
    if (initColorRef.current) {
      // @ts-ignore
      handleToggleColor({
        color: initColorRef.current[key],
        key: key
      });
    }
  };
  var dropdownRender = function dropdownRender() {
    return /*#__PURE__*/React.createElement(GlassBoxWrap, {
      blur: 60,
      saturate: "180%",
      className: 'ncm'
    }, /*#__PURE__*/React.createElement("div", {
      className: 't'
    }, colorSection.map(function (section) {
      var _ref = node.data || {},
        _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style;
      var defaultColorValue = section.key === 'text' ? style.color || '#212121' : style.background || '#212121';
      return /*#__PURE__*/React.createElement("div", {
        key: section.key,
        className: 'section'
      }, /*#__PURE__*/React.createElement("div", {
        className: 'title'
      }, /*#__PURE__*/React.createElement("span", null, section.title, "\uFF1A"), /*#__PURE__*/React.createElement("span", {
        style: {
          backgroundColor: section.key === 'text' ? textColor : bgColor
        },
        className: 'crtColor'
      })), section.type === 'color' && /*#__PURE__*/React.createElement("div", {
        className: 'color'
      }, /*#__PURE__*/React.createElement(Tooltip, {
        title: "\u6062\u590D"
      }, /*#__PURE__*/React.createElement(RefreshShadow, {
        onClick: function onClick() {
          return handleResetColor(section.key);
        },
        className: 'reset'
      })), COLORS.map(function (color, index) {
        return /*#__PURE__*/React.createElement("span", {
          onClick: function onClick() {
            return handleToggleColor({
              color: color,
              key: section.key
            });
          },
          key: "".concat(color, "-").concat(index.toString()),
          style: {
            backgroundColor: color
          }
        });
      }), /*#__PURE__*/React.createElement("div", {
        className: 'cpb',
        id: "icd-color-".concat(node.id)
      }, /*#__PURE__*/React.createElement(ColorPicker, {
        defaultValue: defaultColorValue,
        onChange: function onChange() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return handleColorChange.apply(void 0, args.concat([section.key]));
        },
        rootClassName: classNames('cp'),
        getPopupContainer: function getPopupContainer() {
          return document.getElementById("icd-color-".concat(node.id));
        }
      }))), section.type === 'text' && /*#__PURE__*/React.createElement("div", {
        className: 'text'
      }, /*#__PURE__*/React.createElement("input", {
        type: "range",
        value: fontSize,
        min: 12,
        max: 36,
        step: 1,
        className: 'sl',
        onChange: handleFontSizeChange
      })));
    })), /*#__PURE__*/React.createElement("div", {
      className: 'b'
    }, "\u89C4\u5212\u5F00\u53D1\u4E2D"));
  };
  return /*#__PURE__*/React.createElement(DropdownDefineUI, {
    open: true,
    trigger: ['contextMenu'],
    align: {
      offset: [pos.x + 10, pos.y + 10]
    },
    dropdownRender: dropdownRender,
    overlayClassName: "icd-overlay-".concat(node.id)
  }, /*#__PURE__*/React.createElement("span", null));
};
var Menu = /*#__PURE__*/memo(N);
export default Menu;
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
import { ColorPicker, Tooltip } from 'antd';
import DropdownDefineUI from "../../../../../dropdown-define-ui";
import { RefreshShadow } from '@iicoding/react-icons';
import classNames from 'classnames';
import { COLORS } from "../constants";
import GlassBoxWrap from "../components/glass-box-wrap";
import "./index.less";
var N = function N(props) {
  var pos = props.pos,
    edge = props.edge;
  var _useState = useState(edge.getData().strokeWidth),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(edge.getData().strokeDasharray || 0),
    _useState4 = _slicedToArray(_useState3, 2),
    dasharray = _useState4[0],
    setDasharray = _useState4[1];
  var initColorRef = useRef();
  if (!initColorRef.current && edge.data.stroke) {
    initColorRef.current = edge.data.stroke;
  }
  var handleToggleColor = function handleToggleColor(color) {
    var line = {
      stroke: color
    };
    edge.setData(_objectSpread(_objectSpread({}, edge.getData()), line));
    edge.setAttrs({
      line: _objectSpread({}, line)
    });
  };
  var handleToggleWidth = function handleToggleWidth(e) {
    var line = _objectSpread(_objectSpread({}, edge.getAttrs().line), {}, {
      strokeWidth: e.target.value
    });
    edge.setData(_objectSpread(_objectSpread({}, edge.getData()), line));
    edge.setAttrs({
      line: _objectSpread({}, line)
    });
    setValue(line.strokeWidth);
  };
  var handleToggleDasharray = function handleToggleDasharray(e) {
    var line = _objectSpread(_objectSpread({}, edge.getAttrs().line), {}, {
      strokeDasharray: e.target.value
    });
    edge.setData(_objectSpread(_objectSpread({}, edge.getData()), line));
    edge.setAttrs({
      line: _objectSpread({}, line)
    });
    setDasharray(e.target.value);
  };
  var handleColorChange = function handleColorChange(value, hex) {
    console.log(hex);
  };
  var handleResetColor = function handleResetColor() {
    edge.setAttrs(_objectSpread({}, edge.data));
  };
  var dropdownRender = function dropdownRender() {
    return /*#__PURE__*/React.createElement(GlassBoxWrap, {
      blur: 60,
      className: 'ecm'
    }, /*#__PURE__*/React.createElement("div", {
      className: 't'
    }, /*#__PURE__*/React.createElement("div", {
      className: 'i'
    }, /*#__PURE__*/React.createElement("span", null, "color\uFF1A"), /*#__PURE__*/React.createElement("p", {
      className: 'c'
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: "\u6062\u590D"
    }, /*#__PURE__*/React.createElement(RefreshShadow, {
      onClick: handleResetColor,
      className: 'reset'
    })), COLORS.map(function (color) {
      return /*#__PURE__*/React.createElement("span", {
        onClick: function onClick() {
          return handleToggleColor(color);
        },
        key: color,
        style: {
          backgroundColor: color
        }
      });
    }), /*#__PURE__*/React.createElement("div", {
      className: 'cpb',
      id: "icd-color-".concat(edge.id)
    }, /*#__PURE__*/React.createElement(ColorPicker, {
      onChange: handleColorChange,
      rootClassName: classNames('cp'),
      getPopupContainer: function getPopupContainer() {
        return document.getElementById("icd-color-".concat(edge.id));
      }
    })))), /*#__PURE__*/React.createElement("div", {
      className: 'i'
    }, /*#__PURE__*/React.createElement("span", null, "width\uFF1A"), /*#__PURE__*/React.createElement("p", {
      className: 'r'
    }, /*#__PURE__*/React.createElement("input", {
      onChange: handleToggleWidth,
      className: 'slider',
      type: "range",
      min: 1,
      max: 10,
      step: 1,
      value: value
    }))), /*#__PURE__*/React.createElement("div", {
      className: 'i'
    }, /*#__PURE__*/React.createElement("span", null, "dashed\uFF1A"), /*#__PURE__*/React.createElement("p", {
      className: 'r'
    }, /*#__PURE__*/React.createElement("input", {
      onChange: handleToggleDasharray,
      className: 'slider',
      type: "range",
      min: 0,
      max: 10,
      step: 1,
      value: dasharray
    })))), /*#__PURE__*/React.createElement("div", {
      className: 'b'
    }));
  };
  return /*#__PURE__*/React.createElement(DropdownDefineUI, {
    open: true,
    trigger: ['contextMenu'],
    align: {
      offset: [pos.x + 20, pos.y - 20]
    },
    dropdownRender: dropdownRender,
    overlayClassName: "icd-overlay-".concat(edge.id)
  }, /*#__PURE__*/React.createElement("span", null));
};
var Menu = /*#__PURE__*/memo(N);
export default Menu;
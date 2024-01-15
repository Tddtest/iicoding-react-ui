function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["node", "graph"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { memo, useCallback, useRef, useState } from 'react';
import { FullIconBackground } from '@iicoding/ui';
import { Full23943173Full, Full23943084Full, Full1704531Full } from '@iicoding/react-icons';
import { Modal, Checkbox } from 'antd';
import IcdMonacoEditor from "../../../../../../monaco-editor";
import classNames from 'classnames';
import "./index.less";
var N = function N(props) {
  var _node$data3;
  var node = props.node,
    graph = props.graph,
    other = _objectWithoutProperties(props, _excluded);
  var _useState = useState('deps'),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useState3 = useState(function () {
      var _node$data, _node$data2;
      var result = [];
      if ((_node$data = node.data) !== null && _node$data !== void 0 && (_node$data = _node$data.info) !== null && _node$data !== void 0 && _node$data.deps) {
        result.push('deps');
      }
      if ((_node$data2 = node.data) !== null && _node$data2 !== void 0 && (_node$data2 = _node$data2.info) !== null && _node$data2 !== void 0 && _node$data2.subject) {
        result.push('subject');
      }
      return result;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    depParent = _useState4[0],
    setDepParent = _useState4[1];
  var codeRef = useRef('');
  var handleCodeChange = useCallback(function (value) {
    codeRef.current = value;
  }, []);
  var onOk = function onOk(e) {
    var _props$onOk, _newData2;
    var newData = _objectSpread({}, node.data);
    // 将代码注入node节点
    if (codeRef.current) {
      var _newData;
      newData = _objectSpread(_objectSpread({}, newData), {}, {
        info: _objectSpread(_objectSpread({}, (_newData = newData) === null || _newData === void 0 ? void 0 : _newData.info), {}, {
          code: codeRef.current
        })
      });
    }
    var deps = {
      deps: depParent.includes('deps'),
      subject: depParent.includes('subject')
    };
    console.log(newData);
    (_props$onOk = props.onOk) === null || _props$onOk === void 0 || _props$onOk.call(props, _objectSpread(_objectSpread({}, newData), {}, {
      info: _objectSpread(_objectSpread({}, (_newData2 = newData) === null || _newData2 === void 0 ? void 0 : _newData2.info), deps)
    }));
  };
  var handleToggleTabClick = function handleToggleTabClick(key) {
    setActiveKey(key);
  };
  var handleDepsChange = useCallback(function (checked) {
    setDepParent(checked);
  }, []);
  return /*#__PURE__*/React.createElement(Modal, _extends({
    title: /*#__PURE__*/React.createElement("div", {
      className: 'addCode'
    }, /*#__PURE__*/React.createElement(FullIconBackground, {
      style: {
        fontSize: 32,
        cursor: 'pointer',
        marginLeft: -8,
        zIndex: 0
      },
      icon: /*#__PURE__*/React.createElement(Full23943084Full, {
        className: "icd-reset-child-item-fill"
      })
    }), /*#__PURE__*/React.createElement("span", null, "\u8282\u70B9\u914D\u7F6E"))
  }, other, {
    wrapClassName: 'm',
    onOk: onOk
  }), /*#__PURE__*/React.createElement("div", {
    className: "ncm"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'ncd'
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return handleToggleTabClick('deps');
    },
    className: classNames('it', _defineProperty({}, 'active', activeKey === 'deps'))
  }, /*#__PURE__*/React.createElement(FullIconBackground, {
    style: {
      fontSize: 20,
      cursor: 'pointer',
      margin: '1px 4px 0 0',
      zIndex: 0
    },
    icon: /*#__PURE__*/React.createElement(Full1704531Full, {
      className: "icd-reset-child-item-fill"
    }),
    mode: "double"
  }), /*#__PURE__*/React.createElement("span", null, "\u5C5E\u6027\u914D\u7F6E")), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return handleToggleTabClick('code');
    },
    className: classNames('it', _defineProperty({}, 'active', activeKey === 'code'))
  }, /*#__PURE__*/React.createElement(FullIconBackground, {
    style: {
      fontSize: 32,
      cursor: 'pointer',
      marginLeft: -8,
      zIndex: 0
    },
    icon: /*#__PURE__*/React.createElement(Full23943173Full, {
      className: "icd-reset-child-item-fill"
    })
  }), /*#__PURE__*/React.createElement("span", null, "\u6267\u884C\u4EE3\u7801"))), activeKey === 'deps' && /*#__PURE__*/React.createElement("div", {
    className: 'settings'
  }, /*#__PURE__*/React.createElement("div", {
    className: 'item'
  }, /*#__PURE__*/React.createElement("span", null, "\u4F9D\u8D56\u6CE8\u5165:"), /*#__PURE__*/React.createElement("div", {
    className: 'value'
  }, /*#__PURE__*/React.createElement(Checkbox.Group, {
    onChange: handleDepsChange,
    value: depParent
  }, /*#__PURE__*/React.createElement(Checkbox, {
    value: "deps"
  }, "\u4F9D\u8D56\u4E0A\u6E38\u8282\u70B9\u6267\u884C\u7ED3\u679C"), /*#__PURE__*/React.createElement(Checkbox, {
    value: "subject"
  }, "\u5F53\u4E0A\u6E38\u8282\u70B9\u8FD4\u56DEtrue\u65F6\u672C\u8282\u70B9\u4E3A\u4E3B\u8282\u70B9"))))), activeKey === 'code' && /*#__PURE__*/React.createElement(IcdMonacoEditor
  // value={node.data.info.code}
  , {
    value: codeRef.current || ((_node$data3 = node.data) === null || _node$data3 === void 0 ? void 0 : _node$data3.info.code),
    onChange: handleCodeChange,
    className: 'edit'
  })));
};
var NodeConfigModal = /*#__PURE__*/memo(N);
export default NodeConfigModal;
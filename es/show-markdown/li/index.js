var _excluded = ["children", "selfIdx", "parentIdx", "isOl"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
import { isObject, isString } from '@iicoding/utils';
import { Disorder, Item, ListText, SerialNumber } from "./style";
var prefix = ['+', '+', '-', '。'];
var getSerialNumber = function getSerialNumber(p, s) {
  if (p !== 0) {
    return "".concat(p, ".").concat(s, " ").trim().replace('. .', '.');
  }
  return "".concat(s, ". ");
};

/**
 * 返回 ol 下的节点
 * @param children ul 的子集节点
 * @param p ul的层级
 * @param idx li 展示的层级
 */
var getOlChild = function getOlChild(children, p, idx) {
  return children.map(function (child) {
    if (isString(child)) {
      return child;
    }
    if (isObject(child.type) && child.type.displayName === 'ol') {
      return /*#__PURE__*/React.cloneElement(child, {
        parentIdx: p === 1 ? 0 : idx
      });
    }
    return child;
  });
};

/**
 * 返回 Ul 下的节点
 * @param children ul 的子集节点
 * @param p ul的层级
 */
var getUlChild = function getUlChild(children, p) {
  return children.map(function (child) {
    if (isString(child)) {
      return child;
    }
    if (isObject(child.type) && child.type.displayName === 'ul') {
      return /*#__PURE__*/React.cloneElement(child, {
        parentIdx: p
      });
    }
    return child;
  });
};
var L = function L(props) {
  var children = props.children,
    selfIdx = props.selfIdx,
    _props$parentIdx = props.parentIdx,
    parentIdx = _props$parentIdx === void 0 ? 1 : _props$parentIdx,
    isOl = props.isOl,
    other = _objectWithoutProperties(props, _excluded);
  var idx = React.useMemo(function () {
    return getSerialNumber(parentIdx, selfIdx || 1);
  }, [parentIdx, selfIdx]);
  var getChildren = React.useCallback(function () {
    if (Array.isArray(children)) {
      var executor = isOl ? getOlChild : getUlChild;
      return executor(children, parentIdx, idx);
    }
    return children;
  }, [children]);
  return /*#__PURE__*/React.createElement(Item, _extends({}, other, {
    isUl: !isOl,
    idx: selfIdx || 0
  }), selfIdx && /*#__PURE__*/React.createElement(SerialNumber, null, idx), !isOl && /*#__PURE__*/React.createElement(Disorder, null, prefix[parentIdx]), /*#__PURE__*/React.createElement(ListText, null, getChildren()));
};
var Li = /*#__PURE__*/React.memo(L);
Li.displayName = 'li';
export default Li;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * @auth: dmx
 * @time: 2022/6/16
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import "./index.less";
var B = function B(props) {
  var children = props.children;
  // @ts-expect-error
  var child = children === null || children === void 0 ? void 0 : children[0];
  if (!child) {
    return null;
  }
  return /*#__PURE__*/React.createElement("blockquote", {
    className: 'icd-blockquote'
  }, _typeof(child) !== 'object' || typeof child !== 'function' ? child :
  // @ts-expect-error
  cloneElement(children === null || children === void 0 ? void 0 : children[0], {
    isBlockquote: true
  }));
};
var TagBlockquote = /*#__PURE__*/React.memo(B);
export default TagBlockquote;
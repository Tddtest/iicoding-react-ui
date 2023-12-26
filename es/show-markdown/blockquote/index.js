/**
 * @auth: dmx
 * @time: 2022/6/16
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import { isFunction, isObject } from '@iicoding/utils';
import "./index.less";
var B = function B(props) {
  var children = props.children;
  // @ts-expect-error
  var child = children === null || children === void 0 ? void 0 : children[0];
  if (!child) {
    return null;
  }
  return /*#__PURE__*/React.createElement("blockquote", {
    className: "icd-blockquote"
  }, !isObject(child) || !isFunction(child) ? child : Array.isArray(children) ? /*#__PURE__*/React.cloneElement(children[0], {
    isBlockquote: true
  }) : children);
};
var TagBlockquote = /*#__PURE__*/React.memo(B);
TagBlockquote.displayName = 'blockquote';
export default TagBlockquote;
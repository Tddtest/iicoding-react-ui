/**
 * @auth: dmx
 * @time: 2022/5/29
 * @func: pre 标签 外层样式
 **/
import * as React from 'react';
import "./index.less";
var P = function P(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("section", {
    className: "icd-pre"
  }, children);
};
var PreBlock = /*#__PURE__*/React.memo(P);
export default PreBlock;
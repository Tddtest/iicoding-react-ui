import * as React from 'react';
import "./index.less";
var S = function S(props) {
  console.log('props----', props);
  return /*#__PURE__*/React.createElement("span", {
    className: "icd-sub"
  }, props.children);
};
var Sub = /*#__PURE__*/React.memo(S);
export default Sub;
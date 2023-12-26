import * as React from 'react';
import "./index.less";
var S = function S(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: "icd-span"
  }, props.children);
};
var Span = /*#__PURE__*/React.memo(S);
export default Span;
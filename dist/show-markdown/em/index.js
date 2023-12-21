import * as React from 'react';
import "./index.less";
var E = function E(props) {
  var children = props.children,
    isTip = props.isTip;
  if (isTip) {
    return /*#__PURE__*/React.createElement("span", null, children);
  }
  return /*#__PURE__*/React.createElement("em", {
    className: "icd-em"
  }, children);
};
var Em = /*#__PURE__*/React.memo(E);
Em.displayName = 'em';
export default Em;
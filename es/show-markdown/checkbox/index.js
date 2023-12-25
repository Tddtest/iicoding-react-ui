import * as React from 'react';
import "./index.less";
var C = function C(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: "icd-checkbox"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: props.checked,
    className: props.className
  }), /*#__PURE__*/React.createElement("span", {
    className: "checkbox"
  }));
};
var Checkbox = /*#__PURE__*/React.memo(C);
export default Checkbox;
import * as React from 'react';
import Checkbox from "../checkbox";
var I = function I(props) {
  if (props.type === 'checkbox') {
    return /*#__PURE__*/React.createElement(Checkbox, props);
  }
  return /*#__PURE__*/React.createElement("div", null, "\u5176\u4ED6\u7684");
};
var Input = /*#__PURE__*/React.memo(I);
export default Input;
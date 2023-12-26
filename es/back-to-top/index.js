import * as React from 'react';
import "./index.css";
var B = function B(props) {
  var textStyle = props.textStyle,
    lineStyle = props.lineStyle,
    onGoToBack = props.onGoToBack;
  return /*#__PURE__*/React.createElement("div", {
    className: "icd-backtop-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    id: "icd-scrollme",
    onClick: onGoToBack
  }, /*#__PURE__*/React.createElement("div", {
    className: "icd-backtop"
  }, /*#__PURE__*/React.createElement("span", {
    style: lineStyle
  }), /*#__PURE__*/React.createElement("span", {
    style: lineStyle
  }), /*#__PURE__*/React.createElement("p", {
    style: textStyle
  }, "back to top"))));
};
var BackToTop = /*#__PURE__*/React.memo(B);
export default BackToTop;
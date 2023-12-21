import * as React from 'react';
import "./index.less";
var L = function L(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("span", {
    className: "icd-del"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 180 25",
    className: "icd-del-icon"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#icd-line",
    className: "icd-del-line"
  }), /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#icd-box",
    className: "hidden icd-del-box"
  }), /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#icd-check",
    className: "hidden icd-del-check"
  }), /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#icd-circle",
    className: "hidden icd-del-circle"
  })), children);
};
var Li = /*#__PURE__*/React.memo(L);
export default Li;
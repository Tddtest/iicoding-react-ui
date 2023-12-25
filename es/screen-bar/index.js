import * as React from 'react';
import "./index.less";
var S = function S(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "icd-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icd-screen-bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "icd-screen-content"
  }, children));
};
var ScreenBar = /*#__PURE__*/React.memo(S);
export default ScreenBar;
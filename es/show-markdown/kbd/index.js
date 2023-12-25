import * as React from 'react';
import "./index.less";
var K = function K(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("kbd", {
    className: "k"
  }, children);
};
var Kbd = /*#__PURE__*/React.memo(K);
export default Kbd;
/**
 * @auth: dmx
 * @time: 2023/12/25
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import "./index.less";
var M = function M(props) {
  console.log('props----', props);
  return /*#__PURE__*/React.createElement("mark", {
    className: "icd-mark"
  }, props.children);
};
var Mark = /*#__PURE__*/React.memo(M);
export default Mark;
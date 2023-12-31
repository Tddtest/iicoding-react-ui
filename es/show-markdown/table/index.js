/**
 * @auth: dmx
 * @time: 2022/6/16
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import "./index.less";
var T = function T(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "icd-table-wrapper"
  }, /*#__PURE__*/React.createElement("table", {
    className: "icd-table"
  }, children));
};
var TagTable = /*#__PURE__*/React.memo(T);
export default TagTable;
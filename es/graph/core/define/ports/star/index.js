import React, { memo } from 'react';
import { PortManager } from '@antv/x6/es/model/port';
var Port = PortManager.Port;
import "./index.less";
var S = function S() {
  // const { port } = props;y

  // console.log('更新了', port.id);

  return /*#__PURE__*/React.createElement("div", {
    className: 'port'
  }, "a");
};
var Start = /*#__PURE__*/memo(S);
export default Start;
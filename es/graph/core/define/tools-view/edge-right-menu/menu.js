/**
 * @auth: dmx
 * @time: 2024/1/6
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import React, { memo } from 'react';
import DropdownDefineUI from "../../../../../dropdown-define-ui";
import GlassBoxWrap from "../components/glass-box-wrap";
import "./index.less";
var N = function N(props) {
  var pos = props.pos,
    edge = props.edge,
    graph = props.graph,
    onClose = props.onClose;
  var handleDeleteEdge = function handleDeleteEdge() {
    graph.removeEdge(edge);
    onClose();
  };
  var dropdownRender = function dropdownRender() {
    return /*#__PURE__*/React.createElement(GlassBoxWrap, {
      blur: 60,
      className: 'erm'
    }, /*#__PURE__*/React.createElement("div", {
      className: 'del',
      onClick: handleDeleteEdge
    }, "\u5220\u9664"));
  };
  return /*#__PURE__*/React.createElement(DropdownDefineUI, {
    open: true,
    trigger: ['contextMenu'],
    align: {
      offset: [pos.x + 20, pos.y]
    },
    dropdownRender: dropdownRender,
    overlayClassName: "icd-overlay-".concat(edge.id)
  }, /*#__PURE__*/React.createElement("span", null));
};
var Menu = /*#__PURE__*/memo(N);
export default Menu;
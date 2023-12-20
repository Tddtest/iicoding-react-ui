/**
 * @auth: dmx
 * @time: 2022/5/29
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import React, { memo } from 'react';
import "./index.less";
var S = function S() {
  return /*#__PURE__*/React.createElement("div", {
    className: "icd-circle-controls"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "54",
    height: "14",
    viewBox: "0 0 54 14"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(1 1)"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "circle red",
    cx: "6",
    cy: "6",
    r: "6",
    fill: "#FF5F56",
    stroke: "#E0443E",
    strokeWidth: ".5"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "circle yellow",
    cx: "26",
    cy: "6",
    r: "6",
    fill: "#FFBD2E",
    stroke: "#DEA123",
    strokeWidth: ".5"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "circle blue",
    cx: "46",
    cy: "6",
    r: "6",
    fill: "#27C93F",
    stroke: "#1AAB29",
    strokeWidth: ".5"
  }))));
};
var SvgCircle = /*#__PURE__*/memo(S);
export default SvgCircle;
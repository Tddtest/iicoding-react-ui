var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/show-markdown/svg-circle/index.tsx
var svg_circle_exports = {};
__export(svg_circle_exports, {
  default: () => svg_circle_default
});
module.exports = __toCommonJS(svg_circle_exports);
var import_react = __toESM(require("react"));
var import_index = require("./index.less");
var S = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "icd-circle-controls" }, /* @__PURE__ */ import_react.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "54",
      height: "14",
      viewBox: "0 0 54 14"
    },
    /* @__PURE__ */ import_react.default.createElement("g", { fill: "none", fillRule: "evenodd", transform: "translate(1 1)" }, /* @__PURE__ */ import_react.default.createElement(
      "circle",
      {
        className: "circle red",
        cx: "6",
        cy: "6",
        r: "6",
        fill: "#FF5F56",
        stroke: "#E0443E",
        strokeWidth: ".5"
      }
    ), /* @__PURE__ */ import_react.default.createElement(
      "circle",
      {
        className: "circle yellow",
        cx: "26",
        cy: "6",
        r: "6",
        fill: "#FFBD2E",
        stroke: "#DEA123",
        strokeWidth: ".5"
      }
    ), /* @__PURE__ */ import_react.default.createElement(
      "circle",
      {
        className: "circle blue",
        cx: "46",
        cy: "6",
        r: "6",
        fill: "#27C93F",
        stroke: "#1AAB29",
        strokeWidth: ".5"
      }
    ))
  ));
};
var SvgCircle = (0, import_react.memo)(S);
var svg_circle_default = SvgCircle;

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

// src/back-to-top/index.tsx
var back_to_top_exports = {};
__export(back_to_top_exports, {
  default: () => back_to_top_default
});
module.exports = __toCommonJS(back_to_top_exports);
var React = __toESM(require("react"));
var import_index = require("./index.less");
var B = (props) => {
  const { textStyle, lineStyle, onGoToBack } = props;
  return /* @__PURE__ */ React.createElement("div", { className: "icd-backtop-wrapper" }, /* @__PURE__ */ React.createElement("div", { id: "icd-scrollme", onClick: onGoToBack }, /* @__PURE__ */ React.createElement("div", { className: "icd-backtop" }, /* @__PURE__ */ React.createElement("span", { style: lineStyle }), /* @__PURE__ */ React.createElement("span", { style: lineStyle }), /* @__PURE__ */ React.createElement("p", { style: textStyle }, "back to top"))));
};
var BackToTop = React.memo(B);
var back_to_top_default = BackToTop;

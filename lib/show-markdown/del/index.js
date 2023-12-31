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

// src/show-markdown/del/index.tsx
var del_exports = {};
__export(del_exports, {
  default: () => del_default
});
module.exports = __toCommonJS(del_exports);
var React = __toESM(require("react"));
var import_index = require("./index.less");
var L = (props) => {
  const children = props.children;
  return /* @__PURE__ */ React.createElement("span", { className: "icd-del" }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 180 25",
      className: "icd-del-icon"
    },
    /* @__PURE__ */ React.createElement("use", { xlinkHref: "#icd-line", className: "icd-del-line" }),
    /* @__PURE__ */ React.createElement("use", { xlinkHref: "#icd-box", className: "hidden icd-del-box" }),
    /* @__PURE__ */ React.createElement("use", { xlinkHref: "#icd-check", className: "hidden icd-del-check" }),
    /* @__PURE__ */ React.createElement("use", { xlinkHref: "#icd-circle", className: "hidden icd-del-circle" })
  ), children);
};
var Li = React.memo(L);
var del_default = Li;

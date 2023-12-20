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

// src/show-markdown/ol/index.tsx
var ol_exports = {};
__export(ol_exports, {
  default: () => ol_default
});
module.exports = __toCommonJS(ol_exports);
var import_react = __toESM(require("react"));
var import_nanoid = require("nanoid");
var import_li = __toESM(require("../li"));
var O = (props) => {
  let children = props.children;
  if (props.idx === void 0 && Array.isArray(props.children)) {
    children = props.children.map((child, idx) => {
      if (typeof child === "string") {
        return child;
      } else {
        return (0, import_react.createElement)(import_li.default, {
          ...child.props,
          idx: props.idx ? props.idx + 1 : idx + 1,
          key: (0, import_nanoid.nanoid)()
        });
      }
    });
  }
  return /* @__PURE__ */ import_react.default.createElement("ol", { ...props }, children);
};
var Ol = (0, import_react.memo)(O);
var ol_default = Ol;

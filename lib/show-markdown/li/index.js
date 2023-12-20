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

// src/show-markdown/li/index.tsx
var li_exports = {};
__export(li_exports, {
  default: () => li_default
});
module.exports = __toCommonJS(li_exports);
var import_react = __toESM(require("react"));
var import_style = require("./style");
var L = (props) => {
  let children = props.children;
  const hasOlOrUl = (0, import_react.useMemo)(() => {
    let flag = false;
    if (Array.isArray(props.children)) {
      children = props.children.map((child) => {
        if (typeof child === "object") {
          flag = true;
          if (child.type === "ol" && props.idx) {
            console.log("aaa");
            child.props.idx = props.idx + 1;
          }
        } else {
          return /* @__PURE__ */ import_react.default.createElement("span", { key: `${props.idx}-${child.toString()}` }, `${props.idx || ""}. ${child}`);
        }
        return child;
      });
    }
    return flag;
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(import_style.Item, { ...props, hasOlOrUl }, children);
};
var Li = (0, import_react.memo)(L);
var li_default = Li;

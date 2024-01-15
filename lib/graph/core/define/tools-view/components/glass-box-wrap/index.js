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

// src/graph/core/define/tools-view/components/glass-box-wrap/index.tsx
var glass_box_wrap_exports = {};
__export(glass_box_wrap_exports, {
  default: () => glass_box_wrap_default
});
module.exports = __toCommonJS(glass_box_wrap_exports);
var import_react = __toESM(require("react"));
var import_glass_box = __toESM(require("../../../../../../glass-box"));
var G = (props) => {
  const { children, ...otherProps } = props;
  return /* @__PURE__ */ import_react.default.createElement(import_glass_box.default, { blur: 30, saturate: "180%", bgOpacity: 0.4, ...otherProps }, children);
};
var GlassBoxWrap = (0, import_react.memo)(G);
var glass_box_wrap_default = GlassBoxWrap;

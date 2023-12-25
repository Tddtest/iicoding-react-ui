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

// src/show-markdown/blockquote/index.tsx
var blockquote_exports = {};
__export(blockquote_exports, {
  default: () => blockquote_default
});
module.exports = __toCommonJS(blockquote_exports);
var React = __toESM(require("react"));
var import_index = require("./index.less");
var B = (props) => {
  const { children } = props;
  const child = children == null ? void 0 : children[0];
  if (!child) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("blockquote", { className: "icd-blockquote" }, typeof child !== "object" || typeof child !== "function" ? child : (
    // @ts-expect-error
    cloneElement(children == null ? void 0 : children[0], { isBlockquote: true })
  ));
};
var TagBlockquote = React.memo(B);
var blockquote_default = TagBlockquote;

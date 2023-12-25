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

// src/magic-text/index.tsx
var magic_text_exports = {};
__export(magic_text_exports, {
  default: () => magic_text_default
});
module.exports = __toCommonJS(magic_text_exports);
var import_classnames = __toESM(require("classnames"));
var React = __toESM(require("react"));
var import_star = __toESM(require("./star"));
var import_index = require("./index.less");
var M = (props) => {
  const { starCount = 3, text, noAnimation, noStar } = props;
  return /* @__PURE__ */ React.createElement("span", { className: "star-box" }, /* @__PURE__ */ React.createElement("span", { className: "magic" }, !noStar && Array(starCount).fill(0).map((_, idx) => /* @__PURE__ */ React.createElement(import_star.default, { key: idx.toString(), idx })), /* @__PURE__ */ React.createElement("span", { className: (0, import_classnames.default)("magic-text", { noAnimation }) }, text)));
};
var MagicText = React.memo(M);
var magic_text_default = MagicText;

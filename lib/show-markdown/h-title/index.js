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

// src/show-markdown/h-title/index.tsx
var h_title_exports = {};
__export(h_title_exports, {
  default: () => h_title_default
});
module.exports = __toCommonJS(h_title_exports);
var import_react = __toESM(require("react"));
var import_classnames = __toESM(require("classnames"));
var import_react_router_dom = require("react-router-dom");
var import_constants = require("../../constants");
var import_index = require("./index.less");
var H = (props) => {
  const { children, level, ...other } = props;
  const { id } = (0, import_react_router_dom.useParams)();
  const tagProps = (0, import_react.useMemo)(() => {
    const idStr = localStorage.getItem(id || "") || "";
    const idArr = idStr.split(import_constants.DIRECTORY_ID_SPLIT);
    const newID = idArr.shift();
    localStorage.setItem(id, idArr.join(import_constants.DIRECTORY_ID_SPLIT));
    return {
      ...other,
      id: newID,
      className: (0, import_classnames.default)(`icd-h${level}`, "data-target-title")
    };
  }, [id]);
  const tagChildren = /* @__PURE__ */ import_react.default.createElement("span", { className: "icd-title-text" }, children);
  return (0, import_react.createElement)(`h${level}`, tagProps, tagChildren);
};
var TitleTag = (0, import_react.memo)(H);
var h_title_default = TitleTag;

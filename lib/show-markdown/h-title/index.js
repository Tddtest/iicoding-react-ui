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
var import_react_icons = require("@iicoding/react-icons");
var import_classnames = __toESM(require("classnames"));
var React = __toESM(require("react"));
var import_react_router_dom = require("react-router-dom");
var import_full_icon_background = __toESM(require("../../full-icon-background"));
var import_constants = require("../constants");
var import_index = require("./index.less");
var hIcon = [
  {
    style: { fontSize: 36, margin: "-6px 10px 0 -3px" },
    icon: /* @__PURE__ */ React.createElement(import_react_icons.Full202312179Full, null)
  },
  {
    style: { fontSize: 36, margin: "-6px 10px 0 -5px" },
    icon: /* @__PURE__ */ React.createElement(import_react_icons.Full23943115Full, null),
    bgStyle: { zIndex: 0 }
  },
  {
    style: { fontSize: 30, marginTop: -6, marginRight: 10 },
    icon: /* @__PURE__ */ React.createElement(import_react_icons.FullIconCc42Full, null),
    bgStyle: { zIndex: 0 },
    mode: "double"
  },
  {
    style: { fontSize: 24, margin: "-6px 10px 0 3px" },
    icon: /* @__PURE__ */ React.createElement(import_react_icons.FullIconCc22Full, null),
    mode: "double",
    bgStyle: { zIndex: 0 }
  },
  {
    style: { fontSize: 26, marginTop: -6, marginRight: 10 },
    icon: /* @__PURE__ */ React.createElement(import_react_icons.Full23943118Full, null),
    bgStyle: { zIndex: 0 }
  },
  {
    style: { fontSize: 24, marginTop: -6, marginRight: 10 },
    icon: /* @__PURE__ */ React.createElement(import_react_icons.Full23943258Full, null),
    bgStyle: { zIndex: 0 }
  },
  {
    style: { fontSize: 22, marginTop: -2, marginRight: 10 },
    icon: /* @__PURE__ */ React.createElement(import_react_icons.Full23943308Full, null),
    bgStyle: { zIndex: 0 }
  }
];
var H = (props) => {
  const { children, level, ...other } = props;
  const { id } = (0, import_react_router_dom.useParams)();
  const tagProps = React.useMemo(() => {
    const key = window.location.href;
    const idStr = localStorage.getItem(key || "") || "";
    const idArr = idStr.split(import_constants.DIRECTORY_ID_SPLIT);
    const newID = idArr.shift();
    localStorage.setItem(key, idArr.join(import_constants.DIRECTORY_ID_SPLIT));
    return {
      ...other,
      id: newID,
      className: (0, import_classnames.default)(`icd-h${level}`, "data-target-title")
    };
  }, [id]);
  const tagChildren = /* @__PURE__ */ React.createElement("div", { className: "icd-title-text" }, /* @__PURE__ */ React.createElement(import_full_icon_background.default, { ...hIcon[level] }), children);
  return React.createElement(`h${level}`, tagProps, tagChildren);
};
var TitleTag = React.memo(H);
var h_title_default = TitleTag;

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

// src/show-markdown/tip/index.tsx
var tip_exports = {};
__export(tip_exports, {
  default: () => tip_default
});
module.exports = __toCommonJS(tip_exports);
var React = __toESM(require("react"));
var import_classnames = __toESM(require("classnames"));
var import_react_icons = require("@iicoding/react-icons");
var import_utils = require("@iicoding/utils");
var import_full_icon_background = __toESM(require("../../full-icon-background"));
var import_index = require("./index.less");
var T = (props) => {
  const { children, type = "" } = props;
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      className: (0, import_classnames.default)("icd-alert-tip", {
        err: type === "error",
        w: type === "warning",
        s: type === "success"
      })
    },
    /* @__PURE__ */ React.createElement("span", { className: "tip" }, type === "error" && /* @__PURE__ */ React.createElement(import_full_icon_background.default, { mode: "double", icon: /* @__PURE__ */ React.createElement(import_react_icons.Full202312174Full, null) }), type === "success" && /* @__PURE__ */ React.createElement(import_full_icon_background.default, { mode: "double", icon: /* @__PURE__ */ React.createElement(import_react_icons.FullIconCc27Full, null) }), type === "warning" && /* @__PURE__ */ React.createElement(
      import_full_icon_background.default,
      {
        mode: "background",
        ffStyle: { left: 5 },
        style: { fontSize: "30px" },
        icon: /* @__PURE__ */ React.createElement(import_react_icons.Full23943404Full, null)
      }
    )),
    (0, import_utils.isObject)(children) ? React.cloneElement(children, { isTip: true }) : children
  );
};
var Tip = React.memo(T);
Tip.displayName = "tip";
var tip_default = Tip;

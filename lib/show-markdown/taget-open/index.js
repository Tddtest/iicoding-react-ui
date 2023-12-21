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

// src/show-markdown/taget-open/index.tsx
var taget_open_exports = {};
__export(taget_open_exports, {
  default: () => taget_open_default
});
module.exports = __toCommonJS(taget_open_exports);
var React = __toESM(require("react"));
var import_index = require("./index.less");
var T = (props) => {
  const { children, href, ...other } = props;
  return /* @__PURE__ */ React.createElement("span", { className: "icd-href" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      target: (href == null ? void 0 : href.startsWith("#")) ? "_self" : "_blank",
      href,
      ...other
    },
    React.Children.map(children, (c) => {
      var _a, _b;
      if (((_a = c == null ? void 0 : c.props) == null ? void 0 : _a.src) && ((_b = c == null ? void 0 : c.props) == null ? void 0 : _b.alt)) {
        return React.cloneElement(c, {
          isAnchor: true
        });
      }
      return c;
    })
  ));
};
var TargetOpen = React.memo(T);
var taget_open_default = TargetOpen;

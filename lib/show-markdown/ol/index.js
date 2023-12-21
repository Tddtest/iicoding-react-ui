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
var React = __toESM(require("react"));
var import_utils = require("@iicoding/utils");
var O = (props) => {
  const { children, parentIdx = 0 } = props;
  const getChildren = React.useCallback(() => {
    if (Array.isArray(children)) {
      return children.map((li, idx) => {
        if ((0, import_utils.isObject)(li)) {
          if (React.isValidElement(li)) {
            return React.cloneElement(li, {
              parentIdx,
              isOl: true,
              selfIdx: idx + 1
            });
          }
        }
        return li;
      });
    }
    return children;
  }, [children]);
  return /* @__PURE__ */ React.createElement("ol", { ...props }, getChildren());
};
var Ol = React.memo(O);
Ol.displayName = "ol";
var ol_default = Ol;

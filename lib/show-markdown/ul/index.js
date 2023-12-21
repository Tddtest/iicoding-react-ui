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

// src/show-markdown/ul/index.tsx
var ul_exports = {};
__export(ul_exports, {
  default: () => ul_default
});
module.exports = __toCommonJS(ul_exports);
var React = __toESM(require("react"));
var import_react = require("react");
var import_utils = require("@iicoding/utils");
var U = (props) => {
  const { children, parentIdx = 0 } = props;
  console.log(parentIdx);
  const getChildren = (0, import_react.useCallback)(() => {
    if (Array.isArray(children)) {
      return children.map((li) => {
        if ((0, import_utils.isObject)(li)) {
          if (React.isValidElement(li)) {
            return React.cloneElement(li, {
              parentIdx: parentIdx + 1,
              isUl: true
            });
          }
        }
        return li;
      });
    }
    return children;
  }, [children]);
  return /* @__PURE__ */ React.createElement("ul", { ...props }, getChildren());
};
var Ul = React.memo(U);
Ul.displayName = "ul";
var ul_default = Ul;

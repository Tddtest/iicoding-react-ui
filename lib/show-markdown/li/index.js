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
var React = __toESM(require("react"));
var import_utils = require("@iicoding/utils");
var import_style = require("./style");
var prefix = ["+", "+", "-", "。"];
var getSerialNumber = (p, s) => {
  if (p !== 0) {
    return `${p}.${s} `.trim().replace(". .", ".");
  }
  return `${s}. `;
};
var getOlChild = (children, p, idx) => {
  return children.map((child) => {
    if ((0, import_utils.isString)(child)) {
      return child;
    }
    if ((0, import_utils.isObject)(child.type) && child.type.displayName === "ol") {
      return React.cloneElement(child, {
        parentIdx: p === 1 ? 0 : idx
      });
    }
    return child;
  });
};
var getUlChild = (children, p) => {
  return children.map((child) => {
    if ((0, import_utils.isString)(child)) {
      return child;
    }
    if ((0, import_utils.isObject)(child.type) && child.type.displayName === "ul") {
      return React.cloneElement(child, {
        parentIdx: p
      });
    }
    return child;
  });
};
var L = (props) => {
  const { children, selfIdx, parentIdx = 1, isOl, ...other } = props;
  const idx = React.useMemo(
    () => getSerialNumber(parentIdx, selfIdx || 1),
    [parentIdx, selfIdx]
  );
  const getChildren = React.useCallback(() => {
    if (Array.isArray(children)) {
      const executor = isOl ? getOlChild : getUlChild;
      return executor(children, parentIdx, idx);
    }
    return children;
  }, [children]);
  return /* @__PURE__ */ React.createElement(import_style.Item, { ...other, isUl: !isOl, idx: selfIdx || 0 }, selfIdx && /* @__PURE__ */ React.createElement(import_style.SerialNumber, null, idx), !isOl && /* @__PURE__ */ React.createElement(import_style.Disorder, null, prefix[parentIdx]), /* @__PURE__ */ React.createElement(import_style.ListText, null, getChildren()));
};
var Li = React.memo(L);
Li.displayName = "li";
var li_default = Li;

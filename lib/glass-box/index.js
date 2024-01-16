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

// src/glass-box/index.tsx
var glass_box_exports = {};
__export(glass_box_exports, {
  default: () => glass_box_default
});
module.exports = __toCommonJS(glass_box_exports);
var import_classnames = __toESM(require("classnames"));
var import_react = __toESM(require("react"));
var import_index = require("./index.less");
var G = (props) => {
  const {
    children,
    className,
    bgColor,
    bgOpacity,
    shadowColor,
    boxShadow: bs,
    bdf,
    saturate,
    blur,
    ...other
  } = props;
  const [style, setStyle] = (0, import_react.useState)({});
  const boxRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (boxRef.current) {
      const { backdropFilter, backgroundColor, boxShadow } = window.getComputedStyle(boxRef.current);
      const st = {};
      if ((saturate || blur) && backdropFilter) {
        const sdfArr = backdropFilter.split(" ");
        if (saturate !== void 0) {
          sdfArr[0] = `saturate(${saturate})`;
        }
        if (blur) {
          sdfArr[1] = `blur(${blur}px)`;
        }
        st.backdropFilter = sdfArr.join(" ");
      }
      if (shadowColor) {
        const splitChar = boxShadow.includes("rgb") ? ") " : "";
        const sdArr = boxShadow.split(splitChar);
        sdArr[0] = shadowColor;
        st.boxShadow = sdArr.join(" ");
      }
      if (bgOpacity) {
        let newBgColor = backgroundColor;
        if (backgroundColor.includes("rgba")) {
          const bgArr = backgroundColor.split(" ");
          bgArr.pop();
          newBgColor = `${bgArr.join(" ")} ${bgOpacity})`;
        } else if (backgroundColor.includes("rgb")) {
          newBgColor = `rgba(${newBgColor.slice(
            4,
            newBgColor.length - 1
          )}, ${bgOpacity})`;
        } else {
          newBgColor = `rgba(${backgroundColor}, ${bgOpacity})`;
        }
        st.backgroundColor = newBgColor;
      }
      if (bdf) {
        st.backdropFilter = bdf;
      }
      if (bs) {
        st.boxShadow = bs;
      }
      if (bgColor) {
        st.backgroundColor = bgColor;
      }
      setStyle(st);
    }
  }, [bs, bdf, bdf, saturate, bgColor, shadowColor, bgOpacity]);
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      ref: boxRef,
      style,
      className: (0, import_classnames.default)("icd-g-b", className),
      ...other
    },
    children
  );
};
var GlassBox = (0, import_react.memo)(G);
var glass_box_default = GlassBox;

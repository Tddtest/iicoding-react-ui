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

// src/full-icon-background/index.tsx
var full_icon_background_exports = {};
__export(full_icon_background_exports, {
  default: () => full_icon_background_default
});
module.exports = __toCommonJS(full_icon_background_exports);
var import_react = __toESM(require("react"));
var import_index_module = require("./index.module.less");
var F = (props) => {
  const {
    icon,
    style: containerStyle,
    bgStyle,
    ffStyle,
    mode = "background"
  } = props;
  const svgRef = (0, import_react.useRef)(null);
  const initRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    if (svgRef.current && !initRef.current) {
      const [firstPathDom, secondPathDom] = Array.from(
        svgRef.current.getElementsByTagName("path")
      );
      if (mode === "color") {
      } else if (mode === "double") {
        if (firstPathDom) {
          const bgFill = firstPathDom.getAttribute("fill");
          if (bgFill) {
            const target = svgRef.current.getElementsByClassName("icd-bg")[0];
            if (target) {
              target.style.backgroundColor = bgFill;
              target.style.filter = "blur(16px)";
              target.style.width = "100%";
              target.style.height = "100%";
              if (bgStyle) {
                Object.keys(bgStyle).forEach((key) => {
                  target.style[key] = bgStyle[key];
                });
              }
            }
          }
        }
      } else if (mode === "background") {
        if (firstPathDom) {
          if (secondPathDom) {
            const oldPathFIll = secondPathDom.getAttribute("fill");
            const bgFill = firstPathDom.getAttribute("fill");
            const bgTarget = svgRef.current.getElementsByClassName(
              "icd-bg-ff"
            )[0];
            if (bgTarget && bgFill) {
              bgTarget.style.backgroundColor = bgFill;
              if (bgTarget.getBoundingClientRect().width <= 20) {
                bgTarget.style.left = "unset";
                bgTarget.style.top = "unset";
                if (ffStyle) {
                  Object.keys(ffStyle).forEach((key) => {
                    bgTarget.style[key] = ffStyle[key];
                  });
                }
              }
            }
            if (oldPathFIll) {
              const target = svgRef.current.getElementsByClassName(
                "icd-bg"
              )[0];
              if (target) {
                target.style.backgroundColor = oldPathFIll;
                target.style.filter = "blur(16px)";
                if (bgStyle) {
                  Object.keys(bgStyle).forEach((key) => {
                    target.style[key] = bgStyle[key];
                  });
                }
                firstPathDom.setAttribute("fill", "transparent");
              }
            }
          }
        }
      }
      initRef.current = true;
    }
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("div", { ref: svgRef, style: containerStyle, className: "icd-icon-blur" }, icon, /* @__PURE__ */ import_react.default.createElement("span", { className: "icd-bg", style: bgStyle }), /* @__PURE__ */ import_react.default.createElement("span", { className: "icd-bg-ff" }));
};
var FillIconBg = (0, import_react.memo)(F);
var full_icon_background_default = FillIconBg;

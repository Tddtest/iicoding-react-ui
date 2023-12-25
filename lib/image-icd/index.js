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

// src/image-icd/index.tsx
var image_icd_exports = {};
__export(image_icd_exports, {
  default: () => image_icd_default
});
module.exports = __toCommonJS(image_icd_exports);
var import_classnames = __toESM(require("classnames"));
var React = __toESM(require("react"));
var import_index = require("./index.less");
var loadImage = (img, fallback) => {
  const src = img.getAttribute("data-src");
  if (src) {
    const imgDom = new Image();
    imgDom.src = src;
    imgDom.onload = () => {
      img.src = src;
      img.setAttribute("data-load", "false");
    };
    imgDom.onerror = () => {
      img.setAttribute("data-load", "false");
      fallback && (img.src = fallback);
    };
  }
};
var I = (props) => {
  const { src, noBorder, fallback, alt, className, ...other } = props;
  const imgRef = React.useRef(null);
  React.useEffect(() => {
    if (imgRef.current) {
      loadImage(imgRef.current, fallback);
    }
  }, []);
  return /* @__PURE__ */ React.createElement("div", { className: "i" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      ref: imgRef,
      className: (0, import_classnames.default)(className, "img", { nb: noBorder }),
      "data-load": true,
      "data-src": src,
      src: "",
      alt: alt || "icd-img",
      ...other
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "load" }));
};
var ImageIcd = React.memo(I);
var image_icd_default = ImageIcd;

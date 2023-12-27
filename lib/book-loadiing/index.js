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

// src/book-loadiing/index.tsx
var book_loadiing_exports = {};
__export(book_loadiing_exports, {
  default: () => book_loadiing_default
});
module.exports = __toCommonJS(book_loadiing_exports);
var React = __toESM(require("react"));
var import_index = require("./index.less");
var getBookStyle = (options) => {
  const {
    bgColor,
    pageColor,
    pageFoldColor,
    shadowColor,
    textColor,
    duration,
    pageSize
  } = options;
  return {
    // @ts-expect-error
    "--background": `linear-gradient(${(bgColor == null ? void 0 : bgColor.deg) || 135}deg, ${(bgColor == null ? void 0 : bgColor.start) || "#45c4f9"}, ${(bgColor == null ? void 0 : bgColor.end) || "#ff0be5"})`,
    "--shadow": shadowColor || "rgba(39, 94, 254, 0.28)",
    "--text": textColor || "#6C7486",
    "--page": pageColor || "rgba(255, 255, 255, 0.36)",
    "--page-fold": pageFoldColor || "rgba(255, 255, 255, 0.52)",
    "--duration": `${duration || 4.5}s`,
    "--size": pageSize || 6
  };
};
var B = (props) => {
  const { bgColor, pageSize = 16, ...other } = props;
  const [styleVal, setStyleVal] = React.useState(() => {
    return getBookStyle(props);
  });
  const pageNode = React.useMemo(() => {
    const array = Array(pageSize).fill(pageSize).map((_, index) => index);
    return array.map((idx) => {
      return /* @__PURE__ */ React.createElement("li", { key: idx.toString() }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 90 120", fill: "currentColor" }, /* @__PURE__ */ React.createElement("path", { d: "M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z" })));
    });
  }, [pageSize]);
  React.useEffect(() => {
    setStyleVal(getBookStyle(props));
  }, [
    bgColor == null ? void 0 : bgColor.start,
    bgColor == null ? void 0 : bgColor.end,
    pageSize,
    other == null ? void 0 : other.pageColor,
    other == null ? void 0 : other.duration,
    other == null ? void 0 : other.shadowColor,
    other == null ? void 0 : other.textColor,
    other == null ? void 0 : other.pageFoldColor
  ]);
  console.log(pageNode);
  return /* @__PURE__ */ React.createElement("div", { className: "icd-book-loading" }, /* @__PURE__ */ React.createElement("div", { className: "icd-load-box" }, /* @__PURE__ */ React.createElement("div", { className: "loader", style: styleVal }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, pageNode))), /* @__PURE__ */ React.createElement("div", { className: "load-text" }, "Loading...")));
};
var BookLoading = React.memo(B);
var book_loadiing_default = BookLoading;

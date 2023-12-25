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

// src/show-markdown/code/index.tsx
var code_exports = {};
__export(code_exports, {
  default: () => code_default
});
module.exports = __toCommonJS(code_exports);
var import_react_icons = require("@iicoding/react-icons");
var import_utils = require("@iicoding/utils");
var import_dom_to_image = __toESM(require("dom-to-image"));
var React = __toESM(require("react"));
var import_react_syntax_highlighter = __toESM(require("../../react-syntax-highlighter"));
var import_svg_circle = __toESM(require("../svg-circle"));
var import_index = require("./index.less");
var iconColor = "#f06292";
var C = (props) => {
  const { className, children } = props;
  const [downing, setDowning] = React.useState(false);
  const downloadRef = React.useRef(null);
  const match = /lang-(\w+)/.exec(className || "");
  const language = (match == null ? void 0 : match[1]) ?? "typescript";
  const handleCopy = React.useCallback(() => {
    (0, import_utils.copy)(children);
  }, []);
  const handleDownload = React.useCallback(() => {
    if (downloadRef.current) {
      setDowning(true);
      import_dom_to_image.default.toPng(downloadRef.current, { quality: 0.95 }).then(function(dataUrl) {
        const link = document.createElement("a");
        link.download = "code.png";
        link.href = dataUrl;
        link.click();
        setDowning(false);
      }).catch((err) => {
        console.log("转换图片出错", err);
        setDowning(false);
      });
    } else {
      console.log("code 下载失败-----");
    }
  }, []);
  if (match) {
    return /* @__PURE__ */ React.createElement("div", { ref: downloadRef, className: "icd-code" }, /* @__PURE__ */ React.createElement("div", { className: "header" }, /* @__PURE__ */ React.createElement("div", { className: "inner" }, /* @__PURE__ */ React.createElement("div", { className: "left" }, /* @__PURE__ */ React.createElement(import_svg_circle.default, null), /* @__PURE__ */ React.createElement("div", { className: "info" }, /* @__PURE__ */ React.createElement("p", { className: "language" }, "language：", /* @__PURE__ */ React.createElement("span", { className: "text" }, language)), /* @__PURE__ */ React.createElement("p", { className: "language" }, "author：", /* @__PURE__ */ React.createElement("span", { className: "text" }, "iiCoding")))), /* @__PURE__ */ React.createElement("span", { className: "right" }, downing ? /* @__PURE__ */ React.createElement(
      import_react_icons.IconComp75Shadow,
      {
        className: "icd-load",
        style: { fontSize: 21 },
        color: iconColor
      }
    ) : /* @__PURE__ */ React.createElement(
      import_react_icons.SingleImgShadow,
      {
        onClick: handleDownload,
        style: { fontSize: 21 },
        color: iconColor
      }
    ), /* @__PURE__ */ React.createElement(
      import_react_icons.IconComp2Shadow,
      {
        onClick: handleCopy,
        style: { fontSize: 18 },
        color: iconColor
      }
    )))), /* @__PURE__ */ React.createElement(
      import_react_syntax_highlighter.default,
      {
        language,
        showLineNumbers: true,
        showInlineLineNumbers: true,
        CodeTag: "div",
        PreTag: "section",
        codeTagProps: { className: `icd-syntax-${language} icd-syntax-code` },
        lineProps: { className: "line" },
        lineNumberStyle: { color: "#fff" },
        lineNumberContainerStyle: { color: "red" },
        customStyle: {
          backgroundColor: "rgba(30,29,29,0.7)",
          paddingTop: "76px",
          backdropFilter: "saturate(2) blur(80px)"
        }
      },
      children
    ));
  }
  return /* @__PURE__ */ React.createElement("code", { className: "icd-no-match" }, children);
};
var CodeBlock = React.memo(C);
var code_default = CodeBlock;

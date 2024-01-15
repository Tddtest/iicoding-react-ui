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

// src/monaco-editor/index.tsx
var monaco_editor_exports = {};
__export(monaco_editor_exports, {
  default: () => monaco_editor_default
});
module.exports = __toCommonJS(monaco_editor_exports);
var import_react = __toESM(require("react"));
var import_react_monaco_editor = __toESM(require("react-monaco-editor"));
var import_classnames = __toESM(require("classnames"));
var import_index = require("./index.less");
var M = (props) => {
  const { className } = props;
  return /* @__PURE__ */ import_react.default.createElement("div", { className: (0, import_classnames.default)("ime", className) }, /* @__PURE__ */ import_react.default.createElement(
    import_react_monaco_editor.default,
    {
      language: "javascript",
      theme: "vs",
      value: "",
      options: {
        // 初始值
        // value: '',
        // 语言
        language: "javascript",
        // 自动布局
        automaticLayout: true,
        theme: "vs",
        // 不要带滚动条的边框
        overviewRulerBorder: true,
        // 是否只读
        readOnly: false,
        tabSize: 2,
        autoIndent: "keep",
        formatOnPaste: true
      },
      ...props
    }
  ));
};
var IcdMonacoEditor = (0, import_react.memo)(M);
var monaco_editor_default = IcdMonacoEditor;

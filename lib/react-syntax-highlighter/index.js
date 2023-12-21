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

// src/react-syntax-highlighter/index.tsx
var react_syntax_highlighter_exports = {};
__export(react_syntax_highlighter_exports, {
  default: () => react_syntax_highlighter_default
});
module.exports = __toCommonJS(react_syntax_highlighter_exports);
var React = __toESM(require("react"));
var import_react_syntax_highlighter = require("react-syntax-highlighter");
var import_bash = __toESM(require("react-syntax-highlighter/dist/cjs/languages/prism/bash"));
var import_javascript = __toESM(require("react-syntax-highlighter/dist/cjs/languages/prism/javascript"));
var import_json = __toESM(require("react-syntax-highlighter/dist/cjs/languages/prism/json"));
var import_less = __toESM(require("react-syntax-highlighter/dist/cjs/languages/prism/less"));
var import_markdown = __toESM(require("react-syntax-highlighter/dist/cjs/languages/prism/markdown"));
var import_scss = __toESM(require("react-syntax-highlighter/dist/cjs/languages/prism/scss"));
var import_typescript = __toESM(require("react-syntax-highlighter/dist/cjs/languages/prism/typescript"));
var import_tsx = __toESM(require("react-syntax-highlighter/dist/esm/languages/prism/tsx"));
var import_dracula = __toESM(require("react-syntax-highlighter/dist/esm/styles/prism/dracula"));
import_react_syntax_highlighter.PrismLight.registerLanguage("tsx", import_tsx.default);
import_react_syntax_highlighter.PrismLight.registerLanguage("scss", import_scss.default);
import_react_syntax_highlighter.PrismLight.registerLanguage("less", import_less.default);
import_react_syntax_highlighter.PrismLight.registerLanguage("bash", import_bash.default);
import_react_syntax_highlighter.PrismLight.registerLanguage("json", import_json.default);
import_react_syntax_highlighter.PrismLight.registerLanguage("markdown", import_markdown.default);
import_react_syntax_highlighter.PrismLight.registerLanguage("javascript", import_javascript.default);
import_react_syntax_highlighter.PrismLight.registerLanguage("typescript", import_typescript.default);
var C = (props) => {
  const { children, theme, ...other } = props;
  return /* @__PURE__ */ React.createElement(import_react_syntax_highlighter.PrismLight, { style: import_dracula.default, ...other }, children);
};
var CodeBlockHighlight = React.memo(C);
var react_syntax_highlighter_default = CodeBlockHighlight;

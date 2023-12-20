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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/show-markdown/index.tsx
var show_markdown_exports = {};
__export(show_markdown_exports, {
  default: () => show_markdown_default
});
module.exports = __toCommonJS(show_markdown_exports);
var import_react = __toESM(require("react"));
var import_markdown_to_jsx = __toESM(require("markdown-to-jsx"));
var import_hr_department = __toESM(require("./hr-department"));
var import_h_title = __toESM(require("./h-title"));
var import_code = __toESM(require("./code"));
var import_pre = __toESM(require("./pre"));
var import_taget_open = __toESM(require("./taget-open"));
var import_img = __toESM(require("./img"));
var import_p = __toESM(require("./p"));
var import_blockquote = __toESM(require("./blockquote"));
var import_table = __toESM(require("./table"));
var import_kbd = __toESM(require("./kbd"));
__reExport(show_markdown_exports, require("./markdown-content-actions"), module.exports);
var import_index = require("./index.less");
var getTitleTag = (level) => {
  return (titleProps) => /* @__PURE__ */ import_react.default.createElement(import_h_title.default, { ...titleProps, level });
};
var S = (props) => {
  const { mdContent, options, overrides } = props;
  return /* @__PURE__ */ import_react.default.createElement(
    import_markdown_to_jsx.default,
    {
      className: "show-markdown",
      options: {
        ...options,
        slugify: (str) => str,
        overrides: {
          h1: { component: getTitleTag(1) },
          h2: { component: getTitleTag(2) },
          h3: { component: getTitleTag(3) },
          h4: { component: getTitleTag(4) },
          h5: { component: getTitleTag(5) },
          h6: { component: getTitleTag(6) },
          code: { component: import_code.default },
          pre: { component: import_pre.default },
          a: { component: import_taget_open.default },
          p: { component: import_p.default },
          hr: { component: import_hr_department.default, props: { type: "bookends" } },
          blockquote: { component: import_blockquote.default },
          table: { component: import_table.default },
          img: { component: import_img.default, props: { alt: "icd-img" } },
          kbd: { component: import_kbd.default },
          ...overrides
        }
      }
    },
    mdContent
  );
};
var ShowMarkdown = (0, import_react.memo)(S);
var show_markdown_default = ShowMarkdown;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./markdown-content-actions")
});

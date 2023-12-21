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
var React = __toESM(require("react"));
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
var import_em = __toESM(require("./em"));
var import_del = __toESM(require("./del"));
var import_ol = __toESM(require("./ol"));
var import_li = __toESM(require("./li"));
var import_ul = __toESM(require("./ul"));
__reExport(show_markdown_exports, require("./markdown-content-actions"), module.exports);
var import_index = require("./index.less");
var getTitleTag = (level) => {
  return (titleProps) => /* @__PURE__ */ React.createElement(import_h_title.default, { ...titleProps, level });
};
var S = (props) => {
  const { mdContent, options } = props;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 0 0",
      style: { position: "absolute", zIndex: -1, opacity: 0 }
    },
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        id: "boxGradient",
        gradientUnits: "userSpaceOnUse",
        x1: "0",
        y1: "0",
        x2: "25",
        y2: "25"
      },
      /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#27FDC7" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#0FC0F5" })
    ), /* @__PURE__ */ React.createElement("linearGradient", { id: "lineGradient" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#27FDC7" }), /* @__PURE__ */ React.createElement(
      "stop",
      {
        offset: "100%",
        stopColor: "#c827fd",
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }
    )), /* @__PURE__ */ React.createElement(
      "path",
      {
        id: "icd-line",
        stroke: "url(#lineGradient)",
        d: "M21 12.3h168v0.1z"
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        id: "icd-box",
        stroke: "url(#boxGradient)",
        d: "M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        id: "icd-check",
        stroke: "url(#boxGradient)",
        d: "M10 13l2 2 5-5"
      }
    ), /* @__PURE__ */ React.createElement("circle", { id: "icd-circle", cx: "13.5", cy: "12.5", r: "10" }))
  ), /* @__PURE__ */ React.createElement(
    import_markdown_to_jsx.default,
    {
      className: "show-markdown",
      options: {
        ...options,
        slugify: (str) => str,
        overrides: {
          hr: { component: import_hr_department.default, props: { type: "bookends" } },
          img: { component: import_img.default, props: { alt: "icd-img" } },
          h1: { component: getTitleTag(1) },
          h2: { component: getTitleTag(2) },
          h3: { component: getTitleTag(3) },
          h4: { component: getTitleTag(4) },
          h5: { component: getTitleTag(5) },
          h6: { component: getTitleTag(6) },
          blockquote: { component: import_blockquote.default },
          code: { component: import_code.default },
          table: { component: import_table.default },
          pre: { component: import_pre.default },
          a: { component: import_taget_open.default },
          kbd: { component: import_kbd.default },
          del: { component: import_del.default },
          p: { component: import_p.default },
          em: { component: import_em.default },
          ul: { component: import_ul.default },
          ol: { component: import_ol.default },
          li: { component: import_li.default }
        }
      }
    },
    mdContent
  ));
};
var ShowMarkdown = React.memo(S);
var show_markdown_default = ShowMarkdown;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./markdown-content-actions")
});

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

// src/show-markdown/p/index.tsx
var p_exports = {};
__export(p_exports, {
  default: () => p_default
});
module.exports = __toCommonJS(p_exports);
var React = __toESM(require("react"));
var import_react_icons = require("@iicoding/react-icons");
var import_utils = require("@iicoding/utils");
var import_tip = __toESM(require("../tip"));
var import_full_icon_background = __toESM(require("../../full-icon-background"));
var import_index = require("./index.less");
var P = (props) => {
  const { children, isBlockquote } = props;
  let isStrong = false;
  React.Children.forEach(children, (child) => {
    if (child) {
      Object.keys(child).forEach((key) => {
        if (key === "type" && child[key] === "strong") {
          isStrong = true;
        }
      });
    }
  });
  if (isStrong && !isBlockquote) {
    return /* @__PURE__ */ React.createElement("div", { className: "icd-note" }, /* @__PURE__ */ React.createElement("div", { className: "icd-tips" }, /* @__PURE__ */ React.createElement(
      import_full_icon_background.default,
      {
        style: {
          fontSize: "32px",
          marginTop: -3
        },
        icon: /* @__PURE__ */ React.createElement(import_react_icons.Full23943367Full, null)
      }
    ), /* @__PURE__ */ React.createElement("span", null, "NOTE：")), children);
  }
  if (Array.isArray(children) && children[0]) {
    let [str] = children;
    const noReplaceStr = "'iiCoding-a-b-c-d-e-f'";
    const replaceStr = "a-b-c-d-e-f-g-iiCoding";
    if ((0, import_utils.isString)(str)) {
      const lastChild = children.at(-1);
      const spliterator = ":::";
      if (str.startsWith(spliterator)) {
        if (children.length === 1) {
          const readChild = str.split(spliterator).map((s) => {
            s.trim();
            if (s.includes("\n")) {
              s = s.replaceAll("\n", replaceStr);
            }
            return s;
          }).filter((s) => s && s !== spliterator);
          if (readChild.length === 1) {
            const [type, emChild] = readChild[0].split(replaceStr);
            return /* @__PURE__ */ React.createElement(import_tip.default, { type: type.trim(), children: emChild });
          }
        } else if (lastChild.endsWith(spliterator)) {
          const len = children.length;
          return children.slice(1, len - 1).map((it) => {
            if (React.isValidElement(it) && (it.type === "em" || // @ts-expect-error
            typeof it.type === "object" && it.type.displayName === "em")) {
              const type = str.split(spliterator)[1];
              return /* @__PURE__ */ React.createElement(import_tip.default, { key: `${type}-${it}`, type: type == null ? void 0 : type.trim(), children: it });
            }
            return it;
          });
        }
      }
      if (str.includes("\n")) {
        if (str.includes("\\n")) {
          str = str.replaceAll("\\n", noReplaceStr);
          str = str.replaceAll("\n", replaceStr);
          str = str.replaceAll(noReplaceStr, "\\n");
        } else {
          str = str.replaceAll("\n", replaceStr);
        }
        const child = str.split(replaceStr);
        return /* @__PURE__ */ React.createElement("div", { className: "icd-p" }, child.map((str2, idx) => {
          return /* @__PURE__ */ React.createElement("span", { className: "icd-span", key: `${str2}-${idx.toString()}` }, str2);
        }));
      }
    }
  }
  return /* @__PURE__ */ React.createElement("div", { className: "icd-p" }, children);
};
var TagP = React.memo(P);
var p_default = TagP;

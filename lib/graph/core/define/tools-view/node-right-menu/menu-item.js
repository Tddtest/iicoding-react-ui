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

// src/graph/core/define/tools-view/node-right-menu/menu-item.tsx
var menu_item_exports = {};
__export(menu_item_exports, {
  MENU_ITEM_CONFIG: () => MENU_ITEM_CONFIG
});
module.exports = __toCommonJS(menu_item_exports);
var import_react = __toESM(require("react"));
var import__ = require("../../../../../");
var import_react_icons = require("@iicoding/react-icons");
var MENU_ITEM_CONFIG = [
  {
    title: "删除节点",
    key: "del",
    icon: /* @__PURE__ */ import_react.default.createElement(
      import__.FullIconBackground,
      {
        style: { fontSize: 20, cursor: "pointer", zIndex: 0 },
        icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.FullIconCc35Full, { className: "icd-reset-child-item-fill" }),
        mode: "double",
        bgStyle: { width: "50%", height: "50%", minWidth: 8 }
      }
    )
  },
  {
    title: "添加断点",
    key: "addDebug",
    icon: /* @__PURE__ */ import_react.default.createElement(
      import__.FullIconBackground,
      {
        style: { fontSize: 28, cursor: "pointer", margin: "-3px -4px 0 -4px", zIndex: 0 },
        icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.FulldebugFull, { className: "icd-reset-child-item-fill" })
      }
    )
  },
  {
    title: "执行流程",
    key: "start",
    icon: /* @__PURE__ */ import_react.default.createElement(
      import__.FullIconBackground,
      {
        style: { fontSize: 18, cursor: "pointer", marginLeft: 1, zIndex: 0 },
        icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.FullStartFull, { className: "icd-reset-child-item-fill" })
      }
    )
  },
  {
    title: "执行当前节点",
    key: "startThatNode",
    icon: /* @__PURE__ */ import_react.default.createElement(
      import__.FullIconBackground,
      {
        style: { fontSize: 26, cursor: "pointer", margin: "-2px -3px 0", zIndex: 0 },
        icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.Full23943173Full, { className: "icd-reset-child-item-fill" })
      }
    )
  },
  {
    title: "从当前节点开始执行",
    key: "startThat",
    icon: /* @__PURE__ */ import_react.default.createElement(
      import__.FullIconBackground,
      {
        style: { fontSize: 25, cursor: "pointer", margin: "-2px -3px 0", zIndex: 0 },
        icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.FullStartThatFull, { className: "icd-reset-child-item-fill" })
      }
    )
  },
  {
    title: "执行流程到当前节点",
    key: "endThat",
    icon: /* @__PURE__ */ import_react.default.createElement(
      import__.FullIconBackground,
      {
        style: { fontSize: 25, cursor: "pointer", margin: "-1px -3px 0 -2px", zIndex: 0 },
        icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.Full23943134Full, { className: "icd-reset-child-item-fill" })
      }
    )
  },
  {
    title: "节点配置",
    key: "addCode",
    icon: /* @__PURE__ */ import_react.default.createElement(
      import__.FullIconBackground,
      {
        style: { fontSize: 26, cursor: "pointer", margin: "-2px -3px 0", zIndex: 0 },
        icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.Full23943084Full, { className: "icd-reset-child-item-fill" })
      }
    )
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MENU_ITEM_CONFIG
});

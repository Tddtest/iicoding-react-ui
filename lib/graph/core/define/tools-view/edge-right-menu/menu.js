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

// src/graph/core/define/tools-view/edge-right-menu/menu.tsx
var menu_exports = {};
__export(menu_exports, {
  default: () => menu_default
});
module.exports = __toCommonJS(menu_exports);
var import_react = __toESM(require("react"));
var import_dropdown_define_ui = __toESM(require("../../../../../dropdown-define-ui"));
var import_glass_box_wrap = __toESM(require("../components/glass-box-wrap"));
var import_index = require("./index.less");
var N = (props) => {
  const { pos, edge, graph, onClose } = props;
  const handleDeleteEdge = () => {
    graph.removeEdge(edge);
    onClose();
  };
  const dropdownRender = () => {
    return /* @__PURE__ */ import_react.default.createElement(import_glass_box_wrap.default, { blur: 60, className: "erm" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "del", onClick: handleDeleteEdge }, "删除"));
  };
  return /* @__PURE__ */ import_react.default.createElement(
    import_dropdown_define_ui.default,
    {
      open: true,
      trigger: ["contextMenu"],
      align: { offset: [pos.x + 20, pos.y] },
      dropdownRender,
      overlayClassName: `icd-overlay-${edge.id}`
    },
    /* @__PURE__ */ import_react.default.createElement("span", null)
  );
};
var Menu = (0, import_react.memo)(N);
var menu_default = Menu;

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

// src/graph/core/define/tools-view/edge-click-menu/menu.tsx
var menu_exports = {};
__export(menu_exports, {
  default: () => menu_default
});
module.exports = __toCommonJS(menu_exports);
var import_react_icons = require("@iicoding/react-icons");
var import_antd = require("antd");
var import_classnames = __toESM(require("classnames"));
var import_react = __toESM(require("react"));
var import_dropdown_define_ui = __toESM(require("../../../../../dropdown-define-ui"));
var import_glass_box_wrap = __toESM(require("../components/glass-box-wrap"));
var import_constants = require("../constants");
var import_index = require("./index.less");
var N = (props) => {
  const { pos, edge } = props;
  const [value, setValue] = (0, import_react.useState)(edge.getData().strokeWidth);
  const [dasharray, setDasharray] = (0, import_react.useState)(
    edge.getData().strokeDasharray || 0
  );
  const initColorRef = (0, import_react.useRef)();
  if (!initColorRef.current && edge.data.stroke) {
    initColorRef.current = edge.data.stroke;
  }
  const handleToggleColor = (color) => {
    const line = { stroke: color };
    edge.setData({ ...edge.getData(), ...line });
    edge.setAttrs({ line: { ...line } });
  };
  const handleToggleWidth = (e) => {
    const line = { ...edge.getAttrs().line, strokeWidth: e.target.value };
    edge.setData({ ...edge.getData(), ...line });
    edge.setAttrs({ line: { ...line } });
    setValue(line.strokeWidth);
  };
  const handleToggleDasharray = (e) => {
    const line = { ...edge.getAttrs().line, strokeDasharray: e.target.value };
    edge.setData({ ...edge.getData(), ...line });
    edge.setAttrs({ line: { ...line } });
    setDasharray(e.target.value);
  };
  const handleColorChange = (value2, hex) => {
    console.log(hex);
  };
  const handleResetColor = () => {
    edge.setAttrs({ ...edge.data });
  };
  const dropdownRender = () => {
    return /* @__PURE__ */ import_react.default.createElement(import_glass_box_wrap.default, { blur: 60, className: "ecm" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "t" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "i" }, /* @__PURE__ */ import_react.default.createElement("span", null, "color："), /* @__PURE__ */ import_react.default.createElement("p", { className: "c" }, /* @__PURE__ */ import_react.default.createElement(import_antd.Tooltip, { title: "恢复" }, /* @__PURE__ */ import_react.default.createElement(import_react_icons.RefreshShadow, { onClick: handleResetColor, className: "reset" })), import_constants.COLORS.map((color) => {
      return /* @__PURE__ */ import_react.default.createElement(
        "span",
        {
          onClick: () => handleToggleColor(color),
          key: color,
          style: { backgroundColor: color }
        }
      );
    }), /* @__PURE__ */ import_react.default.createElement("div", { className: "cpb", id: `icd-color-${edge.id}` }, /* @__PURE__ */ import_react.default.createElement(
      import_antd.ColorPicker,
      {
        onChange: handleColorChange,
        rootClassName: (0, import_classnames.default)("cp"),
        getPopupContainer: () => document.getElementById(`icd-color-${edge.id}`)
      }
    )))), /* @__PURE__ */ import_react.default.createElement("div", { className: "i" }, /* @__PURE__ */ import_react.default.createElement("span", null, "width："), /* @__PURE__ */ import_react.default.createElement("p", { className: "r" }, /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        onChange: handleToggleWidth,
        className: "slider",
        type: "range",
        min: 1,
        max: 10,
        step: 1,
        value
      }
    ))), /* @__PURE__ */ import_react.default.createElement("div", { className: "i" }, /* @__PURE__ */ import_react.default.createElement("span", null, "dashed："), /* @__PURE__ */ import_react.default.createElement("p", { className: "r" }, /* @__PURE__ */ import_react.default.createElement(
      "input",
      {
        onChange: handleToggleDasharray,
        className: "slider",
        type: "range",
        min: 0,
        max: 10,
        step: 1,
        value: dasharray
      }
    )))), /* @__PURE__ */ import_react.default.createElement("div", { className: "b" }));
  };
  return /* @__PURE__ */ import_react.default.createElement(
    import_dropdown_define_ui.default,
    {
      open: true,
      trigger: ["contextMenu"],
      align: { offset: [pos.x + 20, pos.y - 20] },
      dropdownRender,
      overlayClassName: `icd-overlay-${edge.id}`
    },
    /* @__PURE__ */ import_react.default.createElement("span", null)
  );
};
var Menu = (0, import_react.memo)(N);
var menu_default = Menu;

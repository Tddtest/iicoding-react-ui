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

// src/graph/core/define/tools-view/node-click-menu/menu.tsx
var menu_exports = {};
__export(menu_exports, {
  default: () => menu_default
});
module.exports = __toCommonJS(menu_exports);
var import_react_icons = require("@iicoding/react-icons");
var import_antd = require("antd");
var import_classnames = __toESM(require("classnames"));
var import_react = __toESM(require("react"));
var import_dropdown_define_ui = __toESM(require("../../../../..//dropdown-define-ui"));
var import_glass_box_wrap = __toESM(require("../components/glass-box-wrap"));
var import_constants = require("../constants");
var import_index = require("./index.less");
var colorSection = [
  { title: "文本颜色", key: "text", type: "color" },
  { title: "背景颜色", key: "background", type: "color" },
  { title: "字体大小", key: "fontSize", type: "text" }
];
var N = (props) => {
  const { pos, node } = props;
  const [textColor, setTextColor] = (0, import_react.useState)(import_constants.COLORS[0]);
  const [bgColor, setBgColor] = (0, import_react.useState)(import_constants.COLORS[0]);
  const [fontSize, setFontSize] = (0, import_react.useState)(node.data.style.fontSize || 14);
  const initColorRef = (0, import_react.useRef)(
    void 0
  );
  if (!initColorRef.current && node.data.style) {
    initColorRef.current = {
      text: node.data.style.color,
      background: node.data.style.background
    };
  }
  const setNodeData = (nodeData) => {
    const { data = {} } = node;
    node.setData({ ...data, style: { ...data.style, ...nodeData } });
  };
  const handleToggleColor = (item) => {
    if (item.key === "text") {
      setTextColor(item.color);
      setNodeData({ color: item.color });
    } else if (item.key === "background") {
      setBgColor(item.color);
      setNodeData({ background: item.color });
    }
  };
  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    setNodeData({ fontSize: `${e.target.value}px` });
  };
  const handleColorChange = (value, hex, key) => {
    handleToggleColor({ color: hex, key });
  };
  const handleResetColor = (key) => {
    if (initColorRef.current) {
      handleToggleColor({ color: initColorRef.current[key], key });
    }
  };
  const dropdownRender = () => {
    return /* @__PURE__ */ import_react.default.createElement(import_glass_box_wrap.default, { blur: 60, saturate: "180%", className: "ncm" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "t" }, colorSection.map((section) => {
      const { style = {} } = node.data || {};
      const defaultColorValue = section.key === "text" ? style.color || "#212121" : style.background || "#212121";
      return /* @__PURE__ */ import_react.default.createElement("div", { key: section.key, className: "section" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "title" }, /* @__PURE__ */ import_react.default.createElement("span", null, section.title, "："), /* @__PURE__ */ import_react.default.createElement(
        "span",
        {
          style: {
            backgroundColor: section.key === "text" ? textColor : bgColor
          },
          className: "crtColor"
        }
      )), section.type === "color" && /* @__PURE__ */ import_react.default.createElement("div", { className: "color" }, /* @__PURE__ */ import_react.default.createElement(import_antd.Tooltip, { title: "恢复" }, /* @__PURE__ */ import_react.default.createElement(
        import_react_icons.RefreshShadow,
        {
          onClick: () => handleResetColor(section.key),
          className: "reset"
        }
      )), import_constants.COLORS.map((color, index) => {
        return /* @__PURE__ */ import_react.default.createElement(
          "span",
          {
            onClick: () => handleToggleColor({ color, key: section.key }),
            key: `${color}-${index.toString()}`,
            style: { backgroundColor: color }
          }
        );
      }), /* @__PURE__ */ import_react.default.createElement("div", { className: "cpb", id: `icd-color-${node.id}` }, /* @__PURE__ */ import_react.default.createElement(
        import_antd.ColorPicker,
        {
          defaultValue: defaultColorValue,
          onChange: (...args) => handleColorChange(...args, section.key),
          rootClassName: (0, import_classnames.default)("cp"),
          getPopupContainer: () => document.getElementById(`icd-color-${node.id}`)
        }
      ))), section.type === "text" && /* @__PURE__ */ import_react.default.createElement("div", { className: "text" }, /* @__PURE__ */ import_react.default.createElement(
        "input",
        {
          type: "range",
          value: fontSize,
          min: 12,
          max: 36,
          step: 1,
          className: "sl",
          onChange: handleFontSizeChange
        }
      )));
    })), /* @__PURE__ */ import_react.default.createElement("div", { className: "b" }, "规划开发中"));
  };
  return /* @__PURE__ */ import_react.default.createElement(
    import_dropdown_define_ui.default,
    {
      open: true,
      trigger: ["contextMenu"],
      align: { offset: [pos.x + 10, pos.y + 10] },
      dropdownRender,
      overlayClassName: `icd-overlay-${node.id}`
    },
    /* @__PURE__ */ import_react.default.createElement("span", null)
  );
};
var Menu = (0, import_react.memo)(N);
var menu_default = Menu;

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

// src/graph/canvas/index.tsx
var canvas_exports = {};
__export(canvas_exports, {
  default: () => canvas_default
});
module.exports = __toCommonJS(canvas_exports);
var import_react = __toESM(require("react"));
var import_classnames = __toESM(require("classnames"));
var import_ui = require("@iicoding/ui");
var import_use_graph = __toESM(require("../core/use-graph"));
var import_index = require("./index.less");
var G = (props) => {
  const { graphId, data, loading, graphOptions, ...other } = props;
  const graph = (0, import_use_graph.default)(graphId);
  const [showBg, setShowBg] = (0, import_react.useState)(false);
  const containerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    var _a;
    if (containerRef.current) {
      graph.init({
        container: containerRef.current,
        // 设置画布背景颜色
        background: {
          color: "transparent"
        },
        ...graphOptions
      });
      graph.rerender(data);
      (_a = graph.graph) == null ? void 0 : _a.on("node:change:data", ({ node }) => {
        if (node.data.execution.status === 2) {
          setShowBg(true);
        }
      });
    }
  }, [data]);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_ui.SingleLoading, { tip: "流程加载中", loading }), /* @__PURE__ */ import_react.default.createElement("div", { ...other }, /* @__PURE__ */ import_react.default.createElement("div", { className: "canvas-gc", ref: containerRef })), /* @__PURE__ */ import_react.default.createElement("div", { className: (0, import_classnames.default)("canvas-bg", { ["canvas-show"]: showBg }) }));
};
var GraphCanvas = (0, import_react.memo)(G);
var canvas_default = GraphCanvas;

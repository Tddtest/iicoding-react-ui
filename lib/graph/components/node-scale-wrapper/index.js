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

// src/graph/components/node-scale-wrapper/index.tsx
var node_scale_wrapper_exports = {};
__export(node_scale_wrapper_exports, {
  default: () => node_scale_wrapper_default
});
module.exports = __toCommonJS(node_scale_wrapper_exports);
var import_classnames = __toESM(require("classnames"));
var import_react = __toESM(require("react"));
var import_index = require("./index.less");
var dot = ["tl", "tc", "tr", "rc", "br", "bc", "bl", "lc"];
var N = (props) => {
  const {
    children,
    node,
    graph,
    className,
    show,
    minWidth = 100,
    minHeight = 40,
    style,
    ...other
  } = props;
  const nodeRef = (0, import_react.useRef)(null);
  const onResize = (position, type) => {
    if (node && graph) {
      const { newWidth, newHeight, oldHeight, oldWidth } = position;
      switch (type) {
        case "tc": {
          const height = oldHeight - newHeight;
          if (height >= minHeight) {
            node.resize(oldWidth, height, { direction: "top" });
            if (nodeRef.current) {
              nodeRef.current.style.height = `${height}px`;
            }
          }
          break;
        }
        case "rc": {
          if (newWidth >= minWidth) {
            node.resize(newWidth, oldHeight);
            if (nodeRef.current) {
              nodeRef.current.style.width = `${newWidth}px`;
            }
          }
          break;
        }
        case "bc": {
          if (newHeight >= minHeight) {
            node.resize(oldWidth, newHeight);
            if (nodeRef.current) {
              nodeRef.current.style.height = `${newHeight}px`;
            }
          }
          break;
        }
        case "lc": {
          const width = oldWidth - newWidth;
          if (width >= minWidth) {
            node.resize(width, oldHeight, { direction: "left" });
            if (nodeRef.current) {
              nodeRef.current.style.width = `${width}px`;
            }
          }
          break;
        }
        case "tr": {
          const ch = oldHeight - newHeight;
          const height = ch >= minHeight ? ch : minHeight;
          const width = newWidth >= minWidth ? newWidth : minWidth;
          node.resize(width, height, {
            direction: "top-right"
          });
          if (nodeRef.current) {
            nodeRef.current.style.height = `${height}px`;
            nodeRef.current.style.width = `${width}px`;
          }
          break;
        }
        case "br": {
          const width = newWidth >= minWidth ? newWidth : minWidth;
          const height = newHeight >= minHeight ? newHeight : minHeight;
          node.resize(width, height);
          if (nodeRef.current) {
            nodeRef.current.style.height = `${height}px`;
            nodeRef.current.style.width = `${width}px`;
          }
          break;
        }
        case "tl": {
          const ht = oldHeight - newHeight;
          const wd = oldWidth - newWidth;
          const height = ht >= minHeight ? ht : minHeight;
          const width = wd >= minWidth ? wd : minWidth;
          node.resize(width, height, { direction: "top-left" });
          if (nodeRef.current) {
            nodeRef.current.style.height = `${height}px`;
            nodeRef.current.style.width = `${width}px`;
          }
          break;
        }
        case "bl": {
          const wd = oldWidth - newWidth;
          const width = wd >= minWidth ? wd : minWidth;
          const height = newHeight >= minHeight ? newHeight : minHeight;
          node.resize(width, height, { direction: "bottom-left" });
          if (nodeRef.current) {
            nodeRef.current.style.height = `${height}px`;
            nodeRef.current.style.width = `${width}px`;
          }
          break;
        }
        default: {
        }
      }
    }
  };
  const onMouseDown = (e, type) => {
    const mouseDownEc = (e2) => {
      if (node && graph) {
        if (graph.container) {
          const { left, top } = graph.container.getBoundingClientRect();
          const { height, width } = node.getSize();
          const { x, y } = node.getPosition();
          const newWidth = e2.clientX - x - left;
          const newHeight = e2.clientY - y - top;
          onResize(
            {
              oldHeight: height,
              oldWidth: width,
              newHeight,
              newWidth
            },
            type
          );
        }
      }
    };
    const mouseUpEc = () => {
      window.removeEventListener("mousemove", mouseDownEc);
      window.removeEventListener("mouseup", mouseUpEc);
    };
    window.addEventListener("mousemove", mouseDownEc);
    window.addEventListener("mouseup", mouseUpEc);
    e.stopPropagation();
  };
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      ref: nodeRef,
      style: { minWidth, minHeight, ...style },
      className: (0, import_classnames.default)("nsw", className),
      ...other
    },
    /* @__PURE__ */ import_react.default.createElement("div", { className: (0, import_classnames.default)("resize", { ["show"]: show }) }, /* @__PURE__ */ import_react.default.createElement("div", { className: (0, import_classnames.default)("dw", { ["show"]: show }) }, dot.map((d) => /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        key: d,
        className: (0, import_classnames.default)(d, "dot", {
          ["show"]: show
        }),
        onMouseDown: (e) => onMouseDown(e, d)
      }
    )))),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "c" }, children)
  );
};
var NodeScaleWrapper = (0, import_react.memo)(N);
var node_scale_wrapper_default = NodeScaleWrapper;

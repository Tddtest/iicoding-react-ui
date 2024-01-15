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

// src/graph/core/define/nodes/index.ts
var nodes_exports = {};
__export(nodes_exports, {
  textNodePorts: () => textNodePorts
});
module.exports = __toCommonJS(nodes_exports);
var import_x6 = require("@antv/x6");
var import_x6_react_shape = require("@antv/x6-react-shape");
var import_node_click_menu = __toESM(require("../tools-view/node-click-menu"));
var import_node_right_menu = __toESM(require("../tools-view/node-right-menu"));
var import_text_node = __toESM(require("./text-node"));
var getPortConfig = ({ position, stroke: stroke2, fill: fill2 }) => {
  return {
    position,
    attrs: {
      circle: {
        r: 3,
        magnet: true,
        stroke: stroke2,
        strokeWidth: 2,
        fill: fill2,
        style: {
          visibility: "hidden"
        }
      }
    }
  };
};
var stroke = "#c875df";
var fill = "#fff6";
var textNodePorts = {
  groups: {
    top: getPortConfig({
      position: { name: "absolute", args: { x: 0, y: 0 } },
      fill,
      stroke
    }),
    left: getPortConfig({
      position: { name: "absolute", args: { x: 0, y: 0 } },
      fill,
      stroke
    }),
    right: getPortConfig({
      position: { name: "absolute", args: { x: "100%", y: 0 } },
      fill,
      stroke
    }),
    bottom: getPortConfig({
      position: { name: "absolute", args: { x: 0, y: "100%" } },
      fill,
      stroke
    })
  },
  items: [
    { group: "top", args: { x: "40%" } },
    { group: "top", args: { x: "50%" } },
    { group: "top", args: { x: "60%" } },
    { group: "right", args: { y: "35%" } },
    { group: "right", args: { y: "65%" } },
    { group: "bottom", args: { x: "40%" } },
    { group: "bottom", args: { x: "50%" } },
    { group: "bottom", args: { x: "60%" } },
    { group: "left", args: { y: "35%" } },
    { group: "left", args: { y: "65%" } }
  ]
};
import_x6.Graph.registerNodeTool("click", import_node_click_menu.default, true);
import_x6.Graph.registerNodeTool("contextmenu", import_node_right_menu.default, true);
(0, import_x6_react_shape.register)({
  shape: "text-node",
  // 这里x6 定死了类型，需要扩展
  // @ts-ignore
  component: import_text_node.default,
  ports: { ...textNodePorts },
  // portMarkup: [Markup.getForeignObjectMarkup()],
  width: 180,
  height: 60,
  // @ts-ignore
  tools: [{ name: "click", args: { icd: "icd" } }, { name: "contextmenu" }]
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  textNodePorts
});

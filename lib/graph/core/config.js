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

// src/graph/core/config.ts
var config_exports = {};
__export(config_exports, {
  default: () => config_default,
  defaultEdgeLineConfig: () => defaultEdgeLineConfig
});
module.exports = __toCommonJS(config_exports);
var import_x6 = require("@antv/x6");
var import_edge_click_menu = __toESM(require("./define/tools-view/edge-click-menu"));
var import_edge_right_menu = __toESM(require("./define/tools-view/edge-right-menu"));
import_x6.Graph.registerEdgeTool("edgeClick", import_edge_click_menu.default, true);
import_x6.Graph.registerEdgeTool("edgeRightMenu", import_edge_right_menu.default, true);
var defaultEdgeLineConfig = {
  line: {
    // stroke: 'rgba(70, 216, 254, 0.7)',
    stroke: {
      type: "linearGradient",
      stops: [
        { offset: "0%", color: "rgba(70, 216, 254, 0.4)" },
        { offset: "20%", color: "rgba(236,70,254, 0.55)" },
        { offset: "50%", color: "rgba(223,29,97, 0.7)" },
        { offset: "50%", color: "rgba(192,14,211, 0.85)" },
        { offset: "100%", color: "rgba(124,26,216, 1)" }
      ]
    },
    strokeWidth: 3,
    strokeDasharray: 5,
    targetMarker: {
      name: "classic",
      args: { width: 12, height: 16, fill: "rgba(124,26,216, 0.85)" }
    }
  }
};
var flowOptions = {
  // autoResize: document.getElementById('wrapper-flow')!,
  // autoResize: true,
  // grid: {
  //   size: 20,
  //   visible: true,
  //   type: 'dot',
  //   args: [
  //     // { color: '#4a4a4c', thickness: 1 },
  //     // { color: '#e681e6', thickness: 2, factor: 5 },
  //   ],
  // },
  // panning: {
  //   enabled: true,
  //   eventTypes: ['leftMouseDown', 'rightMouseDown', 'mouseWheel'],
  //   modifiers: 'ctrl',
  // },
  mousewheel: {
    enabled: true,
    zoomAtMousePosition: true,
    modifiers: "ctrl",
    minScale: 0.5,
    maxScale: 3
  },
  interacting: {
    // label 是否可以移动
    edgeLabelMovable: true
  },
  connecting: {
    router: "manhattan",
    connector: {
      name: "rounded"
    },
    // connector: 'iiCoding',
    anchor: "center",
    sourceAnchor: {
      name: "center",
      args: { padding: 10 }
    },
    targetAnchor: {
      name: "center",
      args: { padding: 10 }
    },
    // 启用下面的值，会讲箭头至于节点中间
    // connectionPoint: 'anchor',
    allowBlank: false,
    highlight: true,
    // 将要连接时的 触发半径，再指定数值范围内，松开将自动连接
    // @ts-expect-error
    snap: { radius: 50 },
    createEdge() {
      return this.createEdge({
        shape: "edge",
        attrs: { ...defaultEdgeLineConfig },
        data: { ...defaultEdgeLineConfig.line },
        zIndex: -10,
        tools: [
          { name: "edgeClick", args: { icd: "icd" } },
          { name: "edgeRightMenu" }
        ]
      });
    },
    validateEdge: (args) => {
      var _a;
      const { edge } = args;
      return !!((_a = edge == null ? void 0 : edge.target) == null ? void 0 : _a.port);
    },
    validateConnection: ({ sourceMagnet, targetMagnet }) => {
      return !(!targetMagnet || !sourceMagnet);
    }
  },
  highlighting: {
    // 可连接时
    magnetAvailable: {
      name: "stroke",
      args: {
        padding: 4,
        attrs: {
          "stroke-width": 2,
          stroke: "#39ca74",
          circle: { stroke: "#39ca74" }
        }
      }
    },
    // 连接后
    // magnetAdsorbed: {
    //   name: 'stroke',
    //   args: { padding: 2, attrs: { 'stroke-width': 6, stroke: '#08e362' } },
    // },
    default: { name: "opacity" }
  },
  panning: { enabled: true }
  // onPortRendered,
};
var config_default = flowOptions;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultEdgeLineConfig
});

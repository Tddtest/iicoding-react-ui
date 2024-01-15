var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/graph/core/define/edges/index.ts
var edges_exports = {};
__export(edges_exports, {
  BaseEdge: () => BaseEdge,
  CurveEdge: () => CurveEdge,
  GuideEdge: () => GuideEdge
});
module.exports = __toCommonJS(edges_exports);
var import_x6 = require("@antv/x6");
var BaseEdge = class extends import_x6.Shape.Edge {
};
var GuideEdge = class extends BaseEdge {
};
var CurveEdge = class extends BaseEdge {
};
CurveEdge.config({
  shape: "CurveEdge",
  inherit: "edge",
  attrs: {
    line: {
      stroke: "#C2C8D5",
      strokeWidth: 1,
      targetMarker: "block"
    }
  }
});
GuideEdge.config({
  shape: "GuideEdge",
  connector: { name: "iiCoding" },
  inherit: "edge",
  attrs: {
    line: {
      stroke: "#C2C8D5",
      strokeWidth: 1,
      targetMarker: {
        name: "ellipse",
        rx: 10,
        // 椭圆箭头的 x 半径
        ry: 6
        // 椭圆箭头的 y 半径
      }
    }
  },
  zIndex: 2
});
import_x6.Edge.registry.register(
  {
    GuideEdge,
    CurveEdge
  },
  true
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseEdge,
  CurveEdge,
  GuideEdge
});

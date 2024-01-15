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

// src/graph/core/register-action/event/edge.ts
var edge_exports = {};
__export(edge_exports, {
  default: () => edge_default
});
module.exports = __toCommonJS(edge_exports);
var import_utils = require("@iicoding/utils");
var import_helper = require("./helper");
var registerEdgeEvents = (graph) => {
  graph.on("edge:selected", ({ edge }) => {
    const attrs = edge.getAttrs();
    const { line = {} } = attrs;
    let { strokeWidth } = line;
    if (!(0, import_utils.isNumber)(strokeWidth)) {
      strokeWidth = 3;
    }
    edge.setAttrs({
      ...attrs,
      line: { ...attrs.line, strokeWidth: strokeWidth + 1 }
    });
  });
  graph.on("edge:unselected", ({ edge }) => {
    const attrs = edge.getAttrs();
    const { line = {} } = attrs;
    let { strokeWidth } = line;
    if (!(0, import_utils.isNumber)(strokeWidth)) {
      strokeWidth = 3;
    }
    edge.setAttrs({
      ...attrs,
      line: { ...attrs.line, ...line, strokeWidth: strokeWidth - 1 }
    });
  });
  graph.on("edge:change:data", ({ current, edge }) => {
    const oldAttrs = edge.getAttrs();
    switch (current.status) {
      case 2: {
        edge.setAttrs((0, import_helper.setEdgeRunningAttrs)(oldAttrs));
        break;
      }
      case 5: {
        const newAttrs = (0, import_helper.setEdgeWaitingAttrs)({
          line: { ...edge.getAttrs().line }
        });
        edge.setAttrs(newAttrs);
        break;
      }
      case 1:
      case 3:
      case 4: {
        edge.setAttrs((0, import_helper.setEdgeInitAttrs)(oldAttrs, edge.data));
        break;
      }
      default: {
        break;
      }
    }
  });
};
var edge_default = registerEdgeEvents;

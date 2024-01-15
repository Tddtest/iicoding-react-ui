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

// src/graph/core/register-action/event/graph.ts
var graph_exports = {};
__export(graph_exports, {
  default: () => graph_default
});
module.exports = __toCommonJS(graph_exports);
var registerGraphEvents = (graph) => {
  graph.on("blank:click", () => {
    graph.getNodes().forEach((node) => {
      const { info } = node.data || {};
      if (info == null ? void 0 : info.selected) {
        node.setData({ ...node.data, info: { ...info, selected: false } });
      }
    });
    graph.getEdges().forEach((edge) => {
      var _a;
      if ((_a = edge.data) == null ? void 0 : _a.selected) {
        edge.setData({ ...edge.data, selected: false });
      }
    });
  });
};
var graph_default = registerGraphEvents;

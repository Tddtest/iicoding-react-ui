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

// src/graph/core/register-action/event/node.ts
var node_exports = {};
__export(node_exports, {
  default: () => node_default
});
module.exports = __toCommonJS(node_exports);
var registerNodeEvents = (graph) => {
  graph.on("node:click", ({ node }) => {
    graph.getNodes().forEach((nd) => {
      if (nd.id === node.id) {
        node.setData({
          ...node.data,
          info: { ...node.data.info, selected: true }
        });
      } else if (nd.data.info.selected) {
        nd.setData({ ...nd.data, info: { ...nd.data.info, selected: false } });
      }
    });
  });
  graph.on("node:mouseenter", ({ node }) => {
    const ports = node.getPorts();
    ports.forEach((port) => {
      if (port.id) {
        node.setPortProp(port.id, "attrs/circle/style", {
          visibility: "visible"
        });
      }
    });
  });
  graph.on("node:mouseleave", ({ node }) => {
    const ports = node.getPorts();
    ports.forEach((port) => {
      if (port.id) {
        node.setPortProp(port.id, "attrs/circle/style", {
          visibility: "hidden"
        });
      }
    });
  });
  graph.on("node:change:data", ({ node, current }) => {
    const outGoingEdge = graph.getOutgoingEdges(node);
    if (Array.isArray(outGoingEdge) && current.execution && current.execution.status !== 1) {
      outGoingEdge.forEach((edge) => {
        edge.setData({ ...edge.data, status: current.execution.status });
      });
    }
  });
};
var node_default = registerNodeEvents;

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

// src/graph/core/use-graph/index.tsx
var use_graph_exports = {};
__export(use_graph_exports, {
  default: () => use_graph_default,
  useGraph: () => useGraph,
  useUnmountGraph: () => useUnmountGraph
});
module.exports = __toCommonJS(use_graph_exports);
var import_nanoid = require("nanoid");
var import_react = require("react");
var import_X6Graph = __toESM(require("../X6Graph"));
var graphMap = /* @__PURE__ */ new Map();
var useGraph = (graphId) => {
  const [graph] = (0, import_react.useState)(() => {
    const gId = graphId ? graphId.toString() : (0, import_nanoid.nanoid)();
    let existedGraph = graphMap.get(gId);
    if (!existedGraph) {
      existedGraph = new import_X6Graph.default();
      graphMap.set(gId, existedGraph);
    }
    return existedGraph;
  });
  return graph;
};
var useUnmountGraph = (graphId) => {
  (0, import_react.useEffect)(() => {
    return () => {
      const graph = graphMap.get(graphId);
      if (graph) {
        graphMap.delete(graphId);
      }
    };
  }, []);
};
var use_graph_default = useGraph;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useGraph,
  useUnmountGraph
});

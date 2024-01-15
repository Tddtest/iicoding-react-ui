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

// src/graph/core/define/nodes/create-node.ts
var create_node_exports = {};
__export(create_node_exports, {
  default: () => create_node_default,
  defaultData: () => defaultData
});
module.exports = __toCommonJS(create_node_exports);
var import_x6_plugin_dnd = require("@antv/x6-plugin-dnd");
var import_nanoid = require("nanoid");
var import_text_node = __toESM(require("./text-node"));
var defaultData = {
  info: {
    nodeType: "text-node",
    selected: false,
    value: "文本节点"
  },
  execution: {
    status: 1,
    type: 0,
    prevNodeInfo: { status: 1, result: void 0 }
  },
  style: { fontSize: 14 }
};
var dndAndCreateNode = (graph, node, event) => {
  const dnd = new import_x6_plugin_dnd.Dnd({
    target: graph,
    scaled: false
  });
  dnd.start(node, event);
};
var getNodeComponent = (type) => {
  console.log(type);
  return import_text_node.default;
};
var getNodeOptions = (type) => {
  console.log(type);
  return { id: (0, import_nanoid.nanoid)(), shape: "text-node" };
};
var generateNode = (graph, options) => {
  return graph.createNode({
    ...getNodeOptions(options.type),
    data: defaultData,
    component: getNodeComponent(options.type)
  });
};
var createNode = (graph, event, nodeInfo) => {
  const node = generateNode(graph, nodeInfo);
  dndAndCreateNode(graph, node, event);
};
var create_node_default = createNode;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultData
});

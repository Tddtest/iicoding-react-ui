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

// src/graph/core/helper/index.ts
var helper_exports = {};
__export(helper_exports, {
  getGraphData: () => getGraphData,
  handleExecuteFlowAtThatNode: () => handleExecuteFlowAtThatNode,
  handleExecuteFlowFromThatNode: () => handleExecuteFlowFromThatNode,
  handleStartExecuteFlow: () => handleStartExecuteFlow,
  validateFlowNodes: () => validateFlowNodes
});
module.exports = __toCommonJS(helper_exports);
var import_func = require("../helper/func");
var handleStartExecuteFlow = (graph) => {
  const rootNode = graph.getRootNodes()[0];
  if (rootNode) {
    (0, import_func.changeNodeData)({ "execution.status": 2, "execution.type": 1 }, rootNode);
    const flowNodes = graph.getNodes();
    flowNodes.forEach((node) => {
      if (node.id !== rootNode.id) {
        (0, import_func.changeNodeData)({ "execution.status": 5 }, node);
      }
    });
  }
};
var validateFlowNodes = (graph) => {
  if (graph.getRootNodes().length > 1) {
    alert("当前流程不完成整, 请完善流程!");
    return false;
  }
  const nodes = graph.getNodes();
  if (nodes.some((node) => !node.data.info.code && !node.data.info.skip)) {
    alert(
      "当前流程有节点未添加可执行逻辑（且当节点无可执行逻辑时，未设置跳过执行"
    );
    return false;
  }
  return true;
};
var handleExecuteFlowFromThatNode = (node) => {
  (0, import_func.changeNodeData)({ "execution.status": 2, "execution.type": 3 }, node);
};
var handleExecuteFlowAtThatNode = (node) => {
  (0, import_func.changeNodeData)({ "execution.type": 2 }, node);
};
var getGraphData = (graph) => {
  let data = [];
  if (graph) {
    data = graph.toJSON().cells.map((cell) => {
      var _a, _b, _c, _d;
      if (cell.shape === "edge") {
        if (!cell.data) {
          cell.data = ((_a = cell.attrs) == null ? void 0 : _a.line) || {};
          delete cell.attrs;
        }
      }
      if ((_b = cell.shape) == null ? void 0 : _b.includes("node")) {
        delete cell.component;
        delete cell.groups;
        delete cell.ports.groups;
        if (((_d = (_c = cell.data) == null ? void 0 : _c.execution) == null ? void 0 : _d.status) !== void 0) {
          cell.data.execution.status = 1;
        }
        cell.data.style = { fontSize: 14, ...cell.data.style };
        cell.ports.items = cell.ports.items.map(
          (it) => it.id
        );
      }
      return cell;
    });
  }
  return data;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getGraphData,
  handleExecuteFlowAtThatNode,
  handleExecuteFlowFromThatNode,
  handleStartExecuteFlow,
  validateFlowNodes
});

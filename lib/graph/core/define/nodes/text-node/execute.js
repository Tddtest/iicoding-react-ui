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

// src/graph/core/define/nodes/text-node/execute.ts
var execute_exports = {};
__export(execute_exports, {
  executeNodeMethods: () => executeNodeMethods
});
module.exports = __toCommonJS(execute_exports);
var import_func = require("../../../helper/func");
var executeNodeMethods = async (ex, info, node, graph) => {
  const title = `当前执行节点："${info.value}" `;
  console.colorful(`准备执行, ${title}`);
  const { prevNodeInfo, type } = ex;
  const { code, skip } = info || {};
  let status = 3;
  let result = null;
  let isSetRunning = false;
  let nextNodeName = "";
  if (code) {
    console.colorful("已验证可执行逻辑 开始执行");
    try {
      const func = (0, import_func.executeFnByString)("node", "graph", "prevNodeInfo", code);
      result = await func(node, graph, prevNodeInfo);
      console.colorful("执行成功，结果为:", result);
      status = 3;
      if (![2, 4].includes(type)) {
        const outEdges = graph.getOutgoingEdges(node);
        if (Array.isArray(outEdges)) {
          outEdges.forEach((edge) => {
            const targetNode = edge.getTargetNode();
            if (targetNode) {
              console.colorful(
                `已发现目标节点 - ${targetNode.data.info.value} - 即将设置节点的可执行状态`
              );
              nextNodeName = targetNode.data.info.value;
              if (outEdges.length === 1 || targetNode.data.info.subject) {
                isSetRunning = true;
                targetNode.setData({
                  ...targetNode.data,
                  execution: {
                    ...targetNode.data.execution,
                    status: 2,
                    prevNodeInfo: { result }
                  }
                });
              } else {
                console.colorful(
                  "下一个节点：",
                  targetNode.data.info.value,
                  "不是主节点且不包含可执行逻辑"
                );
              }
            }
          });
        }
      }
    } catch (error) {
      console.colorful("执行失败,错误为:", error);
      status = 4;
      if (!skip) {
        graph.getNodes().forEach((nd) => {
          if ([2, 4, 5].includes(nd.data.execution.status)) {
            nd.setData({
              ...nd.data,
              execution: { ...nd.data.execution, status: 1 }
            });
          }
        });
      } else {
        console.colorful(
          `${title} 没有可执行逻辑, 跳过无可执行逻辑节点功能正在开发中----`
        );
      }
      return;
    }
  } else {
    console.colorful(
      `${title} 没有可执行逻辑, 跳过无可执行逻辑节点功能正在开发中----`
    );
  }
  if (!nextNodeName && !isSetRunning && graph) {
    console.colorful("当前流程全部执行完成");
    graph.getNodes().forEach((nd) => {
      if (nd.data.execution.status === 5) {
        nd.setData({
          ...nd.data,
          execution: { ...nd.data.execution, status: 1 }
        });
      }
    });
  } else {
    console.colorful(
      `${title} 执行完成!, 即将进入下一个节点执行，下一个节点为：`,
      nextNodeName
    );
  }
  node.setData({ ...node.data, execution: { ...ex, status } });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  executeNodeMethods
});

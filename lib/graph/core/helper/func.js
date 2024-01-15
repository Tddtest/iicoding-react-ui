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

// src/graph/core/helper/func.ts
var func_exports = {};
__export(func_exports, {
  changeNodeData: () => changeNodeData,
  changeNodeStatus: () => changeNodeStatus,
  executeFnByString: () => executeFnByString
});
module.exports = __toCommonJS(func_exports);
var import_utils = require("@iicoding/utils");
var import_create_node = require("../define/nodes/create-node");
function executeFnByString(...args) {
  try {
    return new Function(...args);
  } catch (error) {
    return (...args2) => {
      console.colorful("执行出错，请检查参数：", ...args2, error);
    };
  }
}
function changeNodeStatus(node, status) {
  var _a;
  node.setData({
    ...node.data,
    execution: { ...(_a = node.data) == null ? void 0 : _a.execution, status }
  });
}
var parseObject = (path, value, object) => {
  const keys = path.split(".");
  const len = keys.length - 1;
  keys.reduce((previousValue, currentValue, currentIndex) => {
    if (!previousValue) {
      return previousValue;
    }
    if (len === currentIndex) {
      previousValue[currentValue] = value;
    }
    return previousValue[currentValue];
  }, object);
};
function changeNodeData(source, node) {
  var _a;
  const data = { ...node.data || import_create_node.defaultData, update: !((_a = node.data) == null ? void 0 : _a.update) };
  source = (0, import_utils.isString)(source) ? [source] : source;
  Object.entries(source).forEach((val) => {
    const [key, value] = val;
    parseObject(key, value, data);
  });
  node.setData({ ...data });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  changeNodeData,
  changeNodeStatus,
  executeFnByString
});

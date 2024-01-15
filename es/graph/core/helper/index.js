function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import { utils } from 'utils';
import { changeNodeData } from "../helper/func";
export var handleStartExecuteFlow = function handleStartExecuteFlow(graph) {
  var rootNode = graph.getRootNodes()[0];
  if (rootNode) {
    // 跟节点变成执行状态
    changeNodeData({
      'execution.status': 2,
      'execution.type': 1
    }, rootNode);
    var flowNodes = graph.getNodes();
    flowNodes.forEach(function (node) {
      if (node.id !== rootNode.id) {
        // 其余的节点变成等待执行
        changeNodeData({
          'execution.status': 5
        }, node);
      }
    });
  }
};

// 检查流程是否可执行
export var validateFlowNodes = function validateFlowNodes(graph) {
  if (graph.getRootNodes().length > 1) {
    // utils.message.warning('当前流程不完整，请完善流程!');
    alert('当前流程不完成整, 请完善流程!');
    return false;
  }

  // 整个流程是否包含没有可执行逻辑的节点，如果有，是否设置可跳过
  var nodes = graph.getNodes();
  if (nodes.some(function (node) {
    return !node.data.info.code && !node.data.info.skip;
  })) {
    // utils.message.warning(
    //   '当前流程有节点未添加可执行逻辑（且当节点无可执行逻辑时，未设置跳过执行',
    // );

    alert('当前流程有节点未添加可执行逻辑（且当节点无可执行逻辑时，未设置跳过执行');
    return false;
  }
  return true;
};

// 从当前节点开始执行
export var handleExecuteFlowFromThatNode = function handleExecuteFlowFromThatNode(node) {
  // 跟节点变成执行状态
  changeNodeData({
    'execution.status': 2,
    'execution.type': 3
  }, node);
};

// 执行流程到当前节点
export var handleExecuteFlowAtThatNode = function handleExecuteFlowAtThatNode(node) {
  // 跟节点变成执行状态
  changeNodeData({
    'execution.type': 2
  }, node);
};

// 获取数据
export var getGraphData = function getGraphData(graph) {
  var data = [];
  if (graph) {
    data = graph.toJSON().cells.map(function (cell) {
      var _cell$shape;
      if (cell.shape === 'edge') {
        if (!cell.data) {
          var _cell$attrs;
          cell.data = ((_cell$attrs = cell.attrs) === null || _cell$attrs === void 0 ? void 0 : _cell$attrs.line) || {};
          delete cell.attrs;
        }
      }
      if ((_cell$shape = cell.shape) !== null && _cell$shape !== void 0 && _cell$shape.includes('node')) {
        var _cell$data;
        delete cell.component;
        delete cell.groups;
        delete cell.ports.groups;
        if (((_cell$data = cell.data) === null || _cell$data === void 0 || (_cell$data = _cell$data.execution) === null || _cell$data === void 0 ? void 0 : _cell$data.status) !== undefined) {
          cell.data.execution.status = 1;
        }
        cell.data.style = _objectSpread({
          fontSize: 14
        }, cell.data.style);
        cell.ports.items = cell.ports.items.map(function (it) {
          return it.id;
        });
      }
      return cell;
    });
  }
  return data;
};
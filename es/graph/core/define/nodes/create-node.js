function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { Dnd } from '@antv/x6-plugin-dnd';
import { nanoid } from 'nanoid';
import TextNode from "./text-node";
export var defaultData = {
  info: {
    nodeType: 'text-node',
    selected: false,
    value: '文本节点'
  },
  execution: {
    status: 1,
    type: 0,
    prevNodeInfo: {
      status: 1,
      result: undefined
    }
  },
  style: {
    fontSize: 14
  }
};
var dndAndCreateNode = function dndAndCreateNode(graph, node, event) {
  var dnd = new Dnd({
    target: graph,
    scaled: false
  });
  dnd.start(node, event);
};
var getNodeComponent = function getNodeComponent(type) {
  console.log(type);
  return TextNode;
};
var getNodeOptions = function getNodeOptions(type) {
  console.log(type);
  return {
    id: nanoid(),
    shape: 'text-node'
  };
};
var generateNode = function generateNode(graph, options) {
  return graph.createNode(_objectSpread(_objectSpread({}, getNodeOptions(options.type)), {}, {
    data: defaultData,
    component: getNodeComponent(options.type)
  }));
};
var createNode = function createNode(graph, event, nodeInfo) {
  var node = generateNode(graph, nodeInfo);
  dndAndCreateNode(graph, node, event);
};
export default createNode;
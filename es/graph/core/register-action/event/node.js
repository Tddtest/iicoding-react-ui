function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var registerNodeEvents = function registerNodeEvents(graph) {
  // 节点点击
  graph.on('node:click', function (_ref) {
    var node = _ref.node;
    // 改变节点选中状态
    graph.getNodes().forEach(function (nd) {
      // 设置当前的
      if (nd.id === node.id) {
        node.setData(_objectSpread(_objectSpread({}, node.data), {}, {
          info: _objectSpread(_objectSpread({}, node.data.info), {}, {
            selected: true
          })
        }));
      } else if (nd.data.info.selected) {
        nd.setData(_objectSpread(_objectSpread({}, nd.data), {}, {
          info: _objectSpread(_objectSpread({}, nd.data.info), {}, {
            selected: false
          })
        }));
      }
    });
  });

  // 节点移入的时候
  graph.on('node:mouseenter', function (_ref2) {
    var node = _ref2.node;
    var ports = node.getPorts();
    ports.forEach(function (port) {
      if (port.id) {
        node.setPortProp(port.id, 'attrs/circle/style', {
          visibility: 'visible'
        });
      }

      // 自定义时
      // if (port.id) {
      //   node.setPortProp(port.id, 'attrs/fo', { visibility: 'visible' });
      // }
    });
  });

  // 节点移出的时候
  graph.on('node:mouseleave', function (_ref3) {
    var node = _ref3.node;
    var ports = node.getPorts();
    ports.forEach(function (port) {
      if (port.id) {
        node.setPortProp(port.id, 'attrs/circle/style', {
          visibility: 'hidden'
        });
      }

      // if (port.id) {
      //   node.setPortProp(port.id, 'attrs/fo', { visibility: 'hidden' });
      // }
    });
  });

  graph.on('node:change:data', function (_ref4) {
    var node = _ref4.node,
      current = _ref4.current;
    // 节点执行的时候，让相关联的边 变成在执行的状态
    var outGoingEdge = graph.getOutgoingEdges(node);
    if (Array.isArray(outGoingEdge) && current.execution && current.execution.status !== 1) {
      outGoingEdge.forEach(function (edge) {
        edge.setData(_objectSpread(_objectSpread({}, edge.data), {}, {
          status: current.execution.status
        }));
      });
    }
  });
};
export default registerNodeEvents;
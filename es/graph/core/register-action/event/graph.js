function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var registerGraphEvents = function registerGraphEvents(graph) {
  graph.on('blank:click', function () {
    // 取消选中节点
    graph.getNodes().forEach(function (node) {
      var _ref = node.data || {},
        info = _ref.info;
      if (info !== null && info !== void 0 && info.selected) {
        node.setData(_objectSpread(_objectSpread({}, node.data), {}, {
          info: _objectSpread(_objectSpread({}, info), {}, {
            selected: false
          })
        }));
        // const { width, height } = node.getSize();
        // node.setSize({ width: width - 20, height: height - 20 });
      }
    });
    // 取消选中边
    graph.getEdges().forEach(function (edge) {
      var _edge$data;
      if ((_edge$data = edge.data) !== null && _edge$data !== void 0 && _edge$data.selected) {
        edge.setData(_objectSpread(_objectSpread({}, edge.data), {}, {
          selected: false
        }));
      }
    });
  });
};
export default registerGraphEvents;
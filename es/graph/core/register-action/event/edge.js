function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { isNumber } from '@iicoding/utils';
import { setEdgeRunningAttrs, setEdgeWaitingAttrs, setEdgeInitAttrs } from "./helper";
var registerEdgeEvents = function registerEdgeEvents(graph) {
  graph.on('edge:selected', function (_ref) {
    var edge = _ref.edge;
    var attrs = edge.getAttrs();
    var _attrs$line = attrs.line,
      line = _attrs$line === void 0 ? {} : _attrs$line;
    var strokeWidth = line.strokeWidth;
    if (!isNumber(strokeWidth)) {
      strokeWidth = 3;
    }
    edge.setAttrs(_objectSpread(_objectSpread({}, attrs), {}, {
      line: _objectSpread(_objectSpread({}, attrs.line), {}, {
        strokeWidth: strokeWidth + 1
      })
    }));
  });
  graph.on('edge:unselected', function (_ref2) {
    var edge = _ref2.edge;
    var attrs = edge.getAttrs();
    var _attrs$line2 = attrs.line,
      line = _attrs$line2 === void 0 ? {} : _attrs$line2;
    var strokeWidth = line.strokeWidth;
    if (!isNumber(strokeWidth)) {
      strokeWidth = 3;
    }
    edge.setAttrs(_objectSpread(_objectSpread({}, attrs), {}, {
      line: _objectSpread(_objectSpread(_objectSpread({}, attrs.line), line), {}, {
        strokeWidth: strokeWidth - 1
      })
    }));
  });

  // 边的数据改变的时候
  graph.on('edge:change:data', function (_ref3) {
    var current = _ref3.current,
      edge = _ref3.edge;
    var oldAttrs = edge.getAttrs();
    switch (current.status) {
      // 执行中的状态
      case 2:
        {
          edge.setAttrs(setEdgeRunningAttrs(oldAttrs));
          break;
        }
      // 等待执行的状态
      case 5:
        {
          var newAttrs = setEdgeWaitingAttrs({
            line: _objectSpread({}, edge.getAttrs().line)
          });
          edge.setAttrs(newAttrs);
          break;
        }
      case 1:
      case 3:
      case 4:
        {
          edge.setAttrs(setEdgeInitAttrs(oldAttrs, edge.data));
          break;
        }

      // 其他状态
      default:
        {
          break;
        }
    }
  });
};
export default registerEdgeEvents;
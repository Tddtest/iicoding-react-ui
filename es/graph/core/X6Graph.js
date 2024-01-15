function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { Graph } from '@antv/x6';
import flowOptions from "./config";
import registerAction from "./register-action";
import "./define/nodes";
import "./define/connector";
var X6Graph = /*#__PURE__*/_createClass(function X6Graph() {
  var _this = this;
  _classCallCheck(this, X6Graph);
  _defineProperty(this, "graph", void 0);
  _defineProperty(this, "init", function (options) {
    if (!_this.graph) {
      var opt = _objectSpread(_objectSpread({}, flowOptions), options);
      _this.graph = new Graph(opt);
      _this.register();
      if (opt.disabledScroll) {
        _this.graph.lockScroller();
      }
      if (opt.disabledCV) {
        _this.graph.toggleClipboard(false);
      }
    }
  });
  // @ts-ignore
  _defineProperty(this, "rerender", function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length) {
      try {
        var _this$graph;
        (_this$graph = _this.graph) === null || _this$graph === void 0 || _this$graph.fromJSON.apply(_this$graph, args);
      } catch (error) {
        console.log('出错了', error);
      }
    }
  });
  _defineProperty(this, "dispose", function () {
    if (_this.graph) {
      _this.graph.clearCells();
      _this.graph.dispose();
    }
  });
  _defineProperty(this, "register", function () {
    if (_this.graph) {
      registerAction(_this.graph);
    }
  });
});
export default X6Graph;
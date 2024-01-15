function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// eslint-disable-next-line max-classes-per-file
import { Shape, Edge } from '@antv/x6';

// 方便扩展连接线相关需求，保留一个基类。
export var BaseEdge = /*#__PURE__*/function (_Shape$Edge) {
  _inherits(BaseEdge, _Shape$Edge);
  var _super = _createSuper(BaseEdge);
  function BaseEdge() {
    _classCallCheck(this, BaseEdge);
    return _super.apply(this, arguments);
  }
  return _createClass(BaseEdge);
}(Shape.Edge);
export var GuideEdge = /*#__PURE__*/function (_BaseEdge) {
  _inherits(GuideEdge, _BaseEdge);
  var _super2 = _createSuper(GuideEdge);
  function GuideEdge() {
    _classCallCheck(this, GuideEdge);
    return _super2.apply(this, arguments);
  }
  return _createClass(GuideEdge);
}(BaseEdge);
export var CurveEdge = /*#__PURE__*/function (_BaseEdge2) {
  _inherits(CurveEdge, _BaseEdge2);
  var _super3 = _createSuper(CurveEdge);
  function CurveEdge() {
    _classCallCheck(this, CurveEdge);
    return _super3.apply(this, arguments);
  }
  return _createClass(CurveEdge);
}(BaseEdge);
CurveEdge.config({
  shape: 'CurveEdge',
  inherit: 'edge',
  attrs: {
    line: {
      stroke: '#C2C8D5',
      strokeWidth: 1,
      targetMarker: 'block'
    }
  }
});
GuideEdge.config({
  shape: 'GuideEdge',
  connector: {
    name: 'iiCoding'
  },
  inherit: 'edge',
  attrs: {
    line: {
      stroke: '#C2C8D5',
      strokeWidth: 1,
      targetMarker: {
        name: 'ellipse',
        rx: 10,
        // 椭圆箭头的 x 半径
        ry: 6 // 椭圆箭头的 y 半径
      }
    }
  },

  zIndex: 2
});
Edge.registry.register({
  GuideEdge: GuideEdge,
  CurveEdge: CurveEdge
}, true);
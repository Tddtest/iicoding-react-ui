function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @auth: dmx
 * @time: 2024/1/6
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { ToolsView } from '@antv/x6';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./menu";
var NodeClickMenu = /*#__PURE__*/function (_ToolsView$ToolItem) {
  _inherits(NodeClickMenu, _ToolsView$ToolItem);
  var _super = _createSuper(NodeClickMenu);
  function NodeClickMenu() {
    var _this;
    _classCallCheck(this, NodeClickMenu);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "root", void 0);
    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      _this.toggleMenu(false);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      if (e.target) {
        var id = _this.cellView.cell.id;
        if (id) {
          var className = "icd-overlay-".concat(id);
          var overlayNode = document.getElementsByClassName(className)[0];
          if (overlayNode && overlayNode.contains(e.target)) {
            return;
          }
        }
      }
      _this.closeMenu();
    });
    return _this;
  }
  _createClass(NodeClickMenu, [{
    key: "toggleMenu",
    value: function toggleMenu(visible, pos) {
      if (!visible) {
        var _this$root;
        (_this$root = this.root) === null || _this$root === void 0 || _this$root.unmount();
        this.root = undefined;
        document.removeEventListener('mousedown', this.onMouseDown);
      } else if (pos) {
        this.root = ReactDOM.createRoot(this.container);
        this.root.render( /*#__PURE__*/React.createElement(Menu, {
          node: this.cellView.cell,
          graph: this.cellView.graph,
          pos: pos,
          onClose: this.closeMenu
        }));
        document.addEventListener('mousedown', this.onMouseDown);
      }
    }
  }, {
    key: "onContextMenu",
    value: function onContextMenu(_ref) {
      var e = _ref.e;
      this.toggleMenu(true, {
        x: e.clientX,
        y: e.clientY
      });
    }
  }, {
    key: "delegateEvents",
    value: function delegateEvents() {
      this.cellView.on('cell:click', this.onContextMenu, this);
      return _get(_getPrototypeOf(NodeClickMenu.prototype), "delegateEvents", this).call(this);
    }
  }, {
    key: "onRemove",
    value: function onRemove() {
      this.cellView.off('cell:click', this.onContextMenu, this);
    }
  }]);
  return NodeClickMenu;
}(ToolsView.ToolItem);
NodeClickMenu.config({
  tagName: 'div',
  isSVGElement: false,
  className: 'icd-node-click-menu'
});

// Graph.registerNodeTool();

export default NodeClickMenu;
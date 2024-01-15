function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import { CurveEdge, GuideEdge } from 'src/components/x6/core/define/edges';
// import { onPortRendered } from './define/ports';
import { Graph } from '@antv/x6';
import EdgeClickMenu from "./define/tools-view/edge-click-menu";
import EdgeRightMenu from "./define/tools-view/edge-right-menu";
Graph.registerEdgeTool('edgeClick', EdgeClickMenu, true);
Graph.registerEdgeTool('edgeRightMenu', EdgeRightMenu, true);
export var defaultEdgeLineConfig = {
  line: {
    // stroke: 'rgba(70, 216, 254, 0.7)',
    stroke: {
      type: 'linearGradient',
      stops: [{
        offset: '0%',
        color: 'rgba(70, 216, 254, 0.4)'
      }, {
        offset: '20%',
        color: 'rgba(236,70,254, 0.55)'
      }, {
        offset: '50%',
        color: 'rgba(223,29,97, 0.7)'
      }, {
        offset: '50%',
        color: 'rgba(192,14,211, 0.85)'
      }, {
        offset: '100%',
        color: 'rgba(124,26,216, 1)'
      }]
    },
    strokeWidth: 3,
    strokeDasharray: 5,
    targetMarker: {
      name: 'classic',
      args: {
        width: 12,
        height: 16,
        fill: 'rgba(124,26,216, 0.85)'
      }
    }
  }
};
var flowOptions = {
  // autoResize: document.getElementById('wrapper-flow')!,
  // autoResize: true,
  // grid: {
  //   size: 20,
  //   visible: true,
  //   type: 'dot',
  //   args: [
  //     // { color: '#4a4a4c', thickness: 1 },
  //     // { color: '#e681e6', thickness: 2, factor: 5 },
  //   ],
  // },
  // panning: {
  //   enabled: true,
  //   eventTypes: ['leftMouseDown', 'rightMouseDown', 'mouseWheel'],
  //   modifiers: 'ctrl',
  // },
  mousewheel: {
    enabled: true,
    zoomAtMousePosition: true,
    modifiers: 'ctrl',
    minScale: 0.5,
    maxScale: 3
  },
  interacting: {
    // label 是否可以移动
    edgeLabelMovable: true
  },
  connecting: {
    router: 'manhattan',
    connector: {
      name: 'rounded'
    },
    // connector: 'iiCoding',
    anchor: 'center',
    sourceAnchor: {
      name: 'center',
      args: {
        padding: 10
      }
    },
    targetAnchor: {
      name: 'center',
      args: {
        padding: 10
      }
    },
    // 启用下面的值，会讲箭头至于节点中间
    // connectionPoint: 'anchor',
    allowBlank: false,
    highlight: true,
    // 将要连接时的 触发半径，再指定数值范围内，松开将自动连接
    // @ts-expect-error
    snap: {
      radius: 50
    },
    createEdge: function createEdge() {
      return this.createEdge({
        shape: 'edge',
        attrs: _objectSpread({}, defaultEdgeLineConfig),
        data: _objectSpread({}, defaultEdgeLineConfig.line),
        zIndex: -10,
        tools: [{
          name: 'edgeClick',
          args: {
            icd: 'icd'
          }
        }, {
          name: 'edgeRightMenu'
        }]
      });
    },
    validateEdge: function validateEdge(args) {
      var _edge$target;
      var edge = args.edge;
      return !!(edge !== null && edge !== void 0 && (_edge$target = edge.target) !== null && _edge$target !== void 0 && _edge$target.port);
    },
    validateConnection: function validateConnection(_ref) {
      var sourceMagnet = _ref.sourceMagnet,
        targetMagnet = _ref.targetMagnet;
      // 不能自己连自己
      // if (sourceView === targetView) {
      //   return false;
      // }s

      // const pst = targetMagnet.getAttribute('port-group');
      //
      // return !(!pst || pst === 'bottom');

      return !(!targetMagnet || !sourceMagnet);
    }
  },
  highlighting: {
    // 可连接时
    magnetAvailable: {
      name: 'stroke',
      args: {
        padding: 4,
        attrs: {
          'stroke-width': 2,
          stroke: '#39ca74',
          circle: {
            stroke: '#39ca74'
          }
        }
      }
    },
    // 连接后
    // magnetAdsorbed: {
    //   name: 'stroke',
    //   args: { padding: 2, attrs: { 'stroke-width': 6, stroke: '#08e362' } },
    // },
    default: {
      name: 'opacity'
    }
  },
  panning: {
    enabled: true
  }
  // onPortRendered,
};

export default flowOptions;
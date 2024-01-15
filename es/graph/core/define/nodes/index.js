function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import {
//  Markup
Graph } from '@antv/x6';
import { register } from '@antv/x6-react-shape';
import NodeClickMenu from "../tools-view/node-click-menu";
import NodeRightMenu from "../tools-view/node-right-menu";
import TextNode from "./text-node";
var getPortConfig = function getPortConfig(_ref) {
  var position = _ref.position,
    stroke = _ref.stroke,
    fill = _ref.fill;
  return {
    position: position,
    attrs: {
      circle: {
        r: 3,
        magnet: true,
        stroke: stroke,
        strokeWidth: 2,
        fill: fill,
        style: {
          visibility: 'hidden'
        }
      }
    }
  };

  // return {
  //   position: { name: position },
  //   attrs: {
  //     fo: {
  //       width: 12,
  //       height: 12,
  //       x: -6,
  //       y: -6,
  //       magnet: 'true',
  //       visibility: 'hidden',
  //     },
  //   },
  // };
};

var stroke = '#c875df';
var fill = '#fff6';
export var textNodePorts = {
  groups: {
    top: getPortConfig({
      position: {
        name: 'absolute',
        args: {
          x: 0,
          y: 0
        }
      },
      fill: fill,
      stroke: stroke
    }),
    left: getPortConfig({
      position: {
        name: 'absolute',
        args: {
          x: 0,
          y: 0
        }
      },
      fill: fill,
      stroke: stroke
    }),
    right: getPortConfig({
      position: {
        name: 'absolute',
        args: {
          x: '100%',
          y: 0
        }
      },
      fill: fill,
      stroke: stroke
    }),
    bottom: getPortConfig({
      position: {
        name: 'absolute',
        args: {
          x: 0,
          y: '100%'
        }
      },
      fill: fill,
      stroke: stroke
    })
  },
  items: [{
    group: 'top',
    args: {
      x: '40%'
    }
  }, {
    group: 'top',
    args: {
      x: '50%'
    }
  }, {
    group: 'top',
    args: {
      x: '60%'
    }
  }, {
    group: 'right',
    args: {
      y: '35%'
    }
  }, {
    group: 'right',
    args: {
      y: '65%'
    }
  }, {
    group: 'bottom',
    args: {
      x: '40%'
    }
  }, {
    group: 'bottom',
    args: {
      x: '50%'
    }
  }, {
    group: 'bottom',
    args: {
      x: '60%'
    }
  }, {
    group: 'left',
    args: {
      y: '35%'
    }
  }, {
    group: 'left',
    args: {
      y: '65%'
    }
  }]
};

// 注册节点工具 - 右键菜单
Graph.registerNodeTool('click', NodeClickMenu, true);
Graph.registerNodeTool('contextmenu', NodeRightMenu, true);

// 注册节点
register({
  shape: 'text-node',
  // 这里x6 定死了类型，需要扩展
  // @ts-ignore
  component: TextNode,
  ports: _objectSpread({}, textNodePorts),
  // portMarkup: [Markup.getForeignObjectMarkup()],
  width: 180,
  height: 60,
  // @ts-ignore
  tools: [{
    name: 'click',
    args: {
      icd: 'icd'
    }
  }, {
    name: 'contextmenu'
  }]
});
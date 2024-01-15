function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { isNumber, isObject, isString } from '@iicoding/utils';
// color rgba 格式的 主要修改透明度
var changeRgba = function changeRgba(color, opacity) {
  var splitColor = color.split(', ');
  splitColor[splitColor.length - 1] = "".concat(opacity, ")");
  return splitColor.join(', ');
};
export var getLine = function getLine(attrs) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var line = attrs.line;
  var newline = _objectSpread(_objectSpread({}, line), {}, {
    stroke: 'rgba(70, 216, 254, 1)',
    strokeWidth: line !== null && line !== void 0 && line.strokeWidth ? +line.strokeWidth : 2
  });
  if (isObject(line)) {
    var _line$stroke = line.stroke,
      stroke = _line$stroke === void 0 ? '' : _line$stroke;
    if (isObject(stroke) && stroke.stops) {
      newline.stroke = stroke;
    }
    if (isString(stroke)) {
      var splitColor = stroke.split(', ');
      splitColor[splitColor.length - 1] = "".concat(opacity, ")");
      newline.stroke = splitColor.join(', ');
    }
  }
  return newline;
};
var getMarker = function getMarker(oldAttrs, fill) {
  var _oldAttrs$line, _oldAttrs$line2;
  var newTargetMarker = {};
  if (isString((_oldAttrs$line = oldAttrs.line) === null || _oldAttrs$line === void 0 ? void 0 : _oldAttrs$line.targetMarker)) {
    newTargetMarker = {
      name: oldAttrs.line.targetMarker
    };
  }
  if (isObject((_oldAttrs$line2 = oldAttrs.line) === null || _oldAttrs$line2 === void 0 ? void 0 : _oldAttrs$line2.targetMarker)) {
    var _oldAttrs$line3;
    newTargetMarker = _objectSpread({}, (_oldAttrs$line3 = oldAttrs.line) === null || _oldAttrs$line3 === void 0 ? void 0 : _oldAttrs$line3.targetMarker);
  }
  return _objectSpread(_objectSpread({}, newTargetMarker), {}, {
    attrs: _objectSpread({}, newTargetMarker.attrs),
    fill: fill
  });
};
var style = {
  animation: 'running-line 30s infinite linear'
};

// 正在执行的状态
export var setEdgeRunningAttrs = function setEdgeRunningAttrs(oldAttrs) {
  var _oldAttrs$line4, _oldAttrs$line5;
  var newAttrs = _objectSpread({}, oldAttrs);
  var startColor = getLine(oldAttrs, 0.3);
  var endColor = getLine(oldAttrs, 1);
  var targetMarker = getMarker(oldAttrs, endColor.stroke);
  var strokeWidth = (isNumber((_oldAttrs$line4 = oldAttrs.line) === null || _oldAttrs$line4 === void 0 ? void 0 : _oldAttrs$line4.strokeWidth) ? oldAttrs.line.strokeWidth : 3) + 1;
  newAttrs.line = _objectSpread(_objectSpread({}, oldAttrs.line), {}, {
    stroke: {
      type: 'linearGradient',
      stops: [{
        offset: '0%',
        color: startColor.stroke
      }, {
        offset: '100%',
        color: endColor.stroke
      }]
    },
    style: style,
    strokeWidth: strokeWidth,
    strokeDasharray: 5
  });
  if (isObject(oldAttrs === null || oldAttrs === void 0 || (_oldAttrs$line5 = oldAttrs.line) === null || _oldAttrs$line5 === void 0 ? void 0 : _oldAttrs$line5.stroke)) {
    if (Array.isArray(oldAttrs.line.stroke.stops)) {
      newAttrs.line.stroke = oldAttrs.line.stroke;
      newAttrs.line.stroke.stops = oldAttrs.line.stroke.stops.map(function (st) {
        var newSt = _objectSpread({}, st);
        newSt.color = changeRgba(newSt.color, 1);
        return newSt;
      });
    }
  } else {
    newAttrs.line.targetMarker = targetMarker;
  }
  return newAttrs;
};

// 等待执行的状态
export var setEdgeWaitingAttrs = function setEdgeWaitingAttrs(oldAttrs) {
  var _oldAttrs$line6;
  var newAttrs = _objectSpread({}, oldAttrs);
  var color = getLine(oldAttrs, 0.35).stroke;
  var targetMarker = getMarker(oldAttrs, color);
  newAttrs.line = _objectSpread(_objectSpread({}, oldAttrs.line), {}, {
    stroke: {
      type: 'linearGradient',
      stops: [{
        offset: '0%',
        color: color
      }, {
        offset: '100%',
        color: color
      }]
    },
    strokeWidth: 2,
    targetMarker: targetMarker,
    style: style
  });
  if (isObject(oldAttrs === null || oldAttrs === void 0 || (_oldAttrs$line6 = oldAttrs.line) === null || _oldAttrs$line6 === void 0 ? void 0 : _oldAttrs$line6.stroke)) {
    if (Array.isArray(oldAttrs.line.stroke.stops)) {
      newAttrs.line.stroke = oldAttrs.line.stroke;
      newAttrs.line.stroke.stops = oldAttrs.line.stroke.stops.map(function (st) {
        var newSt = _objectSpread({}, st);
        newSt.color = changeRgba(newSt.color, 0.3);
        return newSt;
      });
    }
  } else {
    newAttrs.line.targetMarker = targetMarker;
  }
  return newAttrs;
};

// 其他状态 恢复初始化状态
export var setEdgeInitAttrs = function setEdgeInitAttrs(oldAttrs, data) {
  var newData = _objectSpread({}, data);
  delete newData.status;
  console.log('data----', data);
  return _objectSpread(_objectSpread({}, oldAttrs), {}, {
    line: _objectSpread(_objectSpread({}, data), {}, {
      strokeDasharray: 0
    })
  });
};
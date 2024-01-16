function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children", "node", "graph", "className", "show", "minWidth", "minHeight", "style"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import classNames from 'classnames';
import React, { memo, useRef } from 'react';
import "./index.less";
var dot = ['tl', 'tc', 'tr', 'rc', 'br', 'bc', 'bl', 'lc'];
var N = function N(props) {
  var children = props.children,
    node = props.node,
    graph = props.graph,
    className = props.className,
    show = props.show,
    _props$minWidth = props.minWidth,
    minWidth = _props$minWidth === void 0 ? 100 : _props$minWidth,
    _props$minHeight = props.minHeight,
    minHeight = _props$minHeight === void 0 ? 40 : _props$minHeight,
    style = props.style,
    other = _objectWithoutProperties(props, _excluded);
  var nodeRef = useRef(null);
  var onResize = function onResize(position, type) {
    if (node && graph) {
      var newWidth = position.newWidth,
        newHeight = position.newHeight,
        oldHeight = position.oldHeight,
        oldWidth = position.oldWidth;
      switch (type) {
        // 向上拖动
        case 'tc':
          {
            var height = oldHeight - newHeight;
            if (height >= minHeight) {
              node.resize(oldWidth, height, {
                direction: 'top'
              });
              if (nodeRef.current) {
                nodeRef.current.style.height = "".concat(height, "px");
              }
            }
            break;
          }
        // 向右拖动
        case 'rc':
          {
            // 缩放 目前会存在一定问题
            // const scaleX = Math.abs(parseFloat(((newWidth / oldWidth) * 0.001).toFixed(4)));
            // const sc = newWidth > oldWidth ? scaleX : -scaleX;
            // node.scale(1 + sc, 1);
            // node.scale(1.5, 1.5);
            if (newWidth >= minWidth) {
              // 在缩放状态下，会有问题
              node.resize(newWidth, oldHeight);
              if (nodeRef.current) {
                // nodeRef.current.style.transform = `scaleX(${newWidth / oldWidth})`;
                nodeRef.current.style.width = "".concat(newWidth, "px");
              }
            }
            break;
          }
        // 向下拖动
        case 'bc':
          {
            if (newHeight >= minHeight) {
              node.resize(oldWidth, newHeight);
              if (nodeRef.current) {
                nodeRef.current.style.height = "".concat(newHeight, "px");
              }
            }
            break;
          }

        // 向左
        case 'lc':
          {
            // 这里应该就是 oldWidth - newWidth 因为起点是左上角，那么往左 是负数，减负数就是加
            var width = oldWidth - newWidth;
            if (width >= minWidth) {
              node.resize(width, oldHeight, {
                direction: 'left'
              });
              if (nodeRef.current) {
                nodeRef.current.style.width = "".concat(width, "px");
              }
            }
            break;
          }

        // 右上
        case 'tr':
          {
            var ch = oldHeight - newHeight;
            var _height = ch >= minHeight ? ch : minHeight;
            var _width = newWidth >= minWidth ? newWidth : minWidth;
            node.resize(_width, _height, {
              direction: 'top-right'
            });
            if (nodeRef.current) {
              nodeRef.current.style.height = "".concat(_height, "px");
              nodeRef.current.style.width = "".concat(_width, "px");
            }
            break;
          }

        // 右下
        case 'br':
          {
            var _width2 = newWidth >= minWidth ? newWidth : minWidth;
            var _height2 = newHeight >= minHeight ? newHeight : minHeight;
            node.resize(_width2, _height2);
            if (nodeRef.current) {
              nodeRef.current.style.height = "".concat(_height2, "px");
              nodeRef.current.style.width = "".concat(_width2, "px");
            }
            break;
          }
        // 左上
        case 'tl':
          {
            var ht = oldHeight - newHeight;
            var wd = oldWidth - newWidth;
            var _height3 = ht >= minHeight ? ht : minHeight;
            var _width3 = wd >= minWidth ? wd : minWidth;
            node.resize(_width3, _height3, {
              direction: 'top-left'
            });
            if (nodeRef.current) {
              nodeRef.current.style.height = "".concat(_height3, "px");
              nodeRef.current.style.width = "".concat(_width3, "px");
            }
            break;
          }
        // 左下
        case 'bl':
          {
            var _wd = oldWidth - newWidth;
            var _width4 = _wd >= minWidth ? _wd : minWidth;
            var _height4 = newHeight >= minHeight ? newHeight : minHeight;
            node.resize(_width4, _height4, {
              direction: 'bottom-left'
            });
            if (nodeRef.current) {
              nodeRef.current.style.height = "".concat(_height4, "px");
              nodeRef.current.style.width = "".concat(_width4, "px");
            }
            break;
          }
        default:
          {}
      }
    }
  };
  var _onMouseDown = function onMouseDown(e, type) {
    var mouseDownEc = function mouseDownEc(e) {
      if (node && graph) {
        if (graph.container) {
          var _graph$container$getB = graph.container.getBoundingClientRect(),
            left = _graph$container$getB.left,
            top = _graph$container$getB.top;
          var _node$getSize = node.getSize(),
            height = _node$getSize.height,
            width = _node$getSize.width;
          var _node$getPosition = node.getPosition(),
            x = _node$getPosition.x,
            y = _node$getPosition.y;
          var newWidth = e.clientX - x - left;
          var newHeight = e.clientY - y - top;
          onResize({
            oldHeight: height,
            oldWidth: width,
            newHeight: newHeight,
            newWidth: newWidth
          }, type);
        }
      }
    };
    var mouseUpEc = function mouseUpEc() {
      window.removeEventListener('mousemove', mouseDownEc);
      window.removeEventListener('mouseup', mouseUpEc);
    };
    window.addEventListener('mousemove', mouseDownEc);
    window.addEventListener('mouseup', mouseUpEc);
    e.stopPropagation();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: nodeRef,
    style: _objectSpread({
      minWidth: minWidth,
      minHeight: minHeight
    }, style),
    className: classNames('nsw', className)
  }, other), /*#__PURE__*/React.createElement("div", {
    className: classNames('resize', _defineProperty({}, 'show', show))
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('dw', _defineProperty({}, 'show', show))
  }, dot.map(function (d) {
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      className: classNames(d, 'dot', _defineProperty({}, 'show', show)),
      onMouseDown: function onMouseDown(e) {
        return _onMouseDown(e, d);
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'c'
  }, children));
};
var NodeScaleWrapper = /*#__PURE__*/memo(N);
export default NodeScaleWrapper;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { memo, useRef, useEffect } from 'react';
import "./index.module.less";
var F = function F(props) {
  var icon = props.icon,
    containerStyle = props.style,
    bgStyle = props.bgStyle,
    ffStyle = props.ffStyle,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? 'background' : _props$mode;
  var svgRef = useRef(null);
  var initRef = useRef(false);
  useEffect(function () {
    if (svgRef.current && !initRef.current) {
      var _Array$from = Array.from(svgRef.current.getElementsByTagName('path')),
        _Array$from2 = _slicedToArray(_Array$from, 2),
        firstPathDom = _Array$from2[0],
        secondPathDom = _Array$from2[1];
      // 设置指定颜色背景
      if (mode === 'color') {
        //
      } else if (mode === 'double') {
        // 双色图标
        if (firstPathDom) {
          var bgFill = firstPathDom.getAttribute('fill');
          if (bgFill) {
            var target = svgRef.current.getElementsByClassName('icd-bg')[0];
            if (target) {
              // @ts-expect-error
              target.style.backgroundColor = bgFill;
              // @ts-expect-error
              target.style.filter = 'blur(16px)';
              // @ts-expect-error
              target.style.width = '100%';
              // @ts-expect-error
              target.style.height = '100%';
              if (bgStyle) {
                Object.keys(bgStyle).forEach(function (key) {
                  // @ts-expect-error
                  target.style[key] = bgStyle[key];
                });
              }
            }
          }
        }
      } else if (mode === 'background') {
        // 包含背景的双色/多色图标
        if (firstPathDom) {
          // 双色或者多色图标
          if (secondPathDom) {
            // 获取颜色
            var oldPathFIll = secondPathDom.getAttribute('fill');
            var _bgFill = firstPathDom.getAttribute('fill');
            var bgTarget = svgRef.current.getElementsByClassName('icd-bg-ff')[0];
            if (bgTarget && _bgFill) {
              // @ts-expect-error
              bgTarget.style.backgroundColor = _bgFill;
              if (bgTarget.getBoundingClientRect().width <= 20) {
                // @ts-expect-error
                bgTarget.style.left = 'unset';
                // @ts-expect-error
                bgTarget.style.top = 'unset';
                if (ffStyle) {
                  Object.keys(ffStyle).forEach(function (key) {
                    // @ts-expect-error
                    bgTarget.style[key] = ffStyle[key];
                  });
                }
              }
            }
            if (oldPathFIll) {
              // 找到要设置的元素
              var _target = svgRef.current.getElementsByClassName('icd-bg')[0];
              if (_target) {
                // @ts-expect-error
                _target.style.backgroundColor = oldPathFIll;
                // @ts-expect-error
                _target.style.filter = 'blur(16px)';
                if (bgStyle) {
                  Object.keys(bgStyle).forEach(function (key) {
                    // @ts-expect-error
                    _target.style[key] = bgStyle[key];
                  });
                }
                firstPathDom.setAttribute('fill', 'transparent');
              }
            }
          }
        }
      }
      initRef.current = true;
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: svgRef,
    style: containerStyle,
    className: "icd-icon-blur"
  }, icon, /*#__PURE__*/React.createElement("span", {
    className: "icd-bg",
    style: bgStyle
  }), /*#__PURE__*/React.createElement("span", {
    className: "icd-bg-ff"
  }));
};
var FillIconBg = /*#__PURE__*/memo(F);
export default FillIconBg;
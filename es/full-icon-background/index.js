var _excluded = ["icon", "style", "bgStyle", "ffStyle", "mode"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
import "./index.less";
var F = function F(props) {
  var icon = props.icon,
    containerStyle = props.style,
    bgStyle = props.bgStyle,
    ffStyle = props.ffStyle,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? 'background' : _props$mode,
    other = _objectWithoutProperties(props, _excluded);
  var svgRef = React.useRef(null);
  var initRef = React.useRef(false);
  React.useEffect(function () {
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
              target.style.backgroundColor = bgFill;
              target.style.filter = 'blur(16px)';
              target.style.width = '100%';
              target.style.height = '100%';
              if (bgStyle) {
                Object.keys(bgStyle).forEach(function (key) {
                  // @ts-expect-error
                  var value = bgStyle[key];
                  // @ts-expect-error
                  target.style[key] = !isNaN(+value) ? "".concat(+value, "px") : value;
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
              bgTarget.style.backgroundColor = _bgFill;
              if (bgTarget.getBoundingClientRect().width <= 20) {
                bgTarget.style.left = 'unset';
                bgTarget.style.top = 'unset';
                if (ffStyle) {
                  Object.keys(ffStyle).forEach(function (key) {
                    // @ts-expect-error
                    var value = ffStyle[key];
                    // @ts-expect-error
                    bgTarget.style[key] = !isNaN(+value) ? "".concat(+value, "px") : value;
                  });
                }
              }
            }
            if (oldPathFIll) {
              // 找到要设置的元素
              var _target = svgRef.current.getElementsByClassName('icd-bg')[0];
              if (_target) {
                _target.style.backgroundColor = oldPathFIll;
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
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: svgRef,
    style: containerStyle,
    className: "icd-icon-blur"
  }, other), icon, /*#__PURE__*/React.createElement("span", {
    className: "icd-bg",
    style: bgStyle
  }), /*#__PURE__*/React.createElement("span", {
    className: "icd-bg-ff"
  }));
};
var FullIconBackground = /*#__PURE__*/React.memo(F);
export default FullIconBackground;
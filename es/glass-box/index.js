var _excluded = ["children", "className", "bgColor", "bgOpacity", "shadowColor", "boxShadow", "bdf", "saturate", "blur"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import classNames from 'classnames';
import React, { memo, useEffect, useRef, useState } from 'react';
import "./index.less";
var G = function G(props) {
  var children = props.children,
    className = props.className,
    bgColor = props.bgColor,
    bgOpacity = props.bgOpacity,
    shadowColor = props.shadowColor,
    bs = props.boxShadow,
    bdf = props.bdf,
    saturate = props.saturate,
    blur = props.blur,
    other = _objectWithoutProperties(props, _excluded);
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    style = _useState2[0],
    setStyle = _useState2[1];
  var boxRef = useRef(null);
  useEffect(function () {
    if (boxRef.current) {
      // @ts-ignore
      var _window$getComputedSt = window.getComputedStyle(boxRef.current),
        backdropFilter = _window$getComputedSt.backdropFilter,
        backgroundColor = _window$getComputedSt.backgroundColor,
        boxShadow = _window$getComputedSt.boxShadow;
      var st = {};
      if ((saturate || blur) && backdropFilter) {
        var sdfArr = backdropFilter.split(' ');
        if (saturate !== undefined) {
          sdfArr[0] = "saturate(".concat(saturate, ")");
        }
        if (blur) {
          sdfArr[1] = "blur(".concat(blur, "px)");
        }
        st.backdropFilter = sdfArr.join(' ');
      }
      if (shadowColor) {
        var splitChar = boxShadow.includes('rgb') ? ') ' : '';
        var sdArr = boxShadow.split(splitChar);
        sdArr[0] = shadowColor;
        st.boxShadow = sdArr.join(' ');
      }
      if (bgOpacity) {
        var newBgColor = backgroundColor;
        if (backgroundColor.includes('rgba')) {
          var bgArr = backgroundColor.split(' ');
          bgArr.pop();
          newBgColor = "".concat(bgArr.join(' '), " ").concat(bgOpacity, ")");
        } else if (backgroundColor.includes('rgb')) {
          newBgColor = "rgba(".concat(newBgColor.slice(4, newBgColor.length - 1), ", ").concat(bgOpacity, ")");
        } else {
          newBgColor = "rgba(".concat(backgroundColor, ", ").concat(bgOpacity, ")");
        }
        st.backgroundColor = newBgColor;
      }
      if (bdf) {
        st.backdropFilter = bdf;
      }
      if (bs) {
        st.boxShadow = bs;
      }
      if (bgColor) {
        st.backgroundColor = bgColor;
      }
      setStyle(st);
    }
  }, [bs, bdf, bdf, saturate, bgColor, shadowColor, bgOpacity]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: boxRef,
    style: style,
    className: classNames('icd-g-b', className)
  }, other), children);
};
var GlassBox = /*#__PURE__*/memo(G);
export default GlassBox;
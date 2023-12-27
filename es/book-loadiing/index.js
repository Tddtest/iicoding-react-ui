var _excluded = ["bgColor", "pageSize"];
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
var getBookStyle = function getBookStyle(options) {
  var bgColor = options.bgColor,
    pageColor = options.pageColor,
    pageFoldColor = options.pageFoldColor,
    shadowColor = options.shadowColor,
    textColor = options.textColor,
    duration = options.duration,
    pageSize = options.pageSize;
  return {
    // @ts-expect-error
    '--background': "linear-gradient(".concat((bgColor === null || bgColor === void 0 ? void 0 : bgColor.deg) || 135, "deg, ").concat((bgColor === null || bgColor === void 0 ? void 0 : bgColor.start) || '#45c4f9', ", ").concat((bgColor === null || bgColor === void 0 ? void 0 : bgColor.end) || '#ff0be5', ")"),
    '--shadow': shadowColor || 'rgba(39, 94, 254, 0.28)',
    '--text': textColor || '#6C7486',
    '--page': pageColor || 'rgba(255, 255, 255, 0.36)',
    '--page-fold': pageFoldColor || 'rgba(255, 255, 255, 0.52)',
    '--duration': "".concat(duration || 4.5, "s"),
    '--size': pageSize || 6
  };
};
var B = function B(props) {
  var bgColor = props.bgColor,
    _props$pageSize = props.pageSize,
    pageSize = _props$pageSize === void 0 ? 16 : _props$pageSize,
    other = _objectWithoutProperties(props, _excluded);
  var _React$useState = React.useState(function () {
      return getBookStyle(props);
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    styleVal = _React$useState2[0],
    setStyleVal = _React$useState2[1];
  var pageNode = React.useMemo(function () {
    var array = Array(pageSize).fill(pageSize).map(function (_, index) {
      return index;
    });
    return array.map(function (idx) {
      return /*#__PURE__*/React.createElement("li", {
        key: idx.toString()
      }, /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 90 120",
        fill: "currentColor"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"
      })));
    });
  }, [pageSize]);
  React.useEffect(function () {
    setStyleVal(getBookStyle(props));
  }, [bgColor === null || bgColor === void 0 ? void 0 : bgColor.start, bgColor === null || bgColor === void 0 ? void 0 : bgColor.end, pageSize, other === null || other === void 0 ? void 0 : other.pageColor, other === null || other === void 0 ? void 0 : other.duration, other === null || other === void 0 ? void 0 : other.shadowColor, other === null || other === void 0 ? void 0 : other.textColor, other === null || other === void 0 ? void 0 : other.pageFoldColor]);
  console.log(pageNode);
  return /*#__PURE__*/React.createElement("div", {
    className: "icd-book-loading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icd-load-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "loader",
    style: styleVal
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, pageNode))), /*#__PURE__*/React.createElement("div", {
    className: "load-text"
  }, "Loading...")));
};
var BookLoading = /*#__PURE__*/React.memo(B);
export default BookLoading;
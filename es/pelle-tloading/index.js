function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @auth: dmx
 * @time: 2021/3/4
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import classNames from 'classnames';
import "./index.less";
var loadingArr = ['赤', '橙', '黄', '绿', '青', '蓝', '紫'];
var Loading = function Loading(props) {
  var _props$tip = props.tip,
    tip = _props$tip === void 0 ? '正在加载 . . .' : _props$tip,
    loading = props.loading;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hide = _React$useState2[0],
    setHide = _React$useState2[1];
  var timerRef = React.useRef(null);
  React.useEffect(function () {
    if (!loading && !hide) {
      // @ts-expect-error
      timerRef.current = setTimeout(function () {
        setHide(true);
      }, 1000);
    }
    return function () {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [loading, hide]);
  return /*#__PURE__*/React.createElement("div", {
    style: props.style,
    className: classNames('single-loading', {
      opacity: !loading,
      hide: hide
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "single-loading-text"
  }, tip), /*#__PURE__*/React.createElement("ul", null, loadingArr.map(function (load) {
    return /*#__PURE__*/React.createElement("li", {
      key: load,
      className: "rainbow"
    });
  })));
};
var SingleLoading = /*#__PURE__*/React.memo(Loading);
export default SingleLoading;
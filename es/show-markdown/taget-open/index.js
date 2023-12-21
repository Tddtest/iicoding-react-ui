var _excluded = ["children", "href"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @auth: dmx
 * @time: 2022/5/30
 * @func: 新标签中打开连接
 **/
import * as React from 'react';
import "./index.less";
var T = function T(props) {
  var children = props.children,
    href = props.href,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("span", {
    className: "icd-href"
  }, /*#__PURE__*/React.createElement("a", _extends({
    target: href !== null && href !== void 0 && href.startsWith('#') ? '_self' : '_blank',
    href: href
  }, other), React.Children.map(children, function (c) {
    var _c$props, _c$props2;
    // @ts-expect-error
    if (c !== null && c !== void 0 && (_c$props = c.props) !== null && _c$props !== void 0 && _c$props.src && c !== null && c !== void 0 && (_c$props2 = c.props) !== null && _c$props2 !== void 0 && _c$props2.alt) {
      return /*#__PURE__*/React.cloneElement(c, {
        isAnchor: true
      });
    }
    return c;
  })));
};
var TargetOpen = /*#__PURE__*/React.memo(T);
export default TargetOpen;
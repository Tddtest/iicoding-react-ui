function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import React, { memo, useMemo } from 'react';
import { Item } from "./style";
var L = function L(props) {
  var children = props.children;
  var hasOlOrUl = useMemo(function () {
    var flag = false;
    if (Array.isArray(props.children)) {
      children = props.children.map(function (child) {
        if (_typeof(child) === 'object') {
          flag = true;
          if (child.type === 'ol' && props.idx) {
            console.log('aaa');
            child.props.idx = props.idx + 1;
          }
        } else {
          return /*#__PURE__*/React.createElement("span", {
            key: "".concat(props.idx, "-").concat(child.toString())
          }, "".concat(props.idx || '', ". ").concat(child));
        }
        return child;
      });
    }
    return flag;
  }, []);
  return /*#__PURE__*/React.createElement(Item, _extends({}, props, {
    hasOlOrUl: hasOlOrUl
  }), children);
};
var Li = /*#__PURE__*/memo(L);
export default Li;
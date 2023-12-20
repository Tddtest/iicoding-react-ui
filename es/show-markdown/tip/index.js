import React, { memo } from 'react';
import classNames from 'classnames';
import { Full202312174Full, FullIconCc27Full, Full23943404Full } from '@iicoding/react-icons';
import FullIconBackground from "../../full-icon-background";
import "./index.less";
var T = function T(props) {
  var children = props.children,
    _props$type = props.type,
    type = _props$type === void 0 ? '' : _props$type;
  return /*#__PURE__*/React.createElement("em", {
    className: classNames('icd-em', {
      err: type === 'error',
      w: type === 'warning',
      s: type === 'success'
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "tip"
  }, type === 'error' && /*#__PURE__*/React.createElement(FullIconBackground, {
    mode: "double",
    icon: /*#__PURE__*/React.createElement(Full202312174Full, null)
  }), type === 'success' && /*#__PURE__*/React.createElement(FullIconBackground, {
    mode: "double",
    icon: /*#__PURE__*/React.createElement(FullIconCc27Full, null)
  }), type === 'warning' && /*#__PURE__*/React.createElement(FullIconBackground, {
    mode: "background",
    style: {
      fontSize: '30px'
    },
    icon: /*#__PURE__*/React.createElement(Full23943404Full, null)
  })), children);
};
var Tip = /*#__PURE__*/memo(T);
Tip.displayName = 'tip';
export default Tip;
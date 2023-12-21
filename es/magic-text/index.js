import classNames from 'classnames';
import * as React from 'react';
import Star from "./star";
import "./index.less";
var M = function M(props) {
  var _props$starCount = props.starCount,
    starCount = _props$starCount === void 0 ? 3 : _props$starCount,
    text = props.text,
    noAnimation = props.noAnimation,
    noStar = props.noStar;
  return /*#__PURE__*/React.createElement("span", {
    className: "star-box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "magic"
  }, !noStar && Array(starCount).fill(0).map(function (_, idx) {
    return /*#__PURE__*/React.createElement(Star, {
      key: idx.toString(),
      idx: idx
    });
  }), /*#__PURE__*/React.createElement("span", {
    className: classNames('magic-text', {
      noAnimation: noAnimation
    })
  }, text)));
};
var MagicText = /*#__PURE__*/React.memo(M);
export default MagicText;
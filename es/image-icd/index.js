var _excluded = ["src", "width", "height", "noBorder", "fallback", "alt", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import classNames from 'classnames';
import * as React from 'react';
import "./index.less";
var loadImage = function loadImage(img, fallback) {
  var src = img.getAttribute('data-src');
  if (src) {
    var imgDom = new Image();
    imgDom.src = src;
    imgDom.onload = function () {
      img.src = src;
      img.setAttribute('data-load', 'false');
    };
    imgDom.onerror = function () {
      img.setAttribute('data-load', 'false');
      fallback && (img.src = fallback);
    };
  }
};
var I = function I(props) {
  var src = props.src,
    width = props.width,
    height = props.height,
    noBorder = props.noBorder,
    fallback = props.fallback,
    alt = props.alt,
    className = props.className,
    other = _objectWithoutProperties(props, _excluded);
  var imgRef = React.useRef(null);
  React.useEffect(function () {
    if (imgRef.current) {
      loadImage(imgRef.current, fallback);
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      height: height
    },
    className: "i"
  }, /*#__PURE__*/React.createElement("img", _extends({
    ref: imgRef,
    className: classNames(className, 'img', {
      nb: noBorder
    }),
    "data-load": true,
    "data-src": src,
    src: "",
    alt: alt || 'icd-img'
  }, other)), /*#__PURE__*/React.createElement("div", {
    className: "load"
  }));
};
var ImageIcd = /*#__PURE__*/React.memo(I);
export default ImageIcd;
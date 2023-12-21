var _excluded = ["src", "alt"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @auth: dmx
 * @time: 2022/5/31
 * @func: markdown img 标签解析
 **/
import * as React from 'react';
import "./index.less";
import ImageIcd from "../../image-icd";
// import GlobalModal from '@/components/global-modal';

var I = function I(props) {
  var src = props.src,
    alt = props.alt,
    other = _objectWithoutProperties(props, _excluded);

  // const [visible, setVisible] = useState(false);

  var handleZoomIn = function handleZoomIn() {
    if (!(props !== null && props !== void 0 && props.isAnchor)) {
      // setVisible(true);
    }
  };

  // const handleZoomOut = () => {
  //   setVisible(false);
  // };

  if (!src && alt === 'icd-img') {
    return /*#__PURE__*/React.createElement("span", {
      className: "icd-img-loading taZanLoading"
    }, "\u56FE\u50CF\u6B63\u5728\u52A0\u8F7D\u4E2D....");
  }
  return /*#__PURE__*/React.createElement("span", {
    className: "icd-img taZanImg"
  }, /*#__PURE__*/React.createElement(ImageIcd, _extends({
    style: {
      borderRadius: 12
    },
    onClick: handleZoomIn,
    src: src,
    alt: alt
  }, other)));
};
var ImageTag = /*#__PURE__*/React.memo(I);
export default ImageTag;
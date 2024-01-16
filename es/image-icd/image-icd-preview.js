function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useMemoizedHandle } from '@iicoding/hooks';
import * as React from 'react';
import Viewer from 'react-viewer';
import "./preview.less";
var I = function I(props) {
  var children = props.children,
    _props$imgDataPropert = props.imgDataProperties,
    imgDataProperties = _props$imgDataPropert === void 0 ? 'data-src' : _props$imgDataPropert;
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    images = _React$useState2[0],
    setImages = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open = _React$useState4[0],
    setOpen = _React$useState4[1];
  var _React$useState5 = React.useState(undefined),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    actIdx = _React$useState6[0],
    setActIdx = _React$useState6[1];
  var containerRef = React.useRef(null);
  var onImageClick = useMemoizedHandle(function (idx) {
    // 如果这一项目存在，则打开并设置
    if (images[idx]) {
      setOpen(true);
      setActIdx(idx);
    }
  });
  React.useEffect(function () {
    if (containerRef.current) {
      var mutationCallback = function mutationCallback() {
        if (containerRef.current) {
          var _images = containerRef.current.getElementsByTagName('img');
          var imgArr = Array.from(_images);
          if (imgArr.length) {
            var getImageSrcPromise = function getImageSrcPromise(source) {
              var idx = source.length;
              var successCount = 0;
              var failedCount = 0;
              var imagesArr = [];
              return new Promise(function (resolve) {
                source.forEach(function (img, index) {
                  img.onclick = function () {
                    onImageClick(index);
                  };
                  var src = img.getAttribute(imgDataProperties) || img.src;
                  if (src) {
                    var imgDom = new Image();
                    imgDom.src = src;
                    imgDom.onload = function () {
                      successCount++;
                      imagesArr[index] = {
                        src: src
                      };
                      if (successCount + failedCount === idx) {
                        resolve(imagesArr);
                      }
                    };
                    imgDom.onerror = function () {
                      failedCount++;
                      if (successCount + failedCount === idx) {
                        resolve(imagesArr);
                      }
                    };
                  }
                });
              });
            };
            getImageSrcPromise(imgArr).then(function (res) {
              if (res.length > 0) {
                setImages(res);
              }
            });
          }
        }
      };
      var observer = new MutationObserver(mutationCallback);
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: "icd-image-preview"
  }, children, /*#__PURE__*/React.createElement(Viewer, {
    drag: true,
    zIndex: 9999,
    visible: open,
    images: images,
    activeIndex: actIdx,
    onMaskClick: function onMaskClick() {
      return setOpen(false);
    },
    onClose: function onClose() {
      return setOpen(false);
    }
  }));
};
var IcdImagePreview = /*#__PURE__*/React.memo(I);
export default IcdImagePreview;
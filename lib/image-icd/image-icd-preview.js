var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/image-icd/image-icd-preview.tsx
var image_icd_preview_exports = {};
__export(image_icd_preview_exports, {
  default: () => image_icd_preview_default
});
module.exports = __toCommonJS(image_icd_preview_exports);
var import_hooks = require("@iicoding/hooks");
var React = __toESM(require("react"));
var import_react_viewer = __toESM(require("react-viewer"));
var import_preview = require("./preview.less");
var I = (props) => {
  const { children, imgDataProperties = "data-src" } = props;
  const [images, setImages] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [actIdx, setActIdx] = React.useState(void 0);
  const containerRef = React.useRef(null);
  const onImageClick = (0, import_hooks.useMemoizedHandle)((idx) => {
    if (images[idx]) {
      setOpen(true);
      setActIdx(idx);
    }
  });
  React.useEffect(() => {
    if (containerRef.current) {
      const mutationCallback = () => {
        if (containerRef.current) {
          const images2 = containerRef.current.getElementsByTagName("img");
          const imgArr = Array.from(images2);
          if (imgArr.length) {
            const getImageSrcPromise = (source) => {
              const idx = source.length;
              let successCount = 0;
              let failedCount = 0;
              const imagesArr = [];
              return new Promise((resolve) => {
                source.forEach((img, index) => {
                  img.onclick = function() {
                    onImageClick(index);
                  };
                  const src = img.getAttribute(imgDataProperties) || img.src;
                  if (src) {
                    const imgDom = new Image();
                    imgDom.src = src;
                    imgDom.onload = () => {
                      successCount++;
                      imagesArr[index] = { src };
                      if (successCount + failedCount === idx) {
                        resolve(imagesArr);
                      }
                    };
                    imgDom.onerror = () => {
                      failedCount++;
                      if (successCount + failedCount === idx) {
                        resolve(imagesArr);
                      }
                    };
                  }
                });
              });
            };
            getImageSrcPromise(imgArr).then((res) => {
              if (res.length > 0) {
                setImages(res);
              }
            });
          }
        }
      };
      const observer = new MutationObserver(mutationCallback);
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true
      });
    }
  }, []);
  return /* @__PURE__ */ React.createElement("div", { ref: containerRef, className: "icd-image-preview" }, children, /* @__PURE__ */ React.createElement(
    import_react_viewer.default,
    {
      drag: true,
      zIndex: 9999,
      visible: open,
      images,
      activeIndex: actIdx,
      onMaskClick: () => setOpen(false),
      onClose: () => setOpen(false)
    }
  ));
};
var IcdImagePreview = React.memo(I);
var image_icd_preview_default = IcdImagePreview;

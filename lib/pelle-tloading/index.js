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

// src/pelle-tloading/index.tsx
var pelle_tloading_exports = {};
__export(pelle_tloading_exports, {
  default: () => pelle_tloading_default
});
module.exports = __toCommonJS(pelle_tloading_exports);
var import_classnames = __toESM(require("classnames"));
var React = __toESM(require("react"));
var import_index = require("./index.less");
var loadingArr = ["赤", "橙", "黄", "绿", "青", "蓝", "紫"];
var Loading = (props) => {
  const { tip = "正在加载 . . .", loading } = props;
  const [hide, setHide] = React.useState(false);
  const timerRef = React.useRef(null);
  React.useEffect(() => {
    if (!loading && !hide) {
      timerRef.current = setTimeout(() => {
        setHide(true);
      }, 1e3);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [loading, hide]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: props.style,
      className: (0, import_classnames.default)("single-loading", { opacity: !loading, hide })
    },
    /* @__PURE__ */ React.createElement("span", { className: "single-loading-text" }, tip),
    /* @__PURE__ */ React.createElement("ul", null, loadingArr.map((load) => /* @__PURE__ */ React.createElement("li", { key: load, className: "rainbow" })))
  );
};
var SingleLoading = React.memo(Loading);
var pelle_tloading_default = SingleLoading;

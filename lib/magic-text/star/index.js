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

// src/magic-text/star/index.tsx
var star_exports = {};
__export(star_exports, {
  default: () => star_default
});
module.exports = __toCommonJS(star_exports);
var React = __toESM(require("react"));
var rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
function startAnimate(dom) {
  dom.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  dom.style.setProperty("--star-top", `${rand(-80, 80)}%`);
  dom.style.animation = "none";
  dom.offsetHeight;
  dom.style.animation = "";
  const svg = dom.children.item(0);
  if (svg) {
    const path = svg.children.item(0);
    if (path) {
      path.setAttribute(
        "fill",
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
      );
    }
  }
}
var S = ({ idx }) => {
  const starRef = React.useRef(null);
  React.useEffect(() => {
    let timer;
    let intervalTimer;
    if (starRef.current) {
      const interval = 1e3;
      timer = setTimeout(
        () => {
          startAnimate(starRef.current);
          intervalTimer = setInterval(
            () => startAnimate(starRef.current),
            2e3
          );
        },
        idx * (interval / 2)
      );
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (intervalTimer) {
        clearInterval(intervalTimer);
      }
    };
  }, []);
  return /* @__PURE__ */ React.createElement("span", { ref: starRef, className: "magic-star" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 512 512" }, /* @__PURE__ */ React.createElement("path", { d: "M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" })));
};
var Star = React.memo(S);
var star_default = Star;

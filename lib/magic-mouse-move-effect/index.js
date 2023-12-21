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

// src/magic-mouse-move-effect/index.tsx
var magic_mouse_move_effect_exports = {};
__export(magic_mouse_move_effect_exports, {
  default: () => magic_mouse_move_effect_default
});
module.exports = __toCommonJS(magic_mouse_move_effect_exports);
var import_react = __toESM(require("react"));
var import_awesome = require("./awesome.js");
var import_index = require("./index.less");
var M = () => {
  import_react.default.useEffect(() => {
    const start = (/* @__PURE__ */ new Date()).getTime();
    const originPosition = { x: 0, y: 0 };
    const last = {
      starTimestamp: start,
      starPosition: originPosition,
      mousePosition: originPosition
    };
    const config = {
      starAnimationDuration: 1500,
      minimumTimeBetweenStars: 250,
      minimumDistanceBetweenStars: 75,
      glowDuration: 75,
      maximumGlowPointSpacing: 10,
      colors: ["249 146 253", "252 254 255"],
      sizes: ["1.4rem", "1rem", "0.6rem"],
      animations: ["fall-1", "fall-2", "fall-3"]
    };
    let count = 0;
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min, selectRandom = (items) => items[rand(0, items.length - 1)];
    const withUnit = (value, unit) => `${value}${unit}`, px = (value) => withUnit(value, "px"), ms = (value) => withUnit(value, "ms");
    const calcDistance = (a, b) => {
      const diffX = b.x - a.x, diffY = b.y - a.y;
      return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    };
    const calcElapsedTime = (start2, end) => end - start2;
    const appendElement = (element) => document.body.appendChild(element), removeElement = (element, delay) => {
      const timer = setTimeout(() => {
        document.body.removeChild(element);
        clearTimeout(timer);
      }, delay);
    };
    const createStar = (position) => {
      const star = document.createElement("span"), color = selectRandom(config.colors);
      star.className = "star fa-solid fa-sparkle";
      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.fontSize = selectRandom(config.sizes);
      star.style.color = `rgb(${color})`;
      star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
      star.style.animationName = config.animations[count++ % 3];
      star.style.starAnimationDuration = ms(config.starAnimationDuration);
      appendElement(star);
      removeElement(star, config.starAnimationDuration);
    };
    const createGlowPoint = (position) => {
      const glow = document.createElement("div");
      glow.className = "glow-point";
      glow.style.left = px(position.x);
      glow.style.top = px(position.y);
      appendElement(glow);
      removeElement(glow, config.glowDuration);
    };
    const determinePointQuantity = (distance) => Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);
    const createGlow = (last2, current) => {
      const distance = calcDistance(last2, current), quantity = determinePointQuantity(distance);
      const dx = (current.x - last2.x) / quantity, dy = (current.y - last2.y) / quantity;
      Array.from(Array(quantity)).forEach((_, index) => {
        const x = last2.x + dx * index, y = last2.y + dy * index;
        createGlowPoint({ x, y });
      });
    };
    const updateLastStar = (position) => {
      last.starTimestamp = (/* @__PURE__ */ new Date()).getTime();
      last.starPosition = position;
    };
    const updateLastMousePosition = (position) => last.mousePosition = position;
    const adjustLastMousePosition = (position) => {
      if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        last.mousePosition = position;
      }
    };
    const handleOnMove = (e) => {
      const mousePosition = { x: e.clientX, y: e.clientY };
      adjustLastMousePosition(mousePosition);
      const now = (/* @__PURE__ */ new Date()).getTime(), hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars, hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;
      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);
        updateLastStar(mousePosition);
      }
      createGlow(last.mousePosition, mousePosition);
      updateLastMousePosition(mousePosition);
    };
    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
    document.body.onmouseleave = () => updateLastMousePosition(originPosition);
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("div", { id: "icdMagicMouseEffect" });
};
var MagicMouseMoveEffect = import_react.default.memo(M);
var magic_mouse_move_effect_default = MagicMouseMoveEffect;

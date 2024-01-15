var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/graph/core/define/tools-view/constants.ts
var constants_exports = {};
__export(constants_exports, {
  COLORS: () => COLORS
});
module.exports = __toCommonJS(constants_exports);
var COLORS = [
  "rgba(237,54,54, 1)",
  "rgba(255,0,255, 1)",
  "rgba(160,32,240, 1)",
  "rgba(6,176,54, 1)",
  "rgba(218,94,17, 1)",
  "rgba(255,192,203, 1)",
  "rgba(204,204,51, 1)",
  "rgba(61,104,213, 1)"
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  COLORS
});

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

// src/show-markdown/constants/index.ts
var constants_exports = {};
__export(constants_exports, {
  DIRECTORY_ID_SPLIT: () => DIRECTORY_ID_SPLIT,
  LINE_REPLACE_STR: () => LINE_REPLACE_STR,
  PLACEHOLDER_REPLACE_STR: () => PLACEHOLDER_REPLACE_STR
});
module.exports = __toCommonJS(constants_exports);
var DIRECTORY_ID_SPLIT = "__DIRECTORY_ID_SPLIT__";
var LINE_REPLACE_STR = "A_B_C_D_E_F_G_II_CODING";
var PLACEHOLDER_REPLACE_STR = "II_CODING_A_B_C_D_E_F_G";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DIRECTORY_ID_SPLIT,
  LINE_REPLACE_STR,
  PLACEHOLDER_REPLACE_STR
});

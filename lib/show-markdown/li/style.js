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

// src/show-markdown/li/style.ts
var style_exports = {};
__export(style_exports, {
  Disorder: () => Disorder,
  Item: () => Item,
  ListText: () => ListText,
  SerialNumber: () => SerialNumber
});
module.exports = __toCommonJS(style_exports);
var import_styled = __toESM(require("@emotion/styled"));
var color = "#be61bc";
var Item = import_styled.default.li`
  position: relative;
  list-style: none;
`;
var SerialNumber = import_styled.default.span`
  display: inline-flex;
  margin-right: 10px;
  color: ${color};
  font-size: 16px;
`;
var ListText = import_styled.default.span`
  color: #75575;
`;
var Disorder = import_styled.default.span`
  position: relative;
  top: -2px;
  display: inline-flex;
  margin-right: 10px;
  color: ${color};
  // font-size: 14px;
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Disorder,
  Item,
  ListText,
  SerialNumber
});

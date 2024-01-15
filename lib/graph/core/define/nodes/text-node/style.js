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

// src/graph/core/define/nodes/text-node/style.ts
var style_exports = {};
__export(style_exports, {
  Content: () => Content,
  ContentBox: () => ContentBox,
  EditContent: () => EditContent,
  EditContentBox: () => EditContentBox,
  Icon: () => Icon,
  NodeContent: () => NodeContent
});
module.exports = __toCommonJS(style_exports);
var import_styled = __toESM(require("@emotion/styled"));
var NodeContent = import_styled.default.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: rgba(24, 32, 79, 0.25) 0 4px 80px;
  background-color: rgba(255, 255, 255, 0.2);
  // backdrop-filter: saturate(1) blur(200px);
  border-radius: 8px;
  // padding: 10px;
  // overflow: hidden;
`;
var Content = import_styled.default.div`
  // flex: 1;
  line-height: 1.5;
`;
var Icon = import_styled.default.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icd-run-failed {
    svg > path {
      &:nth-child(2) {
        fill: rgba(232, 65, 110, 0.8);
      }
    }
  }
`;
var ContentBox = import_styled.default.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 10px;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  user-select: none;
`;
var EditContentBox = import_styled.default.div`
  position: absolute;
  top: 10px;
  left: 10px;
  box-sizing: border-box;
  display: ${(props) => props.show ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  z-index: 0;
`;
var EditContent = import_styled.default.div`
  width: 100%;
  min-height: 20px;
  text-align: center;
  user-select: none;
  cursor: text;
  line-height: 1.5;

  &:focus {
    outline: none;
  }
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Content,
  ContentBox,
  EditContent,
  EditContentBox,
  Icon,
  NodeContent
});

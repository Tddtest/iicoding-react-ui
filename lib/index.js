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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CodeBlockHighlight: () => import_react_syntax_highlighter.default,
  FillIconBackground: () => import_full_icon_background.default,
  Foo: () => import_Foo.default,
  ImageIcd: () => import_image_icd.default,
  MagicMouseMoveEffect: () => import_magic_mouse_move_effect.default,
  ShowMarkdown: () => import_show_markdown.default,
  getDirectory: () => import_markdown_content_actions.default
});
module.exports = __toCommonJS(src_exports);
var import_Foo = __toESM(require("./Foo"));
var import_full_icon_background = __toESM(require("./full-icon-background"));
var import_image_icd = __toESM(require("./image-icd"));
var import_magic_mouse_move_effect = __toESM(require("./magic-mouse-move-effect"));
var import_react_syntax_highlighter = __toESM(require("./react-syntax-highlighter"));
var import_show_markdown = __toESM(require("./show-markdown"));
var import_markdown_content_actions = __toESM(require("./show-markdown/markdown-content-actions"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CodeBlockHighlight,
  FillIconBackground,
  Foo,
  ImageIcd,
  MagicMouseMoveEffect,
  ShowMarkdown,
  getDirectory
});

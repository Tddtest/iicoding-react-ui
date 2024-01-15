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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/graph/core/index.ts
var core_exports = {};
__export(core_exports, {
  TextNode: () => import_text_node.default,
  createNode: () => import_create_node.default
});
module.exports = __toCommonJS(core_exports);
var import_connector = require("./define/connector");
var import_nodes = require("./define/nodes");
var import_edges = require("./define/edges");
var import_helper = require("./register-action/event/helper");
__reExport(core_exports, require("./register-action/event/helper"), module.exports);
var import_text_node = __toESM(require("./define/nodes/text-node"));
__reExport(core_exports, require("./define/nodes"), module.exports);
var import_create_node = __toESM(require("./define/nodes/create-node"));
__reExport(core_exports, require("./register-action/event/edge"), module.exports);
__reExport(core_exports, require("./use-graph"), module.exports);
__reExport(core_exports, require("./interface"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TextNode,
  createNode,
  ...require("./register-action/event/helper"),
  ...require("./define/nodes"),
  ...require("./register-action/event/edge"),
  ...require("./use-graph"),
  ...require("./interface")
});

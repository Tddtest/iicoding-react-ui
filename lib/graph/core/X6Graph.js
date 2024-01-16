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

// src/graph/core/X6Graph.ts
var X6Graph_exports = {};
__export(X6Graph_exports, {
  default: () => X6Graph_default
});
module.exports = __toCommonJS(X6Graph_exports);
var import_x6 = require("@antv/x6");
var import_config = __toESM(require("./config"));
var import_connector = require("./define/connector");
var import_nodes = require("./define/nodes");
var import_register_action = __toESM(require("./register-action"));
var X6Graph = class {
  constructor() {
    this.init = (options) => {
      if (!this.graph) {
        const opt = {
          ...import_config.default,
          ...options
        };
        this.graph = new import_x6.Graph(opt);
        this.register();
        if (opt.disabledScroll) {
          this.graph.lockScroller();
        }
        if (opt.disabledCV) {
          this.graph.toggleClipboard(false);
        }
      }
    };
    // @ts-ignore
    this.rerender = (...args) => {
      var _a;
      if (args.length) {
        try {
          (_a = this.graph) == null ? void 0 : _a.fromJSON(...args);
        } catch (error) {
          console.log("出错了", error);
        }
      }
    };
    this.dispose = () => {
      if (this.graph) {
        this.graph.clearCells();
        this.graph.dispose();
      }
    };
    this.register = () => {
      if (this.graph) {
        (0, import_register_action.default)(this.graph);
      }
    };
  }
};
var X6Graph_default = X6Graph;

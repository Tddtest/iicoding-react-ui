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

// src/graph/core/register-action/plugin/index.ts
var plugin_exports = {};
__export(plugin_exports, {
  default: () => plugin_default
});
module.exports = __toCommonJS(plugin_exports);
var import_x6_plugin_export = require("@antv/x6-plugin-export");
var import_x6_plugin_history = require("@antv/x6-plugin-history");
var import_x6_plugin_selection = require("@antv/x6-plugin-selection");
var import_x6_plugin_clipboard = require("@antv/x6-plugin-clipboard");
var import_x6_plugin_scroller = require("@antv/x6-plugin-scroller");
var import_x6_plugin_snapline = require("@antv/x6-plugin-snapline");
var import_x6_plugin_transform = require("@antv/x6-plugin-transform");
var registerPlugin = (graph) => {
  graph.use(new import_x6_plugin_snapline.Snapline({ enabled: true }));
  graph.use(new import_x6_plugin_export.Export());
  graph.use(
    new import_x6_plugin_scroller.Scroller({
      enabled: true,
      pannable: true,
      pageVisible: true,
      pageBreak: true
    })
  );
  graph.use(
    new import_x6_plugin_selection.Selection({
      enabled: true,
      multiple: true
      // showNodeSelectionBox: true,
      // showEdgeSelectionBox: true,
    })
  );
  graph.use(new import_x6_plugin_history.History({ enabled: true }));
  graph.use(new import_x6_plugin_clipboard.Clipboard({ enabled: true }));
  graph.use(
    new import_x6_plugin_transform.Transform({
      resizing: {
        enabled: false,
        minWidth: 100,
        minHeight: 30
      },
      rotating: {
        enabled: false
      }
    })
  );
};
var plugin_default = registerPlugin;

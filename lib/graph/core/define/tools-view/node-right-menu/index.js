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

// src/graph/core/define/tools-view/node-right-menu/index.tsx
var node_right_menu_exports = {};
__export(node_right_menu_exports, {
  default: () => node_right_menu_default
});
module.exports = __toCommonJS(node_right_menu_exports);
var import_x6 = __toESM(require("@antv/x6"));
var import_client = __toESM(require("react-dom/client"));
var import_menu = __toESM(require("./menu"));
var NodeRightMenu = class extends import_x6.ToolsView.ToolItem {
  constructor() {
    super(...arguments);
    this.closeMenu = () => {
      this.toggleMenu(false);
    };
    this.onMouseDown = (e) => {
      if (e.target) {
        const { id } = this.cellView.cell;
        if (id) {
          const className = `icd-overlay-${id}`;
          const overlayNode = document.getElementsByClassName(className)[0];
          const modalClassName = `icd-modal-${id}`;
          const modalNode = document.getElementsByClassName(modalClassName)[0];
          if (overlayNode && overlayNode.contains(e.target) || modalNode && modalNode.contains(e.target)) {
            return;
          }
        }
      }
      this.closeMenu();
    };
  }
  toggleMenu(visible, pos) {
    var _a;
    if (!visible) {
      (_a = this.root) == null ? void 0 : _a.unmount();
      this.root = void 0;
      document.removeEventListener("mousedown", this.onMouseDown);
    } else if (pos) {
      this.root = import_client.default.createRoot(this.container);
      this.root.render(
        /* @__PURE__ */ import_x6.default.createElement(
          import_menu.default,
          {
            node: this.cellView.cell,
            graph: this.cellView.graph,
            pos,
            onClose: this.closeMenu
          }
        )
      );
      document.addEventListener("mousedown", this.onMouseDown);
    }
  }
  onContextMenu({ e }) {
    this.toggleMenu(true, { x: e.clientX, y: e.clientY });
  }
  delegateEvents() {
    this.cellView.on("cell:contextmenu", this.onContextMenu, this);
    return super.delegateEvents();
  }
  onRemove() {
    this.cellView.off("cell:contextmenu", this.onContextMenu, this);
  }
};
NodeRightMenu.config({ tagName: "div", isSVGElement: false, className: "icd-node-click-menu" });
var node_right_menu_default = NodeRightMenu;

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

// src/graph/core/define/tools-view/node-right-menu/menu.tsx
var menu_exports = {};
__export(menu_exports, {
  default: () => menu_default
});
module.exports = __toCommonJS(menu_exports);
var import_classnames = __toESM(require("classnames"));
var import_react = __toESM(require("react"));
var import_react_components = require("../../../../..");
var import_dropdown_define_ui = __toESM(require("../../../../../dropdown-define-ui"));
var import_helper = require("../../../helper");
var import_func = require("../../../helper/func");
var import_glass_box_wrap = __toESM(require("../components/glass-box-wrap"));
var import_menu_item = require("./menu-item");
var import_node_config_modal = __toESM(require("./node-config-modal"));
var import_index = require("./index.less");
var getTitle = (menu, isDebug) => {
  let { title } = menu;
  if (menu.key === "addDebug") {
    title = isDebug ? "取消断点" : "添加断点";
  }
  return title;
};
var N = (props) => {
  var _a, _b;
  const { pos, node, graph, onClose } = props;
  const [disabled, setDisabled] = (0, import_react.useState)(
    [2, 5].includes((_b = (_a = node.data) == null ? void 0 : _a.execution) == null ? void 0 : _b.status)
  );
  const [open, setOpen] = (0, import_react.useState)(true);
  const [addCodeModal, setAddCodeModal] = (0, import_react.useState)(false);
  const handleDeleteNode = () => {
    graph.removeNode(node);
    onClose();
  };
  const handleExecuteCode = async () => {
    (0, import_func.changeNodeData)({ "execution.status": 2, "execution.type": 4 }, node);
  };
  const handleExecuteFromThat = () => {
    (0, import_helper.handleExecuteFlowFromThatNode)(node);
  };
  const handleAddCode = () => {
    setOpen(false);
    setAddCodeModal(true);
  };
  const handleMenuClick = (key) => {
    var _a2;
    if (disabled) {
      return;
    }
    switch (key) {
      case "start": {
        if ((0, import_helper.validateFlowNodes)(graph)) {
          (0, import_helper.handleStartExecuteFlow)(graph);
        }
        onClose();
        break;
      }
      case "del": {
        handleDeleteNode();
        break;
      }
      case "addCode": {
        handleAddCode();
        break;
      }
      case "startThatNode": {
        const { info } = node.data || {};
        if (!info.code) {
          import_react_components.utils.message.error(
            "当前节点没有任何可执行代码，请先为该节点添加代码！"
          );
        } else {
          handleExecuteCode();
        }
        onClose();
        break;
      }
      case "startThat": {
        handleExecuteFromThat();
        onClose();
        break;
      }
      case "endThat": {
        if ((0, import_helper.validateFlowNodes)(graph)) {
          (0, import_helper.handleExecuteFlowAtThatNode)(node);
          (0, import_helper.handleStartExecuteFlow)(graph);
        }
        onClose();
        break;
      }
      case "addDebug": {
        (0, import_func.changeNodeData)({ "info.isDebug": !((_a2 = node.data.info) == null ? void 0 : _a2.isDebug) }, node);
        onClose();
        break;
      }
      default: {
        break;
      }
    }
  };
  const onCancel = () => {
    setAddCodeModal(false);
    onClose();
  };
  const onOk = (nodeData) => {
    console.log(nodeData);
    node.setData({ ...nodeData });
    onCancel();
  };
  const dropdownRender = () => {
    return /* @__PURE__ */ import_react.default.createElement(import_glass_box_wrap.default, { className: "nrm" }, import_menu_item.MENU_ITEM_CONFIG.map((menu) => {
      var _a2, _b2;
      return /* @__PURE__ */ import_react.default.createElement(
        "div",
        {
          key: menu.key,
          className: (0, import_classnames.default)("it", { ["disabled"]: disabled }),
          onClick: () => handleMenuClick(menu.key)
        },
        menu.icon,
        /* @__PURE__ */ import_react.default.createElement("span", null, getTitle(menu, (_b2 = (_a2 = node.data) == null ? void 0 : _a2.info) == null ? void 0 : _b2.isDebug))
      );
    }));
  };
  (0, import_react.useEffect)(() => {
    if (graph) {
      graph.once("node:change:data", ({ node: nd, current }) => {
        var _a2;
        if (nd.id === node.id) {
          setDisabled([2, 5].includes((_a2 = current == null ? void 0 : current.execution) == null ? void 0 : _a2.status));
        }
      });
    }
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(
    import_dropdown_define_ui.default,
    {
      open,
      trigger: ["contextMenu"],
      align: { offset: [pos.x + 20, pos.y] },
      dropdownRender,
      overlayClassName: `icd-overlay-${node.id}`
    },
    /* @__PURE__ */ import_react.default.createElement("span", null)
  ), node && graph && /* @__PURE__ */ import_react.default.createElement(
    import_node_config_modal.default,
    {
      width: 800,
      open: addCodeModal,
      onOk,
      onCancel,
      node,
      graph,
      className: `icd-modal-${node.id}`
    }
  ));
};
var Menu = (0, import_react.memo)(N);
var menu_default = Menu;

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

// src/graph/core/define/tools-view/node-right-menu/node-config-modal/index.tsx
var node_config_modal_exports = {};
__export(node_config_modal_exports, {
  default: () => node_config_modal_default
});
module.exports = __toCommonJS(node_config_modal_exports);
var import_react = __toESM(require("react"));
var import_ui = require("@iicoding/ui");
var import_react_icons = require("@iicoding/react-icons");
var import_antd = require("antd");
var import_monaco_editor = __toESM(require("../../../../../../monaco-editor"));
var import_classnames = __toESM(require("classnames"));
var import_index = require("./index.less");
var N = (props) => {
  var _a;
  const { node, graph, ...other } = props;
  const [activeKey, setActiveKey] = (0, import_react.useState)("deps");
  const [depParent, setDepParent] = (0, import_react.useState)(() => {
    var _a2, _b, _c, _d;
    const result = [];
    if ((_b = (_a2 = node.data) == null ? void 0 : _a2.info) == null ? void 0 : _b.deps) {
      result.push("deps");
    }
    if ((_d = (_c = node.data) == null ? void 0 : _c.info) == null ? void 0 : _d.subject) {
      result.push("subject");
    }
    return result;
  });
  const codeRef = (0, import_react.useRef)("");
  const handleCodeChange = (0, import_react.useCallback)((value) => {
    codeRef.current = value;
  }, []);
  const onOk = (e) => {
    var _a2;
    let newData = { ...node.data };
    if (codeRef.current) {
      newData = { ...newData, info: { ...newData == null ? void 0 : newData.info, code: codeRef.current } };
    }
    const deps = {
      deps: depParent.includes("deps"),
      subject: depParent.includes("subject")
    };
    console.log(newData);
    (_a2 = props.onOk) == null ? void 0 : _a2.call(props, { ...newData, info: { ...newData == null ? void 0 : newData.info, ...deps } });
  };
  const handleToggleTabClick = (key) => {
    setActiveKey(key);
  };
  const handleDepsChange = (0, import_react.useCallback)((checked) => {
    setDepParent(checked);
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(
    import_antd.Modal,
    {
      title: /* @__PURE__ */ import_react.default.createElement("div", { className: "addCode" }, /* @__PURE__ */ import_react.default.createElement(
        import_ui.FullIconBackground,
        {
          style: { fontSize: 32, cursor: "pointer", marginLeft: -8, zIndex: 0 },
          icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.Full23943084Full, { className: "icd-reset-child-item-fill" })
        }
      ), /* @__PURE__ */ import_react.default.createElement("span", null, "节点配置")),
      ...other,
      wrapClassName: "m",
      onOk
    },
    /* @__PURE__ */ import_react.default.createElement("div", { className: "ncm" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "ncd" }, /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        onClick: () => handleToggleTabClick("deps"),
        className: (0, import_classnames.default)("it", { ["active"]: activeKey === "deps" })
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_ui.FullIconBackground,
        {
          style: { fontSize: 20, cursor: "pointer", margin: "1px 4px 0 0", zIndex: 0 },
          icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.Full1704531Full, { className: "icd-reset-child-item-fill" }),
          mode: "double"
        }
      ),
      /* @__PURE__ */ import_react.default.createElement("span", null, "属性配置")
    ), /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        onClick: () => handleToggleTabClick("code"),
        className: (0, import_classnames.default)("it", { ["active"]: activeKey === "code" })
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_ui.FullIconBackground,
        {
          style: { fontSize: 32, cursor: "pointer", marginLeft: -8, zIndex: 0 },
          icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.Full23943173Full, { className: "icd-reset-child-item-fill" })
        }
      ),
      /* @__PURE__ */ import_react.default.createElement("span", null, "执行代码")
    )), activeKey === "deps" && /* @__PURE__ */ import_react.default.createElement("div", { className: "settings" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "item" }, /* @__PURE__ */ import_react.default.createElement("span", null, "依赖注入:"), /* @__PURE__ */ import_react.default.createElement("div", { className: "value" }, /* @__PURE__ */ import_react.default.createElement(import_antd.Checkbox.Group, { onChange: handleDepsChange, value: depParent }, /* @__PURE__ */ import_react.default.createElement(import_antd.Checkbox, { value: "deps" }, "依赖上游节点执行结果"), /* @__PURE__ */ import_react.default.createElement(import_antd.Checkbox, { value: "subject" }, "当上游节点返回true时本节点为主节点"))))), activeKey === "code" && /* @__PURE__ */ import_react.default.createElement(
      import_monaco_editor.default,
      {
        value: codeRef.current || ((_a = node.data) == null ? void 0 : _a.info.code),
        onChange: handleCodeChange,
        className: "edit"
      }
    ))
  );
};
var NodeConfigModal = (0, import_react.memo)(N);
var node_config_modal_default = NodeConfigModal;

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

// src/graph/core/define/nodes/text-node/index.tsx
var text_node_exports = {};
__export(text_node_exports, {
  default: () => text_node_default
});
module.exports = __toCommonJS(text_node_exports);
var import_react = __toESM(require("react"));
var import_ui = require("@iicoding/ui");
var import_react_icons = require("@iicoding/react-icons");
var import_node_scale_wrapper = __toESM(require("../../../../components/node-scale-wrapper"));
var import_execute = require("./execute");
var import_style = require("./style");
var import_index = require("./index.less");
var nodeWeekMap = /* @__PURE__ */ new WeakMap();
var setDomSelectionRange = (el) => {
  var _a, _b;
  const range = document.createRange();
  range.collapse();
  range.selectNode(el);
  if (window) {
    (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
    (_b = window.getSelection()) == null ? void 0 : _b.addRange(range);
  }
};
var defaultData = {
  info: {
    nodeType: "text-node",
    selected: false,
    value: "文本节点"
  },
  execution: {
    status: 1,
    type: 0,
    prevNodeInfo: { status: 1, result: void 0 }
  },
  style: {}
};
var T = (props) => {
  const {
    node = {},
    graph,
    isNode = true,
    ...other
  } = props;
  const { info, style, execution } = node.data || defaultData;
  const [input, setInput] = (0, import_react.useState)(false);
  const [value = "文本节点", setValue] = (0, import_react.useState)(info.value);
  const inputRef = (0, import_react.useRef)(null);
  const handleDoubleClick = () => {
    if (isNode) {
      setInput(true);
    }
  };
  const onFocus = (e) => {
    setDomSelectionRange(e.target);
  };
  const onBlur = (e) => {
    setValue(e.target.innerHTML);
    node.setData({
      ...node.data,
      info: { ...node.data.info, value: e.target.innerHTML }
    });
  };
  const executeNodeCode = async (ex) => {
    if (info && node && graph) {
      await (0, import_execute.executeNodeMethods)(ex, info, node, graph);
    }
  };
  (0, import_react.useEffect)(() => {
    if ((execution == null ? void 0 : execution.status) === 2) {
      executeNodeCode(execution);
    }
  }, [execution]);
  (0, import_react.useEffect)(() => {
    if (!info.selected) {
      setInput(false);
    }
  }, [info.selected]);
  (0, import_react.useEffect)(() => {
    if (inputRef.current && input) {
      const timer = setTimeout(() => {
        var _a;
        (_a = inputRef.current) == null ? void 0 : _a.focus();
        clearTimeout(timer);
      }, 100);
    }
  }, [input]);
  return /* @__PURE__ */ import_react.default.createElement(
    import_node_scale_wrapper.default,
    {
      datatype: JSON.stringify({ type: "node " }),
      show: info.selected,
      node,
      graph,
      minWidth: 100,
      minHeight: 40,
      onDoubleClick: handleDoubleClick,
      style: { borderRadius: 8, ...style }
    },
    /* @__PURE__ */ import_react.default.createElement(import_style.NodeContent, { show: info.selected }, /* @__PURE__ */ import_react.default.createElement(
      import_style.ContentBox,
      {
        ...other,
        datatype: JSON.stringify({ type: "textNode " }),
        style: { opacity: input ? 0 : 1 }
      },
      /* @__PURE__ */ import_react.default.createElement(import_style.Content, { datatype: JSON.stringify({ type: "textNode " }) }, value),
      isNode && execution && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, execution.status === 2 && /* @__PURE__ */ import_react.default.createElement(import_style.Icon, null, /* @__PURE__ */ import_react.default.createElement(
        import_ui.FullIconBackground,
        {
          style: {
            fontSize: 36,
            zIndex: 0,
            margin: "0 -6px",
            animation: "icd-running 2s linear infinite"
          },
          icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.FullEachFull, null),
          bgStyle: { width: "100%", height: "100%", minWidth: 8 }
        }
      )), execution.status === 3 && /* @__PURE__ */ import_react.default.createElement(import_style.Icon, null, /* @__PURE__ */ import_react.default.createElement(
        import_ui.FullIconBackground,
        {
          mode: "double",
          style: { fontSize: 30, zIndex: 0 },
          icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.Full2023121725Full, null),
          bgStyle: { width: "100%", height: "100%", minWidth: 8 }
        }
      )), execution.status === 4 && /* @__PURE__ */ import_react.default.createElement(import_style.Icon, null, /* @__PURE__ */ import_react.default.createElement(
        import_ui.FullIconBackground,
        {
          style: {
            fontSize: 30,
            zIndex: 0,
            marginTop: 2
          },
          icon: /* @__PURE__ */ import_react.default.createElement(import_react_icons.UndenoFull, { className: "icd-run-failed" }),
          bgStyle: {
            width: "60%",
            height: "60%",
            minWidth: 8,
            backgroundColor: "red"
          }
        }
      )), execution.status === 5 && /* @__PURE__ */ import_react.default.createElement(import_style.Icon, null, /* @__PURE__ */ import_react.default.createElement(
        import_react_icons.IconComp66Shadow,
        {
          style: { fontSize: 28, marginTop: 6, color: "#fff9" }
        }
      )))
    ), /* @__PURE__ */ import_react.default.createElement(import_style.EditContentBox, { show: input }, /* @__PURE__ */ import_react.default.createElement(
      import_style.EditContent,
      {
        onFocus,
        onBlur,
        ref: inputRef,
        suppressContentEditableWarning: true,
        contentEditable: true
      },
      value
    )))
  );
};
var TextNode = (0, import_react.memo)(T, (_prevProps, nextProps) => {
  const { node = {} } = nextProps;
  const oldData = nodeWeekMap.get(node);
  if (!oldData) {
    nodeWeekMap.set(node, node.data);
    return false;
  }
  if (node.data !== oldData) {
    nodeWeekMap.set(node, node.data);
    return false;
  }
  return true;
});
var text_node_default = TextNode;

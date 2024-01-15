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

// src/graph/core/register-action/event/helper.ts
var helper_exports = {};
__export(helper_exports, {
  getLine: () => getLine,
  setEdgeInitAttrs: () => setEdgeInitAttrs,
  setEdgeRunningAttrs: () => setEdgeRunningAttrs,
  setEdgeWaitingAttrs: () => setEdgeWaitingAttrs
});
module.exports = __toCommonJS(helper_exports);
var import_utils = require("@iicoding/utils");
var changeRgba = (color, opacity) => {
  const splitColor = color.split(", ");
  splitColor[splitColor.length - 1] = `${opacity})`;
  return splitColor.join(", ");
};
var getLine = (attrs, opacity = 1) => {
  const { line } = attrs;
  const newline = {
    ...line,
    stroke: "rgba(70, 216, 254, 1)",
    strokeWidth: (line == null ? void 0 : line.strokeWidth) ? +line.strokeWidth : 2
  };
  if ((0, import_utils.isObject)(line)) {
    const { stroke = "" } = line;
    if ((0, import_utils.isObject)(stroke) && stroke.stops) {
      newline.stroke = stroke;
    }
    if ((0, import_utils.isString)(stroke)) {
      const splitColor = stroke.split(", ");
      splitColor[splitColor.length - 1] = `${opacity})`;
      newline.stroke = splitColor.join(", ");
    }
  }
  return newline;
};
var getMarker = (oldAttrs, fill) => {
  var _a, _b, _c;
  let newTargetMarker = {};
  if ((0, import_utils.isString)((_a = oldAttrs.line) == null ? void 0 : _a.targetMarker)) {
    newTargetMarker = { name: oldAttrs.line.targetMarker };
  }
  if ((0, import_utils.isObject)((_b = oldAttrs.line) == null ? void 0 : _b.targetMarker)) {
    newTargetMarker = { ...(_c = oldAttrs.line) == null ? void 0 : _c.targetMarker };
  }
  return {
    ...newTargetMarker,
    attrs: {
      ...newTargetMarker.attrs
    },
    fill
  };
};
var style = {
  animation: "running-line 30s infinite linear"
};
var setEdgeRunningAttrs = (oldAttrs) => {
  var _a, _b;
  const newAttrs = { ...oldAttrs };
  const startColor = getLine(oldAttrs, 0.3);
  const endColor = getLine(oldAttrs, 1);
  const targetMarker = getMarker(oldAttrs, endColor.stroke);
  const strokeWidth = ((0, import_utils.isNumber)((_a = oldAttrs.line) == null ? void 0 : _a.strokeWidth) ? oldAttrs.line.strokeWidth : 3) + 1;
  newAttrs.line = {
    ...oldAttrs.line,
    stroke: {
      type: "linearGradient",
      stops: [
        { offset: "0%", color: startColor.stroke },
        { offset: "100%", color: endColor.stroke }
      ]
    },
    style,
    strokeWidth,
    strokeDasharray: 5
  };
  if ((0, import_utils.isObject)((_b = oldAttrs == null ? void 0 : oldAttrs.line) == null ? void 0 : _b.stroke)) {
    if (Array.isArray(oldAttrs.line.stroke.stops)) {
      newAttrs.line.stroke = oldAttrs.line.stroke;
      newAttrs.line.stroke.stops = oldAttrs.line.stroke.stops.map((st) => {
        const newSt = { ...st };
        newSt.color = changeRgba(newSt.color, 1);
        return newSt;
      });
    }
  } else {
    newAttrs.line.targetMarker = targetMarker;
  }
  return newAttrs;
};
var setEdgeWaitingAttrs = (oldAttrs) => {
  var _a;
  const newAttrs = { ...oldAttrs };
  const color = getLine(oldAttrs, 0.35).stroke;
  const targetMarker = getMarker(oldAttrs, color);
  newAttrs.line = {
    ...oldAttrs.line,
    stroke: {
      type: "linearGradient",
      stops: [
        { offset: "0%", color },
        { offset: "100%", color }
      ]
    },
    strokeWidth: 2,
    targetMarker,
    style
  };
  if ((0, import_utils.isObject)((_a = oldAttrs == null ? void 0 : oldAttrs.line) == null ? void 0 : _a.stroke)) {
    if (Array.isArray(oldAttrs.line.stroke.stops)) {
      newAttrs.line.stroke = oldAttrs.line.stroke;
      newAttrs.line.stroke.stops = oldAttrs.line.stroke.stops.map((st) => {
        const newSt = { ...st };
        newSt.color = changeRgba(newSt.color, 0.3);
        return newSt;
      });
    }
  } else {
    newAttrs.line.targetMarker = targetMarker;
  }
  return newAttrs;
};
var setEdgeInitAttrs = (oldAttrs, data) => {
  const newData = { ...data };
  delete newData.status;
  console.log("data----", data);
  return {
    ...oldAttrs,
    line: {
      ...data,
      strokeDasharray: 0
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLine,
  setEdgeInitAttrs,
  setEdgeRunningAttrs,
  setEdgeWaitingAttrs
});

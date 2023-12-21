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

// src/show-markdown/markdown-content-actions.ts
var markdown_content_actions_exports = {};
__export(markdown_content_actions_exports, {
  default: () => markdown_content_actions_default,
  getDirectory: () => getDirectory
});
module.exports = __toCommonJS(markdown_content_actions_exports);
var import_markdown_to_jsx = require("markdown-to-jsx");
var import_nanoid = require("nanoid");
var import_utils = require("@iicoding/utils");
var import_constants = require("./constants");
function executeSort(source, sortArr, lev = 1) {
  source.forEach((under, index) => {
    under.lev = sortArr.length;
    if (sortArr.length === 1) {
      under.sort = sortArr[0];
    } else {
      sortArr[lev - 1] = index + 1;
      under.sort = sortArr.join(".");
    }
    if (under.children.length) {
      executeSort(under.children, [...sortArr, index + 1], lev + 1);
    }
  });
}
var execute = (source) => {
  source.forEach((record, index) => {
    if (index !== 0) {
      const prev = source[index - 1];
      if (prev.idx < source[index].idx) {
        record.hasParent = true;
        prev.children.push(record);
      }
    }
  });
  source = source.filter((record) => !record.hasParent);
  if (source.length > 1) {
    execute(source);
  }
};
var getDirectory = (article) => {
  var _a, _b;
  const { content } = article;
  const { children } = (0, import_markdown_to_jsx.compiler)(content, { slugify: (str) => str }).props || {};
  const result = [];
  let allSection = [];
  if (children) {
    const [first] = children;
    const dataSource = first.key !== "outer" ? children : ((_b = (_a = children[0]) == null ? void 0 : _a.props) == null ? void 0 : _b.children) || [];
    let maxIdx = 6;
    dataSource.forEach((child) => {
      var _a2, _b2;
      const { type } = child;
      if ((0, import_utils.isString)(type) && type.startsWith("h") && type !== "hr") {
        let title = (_a2 = child.props.children) == null ? void 0 : _a2[0];
        if ((0, import_utils.isObject)(title)) {
          title = (_b2 = title.props.children) == null ? void 0 : _b2[0];
        }
        const crt = {
          type,
          idx: +type.substring(1, 2),
          id: (0, import_nanoid.nanoid)(),
          title,
          children: [],
          hasParent: false
        };
        if (crt.idx < maxIdx) {
          maxIdx = crt.idx;
        }
        result.push(crt);
      }
    });
    const indexArr = result.reduce(
      (previousValue, currentValue, currentIndex) => {
        if (currentValue.idx === maxIdx) {
          previousValue.push(currentIndex);
        }
        return previousValue;
      },
      []
    );
    for (let i = 0; i <= indexArr.length; i++) {
      allSection.push(result.slice(i === 0 ? 0 : indexArr[i - 1], indexArr[i]));
    }
    allSection = allSection.map((section) => {
      if (section.length === 1) {
        return section;
      }
      execute(section);
      return section.filter((record) => !record.hasParent);
    });
    let idx = 0;
    allSection = allSection.map((record) => {
      if (record.length) {
        executeSort(record, [++idx]);
      }
      return record;
    });
  }
  localStorage.setItem(
    window.location.href,
    result.map((record) => record.id).join(import_constants.DIRECTORY_ID_SPLIT)
  );
  return allSection.flat(1);
};
var markdown_content_actions_default = getDirectory;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getDirectory
});

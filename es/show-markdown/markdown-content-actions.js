function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { isObject, isString } from '@iicoding/utils';
import { compiler } from 'markdown-to-jsx';
import { nanoid } from 'nanoid';
import { DIRECTORY_ID_SPLIT } from "./constants";
function executeSort(source, sortArr) {
  var lev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  source.forEach(function (under, index) {
    // const underIndex = `${idx}.${index + 1}`;
    // if (lev === 1) {
    //   under.sort = idx.toString();
    // } else if (lev === 2) {
    //   under.sort = underIndex;
    // } else {
    //   const sort = Array(lev - 1).fill('.');
    //   under.sort = underIndex;
    //   console.log('underIndex----', underIndex);
    //   sort.forEach((str, sortIndex: number) => {
    //     under.sort += `${str}${sortIndex + 1}`;
    //   });
    //   // under.sort = underIndex;
    // }
    //
    // if (under.children.length > 0) {
    //   executeSort(under.children, underIndex, lev + 1);
    // }

    under.lev = sortArr.length;
    if (sortArr.length === 1) {
      under.sort = sortArr[0];
    } else {
      sortArr[lev - 1] = index + 1;
      under.sort = sortArr.join('.');
    }
    if (under.children.length) {
      executeSort(under.children, [].concat(_toConsumableArray(sortArr), [index + 1]), lev + 1);
    }
  });
}

// 处理分段
var execute = function execute(source) {
  source.forEach(function (record, index) {
    if (index !== 0) {
      var prev = source[index - 1];
      if (prev.idx < source[index].idx) {
        record.hasParent = true;
        // record.sort = prev.sort + 1;

        prev.children.push(record);
      }
    }
  });
  source = source.filter(function (record) {
    return !record.hasParent;
  });
  if (source.length > 1) {
    execute(source);
  }
};
export var getDirectory = function getDirectory(article) {
  var content = article.content;
  var _ref = compiler(content, {
      slugify: function slugify(str) {
        return str;
      }
    }).props || {},
    children = _ref.children;
  var result = [];
  // 存放分组的容器
  var allSection = [];
  if (children) {
    var _children$;
    var _children = _slicedToArray(children, 1),
      first = _children[0];
    // 如果文章中有角标，会解析两个dom 一个 div  一个 footer 所以这里需要判断一下
    // 如果没有角标，children直接就是所有元素
    var dataSource = first.key !== 'outer' ? children : ((_children$ = children[0]) === null || _children$ === void 0 || (_children$ = _children$.props) === null || _children$ === void 0 ? void 0 : _children$.children) || [];
    var maxIdx = 6;
    dataSource.forEach(function (child) {
      var type = child.type;
      if (isString(type) && type.startsWith('h') && type !== 'hr') {
        var _child$props$children;
        var title = (_child$props$children = child.props.children) === null || _child$props$children === void 0 ? void 0 : _child$props$children[0];
        if (isObject(title)) {
          var _title$props$children;
          // @ts-expect-error
          title = (_title$props$children = title.props.children) === null || _title$props$children === void 0 ? void 0 : _title$props$children[0];
        }
        var crt = {
          type: type,
          idx: +type.substring(1, 2),
          id: nanoid(),
          title: title,
          children: [],
          hasParent: false
        };
        if (crt.idx < maxIdx) {
          maxIdx = crt.idx;
        }
        result.push(crt);
      }
    });

    // 记录 最大标签的索引容器 h1为最大，h6为最小，所以此处最大maxIdx 为 h1 的idx 1
    var indexArr = result.reduce(function (previousValue, currentValue, currentIndex) {
      if (currentValue.idx === maxIdx) {
        previousValue.push(currentIndex);
      }
      return previousValue;
    }, []);
    for (var i = 0; i <= indexArr.length; i++) {
      // 第一项 从0开始截取， 第二项开始，从索引处开始截取
      allSection.push(result.slice(i === 0 ? 0 : indexArr[i - 1], indexArr[i]));
    }

    // 开始对每个分段进行处理
    allSection = allSection.map(function (section) {
      if (section.length === 1) {
        return section;
      }
      execute(section);
      return section.filter(function (record) {
        return !record.hasParent;
      });
    });

    // 如果某一个 分段没有值，则 index 自增会出现序号错乱
    var idx = 0;
    // 处理索引
    allSection = allSection.map(function (record) {
      if (record.length) {
        executeSort(record, [++idx]);
      }
      return record;
    });
  }
  localStorage.setItem(window.location.href, result.map(function (record) {
    return record.id;
  }).join(DIRECTORY_ID_SPLIT));
  return allSection.flat(1);
};
export default getDirectory;
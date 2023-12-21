function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @auth: dmx
 * @time: 2022/6/15
 * @func: p 标签
 * @params:
 * @return:
 * @updateTime:
 **/
import * as React from 'react';
import { Full23943367Full } from '@iicoding/react-icons';
import { isString } from '@iicoding/utils';
import Tip from "../tip";
import FullIconBackground from "../../full-icon-background";
import "./index.less";
var P = function P(props) {
  var children = props.children,
    isBlockquote = props.isBlockquote;
  var isStrong = false;
  React.Children.forEach(children, function (child) {
    if (child) {
      Object.keys(child).forEach(function (key) {
        // @ts-expect-error
        if (key === 'type' && child[key] === 'strong') {
          isStrong = true;
        }
      });
    }
  });
  if (isStrong && !isBlockquote) {
    return /*#__PURE__*/React.createElement("div", {
      className: "icd-note"
    }, /*#__PURE__*/React.createElement("div", {
      className: "icd-tips"
    }, /*#__PURE__*/React.createElement(FullIconBackground, {
      style: {
        fontSize: '32px',
        marginTop: -3
      },
      icon: /*#__PURE__*/React.createElement(Full23943367Full, null)
    }), /*#__PURE__*/React.createElement("span", null, "NOTE\uFF1A")), children);
  }

  // 处理换行
  if (Array.isArray(children) && children[0]) {
    var _children = _slicedToArray(children, 1),
      str = _children[0];
    var noReplaceStr = "'iiCoding-a-b-c-d-e-f'";
    var replaceStr = 'a-b-c-d-e-f-g-iiCoding';
    if (isString(str)) {
      var lastChild = children.at(-1);
      var spliterator = ':::';

      // 强调 tip 标签
      if (str.startsWith(spliterator)) {
        // 同下，但是没有*号包裹
        if (children.length === 1) {
          var readChild = str.split(spliterator).map(function (s) {
            s.trim();
            if (s.includes('\n')) {
              // @ts-expect-error
              s = s.replaceAll('\n', replaceStr);
            }
            return s;
          }).filter(function (s) {
            return s && s !== spliterator;
          });
          if (readChild.length === 1) {
            // 这时候，type 和 文案是连接在一起的
            var _readChild$0$split = readChild[0].split(replaceStr),
              _readChild$0$split2 = _slicedToArray(_readChild$0$split, 2),
              type = _readChild$0$split2[0],
              emChild = _readChild$0$split2[1];
            return /*#__PURE__*/React.createElement(Tip, {
              type: type.trim(),
              children: emChild
            });
          }

          // 当用户输入格式为： ::: warning
          //                 *文案*
          //                 :::
          // 注意有*号包裹
        } else if (lastChild.endsWith(spliterator)) {
          var len = children.length;
          return children.slice(1, len - 1).map(function (it) {
            if ( /*#__PURE__*/React.isValidElement(it) && (it.type === 'em' ||
            // @ts-expect-error
            _typeof(it.type) === 'object' && it.type.displayName === 'em')) {
              var _type = str.split(spliterator)[1];
              return /*#__PURE__*/React.createElement(Tip, {
                key: "".concat(_type, "-").concat(it),
                type: _type === null || _type === void 0 ? void 0 : _type.trim(),
                children: it
              });
            }
            return it;
          });
        }
      }

      // 解析换行
      if (str.includes('\n')) {
        if (str.includes('\\n')) {
          // @ts-expect-error
          str = str.replaceAll('\\n', noReplaceStr);
          str = str.replaceAll('\n', replaceStr);
          str = str.replaceAll(noReplaceStr, '\\n');
        } else {
          // @ts-expect-error
          str = str.replaceAll('\n', replaceStr);
        }
        var child = str.split(replaceStr);
        return /*#__PURE__*/React.createElement("div", {
          className: "icd-p"
        }, child.map(function (str, idx) {
          return /*#__PURE__*/React.createElement("span", {
            className: "icd-span",
            key: "".concat(str, "-").concat(idx.toString())
          }, str);
        }));
      }
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "icd-p"
  }, children);
};
var TagP = /*#__PURE__*/React.memo(P);
export default TagP;
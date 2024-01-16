function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import classNames from 'classnames';
import React, { memo } from 'react';
import MonacoEditor from 'react-monaco-editor';
import "./index.less";
var M = function M(props) {
  var className = props.className;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('ime', className)
  }, /*#__PURE__*/React.createElement(MonacoEditor, _extends({
    language: "javascript",
    theme: "vs",
    value: "",
    options: {
      // 初始值
      // value: '',
      // 语言
      language: 'javascript',
      // 自动布局
      automaticLayout: true,
      theme: 'vs',
      // 不要带滚动条的边框
      overviewRulerBorder: true,
      // 是否只读
      readOnly: false,
      tabSize: 2,
      autoIndent: 'keep',
      formatOnPaste: true
    }
  }, props)));
};
var IcdMonacoEditor = /*#__PURE__*/memo(M);
export default IcdMonacoEditor;
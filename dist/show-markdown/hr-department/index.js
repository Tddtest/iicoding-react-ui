import * as React from 'react';
import "./index.scss";
var departmentType = {
  fade: 'fade',
  fade2: 'fade-2',
  dots: 'dots',
  accessory: 'accessory',
  pill: 'pill',
  bookends: 'bookends',
  flair: 'flair',
  wave: 'wave',
  shine: 'shine',
  charlie: 'charlie',
  stars: 'stars',
  'vertical-lines': 'vertical-lines',
  'horizontal-lines': 'horizontal-lines',
  'slash-1': 'slash-1',
  'slash-2': 'slash-2',
  'slash-3': 'slash-3',
  'bookends-dots': 'bookends-dots'
};
var H = function H(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'bookends' : _props$type;
  return /*#__PURE__*/React.createElement("div", {
    className: "hr-department"
  }, /*#__PURE__*/React.createElement("hr", {
    className: type
  }));
};
var HrDepartment = /*#__PURE__*/React.memo(H);
export default HrDepartment;
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from '@emotion/styled';
var color = '#be61bc';
export var Item = styled.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  list-style: none;\n"])));
export var SerialNumber = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  margin-right: 10px;\n  color: ", ";\n  font-size: 16px;\n"])), color);
export var ListText = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: #75575;\n"])));
export var Disorder = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  top: -2px;\n  display: inline-flex;\n  margin-right: 10px;\n  color: ", ";\n  // font-size: 14px;\n"])), color);
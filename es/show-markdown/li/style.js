var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import styled from '@emotion/styled';
export var Item = styled.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ol,\n  ul {\n    ", "\n  }\n"])), function (props) {
  return props.hasOlOrUl ? 'padding-left: 20px' : '';
});
var _excluded = ["children", "parentIdx"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
import { isObject } from '@iicoding/utils';
var O = function O(props) {
  var children = props.children,
    _props$parentIdx = props.parentIdx,
    parentIdx = _props$parentIdx === void 0 ? 0 : _props$parentIdx,
    other = _objectWithoutProperties(props, _excluded);
  var getChildren = React.useCallback(function () {
    if (Array.isArray(children)) {
      return children.map(function (li, idx) {
        if (isObject(li)) {
          if ( /*#__PURE__*/React.isValidElement(li)) {
            return /*#__PURE__*/React.cloneElement(li, {
              parentIdx: parentIdx,
              isOl: true,
              selfIdx: idx + 1
            });
          }
        }
        return li;
      });
    }
    return children;
  }, [children]);
  return /*#__PURE__*/React.createElement("ol", other, getChildren());
};
var Ol = /*#__PURE__*/React.memo(O);
Ol.displayName = 'ol';
export default Ol;
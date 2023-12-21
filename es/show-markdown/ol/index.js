import * as React from 'react';
import { isObject } from '@iicoding/utils';
var O = function O(props) {
  var children = props.children,
    _props$parentIdx = props.parentIdx,
    parentIdx = _props$parentIdx === void 0 ? 0 : _props$parentIdx;
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
  return /*#__PURE__*/React.createElement("ol", props, getChildren());
};
var Ol = /*#__PURE__*/React.memo(O);
Ol.displayName = 'ol';
export default Ol;
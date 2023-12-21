import * as React from 'react';
import { useCallback } from 'react';
import { isObject } from '@iicoding/utils';
var U = function U(props) {
  var children = props.children,
    _props$parentIdx = props.parentIdx,
    parentIdx = _props$parentIdx === void 0 ? 0 : _props$parentIdx;
  console.log(parentIdx);
  var getChildren = useCallback(function () {
    if (Array.isArray(children)) {
      return children.map(function (li) {
        if (isObject(li)) {
          if ( /*#__PURE__*/React.isValidElement(li)) {
            return /*#__PURE__*/React.cloneElement(li, {
              parentIdx: parentIdx + 1,
              isUl: true
            });
          }
        }
        return li;
      });
    }
    return children;
  }, [children]);
  return /*#__PURE__*/React.createElement("ul", props, getChildren());
};
var Ul = /*#__PURE__*/React.memo(U);
Ul.displayName = 'ul';
export default Ul;
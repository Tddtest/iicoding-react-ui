import React from 'react';
import { FullIconBackground } from "../../../../../";
import { Full23943084Full, Full23943134Full, Full23943173Full, FulldebugFull, FullIconCc35Full, FullStartFull, FullStartThatFull } from '@iicoding/react-icons';
export var MENU_ITEM_CONFIG = [{
  title: '删除节点',
  key: 'del',
  icon: /*#__PURE__*/React.createElement(FullIconBackground, {
    style: {
      fontSize: 20,
      cursor: 'pointer',
      zIndex: 0
    },
    icon: /*#__PURE__*/React.createElement(FullIconCc35Full, {
      className: "icd-reset-child-item-fill"
    }),
    mode: "double",
    bgStyle: {
      width: '50%',
      height: '50%',
      minWidth: 8
    }
  })
}, {
  title: '添加断点',
  key: 'addDebug',
  icon: /*#__PURE__*/React.createElement(FullIconBackground, {
    style: {
      fontSize: 28,
      cursor: 'pointer',
      margin: '-3px -4px 0 -4px',
      zIndex: 0
    },
    icon: /*#__PURE__*/React.createElement(FulldebugFull, {
      className: "icd-reset-child-item-fill"
    })
  })
}, {
  title: '执行流程',
  key: 'start',
  icon: /*#__PURE__*/React.createElement(FullIconBackground, {
    style: {
      fontSize: 18,
      cursor: 'pointer',
      marginLeft: 1,
      zIndex: 0
    },
    icon: /*#__PURE__*/React.createElement(FullStartFull, {
      className: "icd-reset-child-item-fill"
    })
  })
}, {
  title: '执行当前节点',
  key: 'startThatNode',
  icon: /*#__PURE__*/React.createElement(FullIconBackground, {
    style: {
      fontSize: 26,
      cursor: 'pointer',
      margin: '-2px -3px 0',
      zIndex: 0
    },
    icon: /*#__PURE__*/React.createElement(Full23943173Full, {
      className: "icd-reset-child-item-fill"
    })
  })
}, {
  title: '从当前节点开始执行',
  key: 'startThat',
  icon: /*#__PURE__*/React.createElement(FullIconBackground, {
    style: {
      fontSize: 25,
      cursor: 'pointer',
      margin: '-2px -3px 0',
      zIndex: 0
    },
    icon: /*#__PURE__*/React.createElement(FullStartThatFull, {
      className: "icd-reset-child-item-fill"
    })
  })
}, {
  title: '执行流程到当前节点',
  key: 'endThat',
  icon: /*#__PURE__*/React.createElement(FullIconBackground, {
    style: {
      fontSize: 25,
      cursor: 'pointer',
      margin: '-1px -3px 0 -2px',
      zIndex: 0
    },
    icon: /*#__PURE__*/React.createElement(Full23943134Full, {
      className: "icd-reset-child-item-fill"
    })
  })
}, {
  title: '节点配置',
  key: 'addCode',
  icon: /*#__PURE__*/React.createElement(FullIconBackground, {
    style: {
      fontSize: 26,
      cursor: 'pointer',
      margin: '-2px -3px 0',
      zIndex: 0
    },
    icon: /*#__PURE__*/React.createElement(Full23943084Full, {
      className: "icd-reset-child-item-fill"
    })
  })
}];
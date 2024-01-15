/**
 * @auth: dmx
 * @time: 2024/1/4
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { Export } from '@antv/x6-plugin-export';
import { Selection } from '@antv/x6-plugin-selection';
import { History } from '@antv/x6-plugin-history';
// import { Keyboard } from '@antv/x6-plugin-keyboard';
import { Clipboard } from '@antv/x6-plugin-clipboard';
import { Snapline } from '@antv/x6-plugin-snapline';
import { Transform } from '@antv/x6-plugin-transform';
import { Scroller } from '@antv/x6-plugin-scroller';
var registerPlugin = function registerPlugin(graph) {
  // 对齐
  graph.use(new Snapline({
    enabled: true
  }));

  // 导出插件 使用时  canvas.exportSVG png jpg 等格式
  graph.use(new Export());

  // 滚动画布
  graph.use(new Scroller({
    enabled: true,
    pannable: true,
    pageVisible: true,
    pageBreak: true
  }));

  // 筐选
  graph.use(new Selection({
    enabled: true,
    multiple: true
    // showNodeSelectionBox: true,
    // showEdgeSelectionBox: true,
  }));

  // 历史记录 撤销、重做
  graph.use(new History({
    enabled: true
  }));

  // 快捷键 键盘事件
  // canvas.use(new Keyboard({ enabled: true }));

  // 复制粘贴
  graph.use(new Clipboard({
    enabled: true
  }));

  // 节点操作 缩放等问题
  graph.use(new Transform({
    resizing: {
      enabled: false,
      minWidth: 100,
      minHeight: 30
    },
    rotating: {
      enabled: false
    }
  }));
};
export default registerPlugin;
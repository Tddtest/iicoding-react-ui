import { Keyboard } from '@antv/x6-plugin-keyboard';
var registerKeyboard = function registerKeyboard(graph) {
  graph.use(new Keyboard({
    enabled: true
  }));
  graph.bindKey(['meta+c', 'ctrl+c'], function () {
    var cells = graph.getSelectedCells();
    if (cells.length) {
      graph.copy(cells);
    }
    return false;
  });
  graph.bindKey(['meta+v', 'ctrl+v'], function () {
    if (!graph.isClipboardEmpty()) {
      var cells = graph.paste({
        offset: 32
      });
      graph.cleanSelection();
      graph.select(cells);
    }
    return false;
  });
};
export default registerKeyboard;
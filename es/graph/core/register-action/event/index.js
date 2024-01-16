import registerEdgeEvents from "./edge";
import registerGraphEvents from "./graph";
import registerKeyboard from "./key-borad";
import registerNodeEvents from "./node";
var registerEvents = function registerEvents(graph) {
  // 注册节点事件
  registerNodeEvents(graph);
  // 注册连线事件
  registerEdgeEvents(graph);
  // 注册画布事件
  registerGraphEvents(graph);
  // 注册键盘事件
  registerKeyboard(graph);
};
export default registerEvents;
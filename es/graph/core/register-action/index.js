/**
 * @auth: dmx
 * @time: 2024/1/4
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/

import registerEvents from "./event";
import registerPlugin from "./plugin";
var registerAction = function registerAction(graph) {
  // 插件注册
  registerPlugin(graph);

  // 事件注册
  registerEvents(graph);
};
export default registerAction;
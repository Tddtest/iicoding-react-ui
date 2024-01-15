/**
 * @auth: dmx
 * @time: 2024/1/6
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { NodeView, ToolsView } from '@antv/x6';
interface NodeRightMenuOptions extends ToolsView.ToolItem.Options {
}
declare class EdgeClickMenu extends ToolsView.ToolItem<NodeView, NodeRightMenuOptions> {
    private root?;
    private toggleMenu;
    private closeMenu;
    private onMouseDown;
    private onContextMenu;
    delegateEvents(): this;
    protected onRemove(): void;
}
export default EdgeClickMenu;

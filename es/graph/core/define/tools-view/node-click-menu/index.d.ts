import { NodeView, ToolsView } from '@antv/x6';
interface NodeRightMenuOptions extends ToolsView.ToolItem.Options {
}
declare class NodeClickMenu extends ToolsView.ToolItem<NodeView, NodeRightMenuOptions> {
    private root?;
    private toggleMenu;
    private closeMenu;
    private onMouseDown;
    private onContextMenu;
    delegateEvents(): this;
    protected onRemove(): void;
}
export default NodeClickMenu;

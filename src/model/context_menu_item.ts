/**
 * 右键菜单项
 */
export default interface ContextMenuItem {
    /**
     * 菜单主键，不能重复
     */
    key: string;
    /**
     * 菜单文本
     */
    text: string;
    /**
     * 渲染之后的HtmlElement Id
     */
    elementId?: string;
    /**
     * 子菜单
     */
    children: ContextMenuItem[];
}

/**
 * 高亮选项
 */
export interface HighlightOption {
    /**
     * 高亮颜色
     */
    color: String;
    /**
     * 不透明度，默认为0，即透明
     */
    opacity: number;
    /**
     * 闪烁间隔，毫秒（如果支持的话）
     */
    intervalTime: number;
}

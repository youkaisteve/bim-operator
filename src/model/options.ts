/**
 * 高亮选项
 */
export interface HighlightOption {
    /**
     * 高亮颜色，默认#FF0000
     */
    color: string;
    /**
     * 不透明度，默认为1，即不透明
     */
    opacity: number;
    /**
     * 闪烁间隔，毫秒，默认200
     */
    intervalTime: number;
}

export default interface CustomButton {
    /**
     * 按钮Html
     */
    html: string;
    /**
     * 点击事件
     */
    clickEvent: () => void;
    /**
     * 按钮索引，如果为空则排最后
     */
    index: number;
    /**
     * css class
     */
    className: string;
    /**
     * toggle状态的class
     */
    toggleClassName: string;
    /**
     * 是否toggle
     */
    isToggle: boolean;
}

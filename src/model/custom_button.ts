export default interface CustomButton {
    /**
     * 按钮Html
     */
    html: String;
    /**
     * 点击事件
     */
    clickEvent: Function;
    /**
     * 按钮索引，如果为空则排最后
     */
    index: Number;
}

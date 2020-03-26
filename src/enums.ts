/**
 * 隔离选项
 */
export enum IsolateOption {
    /**
     * 隐藏其他构件
     */
    HideOthers = 'HideOthers',
    /**
     * 半透明其他构件
     */
    MakeOthersTranslucent = 'MakeOthersTranslucent'
}

/**
 * 图纸展示模式
 */
export enum DrawingDisplayMode {
    /**
     * 普通模式
     */
    Normal = 0,
    /**
     * 白底模式
     */
    BgWhite = 1,
    /**
     * 黑白模式
     */
    WhiteBlack = 2,
    /**
     * 自定义模式
     */
    Custom = 3
}

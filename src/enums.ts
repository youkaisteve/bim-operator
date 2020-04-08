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
    MakeOthersTranslucent = 'MakeOthersTranslucent',
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
    Custom = 3,
}

export enum Bim3DEvent {
    AddView = 'AddView',
    ButtonOnToolbarClicked = 'ButtonOnToolbarClicked',
    ComponentsHoverChanged = 'ComponentsHoverChanged',
    ContextMenu = 'ContextMenu',
    DemandLoaded = 'DemandLoaded',
    Error = 'Error',
    FamilyTypeChanged = 'FamilyTypeChanged',
    FloorExplosion = 'FloorExplosion',
    Hover = 'Hover',
    MissingDrawingElement = 'MissingDrawingElement',
    MouseClicked = 'MouseClicked',
    MouseDoubleClicked = 'MouseDoubleClicked',
    MouseDragged = 'MouseDragged',
    PureRender = 'PureRender',
    RemoveView = 'RemoveView',
    Rendered = 'Rendered',
    SelectionChanged = 'SelectionChanged',
    ToolbarHomeClick = 'ToolbarHomeClick',
    ViewAdded = 'ViewAdded',
    ViewLoading = 'ViewLoading',
}

export enum Bim2DEvent {
    Error = 'Error',
    Loaded = 'Loaded',
    MouseClicked = 'MouseClicked',
    ViewChange = 'ViewChange',
}

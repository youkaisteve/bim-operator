/**
 * 模型基础信息
 */
export interface ModelBase {
    /**
     * 单模型id
     */
    fileId: String;
    /**
     * 组合模型id
     */
    integrateId?: String;
}

/**
 * 楼层信息
 */
export interface Floor extends ModelBase {
    /**
     * 楼层id
     */
    floorId: String | Number;
    /**
     * 楼层名称
     */
    floorName: String;
}

/**
 * 构件信息
 */
export interface Component extends ModelBase {
    /**
     * 构件id
     */
    componentId: String | Number;
    /**
     * 构件名称
     */
    componentName: String;
}

/**
 * 模型操作接口
 */
export interface IBimOperation {
    /**
     * 加载模型
     * @param options 选项，厂商不同配置会有差别
     */
    loadModel(options: any): Promise<void>;
    /**
     * 获取所有楼层
     */
    getFloors(): Promise<Array<Floor>>;
    /**
     * 获取单个模型的楼层（在集成模型中使用）
     * @param fileId 单个模型的id
     */
    getFloorsbyFileId(fileId: String);
    /**
     * 根据条件获取构件
     * @param confition 查询条件，不同厂商之间可能会有差别
     */
    getComponentByCondition(confition: any): Promise<Array<Component>>;
    /**
     * 添加3D标记
     * @param marker 位置信息
     * @return 3d标记id
     */
    add3dMarker(marker: Marker3D): string;
    /**
     * 清空3d锚点
     * @param marker 3D标记
     */
    remove3dMarker(markerId: string): void;
    /**
     * 清除所有3D标记
     */
    clear3dMarker(): void;
    /**
     * 获取视点
     * @param {Object} options 视点参数
     * @param {Object} options.color 颜色,如#FFFFFF
     * @param {number} options.opacity 不透明度
     */
    getViewPoint(options): Promise<ViewPoint>;
    /**
     * 设置视点
     */
    setViewPoint(viewPoint: ViewPoint): any;
    /**
     * 设置场景显示大小
     * @param width 宽度
     * @param height 高度
     */
    resize(width?: number, height?: number);
}

/**
 * 3D标记
 */
export interface Marker3D {
    /**
     * id
     */
    id: string;
    /**
     * 位置
     */
    worldPosition: Position;
    /**
     * icon图片路径
     */
    src: string;
    /**
     * icon尺寸
     */
    size?: number;
    /**
     * 提示内容
     */
    tooltip?: string;
    /**
     * tooltip样式
     */
    tooltipStyle?: Object;
    /**
     * 点击事件
     */
    onClick?: Function;
    /**
     * hover事件
     */
    onHover?: Function;
}

/**
 * 模型位置信息
 */
export interface Position {
    /**
     * x
     */
    x: number;
    /**
     * y
     */
    y: number;
    /**
     * z
     */
    z?: string;
}

export interface ViewPoint {
    /**
     * 视点的相机状态
     */
    cameraStatus: Object;
    /**
     * 视点的缩略图(base64——data:image/png;base64,xxxx)
     */
    thumbnail: any;
}

/**
 * 3D标记
 */
export default interface Marker3D {
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

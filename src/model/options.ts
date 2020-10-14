import { OpacityEnum } from '../enums';
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

/**
 * 透明度选项
 */
export interface OpacityOption {
    /**
     * 透明度类型
     */
    opacityType: OpacityEnum;
    /**
     * 透明度，取值范围[0, 1]，默认值为1
     */
    opacity: number;
    /**
     * 模型ID，用于在多模型状态下指定匹配范围为某个模型中的构件
     */
    modelId?: string;
}

/**
 * 旋转的选项
 */
export interface RotateOption {
    /**
     * 外部构件id
     */
    objectId: string;
    /**
     * 坐标轴，只能是x,y,z其中一个
     */
    axis: string;
    /**
     * 旋转的弧度值，例如PI / 6,即30度，默认逆时针旋转
     */
    radian: number;
}

/**
 * 根据局部坐标平移的选项
 */
export interface OffsetOption {
    /**
     * x轴移动的距离信息,单位：毫米
     */
    x: number;
    /**
     * y轴移动的距离信息,单位：毫米
     */
    y: number;
    /**
     * z轴移动的距离信息,单位：毫米
     */
    z: number;
}
/**
 * 缩放的选项
 */
export interface ScaleOption {
    /**
     * x轴缩放倍数
     */
    x: number;
    /**
     * y轴缩放倍数
     */
    y: number;
    /**
     * z轴缩放倍数
     */
    z: number;
}

/**
 * 根据世界坐标平移的选项
 */
export interface TranslateOption {
    /**
     * x轴缩放倍数
     */
    x: number;
    /**
     * y轴缩放倍数
     */
    y: number;
    /**
     * z轴缩放倍数
     */
    z: number;
}

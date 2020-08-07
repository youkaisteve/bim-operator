import { OpacityEnum } from '../enums';

/**
 * 透明度选项
 */
export default class OpacityOption {
    /**
     * 透明度类型
     */
    opacityType: OpacityEnum;
    /**
     * 透明度，取值范围[0, 1]，默认值为1
     */
    opacity = 1;
    /**
     * 模型ID，用于在多模型状态下指定匹配范围为某个模型中的构件
     */
    modelId?: string;
}

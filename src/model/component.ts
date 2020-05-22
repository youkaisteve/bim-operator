import ModelBase from './base';

/**
 * 构件信息
 */
export default interface Component extends ModelBase {
    /**
     * 构件id
     */
    componentId: string | number;
    /**
     * 构件名称
     */
    componentName: string;
}

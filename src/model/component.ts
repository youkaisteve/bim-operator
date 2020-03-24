import ModelBase from './base';

/**
 * 构件信息
 */
export default interface Component extends ModelBase {
    /**
     * 构件id
     */
    componentId: String | Number;
    /**
     * 构件名称
     */
    componentName: String;
}

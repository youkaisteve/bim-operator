import ModelBase from './base';

/**
 * 楼层信息
 */
export default interface Floor extends ModelBase {
    /**
     * 楼层id
     */
    floorId: string | number;
    /**
     * 楼层名称
     */
    floorName: string;
}

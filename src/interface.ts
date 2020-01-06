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
   * 根据条件获取构件
   * @param confition 查询条件，不同厂商之间可能会有差别
   */
  getComponentByCondition(confition: any): Promise<Array<Component>>;
}

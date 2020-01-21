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
   * 开启3d锚点功能
   * @param position 
   */
  turn3dMarkerOn(onAdd?: Function, onRemove?: Function): void;
  /**
   * 关闭3d锚点功能
   */
  turn3dMarkerOff(): void;
  /**
   * 设置3d锚点样式
   */
  set3dMarkerStyle(config: Marker3dStyle): void;
  /**
   * 清空3d锚点
   */
  clear3dMarker(): void;
}

/**
 * 3d锚点样式
 */
export interface Marker3dStyle {
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
}
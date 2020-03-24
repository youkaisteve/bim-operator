import Floor from './model/floor';
import Component from './model/component';
import ViewPoint from './model/view_point';
import Marker3D from './model/marker_3d';
import { IsolateOption } from './enums';

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
    getFloorsbyFileId(fileId: String): Promise<Array<Floor>>;
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
    setViewPoint(viewPoint: ViewPoint): void;
    /**
     * 隔离构件
     */
    isolateComponent(componentIds: Array<String>, option: IsolateOption): void;
    /**
     * 设置场景显示大小
     * @param width 宽度
     * @param height 高度
     */
    resize(width?: number, height?: number): void;
}

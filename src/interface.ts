import Floor from './model/floor';
import ViewPoint from './model/view_point';
import Marker3D from './model/marker_3d';
import { IsolateOption, DrawingDisplayMode } from './enums';
import { ComponentFilter } from './model/filter';
import { HighlightOption } from './model';
import CustomButton from './model/custom_button';

/**
 * 模型操作接口
 */
export interface IBimOperator {
    bim3DModel: IBim3DModel;
    bimDrawing: IBimDrawing;
}

/**
 * 3D模型操作
 */
export interface IBim3DModel {
    marker: IMarker;
    /**
     * 加载模型
     * @param options 选项，厂商不同配置会有差别
     */
    load(options: any): Promise<void>;
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
     * 楼层爆炸
     * @param floors 楼层ids
     * @param extend 楼层爆炸离散系数，根据厂商定制，可选
     */
    explosionFloor(floorIds: Array<String>, extend: Number): void;
    /**
     * 根据条件获取构件
     * @param conditions 查询条件，不同厂商之间可能会有差别
     */
    getComponentByCondition(fileId: String, conditions: Array<ComponentFilter>): Promise<Array<String>>;
    /**
     * 获取视点
     * @param {Object} options 视点参数
     * @param {String}} options.color 颜色,如#FFFFFF
     * @param {number} options.opacity 不透明度,默认为0，即透明
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
     * 根据条件隔离构件
     */
    isolateComponentByCondition(conditions: Array<ComponentFilter>, option: IsolateOption): void;
    /**
     * 清空隔离
     */
    clearIsolation(): void;
    /**
     * 高亮构件
     * @param componentIds 构件ids
     * @param options 高亮选项
     */
    highlightComponents(componentIds: Array<String>, options: HighlightOption): void;
    /**
     * 清除所有高亮构件
     * @param componentIds 构件id列表，如果没有则清除所有高亮构件
     */
    clearHighlightComponents(componentIds?: Array<String>): void;
    /**
     * 选中构件
     * @param componentIds 构件id列表
     */
    selectComponents(componentIds: Array<String>): void;
    /**
     * 根据条件选中构件
     * @param conditions 条件
     */
    selectComponentsByCondition(conditions: Array<ComponentFilter>): void;
    /**
     * 清空选中构件
     */
    clearSelectedComponents(): void;
    /**
     * 获取选中的构件
     */
    getSelectedComponents(): Array<String>;
    /**
     * 设置场景显示大小
     * @param width 宽度
     * @param height 高度
     */
    resize(width?: number, height?: number): void;
}

/**
 * 3D标注类
 */
export interface IMarker {
    /**
     * 获取所有标记
     */
    getAllMarkers(): Array<Marker3D>;
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
}

/**
 * Bim图纸操作
 */
export interface IBimDrawing {
    /**
     * 加载模型
     * @param options 选项，厂商不同配置会有差别
     */
    load(options: any): Promise<void>;
    /**
     * 设置展示模式
     * @param model 模式
     * @param customOptions 选项
     * @param {String}} customOptions.color 颜色,如#FFFFFF
     * @param {number} customOptions.opacity 不透明度,默认为0，即透明
     */
    setDisplayMode(model: DrawingDisplayMode, customOptions: any): void;
}

/**
 * Bim自定义
 */
export interface IBimCustom {
    /**
     * 自定义工具条按钮
     * @param customButtons 工具条按钮们
     */
    addCustomButtons(customButtons: Array<CustomButton>): void;
}

/**
 * Bim视图销毁
 */
export interface IDispose {
    /**
     * 销毁视图
     * @param options 销毁选项，和load选项一致
     */
    dispose(options);
}

import Floor from './model/floor';
import ViewPoint from './model/view_point';
import Marker3D from './model/marker_3d';
import { IsolateOption, DrawingDisplayMode } from './enums';
import { ComponentFilter } from './model/filter';
import { HighlightOption } from './model';
import CustomButton from './model/custom_button';
import Position from './model/position';
import { OffsetOption, OpacityOption, RotateOption, ScaleOption, TranslateOption } from './model/options';
import ContextMenuItem from './model/context_menu_item';

/**
 * 上下文
 */
export interface IContext {
    /**
     * 是否开启debug
     */
    debugOn: boolean;
    /**
     * 当前实例渲染的HtmlElementId
     */
    elementId?: string;
    /**
     * 当前实例的右键菜单
     */
    contextMenuItems?: ContextMenuItem[];
}

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
    external: IExternal;
    contextMenu: IContextMenu;
    /**
     * 加载模型
     * @param options 选项，厂商不同配置会有差别
     */
    load(options: any): Promise<void>;
    /**
     * 获取所有楼层
     */
    getFloors(): Promise<Floor[]>;
    /**
     * 获取单个模型的楼层（在集成模型中使用）
     * @param fileId 单个模型的id
     */
    getFloorsbyFileId(fileId: string): Promise<Floor[]>;
    /**
     * 楼层爆炸
     * @param floors 楼层ids
     * @param extend 楼层爆炸离散系数，根据厂商定制，可选
     */
    explosionFloor(floorIds: string[], extend: number): void;
    /**
     * 清空楼层爆炸
     */
    clearFloorExplosion();
    /**
     * 根据条件获取构件
     * @param conditions 查询条件，不同厂商之间可能会有差别
     */
    getComponentByCondition(fileId: string, conditions: ComponentFilter[]): Promise<string[]>;
    /**
     * 获取视点
     * @param {Object} options 视点参数
     * @param {string}} options.color 颜色,如#FFFFFF
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
    isolateComponent(componentIds: string[], option: IsolateOption): void;
    /**
     * 根据条件隔离构件
     */
    isolateComponentByCondition(conditions: ComponentFilter[], option: IsolateOption): void;
    /**
     * 清空隔离
     */
    clearIsolation(): void;
    /**
     * 高亮构件
     * @param componentIds 构件ids
     * @param options 高亮选项
     */
    highlightComponents(componentIds: string[], options: HighlightOption): void;
    /**
     * 清除所有高亮构件
     * @param componentIds 构件id列表，如果没有则清除所有高亮构件
     */
    clearHighlightComponents(componentIds?: string[]): void;
    /**
     * 选中构件
     * @param componentIds 构件id列表
     */
    selectComponents(componentIds: string[]): void;
    /**
     * 根据条件选中构件
     * @param conditions 条件
     */
    selectComponentsByCondition(conditions: ComponentFilter[]): void;
    /**
     * 清空选中构件
     */
    clearSelectedComponents(): void;
    /**
     * 获取选中的构件
     */
    getSelectedComponents(): string[];
    /**
     * 设置构件ids
     * @param componentIds 构件ids
     */
    setComponentsColor(componentIds: string[], color: string): void;
    /**
     * 根据条件设置构件颜色
     * @param conditions 条件
     */
    setComponentsColorByCondition(conditions: ComponentFilter[], color: string): void;
    /**
     * 恢复构件颜色
     * @param componentIds 构件ids
     */
    restoreComponentsColor(componentIds: string[]): void;
    /**
     * 根据条件恢复构件颜色
     * @param conditions 条件
     */
    restoreComponentsColorByCondition(conditions: ComponentFilter[]): void;
    /**
     * 隐藏构件
     * @param componentIds 构件列表，若为空，则隐藏所有构件
     */
    hideComponents(componentIds?: string[]): void;
    /**
     * 显示模型构件
     * @param componentIds 构件列表
     * @param progressCallback 加载进度回调函数
     */
    showComponents(componentIds?: string[], progressCallback?: () => void): Promise<void>;
    /**
     * 设置构件透明度, 包括半透明
     * @param option 设置状态
     * @param componentIds 构件id列表，如果为空，则会设置整个模型
     */
    setComponentsOpacity(option: OpacityOption, componentIds: string[]): void;
    /**
     * 恢复默认显示，包括着色、选择、隔离、半透明、空间等等
     * @param restoreFlag 恢复的内容，{@link RestoreEnum}的并集
     */
    restoreDefault(restoreFlag: number);
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
    getAllMarkers(): Marker3D[];
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
 * bimface外部构件管理
 */
export interface IExternal {
    /**
     * 添加外部构件
     * @param name 外部构件名称，自定义
     * @param url 外部构件url
     */
    add(name: string, url: string): Promise<string>;
    /**
     * 根据Id移除外部构件
     * @param objectId 外部构件id
     */
    removeById(objectId: string): any;
    /**
     * 清除所有构件
     */
    clear(): void;
    /**
     * 根据ID将外部构件沿着局部坐标系轴旋转
     * @param objectId 外部构件id
     * @param option 旋转选项
     */
    rotate(objectId: string, option: RotateOption): void;

    /**
     * 根据局部坐标移动外部构件(局部坐标就是相对坐标，根据构件的方向而改变)
     * @param objectId 外部构件id
     * @param option 移动选项
     */
    offset(objectId: string, option: OffsetOption): void;

    /**
     * 根据ID对外部构件在局部坐标系下进行缩放，缩放中心为局部坐标原点
     * @param objectId 外部构件id
     * @param option 移动选项
     */
    scale(objectId: string, option: ScaleOption): void;

    /**
     * 设置外部构件的空间坐标
     * @param objectId 外部构件id
     * @param position 空间坐标
     */
    setPosition(objectId: string, position: Position);

    /**
     * 根据世界坐标移动外部构件(世界坐标也就是绝对坐标，不根据构件的方向而改变)
     * @param objectId 外部构件id
     * @param distance 移动选项
     */
    translate(objectId: string, option: TranslateOption);

    /**
     * 获取外部构件的世界坐标
     * @param objectId 外部构件id
     */
    getPosition(objectId: string): Position;
    /**
     * 获取所有外部构件的ID
     */
    getAllObjectIds(): string[];
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
     * @param {string}} customOptions.color 颜色,如#FFFFFF
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
    addCustomButtons(customButtons: CustomButton[]): void;
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

/**
 * 右键菜单管理
 */
export interface IContextMenu {
    /**
     * 添加菜单
     * @param menuItems 右键菜单项
     * @param parentKey 父级key，为空时，重置所有菜单
     */
    add(menuItems: ContextMenuItem[], parentKey?: string);
    /**
     * 移除右键菜单，如果又子菜单，也会被移除
     * @param menuKey 菜单的key
     */
    remove(menuKey: string);
    /**
     * 渲染菜单
     */
    render(): void;
}

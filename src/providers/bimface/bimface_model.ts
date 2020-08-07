import { IBim3DModel, IMarker, IBimCustom, IDispose } from '../../interface';
import BimfaceBase from './bimface_base';
import ViewPoint from '../../model/view_point';
import Floor from '../../model/floor';
import { IsolateOption, Bim3DEvent, OpacityEnum, RestoreEnum } from '../../enums';
import { ComponentFilter } from '../../model/filter';
import needRender from '../../decorators/render';
import { HighlightOption } from '../../model';
import BimfaceMarker from './bimface_marker';
import debugLog from '../../decorators/debug_log';
import CollectionUtils from '../../util/collect-util';
import OpacityOption from '../../model/opacity_option';

const MARKER_FIELD = Symbol('Bimface#MarkerField');
const MULTI_FIELD = Symbol('Bimface#IsMultiField');

/**
 * bimface 3D 操作
 */
@debugLog()
export default class Bimface3DModel extends BimfaceBase implements IBim3DModel, IBimCustom, IDispose {
    /**
     * bimface相关对象
     */
    viewer3D: any;
    [MARKER_FIELD]: IMarker;
    /**
     * 是否在批量执行
     */
    [MULTI_FIELD]: boolean;

    /**
     * 3D标注器
     */
    get marker(): IMarker {
        if (this.viewer3D && !this[MARKER_FIELD]) {
            this[MARKER_FIELD] = new BimfaceMarker(this.viewer3D);
        }
        return this[MARKER_FIELD];
    }

    /**
     * 监听事件
     * @param eventName 事件名
     * @param callback 回调
     */
    addEventListener(eventName: Bim3DEvent, callback: () => void) {
        this.viewer3D.addEventListener(eventName, callback);
    }

    /**
     * 渲染
     */
    render() {
        if (this[MULTI_FIELD] === true) {
            console.debug('render skiped while in multi mode');
            return;
        }
        this.viewer3D.render();
    }

    /**
     * 批量执行，最后.done来完成调用,进行渲染。主要用于对模型进行多次改变，避免每次改变都自动render
     * @param callback 回调函数，以当前实例为参数，在这里执行需要的代码
     */
    async multi(callback: (target) => void) {
        if (!callback) {
            throw new Error('callback is required');
        }
        this[MULTI_FIELD] = true;
        await callback(this);
        this[MULTI_FIELD] = false;
        this.render();
    }

    /**
     * 加载模型
     * @param {Object} options
     * @param {string} options.viewToken 访问认证token
     * @param {string} options.url js-sdk地址
     * @param {string} options.domId dom id
     * @param {object} options.appConfig 应用的配置
     * @param {string[]} options.appConfig.Buttons 工具条button，0:Home：主视角，1: RectangleSelect：框选，2: Measure：测量，3: Section：剖切，4: Walk：漫游，5: Map：地图，6: Property：构件详情，7: Setting：设置，8: Information：基本信息，9: FullScreen：全屏 默认全部加载
     * @param {string[]} options.appConfig.Toolbars 工具条或目录树，MainToolbar:工具条；ModelTree：目录树
     * @param {object} options.viewConfig 视图的配置, 参考：https://static.bimface.com/jssdk-apidoc/v3/Glodon.Bimface.Viewer.Viewer3DConfig.html
     */
    async load(options: any): Promise<void> {
        // 清除dom
        this.dispose(options);

        await this.initSDK();
        const viewMetaData = await this.loadSDK(options);

        const domShow = document.getElementById(options.domId);
        let webAppConfig = new window.Glodon.Bimface.Application.WebApplication3DConfig();
        webAppConfig.domElement = domShow;
        webAppConfig = {
            ...webAppConfig,
            ...options.viewConfig,
            ...options.appConfig,
        };
        this.app = new window.Glodon.Bimface.Application.WebApplication3D(webAppConfig);
        this.viewer3D = this.app.getViewer();
        this.app.addView(viewMetaData.viewToken);

        return new Promise((resolve) => {
            this.viewer3D.addEventListener(window.Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, resolve);
        });
    }
    /**
     * 获取楼层
     */
    async getFloors(): Promise<Floor[]> {
        return new Promise((resolve) => {
            this.viewer3D.getFloors(resolve);
        });
    }
    /**
     * 获取单个模型的楼层（在集成模型中使用）
     * @param fileId 模型文件id
     */
    async getFloorsbyFileId(fileId: string): Promise<Floor[]> {
        return new Promise((resolve) => {
            this.viewer3D.getFloorsbyFileId(fileId, resolve);
        });
    }
    /**
     * 楼层爆炸
     * @param floors 楼层ids
     * @param extend 楼层爆炸离散系数，范围为[0, 30]，可选，默认为3
     */
    @needRender()
    explosionFloor(floorIds: string[], extend: number): void {
        this.viewer3D.setFloorExplosion(extend || 3, floorIds);
    }

    /**
     * 清空楼层爆炸
     */
    @needRender()
    clearFloorExplosion() {
        this.viewer3D.clearFloorExplosion();
    }

    /**
     * 根据条件查询构件
     * @param {string} fileId 模型id
     * @param {ComponentFilter[]} conditions 查询条件
     */
    async getComponentByCondition(fileId: string, conditions: ComponentFilter[]): Promise<string[]> {
        if (!fileId) {
            throw new Error('fileId不能为空');
        }

        return new Promise((resolve) => {
            this.viewer3D.getElementByConditions(fileId, conditions, resolve);
        });
    }
    /**
     * 获取视点
     * @param {Object} options 视点参数
     * @param {string}} options.color 颜色,如#FFFFFF
     * @param {number} options.opacity 不透明度,默认为0，即透明
     */
    async getViewPoint(options): Promise<ViewPoint> {
        const cameraStatus = this.viewer3D.getCameraStatus();
        let color;
        if (options && options.color) {
            color = new window.Glodon.Web.Graphics.Color(options.color, options.opacity || 0);
        } else {
            color = new window.Glodon.Web.Graphics.Color(0, 0, 0, 0);
        }

        return new Promise((resolve) => {
            return this.viewer3D.createSnapshotAsync(color, (data) => {
                const viewPoint: ViewPoint = {
                    cameraStatus,
                    thumbnail: data,
                };
                resolve(viewPoint);
            });
        });
    }

    /**
     * 设置视点
     */
    setViewPoint(viewPoint: ViewPoint): void {
        if (viewPoint && viewPoint.cameraStatus) {
            this.viewer3D.setCameraStatus(viewPoint.cameraStatus);
        }
    }

    /**
     * 隔离构件
     */
    @needRender()
    isolateComponent(componentIds: string[], option: IsolateOption): void {
        this.viewer3D.isolateComponentsById(componentIds, option);
    }

    /**
     * 根据条件隔离构件
     */
    @needRender()
    isolateComponentByCondition(conditions: ComponentFilter[], option: IsolateOption): void {
        this.viewer3D.isolateComponentsByObjectData(conditions, option);
    }

    /**
     * 高亮隔离
     */
    @needRender()
    clearIsolation(): void {
        this.viewer3D.clearIsolation();
    }

    /**
     * 突出构件
     * @param componentIds 构件ids
     * @param options 高亮选项
     */
    @needRender()
    highlightComponents(componentIds: string[], options: HighlightOption): void {
        this.viewer3D.enableBlinkComponents(true);
        if (componentIds && componentIds.length > 0) {
            if (options) {
                this.viewer3D.setBlinkColor(
                    new window.Glodon.Web.Graphics.Color(options.color || '#FF0000', options.opacity || 1)
                );
                this.viewer3D.setBlinkIntervalTime(options.intervalTime || 200);
            }
            this.viewer3D.addBlinkComponentsById(componentIds);
        }
    }

    /**
     * 清除所有高亮构件
     * @param componentIds 构件id列表，如果没有则清除所有高亮构件
     */
    @needRender()
    clearHighlightComponents(componentIds?: string[]): void {
        if (componentIds && componentIds.length > 0) {
            this.viewer3D.clearBlinkComponentsById(componentIds);
        } else {
            this.viewer3D.clearAllBlinkComponents();
        }
    }

    /**
     * 选中构件
     * @param componentIds 构件id列表
     */
    @needRender()
    selectComponents(componentIds: string[]): void {
        this.viewer3D.setSelectedComponentsById(componentIds);
    }

    /**
     * 根据条件选中构件
     * @param conditions 条件
     */
    @needRender()
    selectComponentsByCondition(conditions: ComponentFilter[]): void {
        this.viewer3D.setSelectedComponentsByObjectData(conditions);
    }

    /**
     * 清空选中构件
     */
    @needRender()
    clearSelectedComponents(): void {
        this.viewer3D.clearSelectedComponents();
    }
    /**
     * 获取选中的构件
     */
    getSelectedComponents(): string[] {
        return this.viewer3D.getSelectedComponents();
    }
    /**
     * 设置构件ids
     * @param componentIds 构件ids
     */
    @needRender()
    setComponentsColor(componentIds: string[], color: string): void {
        return this.viewer3D.overrideComponentsColorById(
            componentIds,
            new window.Glodon.Web.Graphics.Color(color, 0.8)
        );
    }
    /**
     * 根据条件设置构件颜色
     * @param conditions 条件
     */
    @needRender()
    setComponentsColorByCondition(conditions: ComponentFilter[], color: string): void {
        return this.viewer3D.overrideComponentsColorByObjectData(
            conditions,
            new window.Glodon.Web.Graphics.Color(color, 0.8)
        );
    }
    /**
     * 恢复构件颜色
     * @param componentIds 构件ids
     */
    @needRender()
    restoreComponentsColor(componentIds: string[]): void {
        return this.viewer3D.restoreComponentsColorById(componentIds);
    }
    /**
     * 根据条件恢复构件颜色
     * @param conditions 条件
     */
    @needRender()
    restoreComponentsColorByCondition(conditions: ComponentFilter[]): void {
        return this.viewer3D.restoreComponentsColorByObjectData(conditions);
    }

    /**
     * 隐藏构件
     * @param componentIds 构件列表，若为空，则隐藏所有构件
     */
    @needRender()
    hideComponents(componentIds?: string[]): void {
        if (CollectionUtils.isEmpty(componentIds)) {
            this.viewer3D.hideAllComponents();
        } else {
            this.viewer3D.hideComponentsById(componentIds);
        }
    }

    /**
     * 显示模型构件
     * @param componentIds 构件列表
     * @param progressCallback 加载进度回调函数
     */
    @needRender()
    showComponents(componentIds?: string[], progressCallback?: () => void): Promise<void> {
        return new Promise((resolve) => {
            if (CollectionUtils.isEmpty(componentIds)) {
                this.viewer3D.showAllComponents(progressCallback);
                resolve();
            } else {
                this.viewer3D.showComponentsById(componentIds);
                resolve();
            }
        });
    }

    /**
     * 设置构件半透明，或取消构件半透明
     * @param option 设置状态
     * @param componentIds 构件id列表，如果为空，则会设置整个模型
     * @param opacity 透明度，取值范围[0, 1]，默认值为1
     */
    @needRender()
    setComponentsOpacity(option: OpacityOption, componentIds?: string[]): void {
        if (option.opacityType === OpacityEnum.Custom) {
            if (CollectionUtils.isEmpty(componentIds)) {
                this.viewer3D.overrideComponentsOpacityById(componentIds, option.opacity, option.modelId);
            }
        } else {
            if (CollectionUtils.isEmpty(componentIds)) {
                option.opacityType === OpacityEnum.Opaque
                    ? this.viewer3D.opaqueAllComponents()
                    : this.viewer3D.transparentAllComponents();
            } else {
                this.viewer3D.setComponentsOpacity(componentIds, option);
            }
        }
    }

    /**
     * 恢复默认显示，包括着色、选择、隔离、半透明、空间等等
     * @param restoreFlag 恢复的内容，{@link RestoreEnum}的并集
     */
    @needRender()
    restoreDefault(restoreFlag: number = 0) {
        if (restoreFlag === RestoreEnum.All) {
            this.viewer3D.restoreAllDefault();
        }

        if ((restoreFlag & RestoreEnum.Color) === RestoreEnum.Color) {
            this.viewer3D.clearOverrideColorComponents();
        }

        if ((restoreFlag & RestoreEnum.Selection) === RestoreEnum.Selection) {
            this.viewer3D.clearSelectedComponents();
        }

        if ((restoreFlag & RestoreEnum.Isolate) === RestoreEnum.Isolate) {
            this.viewer3D.clearIsolation();
        }

        if ((restoreFlag & RestoreEnum.Translucent) === RestoreEnum.Translucent) {
            this.viewer3D.opaqueAllComponents();
        }

        if ((restoreFlag & RestoreEnum.Room) === RestoreEnum.Room) {
            this.viewer3D.clearAllRooms();
        }

        if ((restoreFlag & RestoreEnum.Blink) === RestoreEnum.Blink) {
            this.viewer3D.clearAllBlinkComponents();
        }

        if ((restoreFlag & RestoreEnum.FloorExplosion) === RestoreEnum.FloorExplosion) {
            this.viewer3D.clearFloorExplosion();
        }
    }

    /**
     * 设置场景显示大小
     * @param width 宽度
     * @param height 高度
     */
    resize(width?: number, height?: number): void {
        this.viewer3D.resize(width, height);
    }

    /**
     * 释放3D模型实例
     * @param options 选项
     */
    dispose(options) {
        if (options && options.viewToken && this.app) {
            this.app.destroy(options.viewToken);
        }
        this[MARKER_FIELD] = null;
        super.dispose(options);
    }

    // /**
    //  * 生成条件
    //  * @param filters 条件对象
    //  */
    // private transferComponentFilter(filters: ComponentFilter[]) {
    //     const result: Object[] = [];
    //     if (filters && filters.length > 0) {
    //         filters.forEach(filter => {
    //             if (Reflect.ownKeys(filter).length > 0) {
    //                 const temp: Object = {};
    //                 if (filter.categoryId) temp['categoryId'] = filter.categoryId;
    //                 if (filter.levelName) temp['levelName'] = filter.levelName;
    //                 result.push(temp);
    //             }
    //         });
    //     }
    //     return result;
    // }

    // private leadManager: LeadLabelManager = new LeadLabelManager(this);

    // getAllLeadLabels() {
    //     return this.leadManager.getAllItems();
    // }

    // turnLeadLabelOn() {
    //     this.leadManager.turnLeadLabelOn();
    // }

    // turnLeadLabelOff() {
    //     this.leadManager.turnLeadLabelOff();
    // }

    // clearLeadLabel() {
    //     this.leadManager.clearLeadLabel();
    // }

    // addLeadLabel(text: string) {
    //     this.leadManager.addLeadLabel(text);
    // }
}

// // 引线管理器
// class LeadLabelManager {
//     private bimface: any = null;
//     private data: any = null;
//     private _drawable: any = null;
//     private isOn = false;

//     private get viewer() {
//         return this.bimface.viewer3D;
//     }

//     private get drawable() {
//         if (this._drawable) {
//             return this._drawable;
//         } else {
//             var drawableConfig = new window.Glodon.Bimface.Plugins.Drawable.DrawableContainerConfig();
//             drawableConfig.viewer = this.viewer;
//             drawableConfig.maxNum = 10;
//             let drawable = new window.Glodon.Bimface.Plugins.Drawable.DrawableContainer(drawableConfig);
//             this._drawable = drawable;
//             return drawable;
//         }
//     }

//     constructor(bimface) {
//         this.bimface = bimface;
//     }

//     turnLeadLabelOn() {
//         if (!this.isOn) {
//             this.viewer.addEventListener(
//                 window.Glodon.Bimface.Application.WebApplication3DEvent.ComponentsSelectionChanged,
//                 data => {
//                     this.data = data;
//                     this.addLeadLabel('12312');
//                 }
//             );
//         }
//         this.isOn = true;
//     }

//     turnLeadLabelOff() {
//         this.data = {};
//         this.isOn = false;
//     }

//     getAllItems() {
//         return this.drawable.getAllItems();
//     }

//     clearLeadLabel() {
//         this.drawable.clear();
//         this.data = {};
//         var drawableConfig = new window.Glodon.Bimface.Plugins.Drawable.DrawableContainerConfig();
//         drawableConfig.viewer = this.viewer;
//         drawableConfig.maxNum = 10;
//         let drawable = new window.Glodon.Bimface.Plugins.Drawable.DrawableContainer(drawableConfig);
//         this._drawable = drawable;
//     }

//     addLeadLabel(text: string) {
//         if (!text.trim()) {
//             return false;
//         }
//         //引线标签的配置类
//         var config = new window.Glodon.Bimface.Plugins.Drawable.LeadLabelConfig();
//         //引线标签的内容
//         config.text = text;
//         //引线标签关联的构件
//         config.objectId = this.data.componentId;
//         //引线标签的世界坐标
//         config.worldPosition = this.data.worldPosition;
//         //引线标签的视图
//         config.viewer = this.viewer;

//         var label = new window.Glodon.Bimface.Plugins.Drawable.LeadLabel(config);

//         //引线标签的左键点击事件
//         label.onClick(item => {
//             this.drawable.removeItemById(item.id);
//         });
//         this.drawable.addItem(label);
//         this.data = {};
//     }
// }

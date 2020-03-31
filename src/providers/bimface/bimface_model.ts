import { IBim3DModel, IMarker, IBimCustom, IDispose } from '../../interface';
import BimfaceBase from './bimface_base';
import ViewPoint from '../../model/view_point';
import Floor from '../../model/floor';
import { IsolateOption } from '../../enums';
import { ComponentFilter } from '../../model/filter';
import needRender from '../../decorators/render';
import { HighlightOption } from '../../model';
import BimfaceMarker from './bimface_marker';

const MARKER_FIELD = Symbol('Bimface#MarkerFiled');

/**
 * bimface操作
 */
export default class Bimface3DModel extends BimfaceBase implements IBim3DModel, IBimCustom, IDispose {
    /**
     * bimface相关对象
     */
    viewer3D: any;
    [MARKER_FIELD]: IMarker;

    /**
     * 3D标注器
     */
    get marker(): IMarker {
        if (!this.viewer3D) {
            throw new Error('Please init 3D Model first =>>>>>> IBimOperation.loadModel');
        }
        if (!this[MARKER_FIELD]) this[MARKER_FIELD] = new BimfaceMarker(this.viewer3D);
        return this[MARKER_FIELD];
    }

    /**
     * 加载模型
     * @param {Object} options
     * @param {string} options.viewToken 访问认证token
     * @param {string} options.url js-sdk地址
     * @param {string} options.domId dom id
     * @param {Object} options.appConfig 应用的配置
     * @param {String[]} options.appConfig.Buttons 工具条button，0:Home：主视角，1: RectangleSelect：框选，2: Measure：测量，3: Section：剖切，4: Walk：漫游，5: Map：地图，6: Property：构件详情，7: Setting：设置，8: Information：基本信息，9: FullScreen：全屏 默认全部加载
     * @param {String[]} options.appConfig.Toolbars 工具条或目录树，MainToolbar:工具条；ModelTree：目录树
     * @param {String[]} options.appConfig.Toolbars 工具条或目录树，MainToolbar:工具条；ModelTree：目录树
     * @param {Object} options.viewConfig 视图的配置, 参考：https://static.bimface.com/jssdk-apidoc/v3/Glodon.Bimface.Viewer.Viewer3DConfig.html
     */
    async load(options: any): Promise<void> {
        // 清除dom
        this.dispose(options);

        await this.initSDK();
        const viewMetaData = await this.loadSDK(options);

        const domShow = document.getElementById(options.domId);
        let webAppConfig = new window.Glodon.Bimface.Application.WebApplication3DConfig();
        webAppConfig.domElement = domShow;
        if (options.viewConfig) {
            webAppConfig = {
                ...webAppConfig,
                ...options.viewConfig,
                ...options.appConfig
            };
        }
        this.app = new window.Glodon.Bimface.Application.WebApplication3D(webAppConfig);
        this.viewer3D = this.app.getViewer();
        this.app.addView(viewMetaData.viewToken);

        return new Promise(resolve => {
            this.viewer3D.addEventListener(window.Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, resolve);
        });
    }
    /**
     * 获取楼层
     */
    async getFloors(): Promise<Floor[]> {
        return new Promise(resolve => {
            this.viewer3D.getFloors(resolve);
        });
    }
    /**
     * 获取单个模型的楼层（在集成模型中使用）
     * @param fileId 模型文件id
     */
    async getFloorsbyFileId(fileId: String): Promise<Array<Floor>> {
        return new Promise(resolve => {
            this.viewer3D.getFloorsbyFileId(fileId, resolve);
        });
    }
    /**
     * 楼层爆炸
     * @param floors 楼层ids
     * @param extend 楼层爆炸离散系数，范围为[0, 30]，可选，默认为3
     */
    @needRender()
    explosionFloor(floorIds: String[], extend: Number) {
        this.viewer3D.setFloorExplosion(extend, floorIds);
    }
    /**
     * 根据条件查询构件
     * @param {String} fileId 模型id
     * @param {Array<ComponentFilter>} conditions 查询条件
     */
    async getComponentByCondition(fileId: String, conditions: Array<ComponentFilter>): Promise<String[]> {
        if (!fileId) {
            throw new Error('fileId不能为空');
        }

        return new Promise(resolve => {
            this.viewer3D.getElementByConditions(fileId, conditions, resolve);
        });
    }

    async getViewPoint(options): Promise<ViewPoint> {
        const cameraStatus = this.viewer3D.getCameraStatus();
        let color;
        if (options && options.color) {
            color = new window.Glodon.Web.Graphics.Color(options.color, options.opacity || 0);
        } else {
            color = new window.Glodon.Web.Graphics.Color(0, 0, 0, 0);
        }

        return new Promise(resolve => {
            return this.viewer3D.createSnapshotAsync(color, data => {
                const viewPoint: ViewPoint = {
                    cameraStatus: cameraStatus,
                    thumbnail: data
                };
                resolve(viewPoint);
            });
        });
    }

    setViewPoint(viewPoint: ViewPoint) {
        if (viewPoint && viewPoint.cameraStatus) this.viewer3D.setCameraStatus(viewPoint.cameraStatus);
    }

    @needRender()
    isolateComponent(componentIds: String[], option: IsolateOption): void {
        this.viewer3D.isolateComponentsById(componentIds, option);
    }

    @needRender()
    isolateComponentByCondition(conditions: Array<ComponentFilter>, option: IsolateOption): void {
        console.log(conditions);
        this.viewer3D.isolateComponentsByObjectData(conditions, option);
    }

    @needRender()
    clearIsolation() {
        this.viewer3D.clearIsolation();
    }

    @needRender()
    highlightComponents(componentIds: String[], options: HighlightOption) {
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

    @needRender()
    clearHighlightComponents(componentIds?: String[]) {
        if (componentIds && componentIds.length > 0) {
            this.viewer3D.clearBlinkComponentsById(componentIds);
        } else {
            this.viewer3D.clearAllBlinkComponents();
        }
    }
    selectComponents(componentIds: String[]) {
        this.viewer3D.setSelectedComponentsById(componentIds);
    }
    selectComponentsByCondition(conditions: Array<ComponentFilter>) {
        this.viewer3D.setSelectedComponentsByObjectData(conditions);
    }
    clearSelectedComponents() {
        this.viewer3D.clearSelectedComponents();
    }
    getSelectedComponents() {
        return this.viewer3D.getSelectedComponents();
    }

    resize(width?: number, height?: number) {
        this.viewer3D.resize(width, height);
    }

    dispose(options) {
        if (options && options.viewToken) {
            this.app && this.app.destroy(options.viewToken);
        }
        super.dispose(options);
    }

    // /**
    //  * 生成条件
    //  * @param filters 条件对象
    //  */
    // private transferComponentFilter(filters: Array<ComponentFilter>) {
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

import { IBimOperation } from '../interface';
import remoteLoad from '../util/remote-load';
import Component from '../model/component';
import Marker3D from '../model/marker_3d';
import ViewPoint from '../model/view_point';
import Floor from '../model/floor';
import { IsolateOption } from '../enums';
import { ComponentFilter } from '../model/filter';
import needRender from '../decorators/render';

/**
 * bimface操作
 */
export default class Bimface implements IBimOperation {
    /**
     * bimface相关对象
     */
    app: any;
    viewer3D: any;
    viewer2D: any;
    marker3D: any;

    /**
     * 加载模型
     * @param {Object} options
     * @param {string} options.viewToken 访问认证token
     * @param {string} options.url js-sdk地址
     * @param {string} options.domId dom id
     * @param {Object} options.viewConfig 视图的配置
     */
    async loadModel(options: any): Promise<void> {
        if (options.url && !window.BimfaceSDKLoaderConfig) {
            await remoteLoad(options.url);
        }

        if (!options.domId) {
            throw new Error('domId missing');
        }

        if (!options.viewToken) {
            throw new Error('viewToken missing');
        }

        return new Promise((resolve, reject) => {
            const loaderConfig = new window.BimfaceSDKLoaderConfig();
            loaderConfig.viewToken = options.viewToken;
            window.BimfaceSDKLoader.load(
                loaderConfig,
                viewMetaData => {
                    var domShow = document.getElementById(options.domId);
                    var webAppConfig = new window.Glodon.Bimface.Application.WebApplication3DConfig();
                    webAppConfig.domElement = domShow;
                    if (options.viewConfig) {
                        webAppConfig = { ...webAppConfig, ...options.viewConfig };
                    }
                    this.app = new window.Glodon.Bimface.Application.WebApplication3D(webAppConfig);
                    this.viewer3D = this.app.getViewer();
                    this.app.addView(viewMetaData.viewToken);
                    resolve();
                },
                error => {
                    reject(error);
                }
            );
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
     * 根据条件查询构件
     * @param {String} fileId 模型id
     * @param {Array<ComponentFilter>} confition 查询条件
     */
    async getComponentByCondition(fileId: String, confition: Array<ComponentFilter>): Promise<Component[]> {
        if (!fileId) {
            throw new Error('fileId不能为空');
        }
        return new Promise(resolve => {
            this.viewer3D.getElementByConditions(fileId, confition, resolve);
        });
    }

    getAllMarkers() {
        return this.marker3D.getAllItems();
    }

    /**
     * 添加3d锚点
     */
    @needRender()
    add3dMarker(marker: Marker3D) {
        if (marker === undefined) throw new Error("marker can't be null");

        this.turn3dMarkerOn();

        const marker3dConfig = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DConfig();
        marker3dConfig.id = marker.id;
        marker3dConfig.worldPosition = marker.worldPosition;
        marker3dConfig.src = marker.src || '';
        if (marker.size) marker3dConfig.size = marker.size;
        marker3dConfig.tooltip = marker.tooltip || '';
        marker3dConfig.tooltipStyle = marker.tooltipStyle || null;
        const marker3d = new window.Glodon.Bimface.Plugins.Marker3D.Marker3D(marker3dConfig);
        if (marker.onClick) marker3d.onClick(marker.onClick);
        if (marker.onHover) marker3d.onHover(marker.onHover);
        this.marker3D.addItem(marker3d);
        return marker3d.getId();
    }

    /**
     * 移除3d锚点
     */
    remove3dMarker(markerId: string) {
        this.marker3D.removeItemById(markerId);
    }
    /**
     * 清空3d锚点
     */
    clear3dMarker() {
        this.marker3D && this.marker3D.clear();
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
        this.viewer3D.isolateComponentsByObjectData(conditions, option);
    }

    @needRender()
    clearIsolation() {
        this.viewer3D.clearIsolation();
    }

    resize(width?: number, height?: number) {
        this.viewer3D.resize(width, height);
    }

    /**
     * 开始3d锚点功能
     */
    private turn3dMarkerOn() {
        if (!this.marker3D) {
            const markerConfig = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainerConfig();
            markerConfig.viewer = this.viewer3D;
            this.marker3D = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainer(markerConfig);
        }
    }

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

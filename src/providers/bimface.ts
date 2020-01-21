import { IBimOperation, Floor, Component, Marker3dStyle } from "../interface";
import remoteLoad from "../util/remote-load";

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
  marker3DStyle: Marker3dStyle = {
    src: "http://static.bimface.com/resources/3DMarker/warner/warner_red.png",
    size: 30,
    tooltip: ""
  };
  /**
   * 3d锚点功能开关
   */
  is3dMarkerOn = false;

  /**
   * 加载模型
   * @param {Object} options
   * @param {string} options.viewToken 访问认证token
   * @param {string} options.url js-sdk地址
   * @param {string} options.domId dom id
   */
  async loadModel(options: any): Promise<void> {
    if (options.url && !window.BimfaceSDKLoaderConfig) {
      await remoteLoad(options.url);
    }

    if (!options.domId) {
      throw new Error("domId missing");
    }

    if (!options.viewToken) {
      throw new Error("viewToken missing");
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
          this.app = new window.Glodon.Bimface.Application.WebApplication3D(
            webAppConfig
          );
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
  getFloors(): Promise<Floor[]> {
    return new Promise(resolve => {
      this.viewer3D.getFloors(resolve);
    });
  }
  /**
   * 获取单个模型的楼层（在集成模型中使用）
   * @param fileId 模型文件id
   */
  getFloorsbyFileId(fileId: String) {
    return new Promise(resolve => {
      this.viewer3D.getFloorsbyFileId(fileId, resolve);
    });
  }
  /**
   * 根据条件查询构件
   * @param {Object} confition 查询条件
   * @param {String} confition.fileId 模型文件id
   */
  getComponentByCondition(confition: any): Promise<Component[]> {
    if (!confition.fileId) {
      throw new Error("fileId不能为空");
    }
    return new Promise(resolve => {
      this.viewer3D.getElementByConditions(
        confition.fileId,
        confition,
        resolve
      );
    });
  }

  getAllMarkers() {
    return this.marker3D.getAllItems();
  }

  /**
   * 开始3d锚点功能
   */
  turn3dMarkerOn() {
    if (!this.marker3D) {
      const markerConfig = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainerConfig();
      markerConfig.viewer = this.viewer3D;
      this.marker3D = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainer(
        markerConfig
      );
      this.viewer3D.addEventListener(
        window.Glodon.Bimface.Viewer.Viewer3DEvent.MouseClicked,
        objectData => {
          if (this.is3dMarkerOn && objectData && objectData.objectId) {
            const marker3d = this.add3dMarker(objectData.worldPosition);
            marker3d.onClick(marker => {
              if (this.is3dMarkerOn) {
                this.remove3dMarker(marker.id);
              }
            });
          }
        }
      );
    }
    this.is3dMarkerOn = true;
  }

  /**
   * 关闭3d锚点功能
   */
  turn3dMarkerOff() {
    this.is3dMarkerOn = false;
  }

  /**
   * 设置3d锚点配置
   */
  set3dMarkerStyle(config) {
    if (Object.prototype.toString.call(config) !== "[object Object]") {
      throw new Error("请传入对象");
    }
    const { src, size, tooltip } = config;
    if (typeof src === "string") {
      this.marker3DStyle.src = src;
    }
    if (typeof size === "number") {
      this.marker3DStyle.size = size;
    }
    if (typeof tooltip === "string") {
      this.marker3DStyle.tooltip = tooltip;
    }
  }

  /**
   * 清空3d锚点
   */
  clear3dMarker() {
    this.marker3D && this.marker3D.clear();
  }

  /**
   * 添加3d锚点
   */
  private add3dMarker(position: any) {
    const marker3dConfig = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DConfig();
    marker3dConfig.worldPosition = position;
    marker3dConfig.src = this.marker3DStyle.src;
    marker3dConfig.size = this.marker3DStyle.size;
    marker3dConfig.tooltip = this.marker3DStyle.tooltip;
    const marker3d = new window.Glodon.Bimface.Plugins.Marker3D.Marker3D(
      marker3dConfig
    );
    this.marker3D.addItem(marker3d);
    return marker3d;
  }

  /**
   * 移除3d锚点
   */
  private remove3dMarker(markerId: number) {
    this.marker3D.removeItemById(markerId);
  }

  private leadManager: LeadLabelManager = new LeadLabelManager(this);

  getAllLeadLabels() {
    return this.leadManager.getAllItems();
  }

  turnLeadLabelOn() {
    this.leadManager.turnLeadLabelOn();
  }

  turnLeadLabelOff() {
    this.leadManager.turnLeadLabelOff();
  }

  clearLeadLabel() {
    this.leadManager.clearLeadLabel();
  }

  addLeadLabel(text: string) {
    this.leadManager.addLeadLabel(text);
  }
}

// 引线管理器
class LeadLabelManager {
  private bimface: any = null;
  private data: any = null;
  private _drawable: any = null;
  private isOn = false;

  private get viewer() {
    return this.bimface.viewer3D;
  }

  private get drawable() {
    if (this._drawable) {
      return this._drawable;
    } else {
      var drawableConfig = new window.Glodon.Bimface.Plugins.Drawable.DrawableContainerConfig();
      drawableConfig.viewer = this.viewer;
      drawableConfig.maxNum = 10;
      let drawable = new window.Glodon.Bimface.Plugins.Drawable.DrawableContainer(
        drawableConfig
      );
      this._drawable = drawable;
      return drawable;
    }
  }

  constructor(bimface) {
    this.bimface = bimface;
  }

  turnLeadLabelOn() {
    if (!this.isOn) {
      this.viewer.addEventListener(
        window.Glodon.Bimface.Application.WebApplication3DEvent
          .ComponentsSelectionChanged,
        data => {
          this.data = data;
          this.addLeadLabel("12312");
        }
      );
    }
    this.isOn = true;
  }

  turnLeadLabelOff() {
    this.data = {};
    this.isOn = false;
  }

  getAllItems() {
    return this.drawable.getAllItems();
  }

  clearLeadLabel() {
    this.drawable.clear();
    this.data = {};
    var drawableConfig = new window.Glodon.Bimface.Plugins.Drawable.DrawableContainerConfig();
    drawableConfig.viewer = this.viewer;
    drawableConfig.maxNum = 10;
    let drawable = new window.Glodon.Bimface.Plugins.Drawable.DrawableContainer(
      drawableConfig
    );
    this._drawable = drawable;
  }

  addLeadLabel(text: string) {
    if (!text.trim()) {
      return false;
    }
    //引线标签的配置类
    var config = new window.Glodon.Bimface.Plugins.Drawable.LeadLabelConfig();
    //引线标签的内容
    config.text = text;
    //引线标签关联的构件
    config.objectId = this.data.componentId;
    //引线标签的世界坐标
    config.worldPosition = this.data.worldPosition;
    //引线标签的视图
    config.viewer = this.viewer;

    var label = new window.Glodon.Bimface.Plugins.Drawable.LeadLabel(config);

    //引线标签的左键点击事件
    label.onClick(item => {
      this.drawable.removeItemById(item.id);
    });
    this.drawable.addItem(label);
    this.data = {};
  }
}

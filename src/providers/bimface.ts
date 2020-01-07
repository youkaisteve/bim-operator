import { IBimOperation, Floor, Component } from '../interface';
import remoteLoad from '../util/remote-load';

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
        () => {
          var domShow = document.getElementById(options.domId);
          var webAppConfig = new window.Glodon.Bimface.Application.WebApplication3DConfig();
          webAppConfig.domElement = domShow;
          this.app = new window.Glodon.Bimface.Application.WebApplication3D(webAppConfig);
          this.app.addView(options.viewToken);
          this.viewer3D = this.app.getViewer();
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
      throw new Error('fileId不能为空');
    }
    return new Promise(resolve => {
      this.viewer3D.getElementByConditions(confition.fileId, confition, resolve);
    });
  }
}

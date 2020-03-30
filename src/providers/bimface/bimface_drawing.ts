import { IBimDrawing, IBimCustom } from '../../interface';
import BimfaceBase from './bimface_base';
import { DrawingDisplayMode } from '../../enums';

export default class BimfaceDrawing extends BimfaceBase implements IBimDrawing, IBimCustom {
    app: any;
    viewer2D: any;

    /**
     * 加载图纸
     * @param {Object} options
     * @param {string} options.viewToken 访问认证token
     * @param {string} options.url js-sdk地址
     * @param {string} options.domId dom id
     * @param {Object} options.appConfig 应用的配置
     * @param {String[]} options.appConfig.Buttons 工具条button，0:Home：主视角，1: RectZoom：框选，2: DrawingMeasure：测量，3: Map：地图，4: Layers：图层，5: Setting：设置，6: FullScreen：全屏 默认全部加载
     * @param {String[]} options.appConfig.Toolbars 工具条或目录树，MainToolbar:工具条；ModelTree：目录树
     * @param {Object} options.viewConfig 视图的配置，参考：https://static.bimface.com/jssdk-apidoc/v3/Glodon.Bimface.Viewer.ViewerDrawingConfig.html
     */
    async load(options: any) {
        await this.initSDK();
        const viewMetaData = await this.loadSDK(options);
        var dom4Show = document.getElementById(options.domId);
        var webAppConfig = new window.Glodon.Bimface.Application.WebApplicationDrawingConfig();
        webAppConfig.domElement = dom4Show;
        webAppConfig.drawingUrl = viewMetaData.drawingUrl;
        webAppConfig.viewToken = viewMetaData.viewToken;
        if (options.viewConfig) {
            webAppConfig = { ...webAppConfig, ...options.viewConfig };
        }
        this.app = new window.Glodon.Bimface.Application.WebApplicationDrawing(webAppConfig);
        this.app.load(viewMetaData.viewToken);
        this.viewer2D = this.app.getViewer();
    }

    setDisplayMode(model: DrawingDisplayMode, customOptions: any): void {
        this.viewer2D.setDisplayMode(model);
        if (model === DrawingDisplayMode.Custom && customOptions) {
            this.viewer2D.setGlobalColor(
                new window.Glodon.Web.Graphics.Color(customOptions.color, customOptions.opacity)
            );
        }
    }
}

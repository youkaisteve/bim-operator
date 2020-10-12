import { IBimDrawing, IBimCustom } from '../../interface';
import BimfaceBase from './bimface_base';
import { DrawingDisplayMode, Bim2DEvent } from '../../enums';
import debugLog from '../../decorators/debug_log';

const MULTI_FIELD = Symbol('Bimface#IsMultiField');
/**
 * bimface 2D 操作
 */
@debugLog()
export default class BimfaceDrawing extends BimfaceBase implements IBimDrawing, IBimCustom {
    viewer2D: any;
    /**
     * 是否在批量执行
     */
    [MULTI_FIELD]: boolean;

    /**
     * 监听事件
     * @param eventName 事件名
     * @param callback 回调
     */
    addEventListener(eventName: Bim2DEvent, callback: () => void) {
        this.viewer2D.addEventListener(eventName, callback);
    }

    /**
     * 渲染
     */
    render() {
        if (this[MULTI_FIELD] === true) {
            console.debug('render skiped while in multi mode');
            return;
        }
        this.viewer2D.render();
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
     * 加载图纸
     * @param {Object} options
     * @param {string} options.viewToken 访问认证token
     * @param {string} options.url js-sdk地址
     * @param {string} options.domId dom id
     * @param {Object} options.appConfig 应用的配置
     * @param {string[]} options.appConfig.Buttons 工具条button，0:Home：主视角，1: RectZoom：框选，2: DrawingMeasure：测量，3: Map：地图，4: Layers：图层，5: Setting：设置，6: FullScreen：全屏 默认全部加载
     * @param {string[]} options.appConfig.Toolbars 工具条或目录树，MainToolbar:工具条；ModelTree：目录树
     * @param {Object} options.viewConfig 视图的配置，@see https://static.bimface.com/jssdk-apidoc/v3/Glodon.Bimface.Viewer.ViewerDrawingConfig.html
     */
    async load(options: any): Promise<void> {
        // 清除dom
        this.dispose(options);

        await this.initSDK();
        const viewMetaData = await this.loadSDK(options);
        const dom4Show = document.getElementById(options.domId);
        let webAppConfig = new window.Glodon.Bimface.Application.WebApplicationDrawingConfig();
        webAppConfig.domElement = dom4Show;
        webAppConfig.drawingUrl = viewMetaData.drawingUrl;
        webAppConfig.viewToken = viewMetaData.viewToken;
        if (options.appConfig) {
            webAppConfig = { ...webAppConfig, ...options.appConfig };
        }
        this.app = new window.Glodon.Bimface.Application.WebApplicationDrawing(webAppConfig);
        this.app.load(viewMetaData.viewToken);
        this.viewer2D = this.app.getViewer();
        return new Promise((resolve) => {
            this.viewer2D.addEventListener(window.Glodon.Bimface.Viewer.ViewerDrawingEvent.Loaded, resolve);
        });
    }

    /**
     * 设置展示模式
     * @param model 模式
     * @param customOptions 选项
     * @param {string}} customOptions.color 颜色,如#FFFFFF
     * @param {number} customOptions.opacity 不透明度,默认为0，即透明
     */
    setDisplayMode(model: DrawingDisplayMode, customOptions: any): void {
        this.viewer2D.setDisplayMode(model);
        if (model === DrawingDisplayMode.Custom && customOptions) {
            this.viewer2D.setGlobalColor(
                new window.Glodon.Web.Graphics.Color(customOptions.color, customOptions.opacity)
            );
        }
    }
}

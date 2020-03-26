import { IBimDrawing } from '../../interface';
import BimfaceBase from './bimface_base';
import { DrawingDisplayMode } from '../../enums';

export default class BimfaceDrawing extends BimfaceBase implements IBimDrawing {
    app: any;
    viewer2D: any;

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

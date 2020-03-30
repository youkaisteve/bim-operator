import remoteLoad from '../../util/remote-load';
import { BIMFACE_JS_SDK } from '../../consts';
import CustomButton from '../../model/custom_button';
import needRender from '../../decorators/render';

export default abstract class BimfaceBase {
    private _app: any;

    protected get app() {
        return this._app;
    }

    protected set app(app: any) {
        this._app = app;
    }

    async initSDK() {
        if (!window.BimfaceSDKLoaderConfig) {
            await remoteLoad(BIMFACE_JS_SDK);
        }
    }

    /**
     * 加载SDK
     * @param options SDKLoader选项
     * @returns viewMetaData
     */
    async loadSDK(options: any): Promise<any> {
        if (!options.domId) {
            throw new Error('domId missing');
        }

        if (!options.viewToken) {
            throw new Error('viewToken missing');
        }
        // 清除dom
        this.dispose(options);

        return new Promise((resolve, reject) => {
            const loaderConfig = new window.BimfaceSDKLoaderConfig();
            loaderConfig.viewToken = options.viewToken;
            window.BimfaceSDKLoader.load(loaderConfig, resolve, reject);
        });
    }

    @needRender()
    addCustomButtons(customButtons: Array<CustomButton>) {
        const toolbar = this.app.getToolbar('MainToolbar');
        const btnConfig = new window.Glodon.Bimface.UI.Button.ButtonConfig();
        if (customButtons && customButtons.length > 0) {
            customButtons.forEach(customBtn => {
                if (customBtn.html) {
                    const btn = new window.Glodon.Bimface.UI.Button.Button(btnConfig);
                    btn.setHtml(customBtn.html);
                    btn.addEventListener('Click', customBtn.clickEvent);
                    if (customBtn.index >= 0) {
                        toolbar.insertControl(customBtn.index, btn);
                    } else {
                        toolbar.addControl(btn);
                    }
                }
            });
        }
    }

    dispose(options) {
        if (options && options.domId) {
            const dom = document.getElementById(options.domId);
            if (dom) {
                dom.innerHTML = '';
            }
        }
    }
}

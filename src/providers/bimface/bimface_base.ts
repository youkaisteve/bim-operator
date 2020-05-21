import remoteLoad from '../../util/remote-load';
import { BIMFACE_JS_SDK } from '../../consts';
import CustomButton from '../../model/custom_button';
import needRender from '../../decorators/render';
import { IContext } from '../../interface';

/**
 * bimface api基类，提供图纸和模型的通用方法
 */
export default abstract class BimfaceBase {
    private _app: any;
    protected context: IContext;

    protected get app() {
        return this._app;
    }

    protected set app(app: any) {
        this._app = app;
    }

    abstract addEventListener(eventName: String, callback: Function);
    abstract render();
    /**
     * 批量执行相关代码
     */
    abstract multi(callback: Function);

    constructor(context: IContext) {
        this.context = context;
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
            customButtons.forEach((customBtn) => {
                const btn = new window.Glodon.Bimface.UI.Button.ToggleButton(btnConfig);
                customBtn.isToggle = customBtn.isToggle || false;
                if (customBtn.html) {
                    btn.setHtml(customBtn.html);
                }
                if (customBtn.className) {
                    btn.setClassNames(`bf-button ${customBtn.className}`);
                }
                btn.addEventListener('Click', () => {
                    customBtn.isToggle = !customBtn.isToggle;
                    if (customBtn.isToggle) {
                        btn.setClassNames(`bf-button ${customBtn.toggleClassName}`);
                    } else {
                        btn.setClassNames(`bf-button ${customBtn.className}`);
                    }
                    btn.toggleCheckedState();
                    customBtn.clickEvent();
                });
                if (customBtn.index >= 0) {
                    toolbar.insertControl(customBtn.index, btn);
                } else {
                    toolbar.addControl(btn);
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

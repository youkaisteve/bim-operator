import remoteLoad from '../../util/remote-load';
import { BIMFACE_JS_SDK } from '../../consts';

export default class BimfaceBase {
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

    dispose(options) {
        if (options && options.domId) {
            const dom = document.getElementById(options.domId);
            if (dom) {
                dom.innerHTML = '';
            }
        }
    }
}

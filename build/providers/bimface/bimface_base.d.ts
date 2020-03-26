export default class BimfaceBase {
    initSDK(): Promise<void>;
    loadSDK(options: any): Promise<any>;
    dispose(options: any): void;
}

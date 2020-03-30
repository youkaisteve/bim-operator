import CustomButton from '../../model/custom_button';
export default abstract class BimfaceBase {
    private _app;
    protected get app(): any;
    protected set app(app: any);
    initSDK(): Promise<void>;
    loadSDK(options: any): Promise<any>;
    addCustomButtons(customButtons: Array<CustomButton>): void;
    dispose(options: any): void;
}

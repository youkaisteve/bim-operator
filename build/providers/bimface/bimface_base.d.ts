import CustomButton from '../../model/custom_button';
import { IContext } from '../../interface';
export default abstract class BimfaceBase {
    private _app;
    protected context: IContext;
    protected get app(): any;
    protected set app(app: any);
    abstract addEventListener(eventName: String, callback: Function): any;
    abstract render(): any;
    abstract multi(callback: Function): any;
    constructor(context: IContext);
    initSDK(): Promise<void>;
    loadSDK(options: any): Promise<any>;
    addCustomButtons(customButtons: Array<CustomButton>): void;
    dispose(options: any): void;
}

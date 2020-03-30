import CustomButton from '../../model/custom_button';
export default class BimfaceBase {
    app: any;
    initSDK(): Promise<void>;
    loadSDK(options: any): Promise<any>;
    addCustomButtons(customButtons: Array<CustomButton>): void;
    dispose(options: any): void;
}

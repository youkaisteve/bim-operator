import { IBimDrawing, IBimCustom } from '../../interface';
import BimfaceBase from './bimface_base';
import { DrawingDisplayMode, Bim2DEvent } from '../../enums';
declare const MULTI_FIELD: unique symbol;
export default class BimfaceDrawing extends BimfaceBase implements IBimDrawing, IBimCustom {
    app: any;
    viewer2D: any;
    [MULTI_FIELD]: Boolean;
    addEventListener(eventName: Bim2DEvent, callback: Function): void;
    render(): void;
    multi(callback: Function): Promise<void>;
    load(options: any): Promise<void>;
    setDisplayMode(model: DrawingDisplayMode, customOptions: any): void;
}
export {};

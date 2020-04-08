import { IBimDrawing, IBimCustom } from '../../interface';
import BimfaceBase from './bimface_base';
import { DrawingDisplayMode, Bim2DEvent } from '../../enums';
export default class BimfaceDrawing extends BimfaceBase implements IBimDrawing, IBimCustom {
    app: any;
    viewer2D: any;
    addEventListener(eventName: Bim2DEvent, callback: Function): void;
    load(options: any): Promise<void>;
    setDisplayMode(model: DrawingDisplayMode, customOptions: any): void;
}

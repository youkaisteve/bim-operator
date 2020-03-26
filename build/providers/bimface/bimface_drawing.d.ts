import { IBimDrawing } from '../../interface';
import BimfaceBase from './bimface_base';
import { DrawingDisplayMode } from '../../enums';
export default class BimfaceDrawing extends BimfaceBase implements IBimDrawing {
    app: any;
    viewer2D: any;
    load(options: any): Promise<void>;
    setDisplayMode(model: DrawingDisplayMode, customOptions: any): void;
}

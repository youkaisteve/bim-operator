import { IBimOperator, IBim3DModel } from '../interface';
import { IBimDrawing } from '../interface';
declare const BIMFACE_3D_FIELD: unique symbol;
declare const BIMFACE_DRAWING_FIELD: unique symbol;
export default class BimfaceOperator implements IBimOperator {
    [BIMFACE_3D_FIELD]: IBim3DModel;
    [BIMFACE_DRAWING_FIELD]: IBimDrawing;
    get bim3DModel(): IBim3DModel;
    get bimDrawing(): IBimDrawing;
}
export {};

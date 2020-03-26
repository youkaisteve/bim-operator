import { IBimOperator, IBim3DModel } from '../interface';
import { IBimDrawing } from '../interface';
import Bimface3DModel from './bimface/bimface_model';
import BimfaceDrawing from './bimface/bimface_drawing';

const BIMFACE_3D_FIELD = Symbol('Bimface#3DFiled');
const BIMFACE_DRAWING_FIELD = Symbol('Bimface#DrawingField');

export default class BimfaceOperator implements IBimOperator {
    [BIMFACE_3D_FIELD]: IBim3DModel;
    [BIMFACE_DRAWING_FIELD]: IBimDrawing;

    get bim3DModel(): IBim3DModel {
        if (!this[BIMFACE_3D_FIELD]) this[BIMFACE_3D_FIELD] = new Bimface3DModel();
        return this[BIMFACE_3D_FIELD];
    }
    get bimDrawing(): IBimDrawing {
        if (!this[BIMFACE_DRAWING_FIELD]) this[BIMFACE_DRAWING_FIELD] = new BimfaceDrawing();
        return this[BIMFACE_DRAWING_FIELD];
    }
}

import { IBimOperator, IBim3DModel, IContext } from '../interface';
import { IBimDrawing } from '../interface';
import Bimface3DModel from './bimface/bimface_model';
import BimfaceDrawing from './bimface/bimface_drawing';

const BIMFACE_3D_FIELD = Symbol('Bimface#3DFiled');
const BIMFACE_DRAWING_FIELD = Symbol('Bimface#DrawingField');

/**
 * Bimface操作类，用于获取模型或者图纸对应的具体操作实例
 */
export default class BimfaceOperator implements IBimOperator {
    [BIMFACE_3D_FIELD]: IBim3DModel;
    [BIMFACE_DRAWING_FIELD]: IBimDrawing;

    private _context: IContext;

    constructor(context: IContext) {
        this._context = context;
    }

    get bim3DModel(): IBim3DModel {
        if (!this[BIMFACE_3D_FIELD]) this[BIMFACE_3D_FIELD] = new Bimface3DModel(this._context);
        return this[BIMFACE_3D_FIELD];
    }
    get bimDrawing(): IBimDrawing {
        if (!this[BIMFACE_DRAWING_FIELD]) this[BIMFACE_DRAWING_FIELD] = new BimfaceDrawing(this._context);
        return this[BIMFACE_DRAWING_FIELD];
    }
}

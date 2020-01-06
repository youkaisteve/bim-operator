import { IBimOperation, Floor, Component } from '../interface';
export default class Bimface implements IBimOperation {
    app: any;
    viewer3D: any;
    viewer2D: any;
    loadModel(options: any): Promise<void>;
    getFloors(): Promise<Floor[]>;
    getComponentByCondition(confition: any): Promise<Component[]>;
}

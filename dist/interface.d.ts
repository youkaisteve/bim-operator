export interface ModelBase {
    fileId: String;
    integrateId?: String;
}
export interface Floor extends ModelBase {
    floorId: String | Number;
    floorName: String;
}
export interface Component extends ModelBase {
    componentId: String | Number;
    componentName: String;
}
export interface IBimOperation {
    loadModel(options: any): Promise<void>;
    getFloors(): Promise<Array<Floor>>;
    getFloorsbyFileId(fileId: String): any;
    getComponentByCondition(confition: any): Promise<Array<Component>>;
}

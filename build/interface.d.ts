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
    turn3dMarkerOn(): void;
    turn3dMarkerOff(): void;
    set3dMarkerStyle(config: Marker3dStyle): void;
    clear3dMarker(): void;
}
export interface Marker3dStyle {
    src: string;
    size?: number;
    tooltip?: string;
}

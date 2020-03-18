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
    add3dMarker(marker: Marker3D): string;
    remove3dMarker(markerId: string): void;
    clear3dMarker(): void;
}
export interface Marker3D {
    id: string;
    worldPosition: Position;
    src: string;
    size?: number;
    tooltip?: string;
    tooltipStyle?: Object;
    onClick?: Function;
    onHover?: Function;
}
export interface Position {
    x: number;
    y: number;
    z?: string;
}

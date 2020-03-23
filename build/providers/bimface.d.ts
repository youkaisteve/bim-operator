import { IBimOperation, Floor, Component, Marker3D } from '../interface';
export default class Bimface implements IBimOperation {
    app: any;
    viewer3D: any;
    viewer2D: any;
    marker3D: any;
    loadModel(options: any): Promise<void>;
    getFloors(): Promise<Floor[]>;
    getFloorsbyFileId(fileId: String): Promise<unknown>;
    getComponentByCondition(confition: any): Promise<Component[]>;
    getAllMarkers(): any;
    add3dMarker(marker: Marker3D): any;
    remove3dMarker(markerId: string): void;
    clear3dMarker(): void;
    getViewPoint(): any;
    setViewPoint(): void;
    resize(width?: number, height?: number): void;
    private turn3dMarkerOn;
}

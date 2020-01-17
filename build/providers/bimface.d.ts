import { IBimOperation, Floor, Component, Marker3dStyle } from "../interface";
export default class Bimface implements IBimOperation {
    app: any;
    viewer3D: any;
    viewer2D: any;
    marker3D: any;
    marker3DStyle: Marker3dStyle;
    is3dMarkerOn: boolean;
    loadModel(options: any): Promise<void>;
    getFloors(): Promise<Floor[]>;
    getFloorsbyFileId(fileId: String): Promise<unknown>;
    getComponentByCondition(confition: any): Promise<Component[]>;
    turn3dMarkerOn(): void;
    turn3dMarkerOff(): void;
    set3dMarkerStyle(config: any): void;
    clear3dMarker(): void;
    markButton(text: string, callback: Function): any;
    insertToolbar(buttons: Object[]): void;
    private add3dMarker;
    private remove3dMarker;
}

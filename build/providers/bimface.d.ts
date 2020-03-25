import { IBimOperation } from '../interface';
import Marker3D from '../model/marker_3d';
import ViewPoint from '../model/view_point';
import Floor from '../model/floor';
import { IsolateOption } from '../enums';
import { ComponentFilter } from '../model/filter';
import { HighlightOption } from '../model';
export default class Bimface implements IBimOperation {
    app: any;
    viewer3D: any;
    viewer2D: any;
    marker3D: any;
    loadModel(options: any): Promise<void>;
    getFloors(): Promise<Floor[]>;
    getFloorsbyFileId(fileId: String): Promise<Array<Floor>>;
    getComponentByCondition(fileId: String, conditions: Array<ComponentFilter>): Promise<String[]>;
    getAllMarkers(): any;
    add3dMarker(marker: Marker3D): any;
    remove3dMarker(markerId: string): void;
    clear3dMarker(): void;
    getViewPoint(options: any): Promise<ViewPoint>;
    setViewPoint(viewPoint: ViewPoint): void;
    isolateComponent(componentIds: String[], option: IsolateOption): void;
    isolateComponentByCondition(conditions: Array<ComponentFilter>, option: IsolateOption): void;
    clearIsolation(): void;
    highlightComponents(componentIds: String[], options: HighlightOption): void;
    clearAllHighlightComponents(): void;
    resize(width?: number, height?: number): void;
    private turn3dMarkerOn;
}

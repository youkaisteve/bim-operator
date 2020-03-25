import Floor from './model/floor';
import ViewPoint from './model/view_point';
import Marker3D from './model/marker_3d';
import { IsolateOption } from './enums';
import { ComponentFilter } from './model/filter';
import { HighlightOption } from './model';
export interface IBimOperation {
    loadModel(options: any): Promise<void>;
    getFloors(): Promise<Array<Floor>>;
    getFloorsbyFileId(fileId: String): Promise<Array<Floor>>;
    getComponentByCondition(fileId: String, conditions: Array<ComponentFilter>): Promise<Array<String>>;
    add3dMarker(marker: Marker3D): string;
    remove3dMarker(markerId: string): void;
    clear3dMarker(): void;
    getViewPoint(options: any): Promise<ViewPoint>;
    setViewPoint(viewPoint: ViewPoint): void;
    isolateComponent(componentIds: Array<String>, option: IsolateOption): void;
    isolateComponentByCondition(conditions: Array<ComponentFilter>, option: IsolateOption): void;
    clearIsolation(): any;
    highlightComponents(componentIds: String[], options: HighlightOption): void;
    clearAllHighlightComponents(): any;
    resize(width?: number, height?: number): void;
}

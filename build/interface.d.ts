import Floor from './model/floor';
import ViewPoint from './model/view_point';
import Marker3D from './model/marker_3d';
import { IsolateOption, DrawingDisplayMode } from './enums';
import { ComponentFilter } from './model/filter';
import { HighlightOption } from './model';
import CustomButton from './model/custom_button';
export interface IBimOperator {
    bim3DModel: IBim3DModel;
    bimDrawing: IBimDrawing;
}
export interface IBim3DModel {
    marker: IMarker;
    load(options: any): Promise<void>;
    getFloors(): Promise<Array<Floor>>;
    getFloorsbyFileId(fileId: String): Promise<Array<Floor>>;
    explosionFloor(floorIds: Array<String>, extend: Number): void;
    getComponentByCondition(fileId: String, conditions: Array<ComponentFilter>): Promise<Array<String>>;
    getViewPoint(options: any): Promise<ViewPoint>;
    setViewPoint(viewPoint: ViewPoint): void;
    isolateComponent(componentIds: Array<String>, option: IsolateOption): void;
    isolateComponentByCondition(conditions: Array<ComponentFilter>, option: IsolateOption): void;
    clearIsolation(): void;
    highlightComponents(componentIds: Array<String>, options: HighlightOption): void;
    clearHighlightComponents(componentIds?: Array<String>): void;
    selectComponents(componentIds: Array<String>): void;
    selectComponentsByCondition(conditions: Array<ComponentFilter>): void;
    clearSelectedComponents(): void;
    getSelectedComponents(): Array<String>;
    resize(width?: number, height?: number): void;
}
export interface IMarker {
    getAllMarkers(): Array<Marker3D>;
    add3dMarker(marker: Marker3D): string;
    remove3dMarker(markerId: string): void;
    clear3dMarker(): void;
}
export interface IBimDrawing {
    load(options: any): Promise<void>;
    setDisplayMode(model: DrawingDisplayMode, customOptions: any): void;
}
export interface IBimCustom {
    addCustomButtons(customButtons: Array<CustomButton>): void;
}
export interface IDispose {
    dispose(options: any): any;
}

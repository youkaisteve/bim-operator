import { IMarker } from '../../interface';
import Marker3D from '../../model/marker_3d';
export default class BimfaceMarker implements IMarker {
    marker3D: any;
    constructor(viewer3D: any);
    getAllMarkers(): any;
    add3dMarker(marker: Marker3D): any;
    remove3dMarker(markerId: string): void;
    clear3dMarker(): void;
}

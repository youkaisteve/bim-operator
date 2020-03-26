import { IMarker } from '../../interface';
import Marker3D from '../../model/marker_3d';
import needRender from '../../decorators/render';

/**
 * bimface标注类，用于锚点
 */
export default class BimfaceMarker implements IMarker {
    marker3D: any;

    constructor(viewer3D: any) {
        const markerConfig = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainerConfig();
        markerConfig.viewer = viewer3D;
        this.marker3D = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainer(markerConfig);
    }

    getAllMarkers() {
        return this.marker3D.getAllItems();
    }

    /**
     * 添加3d锚点
     */
    @needRender()
    add3dMarker(marker: Marker3D) {
        if (marker === undefined) throw new Error("marker can't be null");

        const marker3dConfig = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DConfig();
        marker3dConfig.id = marker.id;
        marker3dConfig.worldPosition = marker.worldPosition;
        marker3dConfig.src = marker.src || '';
        if (marker.size) marker3dConfig.size = marker.size;
        marker3dConfig.tooltip = marker.tooltip || '';
        marker3dConfig.tooltipStyle = marker.tooltipStyle || null;
        const marker3d = new window.Glodon.Bimface.Plugins.Marker3D.Marker3D(marker3dConfig);
        if (marker.onClick) marker3d.onClick(marker.onClick);
        if (marker.onHover) marker3d.onHover(marker.onHover);
        this.marker3D.addItem(marker3d);
        return marker3d.getId();
    }

    /**
     * 移除3d锚点
     */
    remove3dMarker(markerId: string) {
        this.marker3D.removeItemById(markerId);
    }
    /**
     * 清空3d锚点
     */
    clear3dMarker() {
        this.marker3D && this.marker3D.clear();
    }
}

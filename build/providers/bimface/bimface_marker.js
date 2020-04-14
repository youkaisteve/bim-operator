"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_log_1 = require("../../decorators/debug_log");
var BimfaceMarker = (function () {
    function BimfaceMarker(viewer3D) {
        var markerConfig = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainerConfig();
        markerConfig.viewer = viewer3D;
        this.marker3D = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainer(markerConfig);
    }
    BimfaceMarker.prototype.getAllMarkers = function () {
        return this.marker3D.getAllItems();
    };
    BimfaceMarker.prototype.add3dMarker = function (marker) {
        if (marker === undefined)
            throw new Error("marker can't be null");
        var marker3dConfig = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DConfig();
        marker3dConfig.id = marker.id;
        marker3dConfig.worldPosition = marker.worldPosition;
        marker3dConfig.src = marker.src || '';
        if (marker.size)
            marker3dConfig.size = marker.size;
        marker3dConfig.tooltip = marker.tooltip || '';
        marker3dConfig.tooltipStyle = marker.tooltipStyle || null;
        var marker3d = new window.Glodon.Bimface.Plugins.Marker3D.Marker3D(marker3dConfig);
        if (marker.onClick)
            marker3d.onClick(marker.onClick);
        if (marker.onHover)
            marker3d.onHover(marker.onHover);
        this.marker3D.addItem(marker3d);
        return marker3d.getId();
    };
    BimfaceMarker.prototype.remove3dMarker = function (markerId) {
        this.marker3D.removeItemById(markerId);
    };
    BimfaceMarker.prototype.clear3dMarker = function () {
        this.marker3D && this.marker3D.clear();
    };
    BimfaceMarker = __decorate([
        debug_log_1.default(),
        __metadata("design:paramtypes", [Object])
    ], BimfaceMarker);
    return BimfaceMarker;
}());
exports.default = BimfaceMarker;

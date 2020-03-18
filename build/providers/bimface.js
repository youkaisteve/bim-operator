"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var remote_load_1 = require("../util/remote-load");
var Bimface = (function () {
    function Bimface() {
    }
    Bimface.prototype.loadModel = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(options.url && !window.BimfaceSDKLoaderConfig)) return [3, 2];
                        return [4, remote_load_1.default(options.url)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!options.domId) {
                            throw new Error('domId missing');
                        }
                        if (!options.viewToken) {
                            throw new Error('viewToken missing');
                        }
                        return [2, new Promise(function (resolve, reject) {
                                var loaderConfig = new window.BimfaceSDKLoaderConfig();
                                loaderConfig.viewToken = options.viewToken;
                                window.BimfaceSDKLoader.load(loaderConfig, function (viewMetaData) {
                                    var domShow = document.getElementById(options.domId);
                                    var webAppConfig = new window.Glodon.Bimface.Application.WebApplication3DConfig();
                                    webAppConfig.domElement = domShow;
                                    if (options.viewConfig) {
                                        webAppConfig = __assign(__assign({}, webAppConfig), options.viewConfig);
                                    }
                                    _this.app = new window.Glodon.Bimface.Application.WebApplication3D(webAppConfig);
                                    _this.viewer3D = _this.app.getViewer();
                                    _this.app.addView(viewMetaData.viewToken);
                                    resolve();
                                }, function (error) {
                                    reject(error);
                                });
                            })];
                }
            });
        });
    };
    Bimface.prototype.getFloors = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.viewer3D.getFloors(resolve);
        });
    };
    Bimface.prototype.getFloorsbyFileId = function (fileId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.viewer3D.getFloorsbyFileId(fileId, resolve);
        });
    };
    Bimface.prototype.getComponentByCondition = function (confition) {
        var _this = this;
        if (!confition.fileId) {
            throw new Error('fileId不能为空');
        }
        return new Promise(function (resolve) {
            _this.viewer3D.getElementByConditions(confition.fileId, confition, resolve);
        });
    };
    Bimface.prototype.getAllMarkers = function () {
        return this.marker3D.getAllItems();
    };
    Bimface.prototype.turn3dMarkerOn = function () {
        if (!this.marker3D) {
            var markerConfig = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainerConfig();
            markerConfig.viewer = this.viewer3D;
            this.marker3D = new window.Glodon.Bimface.Plugins.Marker3D.Marker3DContainer(markerConfig);
        }
    };
    Bimface.prototype.clear3dMarker = function () {
        this.marker3D && this.marker3D.clear();
    };
    Bimface.prototype.add3dMarker = function (marker) {
        if (marker === undefined)
            throw new Error("marker can't be null");
        this.turn3dMarkerOn();
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
    Bimface.prototype.remove3dMarker = function (markerId) {
        this.marker3D.removeItemById(markerId);
    };
    return Bimface;
}());
exports.default = Bimface;

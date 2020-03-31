"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var bimface_base_1 = require("./bimface_base");
var enums_1 = require("../../enums");
var render_1 = require("../../decorators/render");
var bimface_marker_1 = require("./bimface_marker");
var MARKER_FIELD = Symbol('Bimface#MarkerFiled');
var Bimface3DModel = (function (_super) {
    __extends(Bimface3DModel, _super);
    function Bimface3DModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Bimface3DModel.prototype, "marker", {
        get: function () {
            if (!this.viewer3D) {
                throw new Error('Please init 3D Model first =>>>>>> IBimOperation.loadModel');
            }
            if (!this[MARKER_FIELD])
                this[MARKER_FIELD] = new bimface_marker_1.default(this.viewer3D);
            return this[MARKER_FIELD];
        },
        enumerable: true,
        configurable: true
    });
    Bimface3DModel.prototype.load = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var viewMetaData, domShow, webAppConfig;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dispose(options);
                        return [4, this.initSDK()];
                    case 1:
                        _a.sent();
                        return [4, this.loadSDK(options)];
                    case 2:
                        viewMetaData = _a.sent();
                        domShow = document.getElementById(options.domId);
                        webAppConfig = new window.Glodon.Bimface.Application.WebApplication3DConfig();
                        webAppConfig.domElement = domShow;
                        if (options.viewConfig) {
                            webAppConfig = __assign(__assign(__assign({}, webAppConfig), options.viewConfig), options.appConfig);
                        }
                        this.app = new window.Glodon.Bimface.Application.WebApplication3D(webAppConfig);
                        this.viewer3D = this.app.getViewer();
                        this.app.addView(viewMetaData.viewToken);
                        return [2, new Promise(function (resolve) {
                                _this.viewer3D.addEventListener(window.Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, resolve);
                            })];
                }
            });
        });
    };
    Bimface3DModel.prototype.getFloors = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        _this.viewer3D.getFloors(resolve);
                    })];
            });
        });
    };
    Bimface3DModel.prototype.getFloorsbyFileId = function (fileId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        _this.viewer3D.getFloorsbyFileId(fileId, resolve);
                    })];
            });
        });
    };
    Bimface3DModel.prototype.explosionFloor = function (floorIds, extend) {
        this.viewer3D.setFloorExplosion(extend, floorIds);
    };
    Bimface3DModel.prototype.getComponentByCondition = function (fileId, conditions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!fileId) {
                    throw new Error('fileId不能为空');
                }
                return [2, new Promise(function (resolve) {
                        _this.viewer3D.getElementByConditions(fileId, conditions, resolve);
                    })];
            });
        });
    };
    Bimface3DModel.prototype.getViewPoint = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var cameraStatus, color;
            var _this = this;
            return __generator(this, function (_a) {
                cameraStatus = this.viewer3D.getCameraStatus();
                if (options && options.color) {
                    color = new window.Glodon.Web.Graphics.Color(options.color, options.opacity || 0);
                }
                else {
                    color = new window.Glodon.Web.Graphics.Color(0, 0, 0, 0);
                }
                return [2, new Promise(function (resolve) {
                        return _this.viewer3D.createSnapshotAsync(color, function (data) {
                            var viewPoint = {
                                cameraStatus: cameraStatus,
                                thumbnail: data
                            };
                            resolve(viewPoint);
                        });
                    })];
            });
        });
    };
    Bimface3DModel.prototype.setViewPoint = function (viewPoint) {
        if (viewPoint && viewPoint.cameraStatus)
            this.viewer3D.setCameraStatus(viewPoint.cameraStatus);
    };
    Bimface3DModel.prototype.isolateComponent = function (componentIds, option) {
        this.viewer3D.isolateComponentsById(componentIds, option);
    };
    Bimface3DModel.prototype.isolateComponentByCondition = function (conditions, option) {
        console.log(conditions);
        this.viewer3D.isolateComponentsByObjectData(conditions, option);
    };
    Bimface3DModel.prototype.clearIsolation = function () {
        this.viewer3D.clearIsolation();
    };
    Bimface3DModel.prototype.highlightComponents = function (componentIds, options) {
        this.viewer3D.enableBlinkComponents(true);
        if (componentIds && componentIds.length > 0) {
            if (options) {
                this.viewer3D.setBlinkColor(new window.Glodon.Web.Graphics.Color(options.color || '#FF0000', options.opacity || 1));
                this.viewer3D.setBlinkIntervalTime(options.intervalTime || 200);
            }
            this.viewer3D.addBlinkComponentsById(componentIds);
        }
    };
    Bimface3DModel.prototype.clearHighlightComponents = function (componentIds) {
        if (componentIds && componentIds.length > 0) {
            this.viewer3D.clearBlinkComponentsById(componentIds);
        }
        else {
            this.viewer3D.clearAllBlinkComponents();
        }
    };
    Bimface3DModel.prototype.selectComponents = function (componentIds) {
        this.viewer3D.setSelectedComponentsById(componentIds);
    };
    Bimface3DModel.prototype.selectComponentsByCondition = function (conditions) {
        this.viewer3D.setSelectedComponentsByObjectData(conditions);
    };
    Bimface3DModel.prototype.clearSelectedComponents = function () {
        this.viewer3D.clearSelectedComponents();
    };
    Bimface3DModel.prototype.getSelectedComponents = function () {
        return this.viewer3D.getSelectedComponents();
    };
    Bimface3DModel.prototype.resize = function (width, height) {
        this.viewer3D.resize(width, height);
    };
    Bimface3DModel.prototype.dispose = function (options) {
        if (options && options.viewToken) {
            this.app && this.app.destroy(options.viewToken);
        }
        _super.prototype.dispose.call(this, options);
    };
    __decorate([
        render_1.default(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Number]),
        __metadata("design:returntype", void 0)
    ], Bimface3DModel.prototype, "explosionFloor", null);
    __decorate([
        render_1.default(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String]),
        __metadata("design:returntype", void 0)
    ], Bimface3DModel.prototype, "isolateComponent", null);
    __decorate([
        render_1.default(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, String]),
        __metadata("design:returntype", void 0)
    ], Bimface3DModel.prototype, "isolateComponentByCondition", null);
    __decorate([
        render_1.default(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Bimface3DModel.prototype, "clearIsolation", null);
    __decorate([
        render_1.default(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array, Object]),
        __metadata("design:returntype", void 0)
    ], Bimface3DModel.prototype, "highlightComponents", null);
    __decorate([
        render_1.default(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], Bimface3DModel.prototype, "clearHighlightComponents", null);
    return Bimface3DModel;
}(bimface_base_1.default));
exports.default = Bimface3DModel;

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
var debug_log_1 = require("../../decorators/debug_log");
var MULTI_FIELD = Symbol('Bimface#IsMultiField');
var BimfaceDrawing = (function (_super) {
    __extends(BimfaceDrawing, _super);
    function BimfaceDrawing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this[_a] = false;
        return _this;
    }
    BimfaceDrawing.prototype.addEventListener = function (eventName, callback) {
        this.viewer2D.addEventListener(eventName, callback);
    };
    BimfaceDrawing.prototype.render = function () {
        this.viewer2D.render();
    };
    BimfaceDrawing.prototype.multi = function (executions) {
        var _this = this;
        this[MULTI_FIELD] = true;
        return Promise.all(executions).finally(function () {
            _this[MULTI_FIELD] = false;
            _this.render();
        });
    };
    BimfaceDrawing.prototype.load = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var viewMetaData, dom4Show, webAppConfig;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.dispose(options);
                        return [4, this.initSDK()];
                    case 1:
                        _b.sent();
                        return [4, this.loadSDK(options)];
                    case 2:
                        viewMetaData = _b.sent();
                        dom4Show = document.getElementById(options.domId);
                        webAppConfig = new window.Glodon.Bimface.Application.WebApplicationDrawingConfig();
                        webAppConfig.domElement = dom4Show;
                        webAppConfig.drawingUrl = viewMetaData.drawingUrl;
                        webAppConfig.viewToken = viewMetaData.viewToken;
                        if (options.appConfig) {
                            webAppConfig = __assign(__assign({}, webAppConfig), options.appConfig);
                        }
                        this.app = new window.Glodon.Bimface.Application.WebApplicationDrawing(webAppConfig);
                        this.app.load(viewMetaData.viewToken);
                        this.viewer2D = this.app.getViewer();
                        return [2, new Promise(function (resolve) {
                                _this.viewer2D.addEventListener(window.Glodon.Bimface.Viewer.ViewerDrawingEvent.Loaded, resolve);
                            })];
                }
            });
        });
    };
    BimfaceDrawing.prototype.setDisplayMode = function (model, customOptions) {
        this.viewer2D.setDisplayMode(model);
        if (model === enums_1.DrawingDisplayMode.Custom && customOptions) {
            this.viewer2D.setGlobalColor(new window.Glodon.Web.Graphics.Color(customOptions.color, customOptions.opacity));
        }
    };
    var _a;
    _a = MULTI_FIELD;
    BimfaceDrawing = __decorate([
        debug_log_1.default()
    ], BimfaceDrawing);
    return BimfaceDrawing;
}(bimface_base_1.default));
exports.default = BimfaceDrawing;

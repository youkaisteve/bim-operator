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
var remote_load_1 = require("../../util/remote-load");
var consts_1 = require("../../consts");
var render_1 = require("../../decorators/render");
var BimfaceBase = (function () {
    function BimfaceBase() {
    }
    Object.defineProperty(BimfaceBase.prototype, "app", {
        get: function () {
            return this._app;
        },
        set: function (app) {
            this._app = app;
        },
        enumerable: true,
        configurable: true
    });
    BimfaceBase.prototype.initSDK = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!window.BimfaceSDKLoaderConfig) return [3, 2];
                        return [4, remote_load_1.default(consts_1.BIMFACE_JS_SDK)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    BimfaceBase.prototype.loadSDK = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!options.domId) {
                    throw new Error('domId missing');
                }
                if (!options.viewToken) {
                    throw new Error('viewToken missing');
                }
                this.dispose(options);
                return [2, new Promise(function (resolve, reject) {
                        var loaderConfig = new window.BimfaceSDKLoaderConfig();
                        loaderConfig.viewToken = options.viewToken;
                        window.BimfaceSDKLoader.load(loaderConfig, resolve, reject);
                    })];
            });
        });
    };
    BimfaceBase.prototype.addCustomButtons = function (customButtons) {
        var toolbar = this.app.getToolbar('MainToolbar');
        var btnConfig = new window.Glodon.Bimface.UI.Button.ButtonConfig();
        if (customButtons && customButtons.length > 0) {
            customButtons.forEach(function (customBtn) {
                if (customBtn.html) {
                    var btn = new window.Glodon.Bimface.UI.Button.Button(btnConfig);
                    btn.setHtml(customBtn.html);
                    btn.addEventListener('Click', customBtn.clickEvent);
                    if (customBtn.index >= 0) {
                        toolbar.insertControl(customBtn.index, btn);
                    }
                    else {
                        toolbar.addControl(btn);
                    }
                }
            });
        }
    };
    BimfaceBase.prototype.dispose = function (options) {
        if (options && options.domId) {
            var dom = document.getElementById(options.domId);
            if (dom) {
                dom.innerHTML = '';
            }
        }
    };
    __decorate([
        render_1.default(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], BimfaceBase.prototype, "addCustomButtons", null);
    return BimfaceBase;
}());
exports.default = BimfaceBase;

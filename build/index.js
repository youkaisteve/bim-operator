"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bimface_1 = require("./providers/bimface");
var enums_1 = require("./enums");
exports.IsolateOption = enums_1.IsolateOption;
exports.ProviderType = {
    BIMFACE: 'bimface'
};
function getProvider(provider) {
    switch (provider) {
        case exports.ProviderType.BIMFACE:
            return new bimface_1.default();
        default:
            throw new Error("provider [" + provider + "] not found");
    }
}
exports.default = getProvider;

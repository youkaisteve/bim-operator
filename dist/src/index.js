"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bimface_1 = require("./providers/bimface");
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

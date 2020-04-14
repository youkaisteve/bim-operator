"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var bimface_operator_1 = require("./providers/bimface_operator");
__export(require("./enums"));
exports.ProviderType = {
    BIMFACE: 'bimface',
};
function getProvider(provider) {
    switch (provider) {
        case exports.ProviderType.BIMFACE:
            return new bimface_operator_1.default();
        default:
            throw new Error("provider [" + provider + "] not found");
    }
}
exports.default = getProvider;

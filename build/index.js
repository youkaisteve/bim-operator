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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var bimface_operator_1 = require("./providers/bimface_operator");
var context_1 = require("./context");
__export(require("./enums"));
console.debug = function (argument) {
    console.log.call(this, "%c [BIM-Operator] %c " + argument, 'font-weight:bold;color:#f99;', 'color:#00f;');
};
exports.ProviderType = {
    BIMFACE: 'bimface',
};
function getProvider(provider, customContext) {
    var combineContext = __assign(__assign({}, context_1.default), customContext);
    console.debug("customContext set : " + JSON.stringify(combineContext));
    switch (provider) {
        case exports.ProviderType.BIMFACE:
            return new bimface_operator_1.default(combineContext);
        default:
            throw new Error("provider [" + provider + "] not found");
    }
}
exports.default = getProvider;

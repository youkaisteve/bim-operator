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
Object.defineProperty(exports, "__esModule", { value: true });
var yk_aspect_1 = require("yk-aspect");
function handleDescriptor(target, key, descriptor) {
    var fn = descriptor.value;
    return __assign(__assign({}, descriptor), { value: function () {
            var _this = this;
            var methodCallResult = fn.apply(this, arguments);
            if (methodCallResult && methodCallResult.constructor.name === 'Promise') {
                return methodCallResult.then(function (result) {
                    _this.render();
                    return result;
                });
            }
            else {
                this.render();
                return methodCallResult;
            }
        } });
}
function needRender() {
    return yk_aspect_1.decorate(handleDescriptor);
}
exports.default = needRender;

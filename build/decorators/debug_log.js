"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yk_aspect_1 = require("yk-aspect");
var toolkit_1 = require("../util/toolkit");
function debugLog(pattern) {
    return yk_aspect_1.beforeMethodOnClass({
        pattern: pattern,
        handle: function (meta) {
            console.debug("[" + meta.className + "." + meta.methodName + "] CALLED");
            var argsStrs = toolkit_1.default.getArgumentsDisplayInfo(meta.args);
            if (argsStrs) {
                argsStrs.forEach(function (argsStr) {
                    console.debug(">>> parameter ===> " + argsStr);
                });
            }
        },
    });
}
exports.default = debugLog;

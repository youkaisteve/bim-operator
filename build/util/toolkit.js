"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    getArgumentsDisplayInfo: function (args) {
        var results = [];
        for (var i = 0; i < args.length; i++) {
            results.push(JSON.stringify(args[i]));
        }
        return results;
    },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bimface_model_1 = require("./bimface/bimface_model");
var bimface_drawing_1 = require("./bimface/bimface_drawing");
var BIMFACE_3D_FIELD = Symbol('Bimface#3DFiled');
var BIMFACE_DRAWING_FIELD = Symbol('Bimface#DrawingField');
var BimfaceOperator = (function () {
    function BimfaceOperator() {
    }
    Object.defineProperty(BimfaceOperator.prototype, "bim3DModel", {
        get: function () {
            if (!this[BIMFACE_3D_FIELD])
                this[BIMFACE_3D_FIELD] = new bimface_model_1.default();
            return this[BIMFACE_3D_FIELD];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BimfaceOperator.prototype, "bimDrawing", {
        get: function () {
            if (!this[BIMFACE_DRAWING_FIELD])
                this[BIMFACE_DRAWING_FIELD] = new bimface_drawing_1.default();
            return this[BIMFACE_DRAWING_FIELD];
        },
        enumerable: true,
        configurable: true
    });
    return BimfaceOperator;
}());
exports.default = BimfaceOperator;

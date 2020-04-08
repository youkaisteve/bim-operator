"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IsolateOption;
(function (IsolateOption) {
    IsolateOption["HideOthers"] = "HideOthers";
    IsolateOption["MakeOthersTranslucent"] = "MakeOthersTranslucent";
})(IsolateOption = exports.IsolateOption || (exports.IsolateOption = {}));
var DrawingDisplayMode;
(function (DrawingDisplayMode) {
    DrawingDisplayMode[DrawingDisplayMode["Normal"] = 0] = "Normal";
    DrawingDisplayMode[DrawingDisplayMode["BgWhite"] = 1] = "BgWhite";
    DrawingDisplayMode[DrawingDisplayMode["WhiteBlack"] = 2] = "WhiteBlack";
    DrawingDisplayMode[DrawingDisplayMode["Custom"] = 3] = "Custom";
})(DrawingDisplayMode = exports.DrawingDisplayMode || (exports.DrawingDisplayMode = {}));
var Bim3DEvent;
(function (Bim3DEvent) {
    Bim3DEvent["AddView"] = "AddView";
    Bim3DEvent["ButtonOnToolbarClicked"] = "ButtonOnToolbarClicked";
    Bim3DEvent["ComponentsHoverChanged"] = "ComponentsHoverChanged";
    Bim3DEvent["ContextMenu"] = "ContextMenu";
    Bim3DEvent["DemandLoaded"] = "DemandLoaded";
    Bim3DEvent["Error"] = "Error";
    Bim3DEvent["FamilyTypeChanged"] = "FamilyTypeChanged";
    Bim3DEvent["FloorExplosion"] = "FloorExplosion";
    Bim3DEvent["Hover"] = "Hover";
    Bim3DEvent["MissingDrawingElement"] = "MissingDrawingElement";
    Bim3DEvent["MouseClicked"] = "MouseClicked";
    Bim3DEvent["MouseDoubleClicked"] = "MouseDoubleClicked";
    Bim3DEvent["MouseDragged"] = "MouseDragged";
    Bim3DEvent["PureRender"] = "PureRender";
    Bim3DEvent["RemoveView"] = "RemoveView";
    Bim3DEvent["Rendered"] = "Rendered";
    Bim3DEvent["SelectionChanged"] = "SelectionChanged";
    Bim3DEvent["ToolbarHomeClick"] = "ToolbarHomeClick";
    Bim3DEvent["ViewAdded"] = "ViewAdded";
    Bim3DEvent["ViewLoading"] = "ViewLoading";
})(Bim3DEvent = exports.Bim3DEvent || (exports.Bim3DEvent = {}));
var Bim2DEvent;
(function (Bim2DEvent) {
    Bim2DEvent["Error"] = "Error";
    Bim2DEvent["Loaded"] = "Loaded";
    Bim2DEvent["MouseClicked"] = "MouseClicked";
    Bim2DEvent["ViewChange"] = "ViewChange";
})(Bim2DEvent = exports.Bim2DEvent || (exports.Bim2DEvent = {}));

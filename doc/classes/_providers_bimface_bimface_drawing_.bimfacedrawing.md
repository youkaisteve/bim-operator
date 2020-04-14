[bim-operator - v1.0.28](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_drawing"](../modules/_providers_bimface_bimface_drawing_.md) › [BimfaceDrawing](_providers_bimface_bimface_drawing_.bimfacedrawing.md)

# Class: BimfaceDrawing

bimface 2D 操作

## Hierarchy

* [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md)

  ↳ **BimfaceDrawing**

## Implements

* [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)
* [IBimCustom](../interfaces/_interface_.ibimcustom.md)

## Index

### Properties

* [app](_providers_bimface_bimface_drawing_.bimfacedrawing.md#app)
* [viewer2D](_providers_bimface_bimface_drawing_.bimfacedrawing.md#viewer2d)

### Methods

* [addCustomButtons](_providers_bimface_bimface_drawing_.bimfacedrawing.md#addcustombuttons)
* [addEventListener](_providers_bimface_bimface_drawing_.bimfacedrawing.md#addeventlistener)
* [dispose](_providers_bimface_bimface_drawing_.bimfacedrawing.md#dispose)
* [initSDK](_providers_bimface_bimface_drawing_.bimfacedrawing.md#initsdk)
* [load](_providers_bimface_bimface_drawing_.bimfacedrawing.md#load)
* [loadSDK](_providers_bimface_bimface_drawing_.bimfacedrawing.md#loadsdk)
* [setDisplayMode](_providers_bimface_bimface_drawing_.bimfacedrawing.md#setdisplaymode)

## Properties

###  app

• **app**: *any*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [providers/bimface/bimface_drawing.ts:9](https://github.com/youkaisteve/bim-operator/blob/c296650/src/providers/bimface/bimface_drawing.ts#L9)*

___

###  viewer2D

• **viewer2D**: *any*

*Defined in [providers/bimface/bimface_drawing.ts:10](https://github.com/youkaisteve/bim-operator/blob/c296650/src/providers/bimface/bimface_drawing.ts#L10)*

## Methods

###  addCustomButtons

▸ **addCustomButtons**(`customButtons`: Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)›): *void*

*Implementation of [IBimCustom](../interfaces/_interface_.ibimcustom.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addCustomButtons](_providers_bimface_bimface_base_.bimfacebase.md#addcustombuttons)*

*Defined in [providers/bimface/bimface_base.ts:47](https://github.com/youkaisteve/bim-operator/blob/c296650/src/providers/bimface/bimface_base.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`customButtons` | Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)› |

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`eventName`: [Bim2DEvent](../enums/_enums_.bim2devent.md), `callback`: Function): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addEventListener](_providers_bimface_bimface_base_.bimfacebase.md#abstract-addeventlistener)*

*Defined in [providers/bimface/bimface_drawing.ts:17](https://github.com/youkaisteve/bim-operator/blob/c296650/src/providers/bimface/bimface_drawing.ts#L17)*

监听事件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventName` | [Bim2DEvent](../enums/_enums_.bim2devent.md) | 事件名 |
`callback` | Function | 回调  |

**Returns:** *void*

___

###  dispose

▸ **dispose**(`options`: any): *void*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[dispose](_providers_bimface_bimface_base_.bimfacebase.md#dispose)*

*Defined in [providers/bimface/bimface_base.ts:72](https://github.com/youkaisteve/bim-operator/blob/c296650/src/providers/bimface/bimface_base.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *void*

___

###  initSDK

▸ **initSDK**(): *Promise‹void›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[initSDK](_providers_bimface_bimface_base_.bimfacebase.md#initsdk)*

*Defined in [providers/bimface/bimface_base.ts:19](https://github.com/youkaisteve/bim-operator/blob/c296650/src/providers/bimface/bimface_base.ts#L19)*

**Returns:** *Promise‹void›*

___

###  load

▸ **load**(`options`: any): *Promise‹void›*

*Implementation of [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

*Defined in [providers/bimface/bimface_drawing.ts:32](https://github.com/youkaisteve/bim-operator/blob/c296650/src/providers/bimface/bimface_drawing.ts#L32)*

加载图纸

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *Promise‹void›*

___

###  loadSDK

▸ **loadSDK**(`options`: any): *Promise‹any›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[loadSDK](_providers_bimface_bimface_base_.bimfacebase.md#loadsdk)*

*Defined in [providers/bimface/bimface_base.ts:30](https://github.com/youkaisteve/bim-operator/blob/c296650/src/providers/bimface/bimface_base.ts#L30)*

加载SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | SDKLoader选项 |

**Returns:** *Promise‹any›*

viewMetaData

___

###  setDisplayMode

▸ **setDisplayMode**(`model`: [DrawingDisplayMode](../enums/_enums_.drawingdisplaymode.md), `customOptions`: any): *void*

*Implementation of [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

*Defined in [providers/bimface/bimface_drawing.ts:61](https://github.com/youkaisteve/bim-operator/blob/c296650/src/providers/bimface/bimface_drawing.ts#L61)*

设置展示模式

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | [DrawingDisplayMode](../enums/_enums_.drawingdisplaymode.md) | 模式 |
`customOptions` | any | 选项 |

**Returns:** *void*

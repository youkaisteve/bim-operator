[bim-operator - v1.0.15](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_drawing"](../modules/_providers_bimface_bimface_drawing_.md) › [BimfaceDrawing](_providers_bimface_bimface_drawing_.bimfacedrawing.md)

# Class: BimfaceDrawing

## Hierarchy

* [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md)

  ↳ **BimfaceDrawing**

## Implements

* [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)

## Index

### Properties

* [app](_providers_bimface_bimface_drawing_.bimfacedrawing.md#app)
* [viewer2D](_providers_bimface_bimface_drawing_.bimfacedrawing.md#viewer2d)

### Methods

* [dispose](_providers_bimface_bimface_drawing_.bimfacedrawing.md#dispose)
* [initSDK](_providers_bimface_bimface_drawing_.bimfacedrawing.md#initsdk)
* [load](_providers_bimface_bimface_drawing_.bimfacedrawing.md#load)
* [loadSDK](_providers_bimface_bimface_drawing_.bimfacedrawing.md#loadsdk)
* [setDisplayMode](_providers_bimface_bimface_drawing_.bimfacedrawing.md#setdisplaymode)

## Properties

###  app

• **app**: *any*

*Defined in [providers/bimface/bimface_drawing.ts:6](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_drawing.ts#L6)*

___

###  viewer2D

• **viewer2D**: *any*

*Defined in [providers/bimface/bimface_drawing.ts:7](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_drawing.ts#L7)*

## Methods

###  dispose

▸ **dispose**(`options`: any): *void*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[dispose](_providers_bimface_bimface_base_.bimfacebase.md#dispose)*

*Defined in [providers/bimface/bimface_base.ts:35](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_base.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *void*

___

###  initSDK

▸ **initSDK**(): *Promise‹void›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[initSDK](_providers_bimface_bimface_base_.bimfacebase.md#initsdk)*

*Defined in [providers/bimface/bimface_base.ts:5](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_base.ts#L5)*

**Returns:** *Promise‹void›*

___

###  load

▸ **load**(`options`: any): *Promise‹void›*

*Implementation of [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

*Defined in [providers/bimface/bimface_drawing.ts:9](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_drawing.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *Promise‹void›*

___

###  loadSDK

▸ **loadSDK**(`options`: any): *Promise‹any›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[loadSDK](_providers_bimface_bimface_base_.bimfacebase.md#loadsdk)*

*Defined in [providers/bimface/bimface_base.ts:16](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_base.ts#L16)*

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

*Defined in [providers/bimface/bimface_drawing.ts:25](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_drawing.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`model` | [DrawingDisplayMode](../enums/_enums_.drawingdisplaymode.md) |
`customOptions` | any |

**Returns:** *void*

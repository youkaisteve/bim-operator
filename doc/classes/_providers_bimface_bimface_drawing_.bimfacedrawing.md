[@yzw/bim-operator - v1.0.40](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_drawing"](../modules/_providers_bimface_bimface_drawing_.md) › [BimfaceDrawing](_providers_bimface_bimface_drawing_.bimfacedrawing.md)

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

* [[MULTI_FIELD]](_providers_bimface_bimface_drawing_.bimfacedrawing.md#[multi_field])
* [app](_providers_bimface_bimface_drawing_.bimfacedrawing.md#app)
* [viewer2D](_providers_bimface_bimface_drawing_.bimfacedrawing.md#viewer2d)

### Methods

* [addCustomButtons](_providers_bimface_bimface_drawing_.bimfacedrawing.md#addcustombuttons)
* [addEventListener](_providers_bimface_bimface_drawing_.bimfacedrawing.md#addeventlistener)
* [dispose](_providers_bimface_bimface_drawing_.bimfacedrawing.md#dispose)
* [initSDK](_providers_bimface_bimface_drawing_.bimfacedrawing.md#initsdk)
* [load](_providers_bimface_bimface_drawing_.bimfacedrawing.md#load)
* [loadSDK](_providers_bimface_bimface_drawing_.bimfacedrawing.md#loadsdk)
* [multi](_providers_bimface_bimface_drawing_.bimfacedrawing.md#multi)
* [render](_providers_bimface_bimface_drawing_.bimfacedrawing.md#render)
* [setDisplayMode](_providers_bimface_bimface_drawing_.bimfacedrawing.md#setdisplaymode)

## Properties

###  [MULTI_FIELD]

• **[MULTI_FIELD]**: *Boolean* = false

*Defined in [providers/bimface/bimface_drawing.ts:17](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_drawing.ts#L17)*

是否在批量执行

___

###  app

• **app**: *any*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [providers/bimface/bimface_drawing.ts:12](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_drawing.ts#L12)*

___

###  viewer2D

• **viewer2D**: *any*

*Defined in [providers/bimface/bimface_drawing.ts:13](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_drawing.ts#L13)*

## Methods

###  addCustomButtons

▸ **addCustomButtons**(`customButtons`: Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)›): *void*

*Implementation of [IBimCustom](../interfaces/_interface_.ibimcustom.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addCustomButtons](_providers_bimface_bimface_base_.bimfacebase.md#addcustombuttons)*

*Defined in [providers/bimface/bimface_base.ts:54](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_base.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`customButtons` | Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)› |

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`eventName`: [Bim2DEvent](../enums/_enums_.bim2devent.md), `callback`: Function): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addEventListener](_providers_bimface_bimface_base_.bimfacebase.md#abstract-addeventlistener)*

*Defined in [providers/bimface/bimface_drawing.ts:24](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_drawing.ts#L24)*

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

*Defined in [providers/bimface/bimface_base.ts:79](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_base.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *void*

___

###  initSDK

▸ **initSDK**(): *Promise‹void›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[initSDK](_providers_bimface_bimface_base_.bimfacebase.md#initsdk)*

*Defined in [providers/bimface/bimface_base.ts:26](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_base.ts#L26)*

**Returns:** *Promise‹void›*

___

###  load

▸ **load**(`options`: any): *Promise‹void›*

*Implementation of [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

*Defined in [providers/bimface/bimface_drawing.ts:59](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_drawing.ts#L59)*

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

*Defined in [providers/bimface/bimface_base.ts:37](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_base.ts#L37)*

加载SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | SDKLoader选项 |

**Returns:** *Promise‹any›*

viewMetaData

___

###  multi

▸ **multi**(`executions`: Array‹Promise‹any››): *Promise‹any[]›*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[multi](_providers_bimface_bimface_base_.bimfacebase.md#abstract-multi)*

*Defined in [providers/bimface/bimface_drawing.ts:40](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_drawing.ts#L40)*

批量执行，最后.done来完成调用,进行渲染。主要用于对模型进行多次改变，避免每次改变都自动render

**`params`** executions 需要执行的方法

**`retuen`** 多次执行返回的结果（如果有的话）

**Parameters:**

Name | Type |
------ | ------ |
`executions` | Array‹Promise‹any›› |

**Returns:** *Promise‹any[]›*

___

###  render

▸ **render**(): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[render](_providers_bimface_bimface_base_.bimfacebase.md#abstract-render)*

*Defined in [providers/bimface/bimface_drawing.ts:31](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_drawing.ts#L31)*

渲染

**Returns:** *void*

___

###  setDisplayMode

▸ **setDisplayMode**(`model`: [DrawingDisplayMode](../enums/_enums_.drawingdisplaymode.md), `customOptions`: any): *void*

*Implementation of [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

*Defined in [providers/bimface/bimface_drawing.ts:88](https://github.com/youkaisteve/bim-operator/blob/db59ec1/src/providers/bimface/bimface_drawing.ts#L88)*

设置展示模式

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | [DrawingDisplayMode](../enums/_enums_.drawingdisplaymode.md) | 模式 |
`customOptions` | any | 选项 |

**Returns:** *void*

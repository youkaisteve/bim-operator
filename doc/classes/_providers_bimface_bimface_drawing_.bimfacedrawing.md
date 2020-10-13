[@yzw/bim-operator - v1.7.1](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_drawing"](../modules/_providers_bimface_bimface_drawing_.md) › [BimfaceDrawing](_providers_bimface_bimface_drawing_.bimfacedrawing.md)

# Class: BimfaceDrawing

bimface 2D 操作

## Hierarchy

* [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md)

  ↳ **BimfaceDrawing**

## Implements

* [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)
* [IBimCustom](../interfaces/_interface_.ibimcustom.md)

## Index

### Constructors

* [constructor](_providers_bimface_bimface_drawing_.bimfacedrawing.md#constructor)

### Properties

* [[MULTI_FIELD]](_providers_bimface_bimface_drawing_.bimfacedrawing.md#[multi_field])
* [context](_providers_bimface_bimface_drawing_.bimfacedrawing.md#protected-context)
* [viewer2D](_providers_bimface_bimface_drawing_.bimfacedrawing.md#viewer2d)

### Accessors

* [app](_providers_bimface_bimface_drawing_.bimfacedrawing.md#protected-app)

### Methods

* [addCustomButtons](_providers_bimface_bimface_drawing_.bimfacedrawing.md#addcustombuttons)
* [addEventListener](_providers_bimface_bimface_drawing_.bimfacedrawing.md#addeventlistener)
* [dispose](_providers_bimface_bimface_drawing_.bimfacedrawing.md#dispose)
* [initPlugin](_providers_bimface_bimface_drawing_.bimfacedrawing.md#initplugin)
* [initSDK](_providers_bimface_bimface_drawing_.bimfacedrawing.md#initsdk)
* [load](_providers_bimface_bimface_drawing_.bimfacedrawing.md#load)
* [loadSDK](_providers_bimface_bimface_drawing_.bimfacedrawing.md#loadsdk)
* [multi](_providers_bimface_bimface_drawing_.bimfacedrawing.md#multi)
* [render](_providers_bimface_bimface_drawing_.bimfacedrawing.md#render)
* [setDisplayMode](_providers_bimface_bimface_drawing_.bimfacedrawing.md#setdisplaymode)

## Constructors

###  constructor

\+ **new BimfaceDrawing**(`context`: [IContext](../interfaces/_interface_.icontext.md)): *[BimfaceDrawing](_providers_bimface_bimface_drawing_.bimfacedrawing.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[constructor](_providers_bimface_bimface_base_.bimfacebase.md#constructor)*

*Defined in [src/providers/bimface/bimface_base.ts:29](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_base.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [IContext](../interfaces/_interface_.icontext.md) |

**Returns:** *[BimfaceDrawing](_providers_bimface_bimface_drawing_.bimfacedrawing.md)*

## Properties

###  [MULTI_FIELD]

• **[MULTI_FIELD]**: *boolean*

*Defined in [src/providers/bimface/bimface_drawing.ts:16](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_drawing.ts#L16)*

是否在批量执行

___

### `Protected` context

• **context**: *[IContext](../interfaces/_interface_.icontext.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[context](_providers_bimface_bimface_base_.bimfacebase.md#protected-context)*

*Defined in [src/providers/bimface/bimface_base.ts:14](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_base.ts#L14)*

___

###  viewer2D

• **viewer2D**: *any*

*Defined in [src/providers/bimface/bimface_drawing.ts:12](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_drawing.ts#L12)*

## Accessors

### `Protected` app

• **get app**(): *any*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [src/providers/bimface/bimface_base.ts:16](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_base.ts#L16)*

**Returns:** *any*

• **set app**(`app`: any): *void*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [src/providers/bimface/bimface_base.ts:20](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_base.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | any |

**Returns:** *void*

## Methods

###  addCustomButtons

▸ **addCustomButtons**(`customButtons`: [CustomButton](../interfaces/_model_custom_button_.custombutton.md)[]): *void*

*Implementation of [IBimCustom](../interfaces/_interface_.ibimcustom.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addCustomButtons](_providers_bimface_bimface_base_.bimfacebase.md#addcustombuttons)*

*Defined in [src/providers/bimface/bimface_base.ts:92](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_base.ts#L92)*

添加自定义按钮

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`customButtons` | [CustomButton](../interfaces/_model_custom_button_.custombutton.md)[] | 自定义按钮  |

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`eventName`: [Bim2DEvent](../enums/_enums_.bim2devent.md), `callback`: function): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addEventListener](_providers_bimface_bimface_base_.bimfacebase.md#abstract-addeventlistener)*

*Defined in [src/providers/bimface/bimface_drawing.ts:23](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_drawing.ts#L23)*

监听事件

**Parameters:**

▪ **eventName**: *[Bim2DEvent](../enums/_enums_.bim2devent.md)*

事件名

▪ **callback**: *function*

回调

▸ (): *void*

**Returns:** *void*

___

###  dispose

▸ **dispose**(`options`: any): *void*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[dispose](_providers_bimface_bimface_base_.bimfacebase.md#dispose)*

*Defined in [src/providers/bimface/bimface_base.ts:124](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_base.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *void*

___

###  initPlugin

▸ **initPlugin**(`plugins`: [Bim3DPluginType](../enums/_enums_.bim3dplugintype.md)[]): *Promise‹void[]›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[initPlugin](_providers_bimface_bimface_base_.bimfacebase.md#initplugin)*

*Defined in [src/providers/bimface/bimface_base.ts:49](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_base.ts#L49)*

初始化所需的插件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`plugins` | [Bim3DPluginType](../enums/_enums_.bim3dplugintype.md)[] | 插件类型列表  |

**Returns:** *Promise‹void[]›*

___

###  initSDK

▸ **initSDK**(`sdkPath?`: string): *Promise‹void›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[initSDK](_providers_bimface_bimface_base_.bimfacebase.md#initsdk)*

*Defined in [src/providers/bimface/bimface_base.ts:39](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_base.ts#L39)*

初始化SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sdkPath?` | string | sdk路径，可为空  |

**Returns:** *Promise‹void›*

___

###  load

▸ **load**(`options`: any): *Promise‹void›*

*Implementation of [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

*Defined in [src/providers/bimface/bimface_drawing.ts:63](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_drawing.ts#L63)*

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

*Defined in [src/providers/bimface/bimface_base.ts:69](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_base.ts#L69)*

加载SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | SDKLoader选项 |

**Returns:** *Promise‹any›*

viewMetaData

___

###  multi

▸ **multi**(`callback`: function): *Promise‹void›*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[multi](_providers_bimface_bimface_base_.bimfacebase.md#abstract-multi)*

*Defined in [src/providers/bimface/bimface_drawing.ts:42](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_drawing.ts#L42)*

批量执行，最后.done来完成调用,进行渲染。主要用于对模型进行多次改变，避免每次改变都自动render

**Parameters:**

▪ **callback**: *function*

回调函数，以当前实例为参数，在这里执行需要的代码

▸ (`target`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`target` | any |

**Returns:** *Promise‹void›*

___

###  render

▸ **render**(): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[render](_providers_bimface_bimface_base_.bimfacebase.md#abstract-render)*

*Defined in [src/providers/bimface/bimface_drawing.ts:30](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_drawing.ts#L30)*

渲染

**Returns:** *void*

___

###  setDisplayMode

▸ **setDisplayMode**(`model`: [DrawingDisplayMode](../enums/_enums_.drawingdisplaymode.md), `customOptions`: any): *void*

*Implementation of [IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

*Defined in [src/providers/bimface/bimface_drawing.ts:92](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/providers/bimface/bimface_drawing.ts#L92)*

设置展示模式

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | [DrawingDisplayMode](../enums/_enums_.drawingdisplaymode.md) | 模式 |
`customOptions` | any | 选项 |

**Returns:** *void*

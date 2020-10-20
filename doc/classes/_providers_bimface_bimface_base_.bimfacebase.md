[@yzw/bim-operator - v1.8.0](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_base"](../modules/_providers_bimface_bimface_base_.md) › [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md)

# Class: BimfaceBase

bimface api基类，提供图纸和模型的通用方法

## Hierarchy

* **BimfaceBase**

  ↳ [Bimface3DModel](_providers_bimface_bimface_model_.bimface3dmodel.md)

  ↳ [BimfaceDrawing](_providers_bimface_bimface_drawing_.bimfacedrawing.md)

## Index

### Constructors

* [constructor](_providers_bimface_bimface_base_.bimfacebase.md#constructor)

### Properties

* [_app](_providers_bimface_bimface_base_.bimfacebase.md#private-_app)
* [context](_providers_bimface_bimface_base_.bimfacebase.md#protected-context)

### Accessors

* [app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)

### Methods

* [addCustomButtons](_providers_bimface_bimface_base_.bimfacebase.md#addcustombuttons)
* [addEventListener](_providers_bimface_bimface_base_.bimfacebase.md#abstract-addeventlistener)
* [dispose](_providers_bimface_bimface_base_.bimfacebase.md#dispose)
* [initPlugin](_providers_bimface_bimface_base_.bimfacebase.md#initplugin)
* [initSDK](_providers_bimface_bimface_base_.bimfacebase.md#initsdk)
* [loadSDK](_providers_bimface_bimface_base_.bimfacebase.md#loadsdk)
* [multi](_providers_bimface_bimface_base_.bimfacebase.md#abstract-multi)
* [render](_providers_bimface_bimface_base_.bimfacebase.md#abstract-render)

## Constructors

###  constructor

\+ **new BimfaceBase**(`context`: [IContext](../interfaces/_interface_.icontext.md)): *[BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md)*

*Defined in [src/providers/bimface/bimface_base.ts:29](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [IContext](../interfaces/_interface_.icontext.md) |

**Returns:** *[BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md)*

## Properties

### `Private` _app

• **_app**: *any*

*Defined in [src/providers/bimface/bimface_base.ts:13](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L13)*

___

### `Protected` context

• **context**: *[IContext](../interfaces/_interface_.icontext.md)*

*Defined in [src/providers/bimface/bimface_base.ts:14](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L14)*

## Accessors

### `Protected` app

• **get app**(): *any*

*Defined in [src/providers/bimface/bimface_base.ts:16](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L16)*

**Returns:** *any*

• **set app**(`app`: any): *void*

*Defined in [src/providers/bimface/bimface_base.ts:20](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | any |

**Returns:** *void*

## Methods

###  addCustomButtons

▸ **addCustomButtons**(`customButtons`: [CustomButton](../interfaces/_model_custom_button_.custombutton.md)[]): *void*

*Defined in [src/providers/bimface/bimface_base.ts:92](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L92)*

添加自定义按钮

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`customButtons` | [CustomButton](../interfaces/_model_custom_button_.custombutton.md)[] | 自定义按钮  |

**Returns:** *void*

___

### `Abstract` addEventListener

▸ **addEventListener**(`eventName`: string, `callback`: function): *any*

*Defined in [src/providers/bimface/bimface_base.ts:24](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L24)*

**Parameters:**

▪ **eventName**: *string*

▪ **callback**: *function*

▸ (): *void*

**Returns:** *any*

___

###  dispose

▸ **dispose**(`options`: any): *void*

*Defined in [src/providers/bimface/bimface_base.ts:124](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *void*

___

###  initPlugin

▸ **initPlugin**(`plugins`: [Bim3DPluginType](../enums/_enums_.bim3dplugintype.md)[]): *Promise‹void[]›*

*Defined in [src/providers/bimface/bimface_base.ts:49](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L49)*

初始化所需的插件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`plugins` | [Bim3DPluginType](../enums/_enums_.bim3dplugintype.md)[] | 插件类型列表  |

**Returns:** *Promise‹void[]›*

___

###  initSDK

▸ **initSDK**(`sdkPath?`: string): *Promise‹void›*

*Defined in [src/providers/bimface/bimface_base.ts:39](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L39)*

初始化SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sdkPath?` | string | sdk路径，可为空  |

**Returns:** *Promise‹void›*

___

###  loadSDK

▸ **loadSDK**(`options`: any): *Promise‹any›*

*Defined in [src/providers/bimface/bimface_base.ts:69](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L69)*

加载SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | SDKLoader选项 |

**Returns:** *Promise‹any›*

viewMetaData

___

### `Abstract` multi

▸ **multi**(`callback`: function): *any*

*Defined in [src/providers/bimface/bimface_base.ts:29](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L29)*

批量执行相关代码

**Parameters:**

▪ **callback**: *function*

▸ (): *void*

**Returns:** *any*

___

### `Abstract` render

▸ **render**(): *any*

*Defined in [src/providers/bimface/bimface_base.ts:25](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_base.ts#L25)*

**Returns:** *any*

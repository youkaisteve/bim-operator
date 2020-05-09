[@yzw/bim-operator - v1.0.36](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_base"](../modules/_providers_bimface_bimface_base_.md) › [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md)

# Class: BimfaceBase

bimface api基类，提供图纸和模型的通用方法

## Hierarchy

* **BimfaceBase**

  ↳ [Bimface3DModel](_providers_bimface_bimface_model_.bimface3dmodel.md)

  ↳ [BimfaceDrawing](_providers_bimface_bimface_drawing_.bimfacedrawing.md)

## Index

### Properties

* [_app](_providers_bimface_bimface_base_.bimfacebase.md#private-_app)

### Accessors

* [app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)

### Methods

* [addCustomButtons](_providers_bimface_bimface_base_.bimfacebase.md#addcustombuttons)
* [addEventListener](_providers_bimface_bimface_base_.bimfacebase.md#abstract-addeventlistener)
* [dispose](_providers_bimface_bimface_base_.bimfacebase.md#dispose)
* [initSDK](_providers_bimface_bimface_base_.bimfacebase.md#initsdk)
* [loadSDK](_providers_bimface_bimface_base_.bimfacebase.md#loadsdk)
* [render](_providers_bimface_bimface_base_.bimfacebase.md#abstract-render)

## Properties

### `Private` _app

• **_app**: *any*

*Defined in [providers/bimface/bimface_base.ts:10](https://github.com/youkaisteve/bim-operator/blob/3cd98e1/src/providers/bimface/bimface_base.ts#L10)*

## Accessors

### `Protected` app

• **get app**(): *any*

*Defined in [providers/bimface/bimface_base.ts:12](https://github.com/youkaisteve/bim-operator/blob/3cd98e1/src/providers/bimface/bimface_base.ts#L12)*

**Returns:** *any*

• **set app**(`app`: any): *void*

*Defined in [providers/bimface/bimface_base.ts:16](https://github.com/youkaisteve/bim-operator/blob/3cd98e1/src/providers/bimface/bimface_base.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | any |

**Returns:** *void*

## Methods

###  addCustomButtons

▸ **addCustomButtons**(`customButtons`: Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)›): *void*

*Defined in [providers/bimface/bimface_base.ts:50](https://github.com/youkaisteve/bim-operator/blob/3cd98e1/src/providers/bimface/bimface_base.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`customButtons` | Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)› |

**Returns:** *void*

___

### `Abstract` addEventListener

▸ **addEventListener**(`eventName`: String, `callback`: Function): *any*

*Defined in [providers/bimface/bimface_base.ts:20](https://github.com/youkaisteve/bim-operator/blob/3cd98e1/src/providers/bimface/bimface_base.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`eventName` | String |
`callback` | Function |

**Returns:** *any*

___

###  dispose

▸ **dispose**(`options`: any): *void*

*Defined in [providers/bimface/bimface_base.ts:75](https://github.com/youkaisteve/bim-operator/blob/3cd98e1/src/providers/bimface/bimface_base.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *void*

___

###  initSDK

▸ **initSDK**(): *Promise‹void›*

*Defined in [providers/bimface/bimface_base.ts:22](https://github.com/youkaisteve/bim-operator/blob/3cd98e1/src/providers/bimface/bimface_base.ts#L22)*

**Returns:** *Promise‹void›*

___

###  loadSDK

▸ **loadSDK**(`options`: any): *Promise‹any›*

*Defined in [providers/bimface/bimface_base.ts:33](https://github.com/youkaisteve/bim-operator/blob/3cd98e1/src/providers/bimface/bimface_base.ts#L33)*

加载SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | SDKLoader选项 |

**Returns:** *Promise‹any›*

viewMetaData

___

### `Abstract` render

▸ **render**(): *any*

*Defined in [providers/bimface/bimface_base.ts:21](https://github.com/youkaisteve/bim-operator/blob/3cd98e1/src/providers/bimface/bimface_base.ts#L21)*

**Returns:** *any*

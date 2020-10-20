[@yzw/bim-operator - v1.8.0](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_external"](../modules/_providers_bimface_bimface_external_.md) › [BimfaceExternal](_providers_bimface_bimface_external_.bimfaceexternal.md)

# Class: BimfaceExternal

bimface外部构件

## Hierarchy

* **BimfaceExternal**

## Implements

* [IExternal](../interfaces/_interface_.iexternal.md)

## Index

### Constructors

* [constructor](_providers_bimface_bimface_external_.bimfaceexternal.md#constructor)

### Properties

* [externalMgr](_providers_bimface_bimface_external_.bimfaceexternal.md#externalmgr)
* [loader](_providers_bimface_bimface_external_.bimfaceexternal.md#loader)
* [viewer3D](_providers_bimface_bimface_external_.bimfaceexternal.md#viewer3d)

### Methods

* [add](_providers_bimface_bimface_external_.bimfaceexternal.md#add)
* [clear](_providers_bimface_bimface_external_.bimfaceexternal.md#clear)
* [getAllObjectIds](_providers_bimface_bimface_external_.bimfaceexternal.md#getallobjectids)
* [getPosition](_providers_bimface_bimface_external_.bimfaceexternal.md#getposition)
* [offset](_providers_bimface_bimface_external_.bimfaceexternal.md#offset)
* [removeById](_providers_bimface_bimface_external_.bimfaceexternal.md#removebyid)
* [rotate](_providers_bimface_bimface_external_.bimfaceexternal.md#rotate)
* [scale](_providers_bimface_bimface_external_.bimfaceexternal.md#scale)
* [setPosition](_providers_bimface_bimface_external_.bimfaceexternal.md#setposition)
* [translate](_providers_bimface_bimface_external_.bimfaceexternal.md#translate)

## Constructors

###  constructor

\+ **new BimfaceExternal**(`viewer3D`: any): *[BimfaceExternal](_providers_bimface_bimface_external_.bimfaceexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:13](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`viewer3D` | any |

**Returns:** *[BimfaceExternal](_providers_bimface_bimface_external_.bimfaceexternal.md)*

## Properties

###  externalMgr

• **externalMgr**: *any*

*Defined in [src/providers/bimface/bimface_external.ts:11](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L11)*

___

###  loader

• **loader**: *any*

*Defined in [src/providers/bimface/bimface_external.ts:12](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L12)*

___

###  viewer3D

• **viewer3D**: *any*

*Defined in [src/providers/bimface/bimface_external.ts:13](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L13)*

## Methods

###  add

▸ **add**(`name`: string, `url`: string): *Promise‹string›*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:25](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`url` | string |

**Returns:** *Promise‹string›*

___

###  clear

▸ **clear**(): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:37](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L37)*

**Returns:** *void*

___

###  getAllObjectIds

▸ **getAllObjectIds**(): *string[]*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:79](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L79)*

获取所有外部构件的ID

**Returns:** *string[]*

___

###  getPosition

▸ **getPosition**(`objectId`: string): *[Position](../interfaces/_model_position_.position.md)*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:73](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L73)*

获取外部构件的世界坐标

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectId` | string | 外部构件id  |

**Returns:** *[Position](../interfaces/_model_position_.position.md)*

___

###  offset

▸ **offset**(`objectId`: string, `option`: [OffsetOption](../interfaces/_model_options_.offsetoption.md)): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:53](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |
`option` | [OffsetOption](../interfaces/_model_options_.offsetoption.md) |

**Returns:** *void*

___

###  removeById

▸ **removeById**(`objectId`: string): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:34](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |

**Returns:** *void*

___

###  rotate

▸ **rotate**(`objectId`: string, `option`: [RotateOption](../interfaces/_model_options_.rotateoption.md)): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:40](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |
`option` | [RotateOption](../interfaces/_model_options_.rotateoption.md) |

**Returns:** *void*

___

###  scale

▸ **scale**(`objectId`: string, `option`: [ScaleOption](../interfaces/_model_options_.scaleoption.md)): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:56](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |
`option` | [ScaleOption](../interfaces/_model_options_.scaleoption.md) |

**Returns:** *void*

___

###  setPosition

▸ **setPosition**(`objectId`: string, `position`: [Position](../interfaces/_model_position_.position.md)): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:62](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |
`position` | [Position](../interfaces/_model_position_.position.md) |

**Returns:** *void*

___

###  translate

▸ **translate**(`objectId`: string, `option`: [TranslateOption](../interfaces/_model_options_.translateoption.md)): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:65](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_external.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |
`option` | [TranslateOption](../interfaces/_model_options_.translateoption.md) |

**Returns:** *void*

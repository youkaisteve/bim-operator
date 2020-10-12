[@yzw/bim-operator - v1.7.0](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_external"](../modules/_providers_bimface_bimface_external_.md) › [BimfaceExternal](_providers_bimface_bimface_external_.bimfaceexternal.md)

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
* [offset](_providers_bimface_bimface_external_.bimfaceexternal.md#offset)
* [removeById](_providers_bimface_bimface_external_.bimfaceexternal.md#removebyid)
* [rotate](_providers_bimface_bimface_external_.bimfaceexternal.md#rotate)
* [scale](_providers_bimface_bimface_external_.bimfaceexternal.md#scale)
* [setPosition](_providers_bimface_bimface_external_.bimfaceexternal.md#setposition)
* [translate](_providers_bimface_bimface_external_.bimfaceexternal.md#translate)

## Constructors

###  constructor

\+ **new BimfaceExternal**(`viewer3D`: any): *[BimfaceExternal](_providers_bimface_bimface_external_.bimfaceexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:12](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`viewer3D` | any |

**Returns:** *[BimfaceExternal](_providers_bimface_bimface_external_.bimfaceexternal.md)*

## Properties

###  externalMgr

• **externalMgr**: *any*

*Defined in [src/providers/bimface/bimface_external.ts:10](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L10)*

___

###  loader

• **loader**: *any*

*Defined in [src/providers/bimface/bimface_external.ts:11](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L11)*

___

###  viewer3D

• **viewer3D**: *any*

*Defined in [src/providers/bimface/bimface_external.ts:12](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L12)*

## Methods

###  add

▸ **add**(`name`: string, `url`: string): *Promise‹string›*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:24](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L24)*

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

*Defined in [src/providers/bimface/bimface_external.ts:36](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L36)*

**Returns:** *void*

___

###  offset

▸ **offset**(`objectId`: string, `option`: [OffsetOption](../interfaces/_model_options_.offsetoption.md)): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:52](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L52)*

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

*Defined in [src/providers/bimface/bimface_external.ts:33](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |

**Returns:** *void*

___

###  rotate

▸ **rotate**(`objectId`: string, `option`: [RotateOption](../interfaces/_model_options_.rotateoption.md)): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:39](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L39)*

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

*Defined in [src/providers/bimface/bimface_external.ts:55](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |
`option` | [ScaleOption](../interfaces/_model_options_.scaleoption.md) |

**Returns:** *void*

___

###  setPosition

▸ **setPosition**(`objectId`: string, `position`: Position): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:61](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |
`position` | Position |

**Returns:** *void*

___

###  translate

▸ **translate**(`objectId`: string, `option`: [TranslateOption](../interfaces/_model_options_.translateoption.md)): *void*

*Implementation of [IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_external.ts:64](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_external.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`objectId` | string |
`option` | [TranslateOption](../interfaces/_model_options_.translateoption.md) |

**Returns:** *void*

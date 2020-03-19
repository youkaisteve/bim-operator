[bim-operator - v1.0.13](../README.md) › [Globals](../globals.md) › ["providers/bimface"](../modules/_providers_bimface_.md) › [Bimface](_providers_bimface_.bimface.md)

# Class: Bimface

bimface操作

## Hierarchy

* **Bimface**

## Implements

* [IBimOperation](../interfaces/_interface_.ibimoperation.md)

## Index

### Properties

* [app](_providers_bimface_.bimface.md#app)
* [marker3D](_providers_bimface_.bimface.md#marker3d)
* [viewer2D](_providers_bimface_.bimface.md#viewer2d)
* [viewer3D](_providers_bimface_.bimface.md#viewer3d)

### Methods

* [add3dMarker](_providers_bimface_.bimface.md#add3dmarker)
* [clear3dMarker](_providers_bimface_.bimface.md#clear3dmarker)
* [getAllMarkers](_providers_bimface_.bimface.md#getallmarkers)
* [getComponentByCondition](_providers_bimface_.bimface.md#getcomponentbycondition)
* [getFloors](_providers_bimface_.bimface.md#getfloors)
* [getFloorsbyFileId](_providers_bimface_.bimface.md#getfloorsbyfileid)
* [loadModel](_providers_bimface_.bimface.md#loadmodel)
* [remove3dMarker](_providers_bimface_.bimface.md#remove3dmarker)
* [resize](_providers_bimface_.bimface.md#resize)
* [turn3dMarkerOn](_providers_bimface_.bimface.md#private-turn3dmarkeron)

## Properties

###  app

• **app**: *any*

*Defined in [providers/bimface.ts:11](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L11)*

bimface相关对象

___

###  marker3D

• **marker3D**: *any*

*Defined in [providers/bimface.ts:14](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L14)*

___

###  viewer2D

• **viewer2D**: *any*

*Defined in [providers/bimface.ts:13](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L13)*

___

###  viewer3D

• **viewer3D**: *any*

*Defined in [providers/bimface.ts:12](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L12)*

## Methods

###  add3dMarker

▸ **add3dMarker**(`marker`: [Marker3D](../interfaces/_interface_.marker3d.md)): *any*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:120](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L120)*

添加3d锚点

**Parameters:**

Name | Type |
------ | ------ |
`marker` | [Marker3D](../interfaces/_interface_.marker3d.md) |

**Returns:** *any*

___

###  clear3dMarker

▸ **clear3dMarker**(): *void*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:109](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L109)*

清空3d锚点

**Returns:** *void*

___

###  getAllMarkers

▸ **getAllMarkers**(): *any*

*Defined in [providers/bimface.ts:91](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L91)*

**Returns:** *any*

___

###  getComponentByCondition

▸ **getComponentByCondition**(`confition`: any): *Promise‹[Component](../interfaces/_interface_.component.md)[]›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:82](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L82)*

根据条件查询构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`confition` | any | 查询条件 |

**Returns:** *Promise‹[Component](../interfaces/_interface_.component.md)[]›*

___

###  getFloors

▸ **getFloors**(): *Promise‹[Floor](../interfaces/_interface_.floor.md)[]›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:63](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L63)*

获取楼层

**Returns:** *Promise‹[Floor](../interfaces/_interface_.floor.md)[]›*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *Promise‹unknown›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:72](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L72)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 模型文件id  |

**Returns:** *Promise‹unknown›*

___

###  loadModel

▸ **loadModel**(`options`: any): *Promise‹void›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:24](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L24)*

加载模型

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *Promise‹void›*

___

###  remove3dMarker

▸ **remove3dMarker**(`markerId`: string): *void*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:142](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L142)*

移除3d锚点

**Parameters:**

Name | Type |
------ | ------ |
`markerId` | string |

**Returns:** *void*

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:113](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`width?` | number |
`height?` | number |

**Returns:** *void*

___

### `Private` turn3dMarkerOn

▸ **turn3dMarkerOn**(): *void*

*Defined in [providers/bimface.ts:98](https://github.com/youkaisteve/bim-operator/blob/cc1e1ce/src/providers/bimface.ts#L98)*

开始3d锚点功能

**Returns:** *void*

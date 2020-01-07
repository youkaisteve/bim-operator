[bim-operator - v1.0.2](../README.md) › [Globals](../globals.md) › ["providers/bimface"](../modules/_providers_bimface_.md) › [Bimface](_providers_bimface_.bimface.md)

# Class: Bimface

bimface操作

## Hierarchy

* **Bimface**

## Implements

* [IBimOperation](../interfaces/_interface_.ibimoperation.md)

## Index

### Properties

* [app](_providers_bimface_.bimface.md#app)
* [viewer2D](_providers_bimface_.bimface.md#viewer2d)
* [viewer3D](_providers_bimface_.bimface.md#viewer3d)

### Methods

* [getComponentByCondition](_providers_bimface_.bimface.md#getcomponentbycondition)
* [getFloors](_providers_bimface_.bimface.md#getfloors)
* [getFloorsbyFileId](_providers_bimface_.bimface.md#getfloorsbyfileid)
* [loadModel](_providers_bimface_.bimface.md#loadmodel)

## Properties

###  app

• **app**: *any*

*Defined in [providers/bimface.ts:11](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/providers/bimface.ts#L11)*

bimface相关对象

___

###  viewer2D

• **viewer2D**: *any*

*Defined in [providers/bimface.ts:13](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/providers/bimface.ts#L13)*

___

###  viewer3D

• **viewer3D**: *any*

*Defined in [providers/bimface.ts:12](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/providers/bimface.ts#L12)*

## Methods

###  getComponentByCondition

▸ **getComponentByCondition**(`confition`: any): *Promise‹[Component](../interfaces/_interface_.component.md)[]›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:76](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/providers/bimface.ts#L76)*

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

*Defined in [providers/bimface.ts:57](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/providers/bimface.ts#L57)*

获取楼层

**Returns:** *Promise‹[Floor](../interfaces/_interface_.floor.md)[]›*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *Promise‹unknown›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:66](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/providers/bimface.ts#L66)*

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

*Defined in [providers/bimface.ts:21](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/providers/bimface.ts#L21)*

加载模型

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *Promise‹void›*

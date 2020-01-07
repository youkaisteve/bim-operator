[bim-operator - v1.0.2](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IBimOperation](_interface_.ibimoperation.md)

# Interface: IBimOperation

模型操作接口

## Hierarchy

* **IBimOperation**

## Implemented by

* [Bimface](../classes/_providers_bimface_.bimface.md)

## Index

### Methods

* [getComponentByCondition](_interface_.ibimoperation.md#getcomponentbycondition)
* [getFloors](_interface_.ibimoperation.md#getfloors)
* [getFloorsbyFileId](_interface_.ibimoperation.md#getfloorsbyfileid)
* [loadModel](_interface_.ibimoperation.md#loadmodel)

## Methods

###  getComponentByCondition

▸ **getComponentByCondition**(`confition`: any): *Promise‹Array‹[Component](_interface_.component.md)››*

*Defined in [interface.ts:65](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/interface.ts#L65)*

根据条件获取构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`confition` | any | 查询条件，不同厂商之间可能会有差别  |

**Returns:** *Promise‹Array‹[Component](_interface_.component.md)››*

___

###  getFloors

▸ **getFloors**(): *Promise‹Array‹[Floor](_interface_.floor.md)››*

*Defined in [interface.ts:55](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/interface.ts#L55)*

获取所有楼层

**Returns:** *Promise‹Array‹[Floor](_interface_.floor.md)››*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *any*

*Defined in [interface.ts:60](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/interface.ts#L60)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 单个模型的id  |

**Returns:** *any*

___

###  loadModel

▸ **loadModel**(`options`: any): *Promise‹void›*

*Defined in [interface.ts:51](https://github.com/youkaisteve/bim-operator/blob/e68d6d4/src/interface.ts#L51)*

加载模型

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项，厂商不同配置会有差别  |

**Returns:** *Promise‹void›*
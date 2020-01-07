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
* [loadModel](_interface_.ibimoperation.md#loadmodel)

## Methods

###  getComponentByCondition

▸ **getComponentByCondition**(`confition`: any): *Promise‹Array‹[Component](_interface_.component.md)››*

*Defined in [interface.ts:61](https://github.com/youkaisteve/bim-operator/blob/7f44a37/src/interface.ts#L61)*

根据条件获取构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`confition` | any | 查询条件，不同厂商之间可能会有差别  |

**Returns:** *Promise‹Array‹[Component](_interface_.component.md)››*

___

###  getFloors

▸ **getFloors**(): *Promise‹Array‹[Floor](_interface_.floor.md)››*

*Defined in [interface.ts:55](https://github.com/youkaisteve/bim-operator/blob/7f44a37/src/interface.ts#L55)*

获取所有楼层

**Returns:** *Promise‹Array‹[Floor](_interface_.floor.md)››*

___

###  loadModel

▸ **loadModel**(`options`: any): *Promise‹void›*

*Defined in [interface.ts:51](https://github.com/youkaisteve/bim-operator/blob/7f44a37/src/interface.ts#L51)*

加载模型

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项，厂商不同配置会有差别  |

**Returns:** *Promise‹void›*

[bim-operator - v1.0.15](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IBimOperation](_interface_.ibimoperation.md)

# Interface: IBimOperation

模型操作接口

## Hierarchy

* **IBimOperation**

## Implemented by

* [Bimface](../classes/_providers_bimface_.bimface.md)

## Index

### Methods

* [add3dMarker](_interface_.ibimoperation.md#add3dmarker)
* [clear3dMarker](_interface_.ibimoperation.md#clear3dmarker)
* [getComponentByCondition](_interface_.ibimoperation.md#getcomponentbycondition)
* [getFloors](_interface_.ibimoperation.md#getfloors)
* [getFloorsbyFileId](_interface_.ibimoperation.md#getfloorsbyfileid)
* [getViewPoint](_interface_.ibimoperation.md#getviewpoint)
* [isolateComponent](_interface_.ibimoperation.md#isolatecomponent)
* [loadModel](_interface_.ibimoperation.md#loadmodel)
* [remove3dMarker](_interface_.ibimoperation.md#remove3dmarker)
* [resize](_interface_.ibimoperation.md#resize)
* [setViewPoint](_interface_.ibimoperation.md#setviewpoint)

## Methods

###  add3dMarker

▸ **add3dMarker**(`marker`: [Marker3D](_model_marker_3d_.marker3d.md)): *string*

*Defined in [interface.ts:35](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L35)*

添加3D标记

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`marker` | [Marker3D](_model_marker_3d_.marker3d.md) | 位置信息 |

**Returns:** *string*

3d标记id

___

###  clear3dMarker

▸ **clear3dMarker**(): *void*

*Defined in [interface.ts:44](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L44)*

清除所有3D标记

**Returns:** *void*

___

###  getComponentByCondition

▸ **getComponentByCondition**(`confition`: any): *Promise‹Array‹[Component](_model_component_.component.md)››*

*Defined in [interface.ts:29](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L29)*

根据条件获取构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`confition` | any | 查询条件，不同厂商之间可能会有差别  |

**Returns:** *Promise‹Array‹[Component](_model_component_.component.md)››*

___

###  getFloors

▸ **getFloors**(): *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

*Defined in [interface.ts:19](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L19)*

获取所有楼层

**Returns:** *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

*Defined in [interface.ts:24](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L24)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 单个模型的id  |

**Returns:** *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

*Defined in [interface.ts:51](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L51)*

获取视点

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 视点参数 |

**Returns:** *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

___

###  isolateComponent

▸ **isolateComponent**(`componentIds`: Array‹String›, `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Defined in [interface.ts:59](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L59)*

隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`componentIds` | Array‹String› |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  loadModel

▸ **loadModel**(`options`: any): *Promise‹void›*

*Defined in [interface.ts:15](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L15)*

加载模型

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项，厂商不同配置会有差别  |

**Returns:** *Promise‹void›*

___

###  remove3dMarker

▸ **remove3dMarker**(`markerId`: string): *void*

*Defined in [interface.ts:40](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L40)*

清空3d锚点

**Parameters:**

Name | Type |
------ | ------ |
`markerId` | string |

**Returns:** *void*

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Defined in [interface.ts:65](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L65)*

设置场景显示大小

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width?` | number | 宽度 |
`height?` | number | 高度  |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](_model_view_point_.viewpoint.md)): *void*

*Defined in [interface.ts:55](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/interface.ts#L55)*

设置视点

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](_model_view_point_.viewpoint.md) |

**Returns:** *void*

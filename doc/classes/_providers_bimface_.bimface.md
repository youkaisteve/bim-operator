[bim-operator - v1.0.15](../README.md) › [Globals](../globals.md) › ["providers/bimface"](../modules/_providers_bimface_.md) › [Bimface](_providers_bimface_.bimface.md)

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
* [getViewPoint](_providers_bimface_.bimface.md#getviewpoint)
* [isolateComponent](_providers_bimface_.bimface.md#isolatecomponent)
* [loadModel](_providers_bimface_.bimface.md#loadmodel)
* [remove3dMarker](_providers_bimface_.bimface.md#remove3dmarker)
* [resize](_providers_bimface_.bimface.md#resize)
* [setViewPoint](_providers_bimface_.bimface.md#setviewpoint)
* [turn3dMarkerOn](_providers_bimface_.bimface.md#private-turn3dmarkeron)

## Properties

###  app

• **app**: *any*

*Defined in [providers/bimface.ts:16](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L16)*

bimface相关对象

___

###  marker3D

• **marker3D**: *any*

*Defined in [providers/bimface.ts:19](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L19)*

___

###  viewer2D

• **viewer2D**: *any*

*Defined in [providers/bimface.ts:18](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L18)*

___

###  viewer3D

• **viewer3D**: *any*

*Defined in [providers/bimface.ts:17](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L17)*

## Methods

###  add3dMarker

▸ **add3dMarker**(`marker`: [Marker3D](../interfaces/_model_marker_3d_.marker3d.md)): *any*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:103](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L103)*

添加3d锚点

**Parameters:**

Name | Type |
------ | ------ |
`marker` | [Marker3D](../interfaces/_model_marker_3d_.marker3d.md) |

**Returns:** *any*

___

###  clear3dMarker

▸ **clear3dMarker**(): *void*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:132](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L132)*

清空3d锚点

**Returns:** *void*

___

###  getAllMarkers

▸ **getAllMarkers**(): *any*

*Defined in [providers/bimface.ts:96](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L96)*

**Returns:** *any*

___

###  getComponentByCondition

▸ **getComponentByCondition**(`confition`: any): *Promise‹[Component](../interfaces/_model_component_.component.md)[]›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:87](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L87)*

根据条件查询构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`confition` | any | 查询条件 |

**Returns:** *Promise‹[Component](../interfaces/_model_component_.component.md)[]›*

___

###  getFloors

▸ **getFloors**(): *Promise‹[Floor](../interfaces/_model_floor_.floor.md)[]›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:68](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L68)*

获取楼层

**Returns:** *Promise‹[Floor](../interfaces/_model_floor_.floor.md)[]›*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:77](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L77)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 模型文件id  |

**Returns:** *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](../interfaces/_model_view_point_.viewpoint.md)›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:136](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *Promise‹[ViewPoint](../interfaces/_model_view_point_.viewpoint.md)›*

___

###  isolateComponent

▸ **isolateComponent**(`componentIds`: String[], `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Defined in [providers/bimface.ts:160](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`componentIds` | String[] |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  loadModel

▸ **loadModel**(`options`: any): *Promise‹void›*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:29](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L29)*

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

*Defined in [providers/bimface.ts:125](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L125)*

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

*Defined in [providers/bimface.ts:164](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`width?` | number |
`height?` | number |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](../interfaces/_model_view_point_.viewpoint.md)): *void*

*Implementation of [IBimOperation](../interfaces/_interface_.ibimoperation.md)*

*Defined in [providers/bimface.ts:156](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](../interfaces/_model_view_point_.viewpoint.md) |

**Returns:** *void*

___

### `Private` turn3dMarkerOn

▸ **turn3dMarkerOn**(): *void*

*Defined in [providers/bimface.ts:171](https://github.com/youkaisteve/bim-operator/blob/a40aa4f/src/providers/bimface.ts#L171)*

开始3d锚点功能

**Returns:** *void*

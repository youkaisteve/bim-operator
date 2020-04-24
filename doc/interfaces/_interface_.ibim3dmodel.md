[bim-operator - v1.0.34](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IBim3DModel](_interface_.ibim3dmodel.md)

# Interface: IBim3DModel

3D模型操作

## Hierarchy

* **IBim3DModel**

## Implemented by

* [Bimface3DModel](../classes/_providers_bimface_bimface_model_.bimface3dmodel.md)

## Index

### Properties

* [marker](_interface_.ibim3dmodel.md#marker)

### Methods

* [clearFloorExplosion](_interface_.ibim3dmodel.md#clearfloorexplosion)
* [clearHighlightComponents](_interface_.ibim3dmodel.md#clearhighlightcomponents)
* [clearIsolation](_interface_.ibim3dmodel.md#clearisolation)
* [clearSelectedComponents](_interface_.ibim3dmodel.md#clearselectedcomponents)
* [explosionFloor](_interface_.ibim3dmodel.md#explosionfloor)
* [getComponentByCondition](_interface_.ibim3dmodel.md#getcomponentbycondition)
* [getFloors](_interface_.ibim3dmodel.md#getfloors)
* [getFloorsbyFileId](_interface_.ibim3dmodel.md#getfloorsbyfileid)
* [getSelectedComponents](_interface_.ibim3dmodel.md#getselectedcomponents)
* [getViewPoint](_interface_.ibim3dmodel.md#getviewpoint)
* [highlightComponents](_interface_.ibim3dmodel.md#highlightcomponents)
* [isolateComponent](_interface_.ibim3dmodel.md#isolatecomponent)
* [isolateComponentByCondition](_interface_.ibim3dmodel.md#isolatecomponentbycondition)
* [load](_interface_.ibim3dmodel.md#load)
* [resize](_interface_.ibim3dmodel.md#resize)
* [selectComponents](_interface_.ibim3dmodel.md#selectcomponents)
* [selectComponentsByCondition](_interface_.ibim3dmodel.md#selectcomponentsbycondition)
* [setViewPoint](_interface_.ibim3dmodel.md#setviewpoint)

## Properties

###  marker

• **marker**: *[IMarker](_interface_.imarker.md)*

*Defined in [interface.ts:21](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L21)*

## Methods

###  clearFloorExplosion

▸ **clearFloorExplosion**(): *any*

*Defined in [interface.ts:45](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L45)*

清空楼层爆炸

**Returns:** *any*

___

###  clearHighlightComponents

▸ **clearHighlightComponents**(`componentIds?`: Array‹String›): *void*

*Defined in [interface.ts:84](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L84)*

清除所有高亮构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds?` | Array‹String› | 构件id列表，如果没有则清除所有高亮构件  |

**Returns:** *void*

___

###  clearIsolation

▸ **clearIsolation**(): *void*

*Defined in [interface.ts:73](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L73)*

清空隔离

**Returns:** *void*

___

###  clearSelectedComponents

▸ **clearSelectedComponents**(): *void*

*Defined in [interface.ts:98](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L98)*

清空选中构件

**Returns:** *void*

___

###  explosionFloor

▸ **explosionFloor**(`floorIds`: Array‹String›, `extend`: Number): *void*

*Defined in [interface.ts:41](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L41)*

楼层爆炸

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`floorIds` | Array‹String› | - |
`extend` | Number | 楼层爆炸离散系数，根据厂商定制，可选  |

**Returns:** *void*

___

###  getComponentByCondition

▸ **getComponentByCondition**(`fileId`: String, `conditions`: Array‹[ComponentFilter](_model_filter_.componentfilter.md)›): *Promise‹Array‹String››*

*Defined in [interface.ts:50](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L50)*

根据条件获取构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | - |
`conditions` | Array‹[ComponentFilter](_model_filter_.componentfilter.md)› | 查询条件，不同厂商之间可能会有差别  |

**Returns:** *Promise‹Array‹String››*

___

###  getFloors

▸ **getFloors**(): *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

*Defined in [interface.ts:30](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L30)*

获取所有楼层

**Returns:** *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

*Defined in [interface.ts:35](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L35)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 单个模型的id  |

**Returns:** *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

___

###  getSelectedComponents

▸ **getSelectedComponents**(): *Array‹String›*

*Defined in [interface.ts:102](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L102)*

获取选中的构件

**Returns:** *Array‹String›*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

*Defined in [interface.ts:57](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L57)*

获取视点

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 视点参数 |

**Returns:** *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

___

###  highlightComponents

▸ **highlightComponents**(`componentIds`: Array‹String›, `options`: [HighlightOption](_model_options_.highlightoption.md)): *void*

*Defined in [interface.ts:79](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L79)*

高亮构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | Array‹String› | 构件ids |
`options` | [HighlightOption](_model_options_.highlightoption.md) | 高亮选项  |

**Returns:** *void*

___

###  isolateComponent

▸ **isolateComponent**(`componentIds`: Array‹String›, `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Defined in [interface.ts:65](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L65)*

隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`componentIds` | Array‹String› |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  isolateComponentByCondition

▸ **isolateComponentByCondition**(`conditions`: Array‹[ComponentFilter](_model_filter_.componentfilter.md)›, `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Defined in [interface.ts:69](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L69)*

根据条件隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | Array‹[ComponentFilter](_model_filter_.componentfilter.md)› |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  load

▸ **load**(`options`: any): *Promise‹void›*

*Defined in [interface.ts:26](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L26)*

加载模型

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项，厂商不同配置会有差别  |

**Returns:** *Promise‹void›*

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Defined in [interface.ts:108](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L108)*

设置场景显示大小

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width?` | number | 宽度 |
`height?` | number | 高度  |

**Returns:** *void*

___

###  selectComponents

▸ **selectComponents**(`componentIds`: Array‹String›): *void*

*Defined in [interface.ts:89](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L89)*

选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | Array‹String› | 构件id列表  |

**Returns:** *void*

___

###  selectComponentsByCondition

▸ **selectComponentsByCondition**(`conditions`: Array‹[ComponentFilter](_model_filter_.componentfilter.md)›): *void*

*Defined in [interface.ts:94](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L94)*

根据条件选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | Array‹[ComponentFilter](_model_filter_.componentfilter.md)› | 条件  |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](_model_view_point_.viewpoint.md)): *void*

*Defined in [interface.ts:61](https://github.com/youkaisteve/bim-operator/blob/b5c6c98/src/interface.ts#L61)*

设置视点

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](_model_view_point_.viewpoint.md) |

**Returns:** *void*

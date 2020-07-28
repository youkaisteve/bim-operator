[@yzw/bim-operator - v1.0.55](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IBim3DModel](_interface_.ibim3dmodel.md)

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
* [restoreComponentsColor](_interface_.ibim3dmodel.md#restorecomponentscolor)
* [restoreComponentsColorByCondition](_interface_.ibim3dmodel.md#restorecomponentscolorbycondition)
* [selectComponents](_interface_.ibim3dmodel.md#selectcomponents)
* [selectComponentsByCondition](_interface_.ibim3dmodel.md#selectcomponentsbycondition)
* [setComponentsColor](_interface_.ibim3dmodel.md#setcomponentscolor)
* [setComponentsColorByCondition](_interface_.ibim3dmodel.md#setcomponentscolorbycondition)
* [setViewPoint](_interface_.ibim3dmodel.md#setviewpoint)

## Properties

###  marker

• **marker**: *[IMarker](_interface_.imarker.md)*

*Defined in [interface.ts:31](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L31)*

## Methods

###  clearFloorExplosion

▸ **clearFloorExplosion**(): *any*

*Defined in [interface.ts:55](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L55)*

清空楼层爆炸

**Returns:** *any*

___

###  clearHighlightComponents

▸ **clearHighlightComponents**(`componentIds?`: string[]): *void*

*Defined in [interface.ts:94](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L94)*

清除所有高亮构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds?` | string[] | 构件id列表，如果没有则清除所有高亮构件  |

**Returns:** *void*

___

###  clearIsolation

▸ **clearIsolation**(): *void*

*Defined in [interface.ts:83](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L83)*

清空隔离

**Returns:** *void*

___

###  clearSelectedComponents

▸ **clearSelectedComponents**(): *void*

*Defined in [interface.ts:108](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L108)*

清空选中构件

**Returns:** *void*

___

###  explosionFloor

▸ **explosionFloor**(`floorIds`: string[], `extend`: number): *void*

*Defined in [interface.ts:51](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L51)*

楼层爆炸

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`floorIds` | string[] | - |
`extend` | number | 楼层爆炸离散系数，根据厂商定制，可选  |

**Returns:** *void*

___

###  getComponentByCondition

▸ **getComponentByCondition**(`fileId`: string, `conditions`: [ComponentFilter](_model_filter_.componentfilter.md)[]): *Promise‹string[]›*

*Defined in [interface.ts:60](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L60)*

根据条件获取构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | string | - |
`conditions` | [ComponentFilter](_model_filter_.componentfilter.md)[] | 查询条件，不同厂商之间可能会有差别  |

**Returns:** *Promise‹string[]›*

___

###  getFloors

▸ **getFloors**(): *Promise‹[Floor](_model_floor_.floor.md)[]›*

*Defined in [interface.ts:40](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L40)*

获取所有楼层

**Returns:** *Promise‹[Floor](_model_floor_.floor.md)[]›*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: string): *Promise‹[Floor](_model_floor_.floor.md)[]›*

*Defined in [interface.ts:45](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L45)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | string | 单个模型的id  |

**Returns:** *Promise‹[Floor](_model_floor_.floor.md)[]›*

___

###  getSelectedComponents

▸ **getSelectedComponents**(): *string[]*

*Defined in [interface.ts:112](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L112)*

获取选中的构件

**Returns:** *string[]*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

*Defined in [interface.ts:67](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L67)*

获取视点

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 视点参数 |

**Returns:** *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

___

###  highlightComponents

▸ **highlightComponents**(`componentIds`: string[], `options`: [HighlightOption](_model_options_.highlightoption.md)): *void*

*Defined in [interface.ts:89](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L89)*

高亮构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件ids |
`options` | [HighlightOption](_model_options_.highlightoption.md) | 高亮选项  |

**Returns:** *void*

___

###  isolateComponent

▸ **isolateComponent**(`componentIds`: string[], `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Defined in [interface.ts:75](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L75)*

隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`componentIds` | string[] |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  isolateComponentByCondition

▸ **isolateComponentByCondition**(`conditions`: [ComponentFilter](_model_filter_.componentfilter.md)[], `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Defined in [interface.ts:79](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L79)*

根据条件隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | [ComponentFilter](_model_filter_.componentfilter.md)[] |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  load

▸ **load**(`options`: any): *Promise‹void›*

*Defined in [interface.ts:36](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L36)*

加载模型

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项，厂商不同配置会有差别  |

**Returns:** *Promise‹void›*

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Defined in [interface.ts:138](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L138)*

设置场景显示大小

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width?` | number | 宽度 |
`height?` | number | 高度  |

**Returns:** *void*

___

###  restoreComponentsColor

▸ **restoreComponentsColor**(`componentIds`: string[]): *void*

*Defined in [interface.ts:127](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L127)*

恢复构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件ids  |

**Returns:** *void*

___

###  restoreComponentsColorByCondition

▸ **restoreComponentsColorByCondition**(`conditions`: [ComponentFilter](_model_filter_.componentfilter.md)[]): *void*

*Defined in [interface.ts:132](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L132)*

根据条件恢复构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | [ComponentFilter](_model_filter_.componentfilter.md)[] | 条件  |

**Returns:** *void*

___

###  selectComponents

▸ **selectComponents**(`componentIds`: string[]): *void*

*Defined in [interface.ts:99](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L99)*

选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件id列表  |

**Returns:** *void*

___

###  selectComponentsByCondition

▸ **selectComponentsByCondition**(`conditions`: [ComponentFilter](_model_filter_.componentfilter.md)[]): *void*

*Defined in [interface.ts:104](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L104)*

根据条件选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | [ComponentFilter](_model_filter_.componentfilter.md)[] | 条件  |

**Returns:** *void*

___

###  setComponentsColor

▸ **setComponentsColor**(`componentIds`: string[], `color`: string): *void*

*Defined in [interface.ts:117](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L117)*

设置构件ids

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件ids  |
`color` | string | - |

**Returns:** *void*

___

###  setComponentsColorByCondition

▸ **setComponentsColorByCondition**(`conditions`: [ComponentFilter](_model_filter_.componentfilter.md)[], `color`: string): *void*

*Defined in [interface.ts:122](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L122)*

根据条件设置构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | [ComponentFilter](_model_filter_.componentfilter.md)[] | 条件  |
`color` | string | - |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](_model_view_point_.viewpoint.md)): *void*

*Defined in [interface.ts:71](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L71)*

设置视点

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](_model_view_point_.viewpoint.md) |

**Returns:** *void*

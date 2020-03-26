[bim-operator - v1.0.15](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IBim3DModel](_interface_.ibim3dmodel.md)

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

* [clearHighlightComponents](_interface_.ibim3dmodel.md#clearhighlightcomponents)
* [clearIsolation](_interface_.ibim3dmodel.md#clearisolation)
* [clearSelectedComponents](_interface_.ibim3dmodel.md#clearselectedcomponents)
* [getComponentByCondition](_interface_.ibim3dmodel.md#getcomponentbycondition)
* [getFloors](_interface_.ibim3dmodel.md#getfloors)
* [getFloorsbyFileId](_interface_.ibim3dmodel.md#getfloorsbyfileid)
* [getSelectedComponents](_interface_.ibim3dmodel.md#getselectedcomponents)
* [getViewPoint](_interface_.ibim3dmodel.md#getviewpoint)
* [highlightComponents](_interface_.ibim3dmodel.md#highlightcomponents)
* [isolateComponent](_interface_.ibim3dmodel.md#isolatecomponent)
* [isolateComponentByCondition](_interface_.ibim3dmodel.md#isolatecomponentbycondition)
* [loadModel](_interface_.ibim3dmodel.md#loadmodel)
* [resize](_interface_.ibim3dmodel.md#resize)
* [selectComponents](_interface_.ibim3dmodel.md#selectcomponents)
* [selectComponentsByCondition](_interface_.ibim3dmodel.md#selectcomponentsbycondition)
* [setViewPoint](_interface_.ibim3dmodel.md#setviewpoint)

## Properties

###  marker

• **marker**: *[IMarker](_interface_.imarker.md)*

*Defined in [interface.ts:20](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L20)*

## Methods

###  clearHighlightComponents

▸ **clearHighlightComponents**(`componentIds?`: String[]): *any*

*Defined in [interface.ts:73](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L73)*

清除所有构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds?` | String[] | 构件id列表，如果没有则清除所有高亮构件  |

**Returns:** *any*

___

###  clearIsolation

▸ **clearIsolation**(): *any*

*Defined in [interface.ts:62](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L62)*

清空隔离

**Returns:** *any*

___

###  clearSelectedComponents

▸ **clearSelectedComponents**(): *void*

*Defined in [interface.ts:87](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L87)*

清空选中构件

**Returns:** *void*

___

###  getComponentByCondition

▸ **getComponentByCondition**(`fileId`: String, `conditions`: Array‹[ComponentFilter](_model_filter_.componentfilter.md)›): *Promise‹Array‹String››*

*Defined in [interface.ts:39](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L39)*

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

*Defined in [interface.ts:29](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L29)*

获取所有楼层

**Returns:** *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

*Defined in [interface.ts:34](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L34)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 单个模型的id  |

**Returns:** *Promise‹Array‹[Floor](_model_floor_.floor.md)››*

___

###  getSelectedComponents

▸ **getSelectedComponents**(): *String[]*

*Defined in [interface.ts:91](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L91)*

获取选中的构件

**Returns:** *String[]*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

*Defined in [interface.ts:46](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L46)*

获取视点

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 视点参数 |

**Returns:** *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

___

###  highlightComponents

▸ **highlightComponents**(`componentIds`: String[], `options`: [HighlightOption](_model_options_.highlightoption.md)): *void*

*Defined in [interface.ts:68](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L68)*

突出构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | String[] | 构件ids |
`options` | [HighlightOption](_model_options_.highlightoption.md) | 高亮选项  |

**Returns:** *void*

___

###  isolateComponent

▸ **isolateComponent**(`componentIds`: Array‹String›, `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Defined in [interface.ts:54](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L54)*

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

*Defined in [interface.ts:58](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L58)*

根据条件隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | Array‹[ComponentFilter](_model_filter_.componentfilter.md)› |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  loadModel

▸ **loadModel**(`options`: any): *Promise‹void›*

*Defined in [interface.ts:25](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L25)*

加载模型

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项，厂商不同配置会有差别  |

**Returns:** *Promise‹void›*

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Defined in [interface.ts:97](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L97)*

设置场景显示大小

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width?` | number | 宽度 |
`height?` | number | 高度  |

**Returns:** *void*

___

###  selectComponents

▸ **selectComponents**(`componentIds`: String[]): *void*

*Defined in [interface.ts:78](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L78)*

选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | String[] | 构件id列表  |

**Returns:** *void*

___

###  selectComponentsByCondition

▸ **selectComponentsByCondition**(`conditions`: Array‹[ComponentFilter](_model_filter_.componentfilter.md)›): *void*

*Defined in [interface.ts:83](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L83)*

根据条件选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | Array‹[ComponentFilter](_model_filter_.componentfilter.md)› | 条件  |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](_model_view_point_.viewpoint.md)): *void*

*Defined in [interface.ts:50](https://github.com/youkaisteve/bim-operator/blob/158031c/src/interface.ts#L50)*

设置视点

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](_model_view_point_.viewpoint.md) |

**Returns:** *void*

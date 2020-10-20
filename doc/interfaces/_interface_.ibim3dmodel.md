[@yzw/bim-operator - v1.8.0](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IBim3DModel](_interface_.ibim3dmodel.md)

# Interface: IBim3DModel

3D模型操作

## Hierarchy

* **IBim3DModel**

## Implemented by

* [Bimface3DModel](../classes/_providers_bimface_bimface_model_.bimface3dmodel.md)

## Index

### Properties

* [contextMenu](_interface_.ibim3dmodel.md#contextmenu)
* [external](_interface_.ibim3dmodel.md#external)
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
* [hideComponents](_interface_.ibim3dmodel.md#hidecomponents)
* [highlightComponents](_interface_.ibim3dmodel.md#highlightcomponents)
* [isolateComponent](_interface_.ibim3dmodel.md#isolatecomponent)
* [isolateComponentByCondition](_interface_.ibim3dmodel.md#isolatecomponentbycondition)
* [load](_interface_.ibim3dmodel.md#load)
* [resize](_interface_.ibim3dmodel.md#resize)
* [restoreComponentsColor](_interface_.ibim3dmodel.md#restorecomponentscolor)
* [restoreComponentsColorByCondition](_interface_.ibim3dmodel.md#restorecomponentscolorbycondition)
* [restoreDefault](_interface_.ibim3dmodel.md#restoredefault)
* [selectComponents](_interface_.ibim3dmodel.md#selectcomponents)
* [selectComponentsByCondition](_interface_.ibim3dmodel.md#selectcomponentsbycondition)
* [setComponentsColor](_interface_.ibim3dmodel.md#setcomponentscolor)
* [setComponentsColorByCondition](_interface_.ibim3dmodel.md#setcomponentscolorbycondition)
* [setComponentsOpacity](_interface_.ibim3dmodel.md#setcomponentsopacity)
* [setViewPoint](_interface_.ibim3dmodel.md#setviewpoint)
* [showComponents](_interface_.ibim3dmodel.md#showcomponents)

## Properties

###  contextMenu

• **contextMenu**: *[IContextMenu](_interface_.icontextmenu.md)*

*Defined in [src/interface.ts:44](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L44)*

___

###  external

• **external**: *[IExternal](_interface_.iexternal.md)*

*Defined in [src/interface.ts:43](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L43)*

___

###  marker

• **marker**: *[IMarker](_interface_.imarker.md)*

*Defined in [src/interface.ts:42](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L42)*

## Methods

###  clearFloorExplosion

▸ **clearFloorExplosion**(): *any*

*Defined in [src/interface.ts:68](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L68)*

清空楼层爆炸

**Returns:** *any*

___

###  clearHighlightComponents

▸ **clearHighlightComponents**(`componentIds?`: string[]): *void*

*Defined in [src/interface.ts:107](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L107)*

清除所有高亮构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds?` | string[] | 构件id列表，如果没有则清除所有高亮构件  |

**Returns:** *void*

___

###  clearIsolation

▸ **clearIsolation**(): *void*

*Defined in [src/interface.ts:96](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L96)*

清空隔离

**Returns:** *void*

___

###  clearSelectedComponents

▸ **clearSelectedComponents**(): *void*

*Defined in [src/interface.ts:121](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L121)*

清空选中构件

**Returns:** *void*

___

###  explosionFloor

▸ **explosionFloor**(`floorIds`: string[], `extend`: number): *void*

*Defined in [src/interface.ts:64](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L64)*

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

*Defined in [src/interface.ts:73](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L73)*

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

*Defined in [src/interface.ts:53](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L53)*

获取所有楼层

**Returns:** *Promise‹[Floor](_model_floor_.floor.md)[]›*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: string): *Promise‹[Floor](_model_floor_.floor.md)[]›*

*Defined in [src/interface.ts:58](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L58)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | string | 单个模型的id  |

**Returns:** *Promise‹[Floor](_model_floor_.floor.md)[]›*

___

###  getSelectedComponents

▸ **getSelectedComponents**(): *string[]*

*Defined in [src/interface.ts:125](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L125)*

获取选中的构件

**Returns:** *string[]*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

*Defined in [src/interface.ts:80](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L80)*

获取视点

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 视点参数 |

**Returns:** *Promise‹[ViewPoint](_model_view_point_.viewpoint.md)›*

___

###  hideComponents

▸ **hideComponents**(`componentIds?`: string[]): *void*

*Defined in [src/interface.ts:150](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L150)*

隐藏构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds?` | string[] | 构件列表，若为空，则隐藏所有构件  |

**Returns:** *void*

___

###  highlightComponents

▸ **highlightComponents**(`componentIds`: string[], `options`: [HighlightOption](_model_options_.highlightoption.md)): *void*

*Defined in [src/interface.ts:102](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L102)*

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

*Defined in [src/interface.ts:88](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L88)*

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

*Defined in [src/interface.ts:92](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L92)*

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

*Defined in [src/interface.ts:49](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L49)*

加载模型

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项，厂商不同配置会有差别  |

**Returns:** *Promise‹void›*

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Defined in [src/interface.ts:173](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L173)*

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

*Defined in [src/interface.ts:140](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L140)*

恢复构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件ids  |

**Returns:** *void*

___

###  restoreComponentsColorByCondition

▸ **restoreComponentsColorByCondition**(`conditions`: [ComponentFilter](_model_filter_.componentfilter.md)[]): *void*

*Defined in [src/interface.ts:145](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L145)*

根据条件恢复构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | [ComponentFilter](_model_filter_.componentfilter.md)[] | 条件  |

**Returns:** *void*

___

###  restoreDefault

▸ **restoreDefault**(`restoreFlag`: number): *any*

*Defined in [src/interface.ts:167](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L167)*

恢复默认显示，包括着色、选择、隔离、半透明、空间等等

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`restoreFlag` | number | 恢复的内容，[RestoreEnum](../enums/_enums_.restoreenum.md)的并集  |

**Returns:** *any*

___

###  selectComponents

▸ **selectComponents**(`componentIds`: string[]): *void*

*Defined in [src/interface.ts:112](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L112)*

选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件id列表  |

**Returns:** *void*

___

###  selectComponentsByCondition

▸ **selectComponentsByCondition**(`conditions`: [ComponentFilter](_model_filter_.componentfilter.md)[]): *void*

*Defined in [src/interface.ts:117](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L117)*

根据条件选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | [ComponentFilter](_model_filter_.componentfilter.md)[] | 条件  |

**Returns:** *void*

___

###  setComponentsColor

▸ **setComponentsColor**(`componentIds`: string[], `color`: string): *void*

*Defined in [src/interface.ts:130](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L130)*

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

*Defined in [src/interface.ts:135](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L135)*

根据条件设置构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | [ComponentFilter](_model_filter_.componentfilter.md)[] | 条件  |
`color` | string | - |

**Returns:** *void*

___

###  setComponentsOpacity

▸ **setComponentsOpacity**(`option`: [OpacityOption](_model_options_.opacityoption.md), `componentIds`: string[]): *void*

*Defined in [src/interface.ts:162](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L162)*

设置构件透明度, 包括半透明

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`option` | [OpacityOption](_model_options_.opacityoption.md) | 设置状态 |
`componentIds` | string[] | 构件id列表，如果为空，则会设置整个模型  |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](_model_view_point_.viewpoint.md)): *void*

*Defined in [src/interface.ts:84](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L84)*

设置视点

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](_model_view_point_.viewpoint.md) |

**Returns:** *void*

___

###  showComponents

▸ **showComponents**(`componentIds?`: string[], `progressCallback?`: function): *Promise‹void›*

*Defined in [src/interface.ts:156](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/interface.ts#L156)*

显示模型构件

**Parameters:**

▪`Optional`  **componentIds**: *string[]*

构件列表

▪`Optional`  **progressCallback**: *function*

加载进度回调函数

▸ (): *void*

**Returns:** *Promise‹void›*

[@yzw/bim-operator - v1.0.41](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_model"](../modules/_providers_bimface_bimface_model_.md) › [Bimface3DModel](_providers_bimface_bimface_model_.bimface3dmodel.md)

# Class: Bimface3DModel

bimface 3D 操作

## Hierarchy

* [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md)

  ↳ **Bimface3DModel**

## Implements

* [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)
* [IBimCustom](../interfaces/_interface_.ibimcustom.md)
* [IDispose](../interfaces/_interface_.idispose.md)

## Index

### Properties

* [[MARKER_FIELD]](_providers_bimface_bimface_model_.bimface3dmodel.md#[marker_field])
* [[MULTI_FIELD]](_providers_bimface_bimface_model_.bimface3dmodel.md#[multi_field])
* [viewer3D](_providers_bimface_bimface_model_.bimface3dmodel.md#viewer3d)

### Accessors

* [app](_providers_bimface_bimface_model_.bimface3dmodel.md#protected-app)
* [marker](_providers_bimface_bimface_model_.bimface3dmodel.md#marker)

### Methods

* [addCustomButtons](_providers_bimface_bimface_model_.bimface3dmodel.md#addcustombuttons)
* [addEventListener](_providers_bimface_bimface_model_.bimface3dmodel.md#addeventlistener)
* [clearFloorExplosion](_providers_bimface_bimface_model_.bimface3dmodel.md#clearfloorexplosion)
* [clearHighlightComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#clearhighlightcomponents)
* [clearIsolation](_providers_bimface_bimface_model_.bimface3dmodel.md#clearisolation)
* [clearSelectedComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#clearselectedcomponents)
* [dispose](_providers_bimface_bimface_model_.bimface3dmodel.md#dispose)
* [explosionFloor](_providers_bimface_bimface_model_.bimface3dmodel.md#explosionfloor)
* [getComponentByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#getcomponentbycondition)
* [getFloors](_providers_bimface_bimface_model_.bimface3dmodel.md#getfloors)
* [getFloorsbyFileId](_providers_bimface_bimface_model_.bimface3dmodel.md#getfloorsbyfileid)
* [getSelectedComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#getselectedcomponents)
* [getViewPoint](_providers_bimface_bimface_model_.bimface3dmodel.md#getviewpoint)
* [highlightComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#highlightcomponents)
* [initSDK](_providers_bimface_bimface_model_.bimface3dmodel.md#initsdk)
* [isolateComponent](_providers_bimface_bimface_model_.bimface3dmodel.md#isolatecomponent)
* [isolateComponentByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#isolatecomponentbycondition)
* [load](_providers_bimface_bimface_model_.bimface3dmodel.md#load)
* [loadSDK](_providers_bimface_bimface_model_.bimface3dmodel.md#loadsdk)
* [multi](_providers_bimface_bimface_model_.bimface3dmodel.md#multi)
* [render](_providers_bimface_bimface_model_.bimface3dmodel.md#render)
* [resize](_providers_bimface_bimface_model_.bimface3dmodel.md#resize)
* [restoreComponentsColor](_providers_bimface_bimface_model_.bimface3dmodel.md#restorecomponentscolor)
* [restoreComponentsColorByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#restorecomponentscolorbycondition)
* [selectComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#selectcomponents)
* [selectComponentsByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#selectcomponentsbycondition)
* [setComponentsColor](_providers_bimface_bimface_model_.bimface3dmodel.md#setcomponentscolor)
* [setComponentsColorByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#setcomponentscolorbycondition)
* [setViewPoint](_providers_bimface_bimface_model_.bimface3dmodel.md#setviewpoint)

## Properties

###  [MARKER_FIELD]

• **[MARKER_FIELD]**: *[IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_model.ts:24](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L24)*

___

###  [MULTI_FIELD]

• **[MULTI_FIELD]**: *Boolean* = false

*Defined in [providers/bimface/bimface_model.ts:28](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L28)*

是否在批量执行

___

###  viewer3D

• **viewer3D**: *any*

*Defined in [providers/bimface/bimface_model.ts:23](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L23)*

bimface相关对象

## Accessors

### `Protected` app

• **get app**(): *any*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [providers/bimface/bimface_base.ts:12](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_base.ts#L12)*

**Returns:** *any*

• **set app**(`app`: any): *void*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [providers/bimface/bimface_base.ts:16](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_base.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | any |

**Returns:** *void*

___

###  marker

• **get marker**(): *[IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_model.ts:33](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L33)*

3D标注器

**Returns:** *[IMarker](../interfaces/_interface_.imarker.md)*

## Methods

###  addCustomButtons

▸ **addCustomButtons**(`customButtons`: Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)›): *void*

*Implementation of [IBimCustom](../interfaces/_interface_.ibimcustom.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addCustomButtons](_providers_bimface_bimface_base_.bimfacebase.md#addcustombuttons)*

*Defined in [providers/bimface/bimface_base.ts:54](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_base.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`customButtons` | Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)› |

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`eventName`: [Bim3DEvent](../enums/_enums_.bim3devent.md), `callback`: Function): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addEventListener](_providers_bimface_bimface_base_.bimfacebase.md#abstract-addeventlistener)*

*Defined in [providers/bimface/bimface_model.ts:45](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L45)*

监听事件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventName` | [Bim3DEvent](../enums/_enums_.bim3devent.md) | 事件名 |
`callback` | Function | 回调  |

**Returns:** *void*

___

###  clearFloorExplosion

▸ **clearFloorExplosion**(): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:139](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L139)*

清空楼层爆炸

**Returns:** *void*

___

###  clearHighlightComponents

▸ **clearHighlightComponents**(`componentIds?`: Array‹String›): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:238](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L238)*

清除所有高亮构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds?` | Array‹String› | 构件id列表，如果没有则清除所有高亮构件  |

**Returns:** *void*

___

###  clearIsolation

▸ **clearIsolation**(): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:210](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L210)*

高亮隔离

**Returns:** *void*

___

###  clearSelectedComponents

▸ **clearSelectedComponents**(): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:268](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L268)*

清空选中构件

**Returns:** *void*

___

###  dispose

▸ **dispose**(`options`: any): *void*

*Implementation of [IDispose](../interfaces/_interface_.idispose.md)*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[dispose](_providers_bimface_bimface_base_.bimfacebase.md#dispose)*

*Defined in [providers/bimface/bimface_model.ts:328](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L328)*

释放3D模型实例

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项  |

**Returns:** *void*

___

###  explosionFloor

▸ **explosionFloor**(`floorIds`: Array‹String›, `extend`: Number): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:131](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L131)*

楼层爆炸

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`floorIds` | Array‹String› | - |
`extend` | Number | 楼层爆炸离散系数，范围为[0, 30]，可选，默认为3  |

**Returns:** *void*

___

###  getComponentByCondition

▸ **getComponentByCondition**(`fileId`: String, `conditions`: Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)›): *Promise‹Array‹String››*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:148](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L148)*

根据条件查询构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 模型id |
`conditions` | Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)› | 查询条件  |

**Returns:** *Promise‹Array‹String››*

___

###  getFloors

▸ **getFloors**(): *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:111](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L111)*

获取楼层

**Returns:** *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:120](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L120)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 模型文件id  |

**Returns:** *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

___

###  getSelectedComponents

▸ **getSelectedComponents**(): *Array‹String›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:274](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L274)*

获取选中的构件

**Returns:** *Array‹String›*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](../interfaces/_model_view_point_.viewpoint.md)›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:163](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L163)*

获取视点

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 视点参数 |

**Returns:** *Promise‹[ViewPoint](../interfaces/_model_view_point_.viewpoint.md)›*

___

###  highlightComponents

▸ **highlightComponents**(`componentIds`: Array‹String›, `options`: [HighlightOption](../interfaces/_model_options_.highlightoption.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:220](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L220)*

突出构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | Array‹String› | 构件ids |
`options` | [HighlightOption](../interfaces/_model_options_.highlightoption.md) | 高亮选项  |

**Returns:** *void*

___

###  initSDK

▸ **initSDK**(): *Promise‹void›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[initSDK](_providers_bimface_bimface_base_.bimfacebase.md#initsdk)*

*Defined in [providers/bimface/bimface_base.ts:26](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_base.ts#L26)*

**Returns:** *Promise‹void›*

___

###  isolateComponent

▸ **isolateComponent**(`componentIds`: Array‹String›, `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:194](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L194)*

隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`componentIds` | Array‹String› |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  isolateComponentByCondition

▸ **isolateComponentByCondition**(`conditions`: Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)›, `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:202](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L202)*

根据条件隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)› |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  load

▸ **load**(`options`: any): *Promise‹void›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:85](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L85)*

加载模型

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *Promise‹void›*

___

###  loadSDK

▸ **loadSDK**(`options`: any): *Promise‹any›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[loadSDK](_providers_bimface_bimface_base_.bimfacebase.md#loadsdk)*

*Defined in [providers/bimface/bimface_base.ts:37](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_base.ts#L37)*

加载SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | SDKLoader选项 |

**Returns:** *Promise‹any›*

viewMetaData

___

###  multi

▸ **multi**(`callback`: Function): *Promise‹void›*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[multi](_providers_bimface_bimface_base_.bimfacebase.md#abstract-multi)*

*Defined in [providers/bimface/bimface_model.ts:63](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L63)*

批量执行，最后.done来完成调用,进行渲染。主要用于对模型进行多次改变，避免每次改变都自动render

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | Function | 回调函数，以当前实例为参数，在这里执行需要的代码  |

**Returns:** *Promise‹void›*

___

###  render

▸ **render**(): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[render](_providers_bimface_bimface_base_.bimfacebase.md#abstract-render)*

*Defined in [providers/bimface/bimface_model.ts:52](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L52)*

渲染

**Returns:** *void*

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:320](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L320)*

设置场景显示大小

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width?` | number | 宽度 |
`height?` | number | 高度  |

**Returns:** *void*

___

###  restoreComponentsColor

▸ **restoreComponentsColor**(`componentIds`: Array‹String›): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:304](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L304)*

恢复构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | Array‹String› | 构件ids  |

**Returns:** *void*

___

###  restoreComponentsColorByCondition

▸ **restoreComponentsColorByCondition**(`conditions`: Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)›): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:312](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L312)*

根据条件恢复构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)› | 条件  |

**Returns:** *void*

___

###  selectComponents

▸ **selectComponents**(`componentIds`: Array‹String›): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:251](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L251)*

选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | Array‹String› | 构件id列表  |

**Returns:** *void*

___

###  selectComponentsByCondition

▸ **selectComponentsByCondition**(`conditions`: Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)›): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:260](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L260)*

根据条件选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)› | 条件  |

**Returns:** *void*

___

###  setComponentsColor

▸ **setComponentsColor**(`componentIds`: Array‹String›, `color`: String): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:282](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L282)*

设置构件ids

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | Array‹String› | 构件ids  |
`color` | String | - |

**Returns:** *void*

___

###  setComponentsColorByCondition

▸ **setComponentsColorByCondition**(`conditions`: Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)›, `color`: String): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:293](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L293)*

根据条件设置构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)› | 条件  |
`color` | String | - |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](../interfaces/_model_view_point_.viewpoint.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:186](https://github.com/youkaisteve/bim-operator/blob/37a7415/src/providers/bimface/bimface_model.ts#L186)*

设置视点

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](../interfaces/_model_view_point_.viewpoint.md) |

**Returns:** *void*

[bim-operator - v1.0.30](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_model"](../modules/_providers_bimface_bimface_model_.md) › [Bimface3DModel](_providers_bimface_bimface_model_.bimface3dmodel.md)

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
* [viewer3D](_providers_bimface_bimface_model_.bimface3dmodel.md#viewer3d)

### Accessors

* [app](_providers_bimface_bimface_model_.bimface3dmodel.md#protected-app)
* [marker](_providers_bimface_bimface_model_.bimface3dmodel.md#marker)

### Methods

* [addCustomButtons](_providers_bimface_bimface_model_.bimface3dmodel.md#addcustombuttons)
* [addEventListener](_providers_bimface_bimface_model_.bimface3dmodel.md#addeventlistener)
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
* [render](_providers_bimface_bimface_model_.bimface3dmodel.md#render)
* [resize](_providers_bimface_bimface_model_.bimface3dmodel.md#resize)
* [selectComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#selectcomponents)
* [selectComponentsByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#selectcomponentsbycondition)
* [setViewPoint](_providers_bimface_bimface_model_.bimface3dmodel.md#setviewpoint)

## Properties

###  [MARKER_FIELD]

• **[MARKER_FIELD]**: *[IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_model.ts:23](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L23)*

___

###  viewer3D

• **viewer3D**: *any*

*Defined in [providers/bimface/bimface_model.ts:22](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L22)*

bimface相关对象

## Accessors

### `Protected` app

• **get app**(): *any*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [providers/bimface/bimface_base.ts:9](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_base.ts#L9)*

**Returns:** *any*

• **set app**(`app`: any): *void*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [providers/bimface/bimface_base.ts:13](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_base.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | any |

**Returns:** *void*

___

###  marker

• **get marker**(): *[IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_model.ts:28](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L28)*

3D标注器

**Returns:** *[IMarker](../interfaces/_interface_.imarker.md)*

## Methods

###  addCustomButtons

▸ **addCustomButtons**(`customButtons`: Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)›): *void*

*Implementation of [IBimCustom](../interfaces/_interface_.ibimcustom.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addCustomButtons](_providers_bimface_bimface_base_.bimfacebase.md#addcustombuttons)*

*Defined in [providers/bimface/bimface_base.ts:47](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_base.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`customButtons` | Array‹[CustomButton](../interfaces/_model_custom_button_.custombutton.md)› |

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`eventName`: [Bim3DEvent](../enums/_enums_.bim3devent.md), `callback`: Function): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addEventListener](_providers_bimface_bimface_base_.bimfacebase.md#abstract-addeventlistener)*

*Defined in [providers/bimface/bimface_model.ts:40](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L40)*

监听事件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`eventName` | [Bim3DEvent](../enums/_enums_.bim3devent.md) | 事件名 |
`callback` | Function | 回调  |

**Returns:** *void*

___

###  clearHighlightComponents

▸ **clearHighlightComponents**(`componentIds?`: Array‹String›): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:207](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L207)*

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

*Defined in [providers/bimface/bimface_model.ts:179](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L179)*

高亮隔离

**Returns:** *void*

___

###  clearSelectedComponents

▸ **clearSelectedComponents**(): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:234](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L234)*

清空选中构件

**Returns:** *void*

___

###  dispose

▸ **dispose**(`options`: any): *void*

*Implementation of [IDispose](../interfaces/_interface_.idispose.md)*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[dispose](_providers_bimface_bimface_base_.bimfacebase.md#dispose)*

*Defined in [providers/bimface/bimface_model.ts:257](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L257)*

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

*Defined in [providers/bimface/bimface_model.ts:109](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L109)*

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

*Defined in [providers/bimface/bimface_model.ts:117](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L117)*

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

*Defined in [providers/bimface/bimface_model.ts:89](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L89)*

获取楼层

**Returns:** *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:98](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L98)*

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

*Defined in [providers/bimface/bimface_model.ts:240](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L240)*

获取选中的构件

**Returns:** *Array‹String›*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](../interfaces/_model_view_point_.viewpoint.md)›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:132](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L132)*

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

*Defined in [providers/bimface/bimface_model.ts:189](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L189)*

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

*Defined in [providers/bimface/bimface_base.ts:19](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_base.ts#L19)*

**Returns:** *Promise‹void›*

___

###  isolateComponent

▸ **isolateComponent**(`componentIds`: Array‹String›, `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:163](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L163)*

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

*Defined in [providers/bimface/bimface_model.ts:171](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L171)*

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

*Defined in [providers/bimface/bimface_model.ts:63](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L63)*

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

*Defined in [providers/bimface/bimface_base.ts:30](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_base.ts#L30)*

加载SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | SDKLoader选项 |

**Returns:** *Promise‹any›*

viewMetaData

___

###  render

▸ **render**(): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[render](_providers_bimface_bimface_base_.bimfacebase.md#abstract-render)*

*Defined in [providers/bimface/bimface_model.ts:47](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L47)*

渲染

**Returns:** *void*

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:249](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L249)*

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

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:219](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L219)*

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

*Defined in [providers/bimface/bimface_model.ts:227](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L227)*

根据条件选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)› | 条件  |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](../interfaces/_model_view_point_.viewpoint.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:155](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/providers/bimface/bimface_model.ts#L155)*

设置视点

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](../interfaces/_model_view_point_.viewpoint.md) |

**Returns:** *void*

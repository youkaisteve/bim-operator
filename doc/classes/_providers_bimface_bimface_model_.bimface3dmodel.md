[bim-operator - v1.0.15](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_model"](../modules/_providers_bimface_bimface_model_.md) › [Bimface3DModel](_providers_bimface_bimface_model_.bimface3dmodel.md)

# Class: Bimface3DModel

bimface操作

## Hierarchy

* [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md)

  ↳ **Bimface3DModel**

## Implements

* [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)

## Index

### Properties

* [[MARKER_FIELD]](_providers_bimface_bimface_model_.bimface3dmodel.md#[marker_field])
* [app](_providers_bimface_bimface_model_.bimface3dmodel.md#app)
* [viewer3D](_providers_bimface_bimface_model_.bimface3dmodel.md#viewer3d)

### Accessors

* [marker](_providers_bimface_bimface_model_.bimface3dmodel.md#marker)

### Methods

* [clearHighlightComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#clearhighlightcomponents)
* [clearIsolation](_providers_bimface_bimface_model_.bimface3dmodel.md#clearisolation)
* [clearSelectedComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#clearselectedcomponents)
* [dispose](_providers_bimface_bimface_model_.bimface3dmodel.md#dispose)
* [getComponentByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#getcomponentbycondition)
* [getFloors](_providers_bimface_bimface_model_.bimface3dmodel.md#getfloors)
* [getFloorsbyFileId](_providers_bimface_bimface_model_.bimface3dmodel.md#getfloorsbyfileid)
* [getSelectedComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#getselectedcomponents)
* [getViewPoint](_providers_bimface_bimface_model_.bimface3dmodel.md#getviewpoint)
* [highlightComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#highlightcomponents)
* [initSDK](_providers_bimface_bimface_model_.bimface3dmodel.md#initsdk)
* [isolateComponent](_providers_bimface_bimface_model_.bimface3dmodel.md#isolatecomponent)
* [isolateComponentByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#isolatecomponentbycondition)
* [loadModel](_providers_bimface_bimface_model_.bimface3dmodel.md#loadmodel)
* [loadSDK](_providers_bimface_bimface_model_.bimface3dmodel.md#loadsdk)
* [resize](_providers_bimface_bimface_model_.bimface3dmodel.md#resize)
* [selectComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#selectcomponents)
* [selectComponentsByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#selectcomponentsbycondition)
* [setViewPoint](_providers_bimface_bimface_model_.bimface3dmodel.md#setviewpoint)

## Properties

###  [MARKER_FIELD]

• **[MARKER_FIELD]**: *[IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_model.ts:22](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L22)*

___

###  app

• **app**: *any*

*Defined in [providers/bimface/bimface_model.ts:20](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L20)*

bimface相关对象

___

###  viewer3D

• **viewer3D**: *any*

*Defined in [providers/bimface/bimface_model.ts:21](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L21)*

## Accessors

###  marker

• **get marker**(): *[IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_model.ts:27](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L27)*

3D标注器

**Returns:** *[IMarker](../interfaces/_interface_.imarker.md)*

## Methods

###  clearHighlightComponents

▸ **clearHighlightComponents**(`componentIds?`: String[]): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:144](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`componentIds?` | String[] |

**Returns:** *void*

___

###  clearIsolation

▸ **clearIsolation**(): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:125](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L125)*

**Returns:** *void*

___

###  clearSelectedComponents

▸ **clearSelectedComponents**(): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:157](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L157)*

**Returns:** *void*

___

###  dispose

▸ **dispose**(`options`: any): *void*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[dispose](_providers_bimface_bimface_base_.bimfacebase.md#dispose)*

*Defined in [providers/bimface/bimface_base.ts:35](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_base.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *void*

___

###  getComponentByCondition

▸ **getComponentByCondition**(`fileId`: String, `conditions`: Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)›): *Promise‹String[]›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:79](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L79)*

根据条件查询构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 模型id |
`conditions` | Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)› | 查询条件  |

**Returns:** *Promise‹String[]›*

___

###  getFloors

▸ **getFloors**(): *Promise‹[Floor](../interfaces/_model_floor_.floor.md)[]›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:60](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L60)*

获取楼层

**Returns:** *Promise‹[Floor](../interfaces/_model_floor_.floor.md)[]›*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: String): *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:69](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L69)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | String | 模型文件id  |

**Returns:** *Promise‹Array‹[Floor](../interfaces/_model_floor_.floor.md)››*

___

###  getSelectedComponents

▸ **getSelectedComponents**(): *any*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:160](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L160)*

**Returns:** *any*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](../interfaces/_model_view_point_.viewpoint.md)›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:89](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |

**Returns:** *Promise‹[ViewPoint](../interfaces/_model_view_point_.viewpoint.md)›*

___

###  highlightComponents

▸ **highlightComponents**(`componentIds`: String[], `options`: [HighlightOption](../interfaces/_model_options_.highlightoption.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:130](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`componentIds` | String[] |
`options` | [HighlightOption](../interfaces/_model_options_.highlightoption.md) |

**Returns:** *void*

___

###  initSDK

▸ **initSDK**(): *Promise‹void›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[initSDK](_providers_bimface_bimface_base_.bimfacebase.md#initsdk)*

*Defined in [providers/bimface/bimface_base.ts:5](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_base.ts#L5)*

**Returns:** *Promise‹void›*

___

###  isolateComponent

▸ **isolateComponent**(`componentIds`: String[], `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Defined in [providers/bimface/bimface_model.ts:114](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`componentIds` | String[] |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  isolateComponentByCondition

▸ **isolateComponentByCondition**(`conditions`: Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)›, `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:119](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)› |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  loadModel

▸ **loadModel**(`options`: any): *Promise‹void›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:43](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L43)*

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

*Defined in [providers/bimface/bimface_base.ts:16](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_base.ts#L16)*

加载SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | SDKLoader选项 |

**Returns:** *Promise‹any›*

viewMetaData

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:164](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`width?` | number |
`height?` | number |

**Returns:** *void*

___

###  selectComponents

▸ **selectComponents**(`componentIds`: String[]): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:151](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`componentIds` | String[] |

**Returns:** *void*

___

###  selectComponentsByCondition

▸ **selectComponentsByCondition**(`conditions`: Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)›): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:154](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | Array‹[ComponentFilter](../interfaces/_model_filter_.componentfilter.md)› |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](../interfaces/_model_view_point_.viewpoint.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface/bimface_model.ts:109](https://github.com/youkaisteve/bim-operator/blob/158031c/src/providers/bimface/bimface_model.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](../interfaces/_model_view_point_.viewpoint.md) |

**Returns:** *void*

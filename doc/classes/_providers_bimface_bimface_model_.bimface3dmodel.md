[@yzw/bim-operator - v1.7.0](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_model"](../modules/_providers_bimface_bimface_model_.md) › [Bimface3DModel](_providers_bimface_bimface_model_.bimface3dmodel.md)

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

### Constructors

* [constructor](_providers_bimface_bimface_model_.bimface3dmodel.md#constructor)

### Properties

* [[CONTEXT_MENU]](_providers_bimface_bimface_model_.bimface3dmodel.md#[context_menu])
* [[EXTERNAL_FIELD]](_providers_bimface_bimface_model_.bimface3dmodel.md#[external_field])
* [[MARKER_FIELD]](_providers_bimface_bimface_model_.bimface3dmodel.md#[marker_field])
* [[MULTI_FIELD]](_providers_bimface_bimface_model_.bimface3dmodel.md#[multi_field])
* [context](_providers_bimface_bimface_model_.bimface3dmodel.md#protected-context)
* [viewer3D](_providers_bimface_bimface_model_.bimface3dmodel.md#viewer3d)

### Accessors

* [app](_providers_bimface_bimface_model_.bimface3dmodel.md#protected-app)
* [contextMenu](_providers_bimface_bimface_model_.bimface3dmodel.md#contextmenu)
* [external](_providers_bimface_bimface_model_.bimface3dmodel.md#external)
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
* [hideComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#hidecomponents)
* [highlightComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#highlightcomponents)
* [initPlugin](_providers_bimface_bimface_model_.bimface3dmodel.md#initplugin)
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
* [restoreDefault](_providers_bimface_bimface_model_.bimface3dmodel.md#restoredefault)
* [selectComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#selectcomponents)
* [selectComponentsByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#selectcomponentsbycondition)
* [setComponentsColor](_providers_bimface_bimface_model_.bimface3dmodel.md#setcomponentscolor)
* [setComponentsColorByCondition](_providers_bimface_bimface_model_.bimface3dmodel.md#setcomponentscolorbycondition)
* [setComponentsOpacity](_providers_bimface_bimface_model_.bimface3dmodel.md#setcomponentsopacity)
* [setViewPoint](_providers_bimface_bimface_model_.bimface3dmodel.md#setviewpoint)
* [showComponents](_providers_bimface_bimface_model_.bimface3dmodel.md#showcomponents)

## Constructors

###  constructor

\+ **new Bimface3DModel**(`context`: [IContext](../interfaces/_interface_.icontext.md)): *[Bimface3DModel](_providers_bimface_bimface_model_.bimface3dmodel.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[constructor](_providers_bimface_bimface_base_.bimfacebase.md#constructor)*

*Defined in [src/providers/bimface/bimface_base.ts:29](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_base.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [IContext](../interfaces/_interface_.icontext.md) |

**Returns:** *[Bimface3DModel](_providers_bimface_bimface_model_.bimface3dmodel.md)*

## Properties

###  [CONTEXT_MENU]

• **[CONTEXT_MENU]**: *[IContextMenu](../interfaces/_interface_.icontextmenu.md)*

*Defined in [src/providers/bimface/bimface_model.ts:32](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L32)*

___

###  [EXTERNAL_FIELD]

• **[EXTERNAL_FIELD]**: *[IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_model.ts:31](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L31)*

___

###  [MARKER_FIELD]

• **[MARKER_FIELD]**: *[IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [src/providers/bimface/bimface_model.ts:30](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L30)*

___

###  [MULTI_FIELD]

• **[MULTI_FIELD]**: *boolean*

*Defined in [src/providers/bimface/bimface_model.ts:36](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L36)*

是否在批量执行

___

### `Protected` context

• **context**: *[IContext](../interfaces/_interface_.icontext.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[context](_providers_bimface_bimface_base_.bimfacebase.md#protected-context)*

*Defined in [src/providers/bimface/bimface_base.ts:14](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_base.ts#L14)*

___

###  viewer3D

• **viewer3D**: *any*

*Defined in [src/providers/bimface/bimface_model.ts:29](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L29)*

bimface相关对象

## Accessors

### `Protected` app

• **get app**(): *any*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [src/providers/bimface/bimface_base.ts:16](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_base.ts#L16)*

**Returns:** *any*

• **set app**(`app`: any): *void*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[app](_providers_bimface_bimface_base_.bimfacebase.md#protected-app)*

*Defined in [src/providers/bimface/bimface_base.ts:20](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_base.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`app` | any |

**Returns:** *void*

___

###  contextMenu

• **get contextMenu**(): *[IContextMenu](../interfaces/_interface_.icontextmenu.md)*

*Defined in [src/providers/bimface/bimface_model.ts:61](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L61)*

右键菜单

**Returns:** *[IContextMenu](../interfaces/_interface_.icontextmenu.md)*

___

###  external

• **get external**(): *[IExternal](../interfaces/_interface_.iexternal.md)*

*Defined in [src/providers/bimface/bimface_model.ts:51](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L51)*

外部构件管理器

**Returns:** *[IExternal](../interfaces/_interface_.iexternal.md)*

___

###  marker

• **get marker**(): *[IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [src/providers/bimface/bimface_model.ts:41](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L41)*

3D标注器

**Returns:** *[IMarker](../interfaces/_interface_.imarker.md)*

## Methods

###  addCustomButtons

▸ **addCustomButtons**(`customButtons`: [CustomButton](../interfaces/_model_custom_button_.custombutton.md)[]): *void*

*Implementation of [IBimCustom](../interfaces/_interface_.ibimcustom.md)*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addCustomButtons](_providers_bimface_bimface_base_.bimfacebase.md#addcustombuttons)*

*Defined in [src/providers/bimface/bimface_base.ts:92](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_base.ts#L92)*

添加自定义按钮

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`customButtons` | [CustomButton](../interfaces/_model_custom_button_.custombutton.md)[] | 自定义按钮  |

**Returns:** *void*

___

###  addEventListener

▸ **addEventListener**(`eventName`: [Bim3DEvent](../enums/_enums_.bim3devent.md), `callback`: function): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[addEventListener](_providers_bimface_bimface_base_.bimfacebase.md#abstract-addeventlistener)*

*Defined in [src/providers/bimface/bimface_model.ts:73](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L73)*

监听事件

**Parameters:**

▪ **eventName**: *[Bim3DEvent](../enums/_enums_.bim3devent.md)*

事件名

▪ **callback**: *function*

回调

▸ (): *void*

**Returns:** *void*

___

###  clearFloorExplosion

▸ **clearFloorExplosion**(): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:171](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L171)*

清空楼层爆炸

**Returns:** *void*

___

###  clearHighlightComponents

▸ **clearHighlightComponents**(`componentIds?`: string[]): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:272](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L272)*

清除所有高亮构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds?` | string[] | 构件id列表，如果没有则清除所有高亮构件  |

**Returns:** *void*

___

###  clearIsolation

▸ **clearIsolation**(): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:244](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L244)*

高亮隔离

**Returns:** *void*

___

###  clearSelectedComponents

▸ **clearSelectedComponents**(): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:302](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L302)*

清空选中构件

**Returns:** *void*

___

###  dispose

▸ **dispose**(`options`: any): *void*

*Implementation of [IDispose](../interfaces/_interface_.idispose.md)*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[dispose](_providers_bimface_bimface_base_.bimfacebase.md#dispose)*

*Defined in [src/providers/bimface/bimface_model.ts:456](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L456)*

释放3D模型实例

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项  |

**Returns:** *void*

___

###  explosionFloor

▸ **explosionFloor**(`floorIds`: string[], `extend`: number): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:163](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L163)*

楼层爆炸

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`floorIds` | string[] | - |
`extend` | number | 楼层爆炸离散系数，范围为[0, 30]，可选，默认为3  |

**Returns:** *void*

___

###  getComponentByCondition

▸ **getComponentByCondition**(`fileId`: string, `conditions`: [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[]): *Promise‹string[]›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:180](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L180)*

根据条件查询构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | string | 模型id |
`conditions` | [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[] | 查询条件  |

**Returns:** *Promise‹string[]›*

___

###  getFloors

▸ **getFloors**(): *Promise‹[Floor](../interfaces/_model_floor_.floor.md)[]›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:143](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L143)*

获取楼层

**Returns:** *Promise‹[Floor](../interfaces/_model_floor_.floor.md)[]›*

___

###  getFloorsbyFileId

▸ **getFloorsbyFileId**(`fileId`: string): *Promise‹[Floor](../interfaces/_model_floor_.floor.md)[]›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:152](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L152)*

获取单个模型的楼层（在集成模型中使用）

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileId` | string | 模型文件id  |

**Returns:** *Promise‹[Floor](../interfaces/_model_floor_.floor.md)[]›*

___

###  getSelectedComponents

▸ **getSelectedComponents**(): *string[]*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:308](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L308)*

获取选中的构件

**Returns:** *string[]*

___

###  getViewPoint

▸ **getViewPoint**(`options`: any): *Promise‹[ViewPoint](../interfaces/_model_view_point_.viewpoint.md)›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:195](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L195)*

获取视点

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 视点参数 |

**Returns:** *Promise‹[ViewPoint](../interfaces/_model_view_point_.viewpoint.md)›*

___

###  hideComponents

▸ **hideComponents**(`componentIds?`: string[]): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:355](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L355)*

隐藏构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds?` | string[] | 构件列表，若为空，则隐藏所有构件  |

**Returns:** *void*

___

###  highlightComponents

▸ **highlightComponents**(`componentIds`: string[], `options`: [HighlightOption](../interfaces/_model_options_.highlightoption.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:254](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L254)*

突出构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件ids |
`options` | [HighlightOption](../interfaces/_model_options_.highlightoption.md) | 高亮选项  |

**Returns:** *void*

___

###  initPlugin

▸ **initPlugin**(`plugins`: [Bim3DPluginType](../enums/_enums_.bim3dplugintype.md)[]): *Promise‹void[]›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[initPlugin](_providers_bimface_bimface_base_.bimfacebase.md#initplugin)*

*Defined in [src/providers/bimface/bimface_base.ts:49](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_base.ts#L49)*

初始化所需的插件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`plugins` | [Bim3DPluginType](../enums/_enums_.bim3dplugintype.md)[] | 插件类型列表  |

**Returns:** *Promise‹void[]›*

___

###  initSDK

▸ **initSDK**(`sdkPath?`: string): *Promise‹void›*

*Inherited from [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[initSDK](_providers_bimface_bimface_base_.bimfacebase.md#initsdk)*

*Defined in [src/providers/bimface/bimface_base.ts:39](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_base.ts#L39)*

初始化SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sdkPath?` | string | sdk路径，可为空  |

**Returns:** *Promise‹void›*

___

###  isolateComponent

▸ **isolateComponent**(`componentIds`: string[], `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:228](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L228)*

隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`componentIds` | string[] |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  isolateComponentByCondition

▸ **isolateComponentByCondition**(`conditions`: [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[], `option`: [IsolateOption](../enums/_enums_.isolateoption.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:236](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L236)*

根据条件隔离构件

**Parameters:**

Name | Type |
------ | ------ |
`conditions` | [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[] |
`option` | [IsolateOption](../enums/_enums_.isolateoption.md) |

**Returns:** *void*

___

###  load

▸ **load**(`options`: any): *Promise‹void›*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:114](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L114)*

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

*Defined in [src/providers/bimface/bimface_base.ts:69](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_base.ts#L69)*

加载SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | SDKLoader选项 |

**Returns:** *Promise‹any›*

viewMetaData

___

###  multi

▸ **multi**(`callback`: function): *Promise‹void›*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[multi](_providers_bimface_bimface_base_.bimfacebase.md#abstract-multi)*

*Defined in [src/providers/bimface/bimface_model.ts:92](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L92)*

批量执行，最后.done来完成调用,进行渲染。主要用于对模型进行多次改变，避免每次改变都自动render

**Parameters:**

▪ **callback**: *function*

回调函数，以当前实例为参数，在这里执行需要的代码

▸ (`target`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`target` | any |

**Returns:** *Promise‹void›*

___

###  render

▸ **render**(): *void*

*Overrides [BimfaceBase](_providers_bimface_bimface_base_.bimfacebase.md).[render](_providers_bimface_bimface_base_.bimfacebase.md#abstract-render)*

*Defined in [src/providers/bimface/bimface_model.ts:80](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L80)*

渲染

**Returns:** *void*

___

###  resize

▸ **resize**(`width?`: number, `height?`: number): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:448](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L448)*

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

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:338](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L338)*

恢复构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件ids  |

**Returns:** *void*

___

###  restoreComponentsColorByCondition

▸ **restoreComponentsColorByCondition**(`conditions`: [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[]): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:346](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L346)*

根据条件恢复构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[] | 条件  |

**Returns:** *void*

___

###  restoreDefault

▸ **restoreDefault**(`restoreFlag`: number): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:409](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L409)*

恢复默认显示，包括着色、选择、隔离、半透明、空间等等

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`restoreFlag` | number | 0 | 恢复的内容，[RestoreEnum](../enums/_enums_.restoreenum.md)的并集  |

**Returns:** *void*

___

###  selectComponents

▸ **selectComponents**(`componentIds`: string[]): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:285](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L285)*

选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件id列表  |

**Returns:** *void*

___

###  selectComponentsByCondition

▸ **selectComponentsByCondition**(`conditions`: [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[]): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:294](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L294)*

根据条件选中构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[] | 条件  |

**Returns:** *void*

___

###  setComponentsColor

▸ **setComponentsColor**(`componentIds`: string[], `color`: string): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:316](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L316)*

设置构件ids

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`componentIds` | string[] | 构件ids  |
`color` | string | - |

**Returns:** *void*

___

###  setComponentsColorByCondition

▸ **setComponentsColorByCondition**(`conditions`: [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[], `color`: string): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:327](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L327)*

根据条件设置构件颜色

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conditions` | [ComponentFilter](../interfaces/_model_filter_.componentfilter.md)[] | 条件  |
`color` | string | - |

**Returns:** *void*

___

###  setComponentsOpacity

▸ **setComponentsOpacity**(`option`: [OpacityOption](../interfaces/_model_options_.opacityoption.md), `componentIds?`: string[]): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:388](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L388)*

设置构件透明度, 包括半透明

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`option` | [OpacityOption](../interfaces/_model_options_.opacityoption.md) | 设置状态 |
`componentIds?` | string[] | 构件id列表，如果为空，则会设置整个模型 |

**Returns:** *void*

___

###  setViewPoint

▸ **setViewPoint**(`viewPoint`: [ViewPoint](../interfaces/_model_view_point_.viewpoint.md)): *void*

*Implementation of [IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [src/providers/bimface/bimface_model.ts:218](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L218)*

设置视点

**Parameters:**

Name | Type |
------ | ------ |
`viewPoint` | [ViewPoint](../interfaces/_model_view_point_.viewpoint.md) |

**Returns:** *void*

___

###  showComponents

▸ **showComponents**(`componentIds?`: string[], `progressCallback?`: function): *Promise‹void›*

*Defined in [src/providers/bimface/bimface_model.ts:369](https://github.com/youkaisteve/bim-operator/blob/24828e5/src/providers/bimface/bimface_model.ts#L369)*

显示模型构件

**Parameters:**

▪`Optional`  **componentIds**: *string[]*

构件列表

▪`Optional`  **progressCallback**: *function*

加载进度回调函数

▸ (): *void*

**Returns:** *Promise‹void›*

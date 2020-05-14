[@yzw/bim-operator - v1.0.42](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IMarker](_interface_.imarker.md)

# Interface: IMarker

3D标注类

## Hierarchy

* **IMarker**

## Implemented by

* [BimfaceMarker](../classes/_providers_bimface_bimface_marker_.bimfacemarker.md)

## Index

### Methods

* [add3dMarker](_interface_.imarker.md#add3dmarker)
* [clear3dMarker](_interface_.imarker.md#clear3dmarker)
* [getAllMarkers](_interface_.imarker.md#getallmarkers)
* [remove3dMarker](_interface_.imarker.md#remove3dmarker)

## Methods

###  add3dMarker

▸ **add3dMarker**(`marker`: [Marker3D](_model_marker_3d_.marker3d.md)): *string*

*Defined in [interface.ts:144](https://github.com/youkaisteve/bim-operator/blob/d51d1c3/src/interface.ts#L144)*

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

*Defined in [interface.ts:153](https://github.com/youkaisteve/bim-operator/blob/d51d1c3/src/interface.ts#L153)*

清除所有3D标记

**Returns:** *void*

___

###  getAllMarkers

▸ **getAllMarkers**(): *Array‹[Marker3D](_model_marker_3d_.marker3d.md)›*

*Defined in [interface.ts:138](https://github.com/youkaisteve/bim-operator/blob/d51d1c3/src/interface.ts#L138)*

获取所有标记

**Returns:** *Array‹[Marker3D](_model_marker_3d_.marker3d.md)›*

___

###  remove3dMarker

▸ **remove3dMarker**(`markerId`: string): *void*

*Defined in [interface.ts:149](https://github.com/youkaisteve/bim-operator/blob/d51d1c3/src/interface.ts#L149)*

清空3d锚点

**Parameters:**

Name | Type |
------ | ------ |
`markerId` | string |

**Returns:** *void*

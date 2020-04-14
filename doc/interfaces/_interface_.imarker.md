[bim-operator - v1.0.30](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IMarker](_interface_.imarker.md)

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

*Defined in [interface.ts:120](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/interface.ts#L120)*

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

*Defined in [interface.ts:129](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/interface.ts#L129)*

清除所有3D标记

**Returns:** *void*

___

###  getAllMarkers

▸ **getAllMarkers**(): *Array‹[Marker3D](_model_marker_3d_.marker3d.md)›*

*Defined in [interface.ts:114](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/interface.ts#L114)*

获取所有标记

**Returns:** *Array‹[Marker3D](_model_marker_3d_.marker3d.md)›*

___

###  remove3dMarker

▸ **remove3dMarker**(`markerId`: string): *void*

*Defined in [interface.ts:125](https://github.com/youkaisteve/bim-operator/blob/0f90d05/src/interface.ts#L125)*

清空3d锚点

**Parameters:**

Name | Type |
------ | ------ |
`markerId` | string |

**Returns:** *void*

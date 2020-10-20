[@yzw/bim-operator - v1.7.2](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IMarker](_interface_.imarker.md)

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

*Defined in [src/interface.ts:189](https://github.com/youkaisteve/bim-operator/blob/59b2eb1/src/interface.ts#L189)*

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

*Defined in [src/interface.ts:198](https://github.com/youkaisteve/bim-operator/blob/59b2eb1/src/interface.ts#L198)*

清除所有3D标记

**Returns:** *void*

___

###  getAllMarkers

▸ **getAllMarkers**(): *[Marker3D](_model_marker_3d_.marker3d.md)[]*

*Defined in [src/interface.ts:183](https://github.com/youkaisteve/bim-operator/blob/59b2eb1/src/interface.ts#L183)*

获取所有标记

**Returns:** *[Marker3D](_model_marker_3d_.marker3d.md)[]*

___

###  remove3dMarker

▸ **remove3dMarker**(`markerId`: string): *void*

*Defined in [src/interface.ts:194](https://github.com/youkaisteve/bim-operator/blob/59b2eb1/src/interface.ts#L194)*

清空3d锚点

**Parameters:**

Name | Type |
------ | ------ |
`markerId` | string |

**Returns:** *void*

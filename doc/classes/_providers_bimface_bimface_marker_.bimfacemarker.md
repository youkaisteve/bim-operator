[bim-operator - v1.0.26](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_marker"](../modules/_providers_bimface_bimface_marker_.md) › [BimfaceMarker](_providers_bimface_bimface_marker_.bimfacemarker.md)

# Class: BimfaceMarker

bimface标注类，用于锚点

## Hierarchy

* **BimfaceMarker**

## Implements

* [IMarker](../interfaces/_interface_.imarker.md)

## Index

### Constructors

* [constructor](_providers_bimface_bimface_marker_.bimfacemarker.md#constructor)

### Properties

* [marker3D](_providers_bimface_bimface_marker_.bimfacemarker.md#marker3d)

### Methods

* [add3dMarker](_providers_bimface_bimface_marker_.bimfacemarker.md#add3dmarker)
* [clear3dMarker](_providers_bimface_bimface_marker_.bimfacemarker.md#clear3dmarker)
* [getAllMarkers](_providers_bimface_bimface_marker_.bimfacemarker.md#getallmarkers)
* [remove3dMarker](_providers_bimface_bimface_marker_.bimfacemarker.md#remove3dmarker)

## Constructors

###  constructor

\+ **new BimfaceMarker**(`viewer3D`: any): *[BimfaceMarker](_providers_bimface_bimface_marker_.bimfacemarker.md)*

*Defined in [providers/bimface/bimface_marker.ts:9](https://github.com/youkaisteve/bim-operator/blob/5cdd1c6/src/providers/bimface/bimface_marker.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`viewer3D` | any |

**Returns:** *[BimfaceMarker](_providers_bimface_bimface_marker_.bimfacemarker.md)*

## Properties

###  marker3D

• **marker3D**: *any*

*Defined in [providers/bimface/bimface_marker.ts:9](https://github.com/youkaisteve/bim-operator/blob/5cdd1c6/src/providers/bimface/bimface_marker.ts#L9)*

## Methods

###  add3dMarker

▸ **add3dMarker**(`marker`: [Marker3D](../interfaces/_model_marker_3d_.marker3d.md)): *any*

*Implementation of [IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_marker.ts:28](https://github.com/youkaisteve/bim-operator/blob/5cdd1c6/src/providers/bimface/bimface_marker.ts#L28)*

添加3d锚点

**Parameters:**

Name | Type |
------ | ------ |
`marker` | [Marker3D](../interfaces/_model_marker_3d_.marker3d.md) |

**Returns:** *any*

___

###  clear3dMarker

▸ **clear3dMarker**(): *void*

*Implementation of [IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_marker.ts:54](https://github.com/youkaisteve/bim-operator/blob/5cdd1c6/src/providers/bimface/bimface_marker.ts#L54)*

清空3d锚点

**Returns:** *void*

___

###  getAllMarkers

▸ **getAllMarkers**(): *Array‹[Marker3D](../interfaces/_model_marker_3d_.marker3d.md)›*

*Implementation of [IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_marker.ts:20](https://github.com/youkaisteve/bim-operator/blob/5cdd1c6/src/providers/bimface/bimface_marker.ts#L20)*

获取所有标记

**Returns:** *Array‹[Marker3D](../interfaces/_model_marker_3d_.marker3d.md)›*

___

###  remove3dMarker

▸ **remove3dMarker**(`markerId`: string): *void*

*Implementation of [IMarker](../interfaces/_interface_.imarker.md)*

*Defined in [providers/bimface/bimface_marker.ts:48](https://github.com/youkaisteve/bim-operator/blob/5cdd1c6/src/providers/bimface/bimface_marker.ts#L48)*

移除3d锚点

**Parameters:**

Name | Type |
------ | ------ |
`markerId` | string |

**Returns:** *void*

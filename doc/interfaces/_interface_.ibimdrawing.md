[@yzw/bim-operator - v1.0.55](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IBimDrawing](_interface_.ibimdrawing.md)

# Interface: IBimDrawing

Bim图纸操作

## Hierarchy

* **IBimDrawing**

## Implemented by

* [BimfaceDrawing](../classes/_providers_bimface_bimface_drawing_.bimfacedrawing.md)

## Index

### Methods

* [load](_interface_.ibimdrawing.md#load)
* [setDisplayMode](_interface_.ibimdrawing.md#setdisplaymode)

## Methods

###  load

▸ **load**(`options`: any): *Promise‹void›*

*Defined in [interface.ts:174](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L174)*

加载模型

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | 选项，厂商不同配置会有差别  |

**Returns:** *Promise‹void›*

___

###  setDisplayMode

▸ **setDisplayMode**(`model`: [DrawingDisplayMode](../enums/_enums_.drawingdisplaymode.md), `customOptions`: any): *void*

*Defined in [interface.ts:182](https://github.com/youkaisteve/bim-operator/blob/20b4753/src/interface.ts#L182)*

设置展示模式

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`model` | [DrawingDisplayMode](../enums/_enums_.drawingdisplaymode.md) | 模式 |
`customOptions` | any | 选项 |

**Returns:** *void*

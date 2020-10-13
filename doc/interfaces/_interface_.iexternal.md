[@yzw/bim-operator - v1.7.1](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IExternal](_interface_.iexternal.md)

# Interface: IExternal

bimface外部构件管理

## Hierarchy

* **IExternal**

## Implemented by

* [BimfaceExternal](../classes/_providers_bimface_bimface_external_.bimfaceexternal.md)

## Index

### Methods

* [add](_interface_.iexternal.md#add)
* [clear](_interface_.iexternal.md#clear)
* [offset](_interface_.iexternal.md#offset)
* [removeById](_interface_.iexternal.md#removebyid)
* [rotate](_interface_.iexternal.md#rotate)
* [scale](_interface_.iexternal.md#scale)
* [setPosition](_interface_.iexternal.md#setposition)
* [translate](_interface_.iexternal.md#translate)

## Methods

###  add

▸ **add**(`name`: string, `url`: string): *Promise‹string›*

*Defined in [src/interface.ts:209](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/interface.ts#L209)*

添加外部构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | 外部构件名称，自定义 |
`url` | string | 外部构件url  |

**Returns:** *Promise‹string›*

___

###  clear

▸ **clear**(): *void*

*Defined in [src/interface.ts:218](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/interface.ts#L218)*

清除所有构件

**Returns:** *void*

___

###  offset

▸ **offset**(`objectId`: string, `option`: [OffsetOption](_model_options_.offsetoption.md)): *void*

*Defined in [src/interface.ts:231](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/interface.ts#L231)*

根据局部坐标移动外部构件(局部坐标就是相对坐标，根据构件的方向而改变)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectId` | string | 外部构件id |
`option` | [OffsetOption](_model_options_.offsetoption.md) | 移动选项  |

**Returns:** *void*

___

###  removeById

▸ **removeById**(`objectId`: string): *any*

*Defined in [src/interface.ts:214](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/interface.ts#L214)*

根据Id移除外部构件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectId` | string | 外部构件id  |

**Returns:** *any*

___

###  rotate

▸ **rotate**(`objectId`: string, `option`: [RotateOption](_model_options_.rotateoption.md)): *void*

*Defined in [src/interface.ts:224](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/interface.ts#L224)*

根据ID将外部构件沿着局部坐标系轴旋转

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectId` | string | 外部构件id |
`option` | [RotateOption](_model_options_.rotateoption.md) | 旋转选项  |

**Returns:** *void*

___

###  scale

▸ **scale**(`objectId`: string, `option`: [ScaleOption](_model_options_.scaleoption.md)): *void*

*Defined in [src/interface.ts:238](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/interface.ts#L238)*

根据ID对外部构件在局部坐标系下进行缩放，缩放中心为局部坐标原点

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectId` | string | 外部构件id |
`option` | [ScaleOption](_model_options_.scaleoption.md) | 移动选项  |

**Returns:** *void*

___

###  setPosition

▸ **setPosition**(`objectId`: string, `position`: Position): *any*

*Defined in [src/interface.ts:245](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/interface.ts#L245)*

设置外部构件的空间坐标

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectId` | string | 外部构件id |
`position` | Position | 空间坐标  |

**Returns:** *any*

___

###  translate

▸ **translate**(`objectId`: string, `option`: [TranslateOption](_model_options_.translateoption.md)): *any*

*Defined in [src/interface.ts:252](https://github.com/youkaisteve/bim-operator/blob/b87a88f/src/interface.ts#L252)*

根据世界坐标移动外部构件(世界坐标也就是绝对坐标，不根据构件的方向而改变)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`objectId` | string | 外部构件id |
`option` | [TranslateOption](_model_options_.translateoption.md) | - |

**Returns:** *any*

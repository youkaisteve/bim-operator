[@yzw/bim-operator - v1.5.0](../README.md) › [Globals](../globals.md) › ["model/options"](../modules/_model_options_.md) › [OpacityOption](_model_options_.opacityoption.md)

# Interface: OpacityOption

透明度选项

## Hierarchy

* **OpacityOption**

## Index

### Properties

* [modelId](_model_options_.opacityoption.md#optional-modelid)
* [opacity](_model_options_.opacityoption.md#opacity)
* [opacityType](_model_options_.opacityoption.md#opacitytype)

## Properties

### `Optional` modelId

• **modelId**? : *string*

*Defined in [src/model/options.ts:35](https://github.com/youkaisteve/bim-operator/blob/90a5443/src/model/options.ts#L35)*

模型ID，用于在多模型状态下指定匹配范围为某个模型中的构件

___

###  opacity

• **opacity**: *number*

*Defined in [src/model/options.ts:31](https://github.com/youkaisteve/bim-operator/blob/90a5443/src/model/options.ts#L31)*

透明度，取值范围[0, 1]，默认值为1

___

###  opacityType

• **opacityType**: *[OpacityEnum](../enums/_enums_.opacityenum.md)*

*Defined in [src/model/options.ts:27](https://github.com/youkaisteve/bim-operator/blob/90a5443/src/model/options.ts#L27)*

透明度类型

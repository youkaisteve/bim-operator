[@yzw/bim-operator - v1.3.0](../README.md) › [Globals](../globals.md) › ["providers/bimface_operator"](../modules/_providers_bimface_operator_.md) › [BimfaceOperator](_providers_bimface_operator_.bimfaceoperator.md)

# Class: BimfaceOperator

Bimface操作类，用于获取模型或者图纸对应的具体操作实例

## Hierarchy

* **BimfaceOperator**

## Implements

* [IBimOperator](../interfaces/_interface_.ibimoperator.md)

## Index

### Constructors

* [constructor](_providers_bimface_operator_.bimfaceoperator.md#constructor)

### Properties

* [[BIMFACE_3D_FIELD]](_providers_bimface_operator_.bimfaceoperator.md#[bimface_3d_field])
* [[BIMFACE_DRAWING_FIELD]](_providers_bimface_operator_.bimfaceoperator.md#[bimface_drawing_field])
* [_context](_providers_bimface_operator_.bimfaceoperator.md#private-_context)

### Accessors

* [bim3DModel](_providers_bimface_operator_.bimfaceoperator.md#bim3dmodel)
* [bimDrawing](_providers_bimface_operator_.bimfaceoperator.md#bimdrawing)

## Constructors

###  constructor

\+ **new BimfaceOperator**(`context`: [IContext](../interfaces/_interface_.icontext.md)): *[BimfaceOperator](_providers_bimface_operator_.bimfaceoperator.md)*

*Defined in [providers/bimface_operator.ts:15](https://github.com/youkaisteve/bim-operator/blob/9fb2dae/src/providers/bimface_operator.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [IContext](../interfaces/_interface_.icontext.md) |

**Returns:** *[BimfaceOperator](_providers_bimface_operator_.bimfaceoperator.md)*

## Properties

###  [BIMFACE_3D_FIELD]

• **[BIMFACE_3D_FIELD]**: *[IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface_operator.ts:12](https://github.com/youkaisteve/bim-operator/blob/9fb2dae/src/providers/bimface_operator.ts#L12)*

___

###  [BIMFACE_DRAWING_FIELD]

• **[BIMFACE_DRAWING_FIELD]**: *[IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

*Defined in [providers/bimface_operator.ts:13](https://github.com/youkaisteve/bim-operator/blob/9fb2dae/src/providers/bimface_operator.ts#L13)*

___

### `Private` _context

• **_context**: *[IContext](../interfaces/_interface_.icontext.md)*

*Defined in [providers/bimface_operator.ts:15](https://github.com/youkaisteve/bim-operator/blob/9fb2dae/src/providers/bimface_operator.ts#L15)*

## Accessors

###  bim3DModel

• **get bim3DModel**(): *[IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

*Defined in [providers/bimface_operator.ts:21](https://github.com/youkaisteve/bim-operator/blob/9fb2dae/src/providers/bimface_operator.ts#L21)*

**Returns:** *[IBim3DModel](../interfaces/_interface_.ibim3dmodel.md)*

___

###  bimDrawing

• **get bimDrawing**(): *[IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

*Defined in [providers/bimface_operator.ts:27](https://github.com/youkaisteve/bim-operator/blob/9fb2dae/src/providers/bimface_operator.ts#L27)*

**Returns:** *[IBimDrawing](../interfaces/_interface_.ibimdrawing.md)*

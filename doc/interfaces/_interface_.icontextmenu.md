[@yzw/bim-operator - v1.7.2](../README.md) › [Globals](../globals.md) › ["interface"](../modules/_interface_.md) › [IContextMenu](_interface_.icontextmenu.md)

# Interface: IContextMenu

右键菜单管理

## Hierarchy

* **IContextMenu**

## Implemented by

* [BimfaceContextMenu](../classes/_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md)

## Index

### Methods

* [add](_interface_.icontextmenu.md#add)
* [remove](_interface_.icontextmenu.md#remove)
* [render](_interface_.icontextmenu.md#render)

## Methods

###  add

▸ **add**(`menuItems`: [ContextMenuItem](_model_context_menu_item_.contextmenuitem.md)[], `parentKey?`: string): *any*

*Defined in [src/interface.ts:316](https://github.com/youkaisteve/bim-operator/blob/59b2eb1/src/interface.ts#L316)*

添加菜单

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`menuItems` | [ContextMenuItem](_model_context_menu_item_.contextmenuitem.md)[] | 右键菜单项 |
`parentKey?` | string | 父级key，为空时，重置所有菜单  |

**Returns:** *any*

___

###  remove

▸ **remove**(`menuKey`: string): *any*

*Defined in [src/interface.ts:321](https://github.com/youkaisteve/bim-operator/blob/59b2eb1/src/interface.ts#L321)*

移除右键菜单，如果又子菜单，也会被移除

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`menuKey` | string | 菜单的key  |

**Returns:** *any*

___

###  render

▸ **render**(): *void*

*Defined in [src/interface.ts:325](https://github.com/youkaisteve/bim-operator/blob/59b2eb1/src/interface.ts#L325)*

渲染菜单

**Returns:** *void*

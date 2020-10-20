[@yzw/bim-operator - v1.8.0](../README.md) › [Globals](../globals.md) › ["providers/bimface/bimface_context_menu"](../modules/_providers_bimface_bimface_context_menu_.md) › [BimfaceContextMenu](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md)

# Class: BimfaceContextMenu

bimface菜单管理，目前只支持两级结构

## Hierarchy

* EventEmitter

  ↳ **BimfaceContextMenu**

## Implements

* [IContextMenu](../interfaces/_interface_.icontextmenu.md)

## Index

### Constructors

* [constructor](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#constructor)

### Properties

* [[KEY_PREFIX]](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#[key_prefix])
* [[MENU_ROOT_DOM]](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#[menu_root_dom])
* [context](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#context)
* [contextMenuKeyPrefix](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#static-contextmenukeyprefix)
* [defaultMaxListeners](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#static-defaultmaxlisteners)

### Methods

* [add](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#add)
* [addListener](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#addlistener)
* [dispatchClickEvent](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#private-dispatchclickevent)
* [emit](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#emit)
* [eventNames](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#eventnames)
* [findContextMenu](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#private-findcontextmenu)
* [getMaxListeners](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#getmaxlisteners)
* [initMenuRoot](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#private-initmenuroot)
* [listenerCount](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#listenercount)
* [listeners](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#listeners)
* [off](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#off)
* [on](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#on)
* [once](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#once)
* [prependListener](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#prependlistener)
* [prependOnceListener](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#prependoncelistener)
* [rawListeners](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#rawlisteners)
* [remove](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#remove)
* [removeAllListeners](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#removealllisteners)
* [removeListener](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#removelistener)
* [removeRecusive](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#private-removerecusive)
* [render](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#render)
* [renderMenuItem](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#private-rendermenuitem)
* [setMaxListeners](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#setmaxlisteners)
* [listenerCount](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md#static-listenercount)

## Constructors

###  constructor

\+ **new BimfaceContextMenu**(`context`: [IContext](../interfaces/_interface_.icontext.md)): *[BimfaceContextMenu](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md)*

*Defined in [src/providers/bimface/bimface_context_menu.ts:19](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [IContext](../interfaces/_interface_.icontext.md) |

**Returns:** *[BimfaceContextMenu](_providers_bimface_bimface_context_menu_.bimfacecontextmenu.md)*

## Properties

###  [KEY_PREFIX]

• **[KEY_PREFIX]**: *string*

*Defined in [src/providers/bimface/bimface_context_menu.ts:18](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L18)*

___

###  [MENU_ROOT_DOM]

• **[MENU_ROOT_DOM]**: *Element*

*Defined in [src/providers/bimface/bimface_context_menu.ts:19](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L19)*

___

###  context

• **context**: *[IContext](../interfaces/_interface_.icontext.md)*

*Defined in [src/providers/bimface/bimface_context_menu.ts:17](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L17)*

___

### `Static` contextMenuKeyPrefix

▪ **contextMenuKeyPrefix**: *string* = "__bimface_context_menu_"

*Defined in [src/providers/bimface/bimface_context_menu.ts:16](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L16)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from void*

Defined in node_modules/@types/node/events.d.ts:18

## Methods

###  add

▸ **add**(`menuItems`: [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)[], `parentKey?`: string): *void*

*Implementation of [IContextMenu](../interfaces/_interface_.icontextmenu.md)*

*Defined in [src/providers/bimface/bimface_context_menu.ts:27](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`menuItems` | [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)[] |
`parentKey?` | string |

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:20

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Private` dispatchClickEvent

▸ **dispatchClickEvent**(`menuItem`: [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)): *void*

*Defined in [src/providers/bimface/bimface_context_menu.ts:131](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L131)*

触发菜单点击事件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`menuItem` | [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md) | 菜单项  |

**Returns:** *void*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:33

**Returns:** *Array‹string | symbol›*

___

### `Private` findContextMenu

▸ **findContextMenu**(`contextMenuItems`: [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)[], `key`: string): *[ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)*

*Defined in [src/providers/bimface/bimface_context_menu.ts:79](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`contextMenuItems` | [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)[] |
`key` | string |

**Returns:** *[ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:29

**Returns:** *number*

___

### `Private` initMenuRoot

▸ **initMenuRoot**(): *void*

*Defined in [src/providers/bimface/bimface_context_menu.ts:50](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L50)*

**Returns:** *void*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:26

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:21

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:22

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:23

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:24

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  remove

▸ **remove**(`menuKey`: string): *void*

*Implementation of [IContextMenu](../interfaces/_interface_.icontextmenu.md)*

*Defined in [src/providers/bimface/bimface_context_menu.ts:39](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`menuKey` | string |

**Returns:** *void*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:25

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### `Private` removeRecusive

▸ **removeRecusive**(`contextMenuItems`: [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)[], `key`: string): *boolean*

*Defined in [src/providers/bimface/bimface_context_menu.ts:62](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`contextMenuItems` | [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)[] |
`key` | string |

**Returns:** *boolean*

___

###  render

▸ **render**(): *void*

*Implementation of [IContextMenu](../interfaces/_interface_.icontextmenu.md)*

*Defined in [src/providers/bimface/bimface_context_menu.ts:43](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L43)*

**Returns:** *void*

___

### `Private` renderMenuItem

▸ **renderMenuItem**(`menuItem`: [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md)): *void*

*Defined in [src/providers/bimface/bimface_context_menu.ts:94](https://github.com/youkaisteve/bim-operator/blob/3313d73/src/providers/bimface/bimface_context_menu.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`menuItem` | [ContextMenuItem](../interfaces/_model_context_menu_item_.contextmenuitem.md) |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from void*

*Overrides void*

Defined in node_modules/@types/node/events.d.ts:28

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from void*

Defined in node_modules/@types/node/events.d.ts:17

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*

import { IContext, IContextMenu } from '../../interface';
import debugLog from '../../decorators/debug_log';
import ContextMenuItem from '../../model/context_menu_item';
import CollectionUtils from '../../util/collect-util';
import _ from 'lodash';
import { EventEmitter } from 'events';

const KEY_PREFIX = Symbol('Bimface#MenuKeyPrefix');
const MENU_ROOT_DOM = Symbol('Bimface#MenuRootDom');

/**
 * bimface菜单管理，目前只支持两级结构
 */
@debugLog()
export default class BimfaceContextMenu extends EventEmitter implements IContextMenu {
    static contextMenuKeyPrefix: string = '__bimface_context_menu_';
    context: IContext;
    [KEY_PREFIX]: string;
    [MENU_ROOT_DOM]: Element;

    constructor(context: IContext) {
        super();
        this.context = context;
        this[KEY_PREFIX] = context.elementId + BimfaceContextMenu.contextMenuKeyPrefix;
    }

    add(menuItems: ContextMenuItem[], parentKey?: string) {
        if (this.context.contextMenuItems) {
            const findParent = this.findContextMenu(this.context.contextMenuItems, parentKey);
            if (findParent != null) {
                findParent.children = (findParent.children || []).concat(menuItems);
            }
        } else {
            // 如果此时设置了parentKey，也会忽略掉
            this.context.contextMenuItems = menuItems;
        }
    }

    remove(menuKey: string) {
        this.removeRecusive(this.context.contextMenuItems, menuKey);
    }

    render(): void {
        this.initMenuRoot();
        for (const menuItem of this.context.contextMenuItems) {
            this.renderMenuItem(menuItem);
        }
    }

    private initMenuRoot() {
        let menuRoot = document.getElementById(this.context.elementId).getElementsByClassName('bf-menu bf-menu-right');
        if (!menuRoot) {
            menuRoot = document.getElementById(this.context.elementId).getElementsByClassName('bf-menu bf-menu-left');
        }
        if (menuRoot && menuRoot.length > 0) {
            this[MENU_ROOT_DOM] = menuRoot[0];
        } else {
            throw new Error('Init menu failed - HTMLElement of class "bf-menu bf-menu-right" not found');
        }
    }

    private removeRecusive(contextMenuItems: ContextMenuItem[], key: string): boolean {
        if (contextMenuItems && contextMenuItems.length > 0) {
            const removed = _.remove(this.context.contextMenuItems, (item) => {
                return item.key === key;
            });
            if (removed && removed.length > 0) {
                return true;
            }
            for (const item of contextMenuItems) {
                if (item.children) {
                    return this.removeRecusive(item.children, key);
                }
            }
        }
        return false;
    }

    private findContextMenu(contextMenuItems: ContextMenuItem[], key: string): ContextMenuItem {
        if (contextMenuItems && contextMenuItems.length > 0) {
            const findItem = contextMenuItems.find((m) => m.key === key);
            if (findItem) {
                return findItem;
            }
            for (const item of contextMenuItems) {
                if (item.children) {
                    return this.findContextMenu(item.children, key);
                }
            }
        }
        return null;
    }

    private renderMenuItem(menuItem: ContextMenuItem) {
        if (!menuItem) {
            return;
        }
        if (!CollectionUtils.isEmpty(menuItem.children)) {
            this[MENU_ROOT_DOM].insertAdjacentHTML(
                'beforeend',
                `<div class="bf-sub-menu" id="${this[KEY_PREFIX]}${menuItem.key}">
                <div class="bf-menu-item user-item">${menuItem.text}</div>
                <div class="bf-menu">
                ${menuItem.children
                    .map((child) => {
                        child.elementId = `${this[KEY_PREFIX]}${child.key}`;
                        return `<div class="bf-menu-item user-item" id="${child.elementId}">${child.text}</div>`;
                    })
                    .join('\n')}
                </div>
            </div>`
            );

            menuItem.children.forEach((child) => {
                document.getElementById(child.elementId).onclick = this.dispatchClickEvent.bind(this, child);
            });
        } else {
            menuItem.elementId = `${this[KEY_PREFIX]}${menuItem.key}`;
            this[MENU_ROOT_DOM].insertAdjacentHTML(
                'beforeend',
                `<div class="bf-menu-item user-item" id="${menuItem.elementId}">${menuItem.text}</div>`
            );
            document.getElementById(menuItem.elementId).onclick = this.dispatchClickEvent.bind(this, menuItem);
        }
    }

    /**
     * 触发菜单点击事件
     * @param menuItem 菜单项
     */
    private dispatchClickEvent(menuItem: ContextMenuItem) {
        this.emit('click', menuItem);
    }
}

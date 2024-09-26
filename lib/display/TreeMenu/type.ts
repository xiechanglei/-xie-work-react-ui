import {ReactNode} from "react";

export type TreeMenuProps = {
    // 菜单数据
    menuData: MenuInfo[],
    // 是否是图标模式
    iconMode?: boolean,
    // 菜单宽度
    minWidth?: number,
    // 打开菜单的回调
    onOpenMenu?: (menu:MenuInfo) => void,
}

/**
 * TreeMenuList的props
 */
export type TreeMenuListProps = {
    // 菜单数据
    menuData: MenuInfo[],
    // 自定义样式
    className?: string
    // 是否是子菜单
    subMenu: boolean,
    // 是否是根目录下的第一层子菜单
    firstSubMenu?: boolean,
    // 是否是图标模式
    iconMode: boolean,
    // 菜单宽度
    minWidth?: number,
    // 是否隐藏
    hide: boolean
    // 打开菜单的回调
    onOpenMenu?: (menu:MenuInfo) => void,
}

/**
 * TreeMenuItem的props
 */
export type TreeMenuItemProps = {
    // 菜单信息
    menuInfo: MenuInfo,
    // 是否是子菜单
    subMenu: boolean,
    // 菜单宽度
    minWidth?: number,
    // 是否是图标模式
    iconMode: boolean
    // 打开菜单的回调
    onOpenMenu?: (menu:MenuInfo) => void,
}
/**
 * 菜单信息
 */
export type MenuInfo = {
    // 菜单id
    id: string | number,
    // 图标,如果是string类型，则是icon的class，如果是ReactNode，则是icon的节点
    icon?: string | ReactNode,
    // 标题
    title: string,
    // 子菜单
    children?: MenuInfo[]
}

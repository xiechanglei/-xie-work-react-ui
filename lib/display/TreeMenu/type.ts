import {ReactNode} from "react";


/**
 * TreeMenu的props
 */
export type TreeMenuProps = {
    /**
     * 菜单数据
     */
    menuData: TreeMenuInfo[],
    /**
     * 是否是图标模式
     */
    iconMode?: boolean,
    /**
     * 菜单最小宽度
     */
    minWidth?: number,
    /**
     * 打开菜单的回调
     */
    onOpenMenu?: (menu: TreeMenuInfo) => void,
}

/**
 * TreeMenuList的props
 */
export type TreeMenuListProps = {
    // 菜单数据
    menuData: TreeMenuInfo[],
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
    onOpenMenu?: (menu: TreeMenuInfo) => void,
}

/**
 * TreeMenuItem的props
 */
export type TreeMenuItemProps = {
    /**
     * 菜单信息
     */
    menuInfo: TreeMenuInfo,
    /**
     * 是否是子菜单
     */
    subMenu: boolean,
    /**
     * 菜单最低宽度
     */
    minWidth?: number,
    /**
     * 是否是图标模式
     */
    iconMode: boolean
    /**
     * 打开菜单的回调
     */
    onOpenMenu?: (menu: TreeMenuInfo) => void,
}
/**
 * 菜单信息
 */
export type TreeMenuInfo = {
    /**
     * 菜单id
     */
    id: string | number,
    /**
     * 图标,如果是string类型，则是icon的class，如果是ReactNode，则是icon的节点
     */
    icon?: string | ReactNode,
    /**
     * 菜单标题
     */
    title: string,
    /**
     * 子菜单
     */
    children?: TreeMenuInfo[]
}

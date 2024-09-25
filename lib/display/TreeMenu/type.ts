import {ReactNode} from "react";

/**
 * TreeMenu的props
 */
export type TreeMenuProps = {
    menuData: MenuInfo[],// 菜单数据
    subMenu?: boolean, // 是否是子菜单
    iconMode?: boolean, // 是否是图标模式
}

/**
 * 菜单信息
 */
export type MenuInfo = {
    id: string | number, // 菜单id
    icon?: string | ReactNode, // 图标,如果是string类型，则是icon的class，如果是ReactNode，则是icon的节点
    title: string, // 标题
    children?: MenuInfo[] // 子菜单
}

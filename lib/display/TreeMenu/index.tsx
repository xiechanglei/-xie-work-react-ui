import React, {FC, ReactNode} from "react";
import {TreeMenuWrapper, NavMenuItem, NavMenuTitle} from "./style";
import {TreeMenuProps} from "./type";
import {ChevronRightRounded as ChevronRight} from "@mui/icons-material";
import {useTheme} from "../../theme";


const formatIcon = (icon: string | ReactNode) => {
    if (typeof icon === "string") {
        return <span className={"nav-menu-icon " + icon}/>
    } else if (icon !== undefined) {
        return <span className="nav-menu-icon">{icon}</span>
    }
    return icon
}

const toggleSubMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, isSub: boolean) => {
    event.stopPropagation();
    const target = event.currentTarget;
    const subMenu = target.nextElementSibling as HTMLElement;
    if (subMenu === null) {
        return;
    }
    // 获取target右上角的位置，用于给subMenu设置位置
    const rect = target.getBoundingClientRect();
    const top = rect.top;
    const left = rect.right;
    const arrow = target.querySelector(".menu-arrow") as HTMLElement;
    const isHide = subMenu.classList.contains("hide");
    if (isHide) { //show
        if (!isSub) {
            subMenu.style.top = top + "px";
            subMenu.style.left = left + 10 + "px";
        }
        subMenu.classList.remove("hide");
        const height = subMenu.scrollHeight;
        subMenu.style.height = "0px";
        requestAnimationFrame(() => {
            subMenu.addEventListener("transitionend", () => {
                subMenu.style.height = "";
            }, {once: true});
            subMenu.style.height = height + "px";

        });

        if (arrow !== null) {
            arrow.style.transform = "rotate(90deg)";
        }
    } else { //hide
        const height = subMenu.scrollHeight;
        subMenu.style.height = height + "px";
        requestAnimationFrame(() => {
            subMenu.addEventListener("transitionend", () => {
                subMenu.classList.add("hide");
                subMenu.style.height = "";
            }, {once: true});
            subMenu.style.height = "0px";
        })
        if (arrow !== null) {
            arrow.style.transform = "rotate(0deg)";
        }
    }
}
/**
 * 树形菜单组件
 * todo 1.切换模式之后，子菜单位置
 * todo 2.子菜单展开之后漂移
 * @param menuData 菜单数据
 * @param subMenu 是否是子菜单
 * @param iconMode 是否是图标模式
 * @constructor
 */
export const TreeMenu: FC<TreeMenuProps> = ({menuData, subMenu, iconMode}) => {
    const theme = useTheme();
    return (
        <TreeMenuWrapper className={subMenu ? "sub-menu hide" : ""} fixed={!!iconMode} theme={theme}>
            {menuData.map((item) => (
                <NavMenuItem key={item.id}>
                    <NavMenuTitle onClick={e => toggleSubMenu(e, !!subMenu)} theme={theme}>
                        {formatIcon(item.icon)}
                        {(!iconMode || subMenu) && <span className="menu-title">{item.title}</span>}
                        {(!iconMode || subMenu) && item.children && item.children.length > 0 &&
                            <ChevronRight className={"menu-arrow"}/>}
                    </NavMenuTitle>
                    {item.children && item.children.length > 0 &&
                        <TreeMenu subMenu menuData={item.children} iconMode/>}
                </NavMenuItem>
            ))}
        </TreeMenuWrapper>
    )
}
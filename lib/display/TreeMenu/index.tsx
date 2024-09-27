import React, {CSSProperties, FC, ReactNode, useEffect, useRef, useState} from "react";
import {TreeMenuWrapper, NavMenuItem, NavMenuTitle} from "./style";
import {TreeMenuItemProps, TreeMenuListProps, TreeMenuProps} from "./type";
import {ChevronRightRounded as ChevronRight} from "@mui/icons-material";
import {useTheme} from "../../theme";
import {formatSize} from "../../global/format.ts";
import {uiClassName} from "../../global/components.ts";


const formatIcon = (icon: string | ReactNode) => {
    if (typeof icon === "string") {
        return <span className={"nav-menu-icon " + icon}/>
    } else if (icon !== undefined) {
        return <span className="nav-menu-icon">{icon}</span>
    }
    return icon
}

const IconTreeMenuItem: FC<TreeMenuItemProps & {
    openedId: number | string | null,
    onOpen: (id: number | string) => void
}> = (props) => {
    const {menuInfo, minWidth, openedId, onOpen, onOpenMenu} = props
    const [hide, setHide] = useState(true);
    const [active, setActive] = useState(false);
    const theme = useTheme();
    const itemRef = useRef<HTMLDivElement>(null);
    const resizeSubMenu = () => {
        const target = itemRef.current as HTMLElement;
        const subMenu = target.nextElementSibling as HTMLElement;
        if (subMenu === null) {
            return;
        }
        const rect = target.getBoundingClientRect();
        subMenu.style.top = rect.top + "px";
        subMenu.style.left = rect.right + 10 + "px";
    }
    useEffect(() => {
        if (openedId !== menuInfo.id && !hide) {
            closeSubMenu();
        }
    }, [openedId])

    useEffect(() => {
        if (menuInfo.children && menuInfo.children.length > 0) {
            const observer = new ResizeObserver((entries) => {
                entries.forEach(entry => {
                    const target = entry.target as HTMLElement;
                    const subMenu = target.nextElementSibling as HTMLElement;
                    if (subMenu !== null) {
                        resizeSubMenu();
                    }
                })
            })
            observer.observe(itemRef.current as HTMLElement);
            return () => {
                observer.disconnect();
            }
        }
    }, [menuInfo])

    const closeSubMenu = () => {
        setActive(false);
        const subMenuElement = itemRef.current!.nextElementSibling as HTMLElement;
        subMenuElement.style.opacity = "0";
        subMenuElement.addEventListener("transitionend", () => {
            setHide(true);
            subMenuElement.classList.add("hide");// 为了状态的保持以及动画的渲染，重复添加了一次hide
        }, {once: true});
    }

    const openSubMenu = () => {
        onOpen(menuInfo.id);
        if (menuInfo.children && menuInfo.children.length > 0) {
            setHide(false);
            setActive(true);
            resizeSubMenu();
            const subMenuElement = itemRef.current!.nextElementSibling as HTMLElement;
            subMenuElement.style.opacity = "0";
            subMenuElement.classList.remove("hide"); // 为了状态的保持以及动画的渲染，重复删除了一次hide
            requestAnimationFrame(() => {
                subMenuElement.style.opacity = "1";
            });
        } else {
            if (onOpenMenu) {
                onOpenMenu(menuInfo);
            }
        }
    }

    const toggleSubMenu = () => {
        if (hide) {
            openSubMenu()
        } else {
            closeSubMenu();
        }
    }
    return <NavMenuItem onClick={e => e.stopPropagation()}  className={uiClassName("tree-menu-item")}>
        <NavMenuTitle onClick={toggleSubMenu} theme={theme} ref={itemRef} className={active ? "active" : ""}>
            {formatIcon(menuInfo.icon)}
        </NavMenuTitle>
        {menuInfo.children && menuInfo.children.length > 0 &&
            <TreeMenuList onOpenMenu={onOpenMenu} iconMode={true} firstSubMenu={true} subMenu hide={hide}
                          menuData={menuInfo.children}
                          className={"fixed"}
                          minWidth={minWidth}/>}
    </NavMenuItem>
}


const TreeMenuItem: FC<TreeMenuItemProps> = (props) => {
    const {menuInfo, subMenu, minWidth, onOpenMenu} = props
    const [hide, setHide] = useState(true);
    const theme = useTheme();
    const itemRef = useRef<HTMLDivElement>(null);
    const toggleSubMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!menuInfo.children || menuInfo.children.length === 0) {
            if (onOpenMenu) {
                onOpenMenu(menuInfo);
            }
            return;
        }
        const target = event.currentTarget;
        const subMenuElement = target.nextElementSibling as HTMLElement;
        if (subMenuElement === null) {
            return;
        }
        const arrow = target.querySelector(".menu-arrow") as HTMLElement;
        if (hide) {
            setHide(false);
            subMenuElement.classList.remove("hide"); // 为了状态的保持以及动画的渲染，重复删除了一次hide
            const height = subMenuElement.scrollHeight;
            subMenuElement.style.height = "0px";
            requestAnimationFrame(() => {
                subMenuElement.addEventListener("transitionend", () => {
                    subMenuElement.style.height = "";
                }, {once: true});
                subMenuElement.style.height = height + "px";
            });
            if (arrow !== null) {
                arrow.style.transform = "rotate(90deg)";
            }
        } else { //hide
            const height = subMenuElement.scrollHeight;
            subMenuElement.style.height = height + "px";
            requestAnimationFrame(() => {
                subMenuElement.addEventListener("transitionend", () => {
                    setHide(true);
                    subMenuElement.classList.add("hide");// 为了状态的保持以及动画的渲染，重复添加了一次hide
                    subMenuElement.style.height = "";
                }, {once: true});
                subMenuElement.style.height = "0";
            })
            if (arrow !== null) {
                arrow.style.transform = "rotate(0deg)";
            }
        }
    }
    return <NavMenuItem onClick={e => e.stopPropagation()} className={uiClassName("tree-menu-item")}>
        <NavMenuTitle onClick={toggleSubMenu} theme={theme} ref={itemRef} className={hide ? "" : "active-title"}>
            {formatIcon(menuInfo.icon)}
            <span className="menu-title">{menuInfo.title}</span>
            {menuInfo.children && menuInfo.children.length > 0 &&
                <ChevronRight className={"menu-arrow"}/>}
        </NavMenuTitle>
        {menuInfo.children && menuInfo.children.length > 0 &&
            <TreeMenuList onOpenMenu={onOpenMenu} iconMode={false} firstSubMenu={!subMenu} subMenu hide={hide}
                          menuData={menuInfo.children}
                          minWidth={minWidth}/>}
    </NavMenuItem>
}
/**
 * 树形菜单组件
 * @constructor
 */
export const TreeMenuList: FC<TreeMenuListProps> = (props) => {
    const {menuData, onOpenMenu, subMenu, firstSubMenu, iconMode, hide, minWidth, className} = props;
    const [openedId, setOpenedId] = useState<string | number | null>(null);
    const theme = useTheme();
    const composeClassName = ["sub-menu", "hide", className].map((item, index) => [subMenu, hide, className !== undefined][index] ? item : "").join(" ");
    // iconModel下第一层子元素的样式，非icon模式下，自己的样式
    useEffect(() => {
        const hideSubMenu = () => {
            setOpenedId(null);
        }
        document.addEventListener("click", hideSubMenu);
        return () => {
            document.removeEventListener("click", hideSubMenu);
        }
    }, [])
    const style: CSSProperties = {};
    if (minWidth && ((!iconMode && !subMenu) || (iconMode && subMenu && firstSubMenu))) {
        style.minWidth = formatSize(minWidth);
    }
    return <TreeMenuWrapper className={uiClassName("tree-menu-list " + composeClassName)} theme={theme}
                            style={style}>
        {menuData.map(item => iconMode && !subMenu ?
            <IconTreeMenuItem onOpenMenu={onOpenMenu} minWidth={minWidth} menuInfo={item} key={item.id}
                              subMenu={subMenu}
                              iconMode={iconMode} openedId={openedId} onOpen={setOpenedId}/> :
            <TreeMenuItem onOpenMenu={onOpenMenu} minWidth={minWidth} menuInfo={item} key={item.id} subMenu={subMenu}
                          iconMode={iconMode}/>)}
    </TreeMenuWrapper>

}

export const TreeMenu: FC<TreeMenuProps> = (props) => {
    return <TreeMenuList {...props} iconMode={!!props.iconMode} hide={false} subMenu={false}/>
}
import {FC, ReactNode} from "react";
import styled from "@emotion/styled";


type MenuInfo = {
    icon?: string | ReactNode, // 图标,如果是string类型，则是icon的class，如果是ReactNode，则是icon的节点
    title: string, // 标题
    link?: string, // 链接
}

type NavMenuProps = {
    menuData: MenuInfo[]
}

const NavMenuWrapper = styled.div`
    .nav-menu-icon {
        margin-right: 10px;
    }
`

const NavMenuItem = styled.div`
    cursor: pointer;
    line-height: 2em;
`

const formatIcon = (icon: string | ReactNode) => {
    if (typeof icon === "string") {
        return <span className={"nav-menu-icon " + icon}/>
    } else if (icon !== undefined) {
        return <span className="nav-menu-icon">{icon}</span>
    }
    return icon
}

export const NavMenu: FC<NavMenuProps> = ({menuData}) => {
    return (
        <NavMenuWrapper>
            {menuData.map((item, index) => (
                <NavMenuItem key={index}>
                    {formatIcon(item.icon)}
                    <span>{item.title}</span>
                </NavMenuItem>
            ))}
        </NavMenuWrapper>
    )
}
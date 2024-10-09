import styled from "@emotion/styled";
import {ThemeConfig} from "../../theme";

export const TreeMenuWrapper = styled.div<{ theme: ThemeConfig }>`
    font-size: 1.4rem;
    box-sizing: border-box;
    color: ${props => props.theme.subText};

    & .sub-menu.fixed {
        position: absolute;
        z-index: 999;
        ${props => {
            return `
                    padding:${props.theme.contentPadding};
                    box-shadow:${props.theme.boxShadow};
                    background:${props.theme.background};
                    border-radius:${props.theme.borderRadius};
                `
        }}
    }

    .tree-menu-item-title:hover, .tree-menu-item-title.active-title {
        color: ${props => props.theme.primary};
    }

    .tree-menu-item-title.active .nav-menu-icon {
        color: ${props => props.theme.primary};
        background: ${props => props.theme.primary + "40"};
    }
`

/**
 * 树形菜单样式
 */
export const TreeMenuListWrapper = styled.div`
    transition: padding, width, min-width ease 0.3s;
    overflow: hidden;
    box-sizing: border-box;
    &.sub-menu {
        transition: all ease 0.3s;
        padding: 0 0 0 1em;
    }

    &.sub-menu.hide {
        display: none;
        visibility: hidden;
    }

`

/**
 * 菜单项样式
 */
export const NavMenuItem = styled.div`
    cursor: pointer;
`
/**
 * 菜单标题样式
 */
export const NavMenuTitle = styled.div`
    display: flex;
    align-items: center;
    line-height: 2em;
    height: 2em;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    padding: 5px;
    transition: color ease .3s;
    font-weight: bold;

    .nav-menu-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2em;
        height: 2em;
        border-radius: 50%;
        transition: background ease .3s;

        svg {
            font-size: 1.4em !important;
        }
    }


    .menu-title {
        margin-right: 0.5em;
        margin-left: 0.5em;
        transition: transform, opacity ease 0.3s;
    }

    .menu-arrow {
        margin-left: auto;
        transition: all ease 0.3s;
        font-size: 1.5em !important;
    }
`
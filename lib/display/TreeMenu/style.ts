import styled from "@emotion/styled";
import {ThemeConfig} from "../../theme";

/**
 * 树形菜单样式
 */
export const TreeMenuWrapper = styled.div<{ theme: ThemeConfig }>`
    font-size: 14rem;
    box-sizing: border-box;
    overflow: hidden;
    transition: padding, width, min-width ease 0.3s;

    &.sub-menu.fixed {
        ${props => {
            return `
                    padding:${props.theme.contentPadding};
                    position:absolute;
                    z-index:999;
                    box-shadow:${props.theme.boxShadow};
                    background:${props.theme.background};
                    border-radius:${props.theme.borderRadius};
                `
        }}
    }

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
export const NavMenuTitle = styled.div<{ theme: ThemeConfig }>`
    display: flex;
    align-items: center;
    line-height: 2em;
    height: 2em;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    padding: 5px;
    transition: color ease .3s;
    font-weight: bold;
    color: ${props => props.theme.subText};

    &:hover, &.active-title {
        color: ${props => props.theme.primary};
    }

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

    &.active .nav-menu-icon {
        color: ${props => props.theme.primary};
        background: ${props => props.theme.primary + "40"};
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
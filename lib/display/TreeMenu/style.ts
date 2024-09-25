import styled from "@emotion/styled";
import {ThemeConfig} from "../../theme";

/**
 * 树形菜单样式
 */
export const TreeMenuWrapper = styled.div<{ fixed: boolean, theme: ThemeConfig }>`
    font-size: 13px;
    box-sizing: border-box;
    overflow: hidden;

    &.sub-menu {
        padding-left: ${props => props.fixed ? "0" : "1em"};
        transition: height ease 0.3s;
        ${props => {
            if (props.fixed) {
                return `
                    position:absolute;
                    box-shadow:${props.theme.boxShadow};
                    background:${props.theme.background};
                    border-radius:${props.theme.borderRadius};
                `
            }
        }}
    }

    &.sub-menu .sub-menu {
        padding-left: 1em;
        position: relative;
        box-shadow: none;
        background: none;
        border-radius: 0;
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
    line-height: 2.2em;
    height: 2.2em;
    user-select: none;
    font-size: 1.1em;
    padding: 5px;
    transition: color ease .3s;
    font-weight: bold;
    color: ${props => props.theme.subText};

    &:hover {
        color: ${props => props.theme.primary};
    }

    .nav-menu-icon {
        display: flex;

        svg {
            font-size: 1.4em !important;
        }
    }

    .menu-title {
        margin-right: 1em;
        margin-left: 1em;
    }

    .menu-arrow {
        margin-left: auto;
        transition: transform ease 0.3s;
        font-size: 1.5em !important;
    }
`
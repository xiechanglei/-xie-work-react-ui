import styled from "@emotion/styled";
import React, {FC, useContext} from "react";
import {Direction} from "../global/enums";
import {formatSize} from "../global/format";
import {ContainerContext} from "./Container";

type AsideProps = {
    size?: number | string // 侧边栏的大小
    flex?: "row" | "column" // 侧边栏的内部元素的排列方向
    align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline" // 容器的子元素的对齐方式
    justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" // 容器的子元素的对齐方式
}

const StyledAside = styled.div<AsideProps & { parentDirection?: Direction, gap?: string | number }>`
    box-sizing: border-box;
    ${props => {
        // 认为当flex，align，justify设置了一个的时候，就是设置为flex布局
        if (props.flex !== undefined || props.align !== undefined || props.justify !== undefined) {
            return `
                display: flex;
                flex-wrap: wrap;
                flex-direction: ${props.flex ?? "row"};
                justify-content: ${props.justify ?? "flex-start"};
                align-items: ${props.align ?? "flex-start"};
            `
        }
    }}
    ${props => {
        if (props.gap !== undefined && props.parentDirection !== undefined) {
            return `
                &:not(:last-child){
                    ${props.parentDirection === "row" ? "margin-right" : "margin-bottom"}: ${formatSize(props.gap)};
                }
            `
        }
    }}
    ${props => {
        if (props.parentDirection !== undefined) {
            let _s = "overflow: auto;"
            if (props.parentDirection === "column") {
                _s += `width:100%;`
            } else {
                _s += `height:100%;`
            }
            if (props.size !== undefined) {
                _s += "flex-shrink: 0;"
                if (props.parentDirection === "column") {
                    _s += `height: ${formatSize(props.size)};`
                } else {
                    _s += `width: ${formatSize(props.size)};`
                }
            } else {
                _s += "flex-grow: 1;"
            }
            return _s
        }
    }}
`
/**
 * 侧边栏组件,
 * @param props
 * @constructor
 */
export const Aside: FC<AsideProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const containerCtx = useContext(ContainerContext)
    if (props.flex === undefined) {
        return <StyledAside {...props} parentDirection={containerCtx.direction} gap={containerCtx.gap}/>
    }
    return <ContainerContext.Provider value={{direction: props.flex, gap: containerCtx.gap}}>
        <StyledAside {...props} parentDirection={containerCtx.direction} gap={containerCtx.gap}/>
    </ContainerContext.Provider>
}
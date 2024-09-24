import styled from "@emotion/styled";
import React, {FC, useContext} from "react";
import {Direction} from "../global/enums";
import {formatSize} from "../global/format";
import {ContainerContext} from "./Container";

type AsideProps = {
    size?: number | string // 侧边栏的大小
    direction?: "row" | "column" // 侧边栏的内部元素的排列方向
}

const StyledAside = styled.div<AsideProps & { parentDirection?: Direction, gap?: string | number }>`
    box-sizing: border-box;
    ${props => {
        if (props.direction !== undefined) {
            return `
                display: flex;
                flex-wrap: wrap;
                flex-direction: ${props.direction};
            `
        }
    }}
    ${props => {
        if (props.gap !== undefined && props.parentDirection !== undefined) {
            return `
                &:not(:last-child){
                    ${props.parentDirection === "row" ? "color:red;" : "color:green;"};
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

export const Aside: FC<AsideProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const containerCtx = useContext(ContainerContext)
    const direction = props.direction ?? "row"
    return <ContainerContext.Provider value={{direction, gap: containerCtx.gap}}>
        <StyledAside {...props} direction={direction} parentDirection={containerCtx.direction} gap={containerCtx.gap}/>
    </ContainerContext.Provider>
}
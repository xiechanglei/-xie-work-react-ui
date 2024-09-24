import React, {FC} from "react";
import styled from "@emotion/styled";
import {Direction} from "../global/enums";
import {formatSize} from "../global/format";

export const ContainerContext = React.createContext<{ direction?: Direction, gap?: number | string }>({})


/**
 * 容器组件的额外属性
 */
type ContainerProps = {
    direction?: Direction // 容器的子元素排列方向，默认为column
    gap?: number | string // 容器的子元素之间的间距
}

/**
 * 容器组件的基础样式
 */
const StyledContainer = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.direction};
    box-sizing: border-box;
    ${props => {
        if (props.gap !== undefined) {
            return `
            padding: ${formatSize(props.gap)};
                > *:not(:last-child) {
                    ${props.direction === "row" ? "margin-right" : "margin-bottom"}: ${formatSize(props.gap)};
                }
            `
        }
    }}

`

/**
 * 容器组件 ，用于包裹其他组件
 */
export const Container: FC<ContainerProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const direction = props.direction ?? "row"
    const gap = props.gap
    return <ContainerContext.Provider value={{direction, gap}}>
        <StyledContainer {...props} direction={direction}/>
    </ContainerContext.Provider>
}
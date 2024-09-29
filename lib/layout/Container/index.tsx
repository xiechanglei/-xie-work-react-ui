import React, {FC} from "react";
import styled from "@emotion/styled";
import {Direction} from "../../global/enums";
import {formatSize} from "../../global/format";
import {ThemeConfig, useTheme} from "../../theme";
import {mixinClassName} from "../../global/components";

export const ContainerContext = React.createContext<{ direction?: Direction, gap?: number | string }>({})


/**
 * 容器组件的额外属性
 */
type ContainerProps = {
    /**
     * 容器的子元素排列方向，默认为column
     */
    flex?: Direction,
    /**
     * 容器的子元素之间的间距
     */
    gap?: number | string
}

/**
 * 容器组件的基础样式
 */
const StyledContainer = styled.div<ContainerProps & { theme: ThemeConfig }>`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: ${props => props.flex};
    box-sizing: border-box;
    background: ${props => props.theme.model === "dark" ? props.theme.background + "ee" : props.theme.primary + "10"};
    ${props => {
        if (props.gap !== undefined) {
            return `
              padding: ${formatSize(props.gap)};
                > *:not(:last-child) {
                     ${props.flex === "row" ? "margin-right" : "margin-bottom"}: ${formatSize(props.gap)};
                }
            `
        }
    }}

`

/**
 * 容器组件 ，用于进行页面布局分区
 */
export const Container: FC<ContainerProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const direction = props.flex ?? "row"
    const gap = props.gap
    const theme = useTheme()
    return <ContainerContext.Provider value={{direction, gap}}>
        <StyledContainer {...props} flex={direction} theme={theme} className={mixinClassName(props, "container")}/>
    </ContainerContext.Provider>
}
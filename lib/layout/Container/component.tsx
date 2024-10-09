import React, {FC} from "react";
import styled from "@emotion/styled";
import {FlexDirection} from "../../global/enums";
import {formatSize} from "../../global/format";
import {ThemeConfig, useTheme} from "../../theme";
import {mixClassName, uiClassName} from "../../global/components";
import {ContainerContext} from "./context";

const componentClassNameBase = uiClassName("container")


/**
 * 容器组件的额外属性
 */
type ContainerProps = {
    /**
     * 容器的子元素排列方向，默认为column
     */
    flex?: FlexDirection,
    /**
     * 容器的子元素之间的间距
     */
    spacing?: number | string
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
        if (props.spacing !== undefined) {
            return `
              padding: ${formatSize(props.spacing)};
                > *:not(:last-child) {
                     ${props.flex === "row" ? "margin-right" : "margin-bottom"}: ${formatSize(props.spacing)};
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
    const spacing = props.spacing
    const theme = useTheme()
    return <ContainerContext.Provider value={{direction, spacing}}>
        <StyledContainer {...props} flex={direction} theme={theme}
                         className={mixClassName(props.className, componentClassNameBase)}/>
    </ContainerContext.Provider>
}
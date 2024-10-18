import {FC} from "react";
import styled from "@emotion/styled";
import {FlexDirection} from "../../global/enums";
import {formatSize} from "../../global/format";
import {ThemeConfig, useTheme} from "../../theme";
import {mixClassName, RH, uiClassName} from "../../global/components";
import {ContainerContext} from "./context";
import {omitProperties} from "../../global/object";

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

    /**
     * background: string,如果没有设置，则使用主题的背景色
     */
    background?: string
}

/**
 * 容器组件的基础样式
 */
const StyledContainer = styled.div<ContainerProps & { theme: ThemeConfig }>`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    color: ${props => props.theme.text};
    flex-direction: ${props => props.flex};
    box-sizing: border-box;
    ${props => {
        if (props.spacing !== undefined) {
            return `
              padding: ${formatSize(props.spacing)};
                > *:not(:first-child) {
                     ${props.flex === "row" ? "margin-right" : "margin-bottom"}: ${formatSize(props.spacing)};
                }
                > *:last-child {
                    ${props.flex === "row" ? "margin-right" : "margin-bottom"}: 0;
                }
            `
        }
    }}
`

/**
 * 容器组件 ，用于进行页面布局分区
 */
export const Container: FC<ContainerProps & RH<HTMLDivElement>> = (props) => {
    const direction = props.flex ?? "row"
    const spacing = props.spacing
    const theme = useTheme()
    const background = props.background ?? (theme.model === "dark" ? theme.background + "ee" : theme.primary + "10")
    const passProps = omitProperties(props, "refs");
    return <ContainerContext.Provider value={{direction, spacing}}>
        <StyledContainer ref={props.refs} {...passProps} flex={direction} theme={theme}
                         style={{background}}
                         className={mixClassName(props.className, componentClassNameBase)}/>
    </ContainerContext.Provider>
}
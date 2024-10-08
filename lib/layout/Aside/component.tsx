import styled from "@emotion/styled";
import React, {FC, useContext} from "react";
import {FlexAlign, FlexDirection, FlexJustify} from "../../global/enums";
import {formatSize} from "../../global/format";
import {ContainerContext} from "../Container";
import {ThemeConfig, useTheme} from "../../theme";
import {mixClassName, uiClassName} from "../../global/components";

const componentClassNameBase = uiClassName("aside")

type AsideProps = {
    size?: number | string | "auto" | "grow"// 分区的大小，number和string类型表示大小，auto表示根据内容自动变更大小，不设置与grow一样，表示自动填充剩余空间
    flex?: FlexDirection // 分区的内部元素的排列方向
    align?: FlexAlign // 容器的子元素的对齐方式
    justify?: FlexJustify // 容器的子元素的对齐方式
}

const StyledAside = styled.div<AsideProps & {
    parentDirection?: FlexDirection,
    gap?: string | number,
    theme: ThemeConfig
}>`
    box-sizing: border-box;
    background: ${props => props.theme.background};
    padding: ${props => props.theme.contentPadding};
    border-radius: ${props => props.theme.borderRadius};
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
        if (props.size !== undefined && props.size !== "grow") {
            _s += "flex-shrink: 0;flex-grow: 0;"
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
 * 分区内容组件,
 * flex属性设置的时候，表示内部是flex布局，依然可以进行分区
 * @param props
 * @constructor
 */
export const ContentAside: FC<AsideProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const containerCtx = useContext(ContainerContext)
    const theme = useTheme();
    if (props.flex === undefined) {
        return <StyledAside {...props} parentDirection={containerCtx.direction} gap={containerCtx.spacing} theme={theme}
                            className={mixClassName(props.className, componentClassNameBase)}/>
    }
    return <ContainerContext.Provider value={{direction: props.flex, spacing: containerCtx.spacing}}>
        <StyledAside {...props} parentDirection={containerCtx.direction} gap={containerCtx.spacing} theme={theme}
                     className={mixClassName(props.className, componentClassNameBase)}/>
    </ContainerContext.Provider>
}

/**
 * 分区布局组件,表示内部还有分区，与内容组件的区别是，没有边框与背景填充
 */
export const LayoutAside = styled(ContentAside)`
    padding: 0;
    background: none;
    border-radius: 0;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden !important;
`
import styled from "@emotion/styled";
import {FC, useContext} from "react";
import {ContentShape, FlexAlign, FlexDirection, FlexJustify} from "../../global/enums";
import {formatSize} from "../../global/format";
import {ContainerContext} from "../Container";
import {ThemeConfig, useTheme} from "../../theme";
import {mixClassName, RH, uiClassName} from "../../global/components";
import {omitProperties} from "../../global/object";

const componentClassNameBase = uiClassName("aside")

type AsideProps = {
    size?: number | string | "auto" | "grow"// 分区的大小，number和string类型表示大小，auto表示根据内容自动变更大小，不设置与grow一样，表示自动填充剩余空间
    flex?: FlexDirection // 分区的内部元素的排列方向
    align?: FlexAlign // 容器的子元素的对齐方式
    justify?: FlexJustify // 容器的子元素的对齐方式
    wrap?: "wrap" | "nowrap" | "wrap-reverse" // 容器的子元素的换行方式
    shape?: ContentShape // 分区的形状，圆角或者直角
    block?: boolean //是否是content部分，自动加背景以及padding等信息
    layout?: boolean//是否继续布局
}

const getCssPropertiesByParentDirection = (parentDirection?: FlexDirection, size?: number | string | "auto" | "grow") => {
    let _s = "overflow:auto;"
    if (parentDirection === "column") {
        _s += `width:100%;`
    } else {
        _s += `height:100%;`
    }
    if (size !== undefined && size !== "grow") {
        _s += "flex-shrink: 0;flex-grow: 0;"
        if (parentDirection === "column") {
            _s += `height: ${formatSize(size)};`
        } else {
            _s += `width: ${formatSize(size)};`
        }
    } else {
        _s += "flex-grow: 1;"
    }
    return _s
}

const getContentCssProperties = (props: AsideProps & {
    parentDirection?: FlexDirection,
    gap?: string | number,
    theme: ThemeConfig
}) => {
    let _s = "";
    if (props.block) {
        _s += `background: ${props.theme.background};`
        _s += `padding: ${props.theme.contentPadding};`
        _s += `border-radius: ${props.shape === "radius" ? props.theme.borderRadius : "0"};`
        if (props.gap !== undefined && props.parentDirection !== undefined) {
            _s += `
                &:not(:last-child){
                     ${props.parentDirection === "row" ? "margin-right" : "margin-bottom"}: ${formatSize(props.gap)};
                }
            `
        }
    }
    return _s;
}

const getLayoutCssProperties = (props: AsideProps & {
    parentDirection?: FlexDirection,
    gap?: string | number,
    theme: ThemeConfig
}) => {
    if (props.layout) {
        const _s = `
            display: flex;
            flex-wrap: no-wrap;
            flex-direction: ${props.flex ?? "row"};
            flex-wrap: ${props.wrap ?? "nowrap"};
            justify-content: ${props.justify ?? "flex-start"};
            align-items: ${props.align ?? "flex-start"};
        `
        return _s;
    }
}

const StyledAside = styled.div<AsideProps & {
    parentDirection?: FlexDirection,
    gap?: string | number,
    theme: ThemeConfig
}>`
    box-sizing: border-box;
    ${props => getContentCssProperties(props)}
    ${props => getLayoutCssProperties(props)}
    ${props => getCssPropertiesByParentDirection(props.parentDirection, props.size)}
`

export const Aside: FC<AsideProps & RH<HTMLDivElement>> = (props) => {
    const containerCtx = useContext(ContainerContext)
    const theme = useTheme();
    const parentDirection = containerCtx.direction;
    const passProps = omitProperties(props, "refs");
    if (props.layout) {
        const currentDirection = props.flex !== undefined ? props.flex : (parentDirection === "row" ? "column" : "row");
        return <ContainerContext.Provider value={{direction: currentDirection, spacing: containerCtx.spacing}}>
            <StyledAside ref={props.refs} {...passProps} shape={props.shape ?? theme.contentShape}
                         parentDirection={parentDirection}
                         gap={containerCtx.spacing} theme={theme}
                         className={mixClassName(props.className, componentClassNameBase)}/>
        </ContainerContext.Provider>
    } else {
        return <StyledAside ref={props.refs} {...passProps} shape={props.shape ?? theme.contentShape}
                            parentDirection={containerCtx.direction} gap={containerCtx.spacing} theme={theme}
                            className={mixClassName(props.className, componentClassNameBase)}/>
    }
}
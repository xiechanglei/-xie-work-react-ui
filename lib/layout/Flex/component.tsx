import styled from "@emotion/styled";
import React, {FC} from "react";
import {FlexProps} from "./type";
import {formatSize} from "../../global/format";

const StyledFlex = styled.div<FlexProps>`
    display: flex;
    flex-wrap: ${props => props.wrap ?? "wrap"};
    flex-direction: ${props => props.direction ?? "row"};
    justify-content: ${props => props.justify ?? "flex-start"};
    align-items: ${props => props.align ?? "flex-start"};

    ${props => props.full ? "width: 100%;height: 100%;" : ""}
    ${props => props.right ? "margin-left: auto;" : ""}
    & > *:not(:last-child) {
        margin-right: ${props => formatSize(props.spacing)};
    }
`

/**
 * Flex布局组件
 * @param props
 * @constructor
 */
export const Flex: FC<FlexProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const convertProps = {...props}
    convertProps.align = (!props.align && props.center) ? "center" : props.align
    convertProps.justify = (!props.justify && props.center) ? "center" : props.justify
    return <StyledFlex {...convertProps} />
}

/**
 * Flex布局组件的右侧
 */
export const FlexRight = styled.div`
    margin-left: auto;
`
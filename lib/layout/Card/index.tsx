import styled from "@emotion/styled";
import {ThemeConfig, useTheme} from "../../theme";
import React, {forwardRef, ForwardRefRenderFunction} from "react";
import {ContentShape} from "../../global/enums";
import {mixClassName, uiClassName} from "../../global/components";

type CardProps = {
    shape?: ContentShape
}

const CardClassName = uiClassName("card");
const CardWrapper = styled.div<{ theme: ThemeConfig } & CardProps>`
    padding: ${props => props.theme.contentPadding};
    box-sizing: border-box;
    border-radius: ${props => props.shape === "radius" ? props.theme.borderRadius : "0"};
`

/**
 * 卡片组件
 * @param props
 * @constructor
 */
const Card_: ForwardRefRenderFunction<HTMLDivElement, CardProps & React.HTMLAttributes<HTMLDivElement>> = (props, ref) => {
    const theme = useTheme();
    return <CardWrapper {...props} className={mixClassName(CardClassName, props.className)} theme={theme} ref={ref}
                        shape={props.shape ?? theme.contentShape}>
        {props.children}
    </CardWrapper>
}

export const Card = forwardRef<HTMLDivElement, CardProps & React.HTMLAttributes<HTMLDivElement>>(Card_);
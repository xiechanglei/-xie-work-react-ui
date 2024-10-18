import styled from "@emotion/styled";
import {ThemeConfig, useTheme} from "../../theme";
import {FC} from "react";
import {ContentShape} from "../../global/enums";
import {mixClassName, RH, uiClassName} from "../../global/components";
import {omitProperties} from "../../global/object";

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
export const Card: FC<CardProps & RH<HTMLDivElement>> = (props) => {
    const theme = useTheme();
    const passProps = omitProperties(props, "refs");
    return <CardWrapper ref={props.refs} {...passProps} className={mixClassName(CardClassName, props.className)}
                        theme={theme}
                        shape={props.shape ?? theme.contentShape}>
        {props.children}
    </CardWrapper>
}
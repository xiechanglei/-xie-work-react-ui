import React, {FC} from "react";
import {ButtonProps} from "./type";
import {uiClassName} from "../../global/components";
import {useTheme} from "../../theme";
import {StyledButton} from "./style";
import {useRipple} from "../../display";

const buildButtonClassNameFromProps = (props: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
    const classNameArr = [uiClassName("btn")];
    const {
        mode = "filled",
        dimension = "small",
        shape = "radius",
        shadow = false
    } = props
    classNameArr.push(...[mode, dimension, shape].map(i => `btn-${i}`));
    if (shadow) classNameArr.push("btn-shadow");
    classNameArr.push(props.className!);
    return classNameArr.join(" ");
}


export const Button: FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> = (props) => {
    const {rippleShow, rippleHide, rippleElement} = useRipple();
    const {kind = "primary"} = props;
    const className = buildButtonClassNameFromProps(props);
    const theme = useTheme();
    return (
        <StyledButton {...props} mainColor={theme[kind] ?? theme.primary!}
                      theme={theme}
                      onMouseDown={rippleShow}
                      onMouseUp={rippleHide}
                      // onMouseLeave={rippleHide}
                      className={className}>
            {props.children}
            {rippleElement}
        </StyledButton>
    )
}
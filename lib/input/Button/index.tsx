import React, {FC} from "react";
import {ButtonProps} from "./type";
import {uiClassName} from "../../global/components";
import {useTheme} from "../../theme";
import {StyledButton} from "./style";
import {useRipple} from "../../display";

/**
 * Build button class name from props
 * @param props
 */
const buildButtonClassNameFromProps = (props: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) => {
    const classNameArr = [uiClassName("btn")];
    const {
        mode = "filled",
        size = "small",
        shape = "radius",
        shadow = false
    } = props
    classNameArr.push(...[mode, shape].map(i => `btn-${i}`));
    if (typeof size !== "number") {
        classNameArr.push("btn-" + size);
    }
    if (shadow) {
        classNameArr.push("btn-shadow")
    }
    classNameArr.push(props.className!);
    return classNameArr.join(" ");
}


export const Button: FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> = (props) => {
    const {rippleShow, rippleHide, rippleElement} = useRipple();
    const {kind = "primary"} = props;
    const className = buildButtonClassNameFromProps(props);
    const theme = useTheme();
    const style = props.style ?? {};
    if (typeof props.size === "number") {
        style.fontSize = props.size + "rem";
    }
    return (
        <StyledButton {...props} style={style} mainColor={theme[kind] ?? theme.primary!}
                      theme={theme}
                      onMouseDown={rippleShow}
                      onMouseUp={rippleHide}
                      onMouseLeave={rippleHide}
                      className={className}>
            {props.children}
            {rippleElement}
        </StyledButton>
    )
}
import React, {CSSProperties, FC} from "react";
import {ButtonProps} from "./type";
import {uiClassName} from "../../global/components";
import {useTheme} from "../../theme";
import {StyledButton} from "./style";
import {useRipple} from "../../display";
import {formatSize} from "../../global/format";

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

/**
 * 按钮组件
 * @param props
 * @constructor
 */
export const Button: FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> = (props) => {
    const {rippleShow, rippleHide, rippleElement} = useRipple();
    const {kind = "primary"} = props;
    const className = buildButtonClassNameFromProps(props);
    const theme = useTheme();
    const style: CSSProperties = {};
    if (typeof props.size === "number") {
        style.fontSize = formatSize(props.size);
    }
    let children = props.children;
    //如果children是数组，那么就是多个元素，需要用span包裹
    if (children instanceof Array) {
        children = children.map((child, index) => {
            if (typeof child === "string") {
                return <span key={index}>{child}</span>
            }
            return child
        });
    }

    return (
        <StyledButton {...props} style={{...props.style, ...style}} mainColor={theme[kind] ?? theme.primary!}
                      theme={theme}
                      onMouseDown={rippleShow}
                      onMouseUp={rippleHide}
                      onMouseLeave={rippleHide}
                      className={className}>
            {rippleElement}
            {children}
        </StyledButton>
    )
}
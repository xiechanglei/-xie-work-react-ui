import React, {CSSProperties, FC, ReactNode} from "react";
import {ButtonProps} from "./type";
import {RH, uiClassName} from "../../global/components";
import {ThemeConfig, useTheme} from "../../theme";
import {StyledButton} from "./style";
import {WaveRipple} from "../../display";
import {formatSize} from "../../global/format";
import {omitProperties} from "../../global/object";


/**
 * 格式化图标
 * @param icon
 */
const formatIcon = (icon: string | ReactNode) => {
    if (typeof icon === "string") {
        return <i className={"btn-icon " + icon}/>
    } else if (icon !== undefined) {
        //添加一个className btn-icon
        return <i className="btn-icon">{icon}</i>
    }
    return icon
}

/**
 * Build button class name from props
 * @param props
 * @param theme
 */
const buildButtonClassNameFromProps = (props: ButtonProps & React.HTMLAttributes<HTMLButtonElement>, theme: ThemeConfig) => {
    const classNameArr = [uiClassName("btn")];
    const {
        mode = "filled",
        size = "small",
        shape = theme.componentShape,
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
export const Button: FC<ButtonProps & RH<HTMLButtonElement>> = (props) => {
    const {kind = "primary"} = props;
    const theme = useTheme();
    const className = buildButtonClassNameFromProps(props, theme);
    const style: CSSProperties = {};
    if (typeof props.size === "number") {
        style.fontSize = formatSize(props.size);
    }
    let children = React.Children.toArray(props.children);
    //如果children是数组，那么就是多个元素，需要用span包裹
    children = children.map((child, index) => {
        if (typeof child === "string") {
            return <span key={index}>{child}</span>
        }
        return child
    });

    const elementProps = omitProperties(props, "kind", "mode", "size", "shape", "shadow", "icon", "disabled");
    return (
        <StyledButton {...elementProps} style={{...props.style, ...style}} mainColor={theme[kind] ?? theme.primary!}
                      theme={theme}
                      className={className}>
            <WaveRipple/>
            {formatIcon(props.icon)}
            {children}
        </StyledButton>
    )
}
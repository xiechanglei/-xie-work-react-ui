import React, {CSSProperties, FC} from "react";
import {InputProps} from "./type";
import {omitProperties} from "../../global/object";
import {ThemeConfig, useTheme} from "../../theme";
import {RH, uiClassName} from "../../global/components";
import {formatSize} from "../../global/format";
import {StyledInput} from "./style";

/**
 * Build button class name from props
 * @param props
 * @param theme
 */
const buildClassNameFromProps = (props: InputProps & React.HTMLAttributes<HTMLInputElement>, theme: ThemeConfig) => {
    const classNameArr = [uiClassName("input")];
    const {
        mode = "outline",
        size = "small",
        shape = theme.componentShape
    } = props
    classNameArr.push(...[mode, shape].map(i => `input-${i}`));
    if (typeof size !== "number") {
        classNameArr.push("input-" + size);
    }
    if (props.full) {
        classNameArr.push("input-full");
    }
    classNameArr.push(props.className!);
    return classNameArr.join(" ");
}

export const Input: FC<InputProps & RH<HTMLInputElement>> = (props) => {
    const theme = useTheme();
    const {kind = "primary"} = props;
    const style: CSSProperties = {};
    if (typeof props.size === "number") {
        style.fontSize = formatSize(props.size);
    }
    const className = buildClassNameFromProps(props, theme);
    const elementProps = omitProperties(props, "kind", "mode", "size", "shape", "icon", "disabled", "full","refs");
    return <StyledInput ref={props.refs} {...elementProps} className={className} style={{...props.style, ...style}}
                        mainColor={theme[kind] ?? theme.primary!}/>
}



import {ComponentKind, ComponentMode, ComponentShape, ComponentSize} from "../../global/enums";

export type ButtonProps = {
    // 种类
    kind?: ComponentKind,
    // 尺寸
    size?: ComponentSize,
    // 是否禁用
    disabled?: boolean,
    // 风格
    mode?: ComponentMode,
    // 圆角
    shape?: ComponentShape,
    // 阴影
    shadow?: boolean,
}
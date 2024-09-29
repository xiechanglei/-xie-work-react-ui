export type ButtonKind = "primary" | "secondary" | "success" | "info" | "warning" | "error"

export type ButtonSize = "small" | "medium" | "large" | number

export type ButtonMode = "filled" | "outline" | "soft" | "link"

export type ButtonShape = "rect" | "radius" | "circle"

export type ButtonProps = {
    // 种类
    kind?: ButtonKind,
    // 尺寸
    size?: ButtonSize,
    // 是否禁用
    disabled?: boolean,
    // 风格
    mode?: ButtonMode,
    // 圆角
    shape?: ButtonShape,
    // 阴影
    shadow?: boolean,
}
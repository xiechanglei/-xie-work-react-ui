
export type ThemeConfig = {
    model?: "dark" | "light",// 主题模式
    borderRadius?: string, // 边框圆角
    contentPadding?: string, // 内容的padding
    background?: string, // 背景色，#FFFFFF 格式
    boxShadow?: string, // 阴影
    text?: string, // 文本色，#FFFFFF 格式
    subText?: string, // 次文本色，#FFFFFF 格式

    primary?: string, // 主色，#FFFFFF 格式
    secondary?: string, // 辅色，#FFFFFF 格式
    info?: string, // 信息色，#FFFFFF 格式
    success?: string, // 成功色，#FFFFFF 格式
    warning?: string, // 警告色，#FFFFFF 格式
    error?: string, // 错误色，#FFFFFF 格式
}

import {ComponentShape, ContentShape} from "../global/enums";

export type ThemeConfig = {
    /**
     * 主题模式
     */
    model?: "dark" | "light",
    /**
     * 一些容器类型的组件的圆角，如container，datagrid等
     */
    borderRadius?: string,
    /**
     * 内容的padding
     */
    contentPadding?: string,
    /**
     * 背景色，#FFFFFF 格式
     */
    background?: string,
    /**
     * 阴影
     */
    boxShadow?: string,
    /**
     * 文本色，#FFFFFF 格式
     */
    text?: string,
    /**
     * 次文本色，#FFFFFF 格式
     */
    subText?: string,

    /**
     * 主色，#FFFFFF 格式
     */
    primary?: string,
    /**
     * 辅色，#FFFFFF 格式
     */
    secondary?: string,
    /**
     * 信息色，#FFFFFF 格式
     */
    info?: string,
    /**
     * 成功色，#FFFFFF 格式
     */
    success?: string,
    /**
     * 警告色，#FFFFFF 格式
     */
    warning?: string,
    /**
     * 错误色，#FFFFFF 格式
     */
    error?: string,

    // 组件的默认属性
    /**
     * 按钮的默认形状
     */
    componentShape?: ComponentShape

    /**
     * content shape
     */
    contentShape?: ContentShape

}

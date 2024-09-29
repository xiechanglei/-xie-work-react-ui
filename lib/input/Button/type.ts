import {ComponentKind, ComponentMode, ComponentShape, ComponentSize} from "../../global/enums";

/**
 * 按钮组件的属性
 */
export type ButtonProps = {
    /**
     * 按钮的种类
     */
    kind?: ComponentKind,
    /**
     * 按钮的大小
     */
    size?: ComponentSize,
    /**
     * 是否禁用按钮
     */
    disabled?: boolean,
    /**
     * 按钮的形态
     */
    mode?: ComponentMode,
    /**
     * 按钮的形状
     */
    shape?: ComponentShape,
    /**
     * 是否显示阴影
     */
    shadow?: boolean,
}
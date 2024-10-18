import {ComponentKind, ComponentMode, ComponentShape, ComponentSize} from "../../global/enums";
import {ReactNode} from "react";

/**
 * Input组件的属性
 */
export type InputProps = {
    /**
     * react的ts属性里面好像没有提供这个属性的说明
     */
    value?: string | number | readonly string[],
    /**
     * 是否全屏,默认false
     */
    full?: boolean,
    /**
     * 种类
     */
    kind?: ComponentKind,
    /**
     * 大小,默认为small
     */
    size?: ComponentSize,
    /**
     * 禁用按钮
     */
    disabled?: boolean,
    /**
     * 形态
     */
    mode?: ComponentMode,
    /**
     * 形状
     */
    shape?: ComponentShape,
    /**
     * 图标
     */
    icon?: string | ReactNode,
}
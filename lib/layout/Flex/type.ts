import {FlexAlign, FlexDirection, FlexJustify, FlexWrap} from "../../global/enums";

export type FlexProps = {
    /**
     * 容器的子元素的排列方向.默认是row
     */
    direction?: FlexDirection
    /**
     * 容器的子元素换行模式,默认是wrap
     */
    wrap?: FlexWrap;
    /**
     * 容器的子元素的对齐方式
     */
    align?: FlexAlign
    /**
     * 容器的子元素的对齐方式
     */
    justify?: FlexJustify
    /**
     * 间距，实际效果按照总体决定，只是给子元素设置margin
     */
    spacing?: string | number
    /**
     * 是否往有边靠齐，当父亲元素是flex布局的时候有效
     */
    right?: boolean
}
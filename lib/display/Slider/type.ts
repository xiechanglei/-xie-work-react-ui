import {MutationDirection} from "../../global/enums";

/**
 * 滚动组件的属性
 */
export type SliderProps = {
    /**
     * 滚动容器的宽度，方便直接设定，不需要再通过style来设置,
     */
    width?: number | string,
    /**
     * 滚动容器的高度，方便直接设定，不需要再通过style来设置
     */
    height?: number | string,
    /**
     * 纵横比,方便设置宽高比例，不需要再通过style来设置
     */
    aspectRatio?: number,
    /**
     * 滚动方向
     */
    direction?: MutationDirection,
    /**
     * 前进后退按钮
     */
    arrow?: boolean,
    /**
     *  是否循环滚动
     */
    loop?: boolean,
    /**
     * 自动滚动
     */
    autoPlay?: boolean,

    /**
     * indicator
     */
    indicator?: boolean,

    /**
     * 自动滚动间隔时间 ms
     */
    duration?: number,

    /**
     * beforeChange,滚动动画开始之前的回调，可以做一些离开的动画
     */
    beforeChange?: (e: SlideChangeEvent) => Promise<void> | void,

    /**
     * afterChange,滚动动画结束之后的回调，可以记录当前的位置，也可以做一些其他的动画
     */
    afterChange?: (e: SlideChangeEvent) => Promise<void> | void,

    /**
     * slide show
     */
    afterSlideShow?: (e: SlideChangeEvent) => Promise<void> | void,
}

/**
 * 滚动组件的change事件对象
 */
export type SlideChangeEvent = {
    /**
     * 滚动的起始位置
     */
    from: number,
    /**
     * 滚动的目标位置
     */
    to: number,
    /**
     * 滚动的起始元素
     */
    fromSlide: HTMLElement,
    /**
     * 滚动的目标元素
     */
    toSlide: HTMLElement
}
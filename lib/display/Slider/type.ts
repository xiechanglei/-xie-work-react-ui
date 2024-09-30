import {MutationDirection} from "../../global/enums";

/**
 * 滚动组件的属性
 */
export type SliderProps = {
    /**
     * 滚动方向
     */
    direction?: MutationDirection,
    /**
     *  是否循环滚动
     */
    loop?: boolean,
    /**
     * 自动滚动
     */
    autoPlay?: boolean,
    /**
     * 自动滚动间隔时间 ms
     */
    duration?: number,
    /**
     * 滚动的动画函数
     */
    timingFunction?: string,
    /**
     * 滚动的动画时间 ms
     */
    timingDuration?: number,
    /**
     * 滚动的回调函数,滚动的前置函数
     */
}
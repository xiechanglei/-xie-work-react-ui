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
}
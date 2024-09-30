import {SliderProps} from "./type";
import React, {CSSProperties, FC, useEffect} from "react";
import {mixClassName} from "../../global/components";
import {SliderClassName, StyledSlider} from "./style";
import {useTimeoutEffect} from "../../global/react.hooks.ts";

/**
 * 滚动组件
 */
export const Slider: FC<SliderProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const sliderRef = React.useRef<HTMLDivElement>(null)
    // 将子元素转换为数组
    const children = React.Children.toArray(props.children);
    const computedStyle: CSSProperties = {}
    // 显示的索引
    const [current, setCurrent] = React.useState(0)

    // resize
    const resize = () => {
        if (sliderRef.current !== null) {
            // 获取容器的宽高
            const {width, height} = sliderRef.current.getBoundingClientRect()
            if (props.direction === "vertical") {
                sliderRef.current.scrollTop = height * current
            } else {
                sliderRef.current.scrollLeft = width * current
            }
        }
    }

    // 下一个
    const next = () => {
        const nextCurrent = current >= children.length - 1 ? 0 : current + 1
        if (nextCurrent !== current) {
            setCurrent(nextCurrent)
        }
    }

    // 自动滚动
    useTimeoutEffect(next, 3000, [current, children.length])

    // 监听current的变化,并且重新计算滚动位置
    useEffect(resize, [current, sliderRef.current])

    // 将组件的基础类名和传入的类名进行合并
    const className = mixClassName(SliderClassName, props.className)

    // 根据排列方向设置flex的方向
    computedStyle.flexDirection = props.direction === "vertical" ? "row" : "column";

    return <StyledSlider {...props} className={className} style={{...props.style, ...computedStyle}} ref={sliderRef}>
        {children.map((child, index) => <div className={`${SliderClassName}-item`} key={index}>{child}</div>)}
    </StyledSlider>
}
import {SliderProps} from "./type";
import React, {CSSProperties, FC, useEffect} from "react";
import {mixClassName} from "../../global/components";
import {SliderClassName, StyledSlider} from "./style";
import {formatSize} from "../../global/format";
import {ArrowBackIcon, ArrowForwardIcon, LineIcon} from '../../icon';
import {useTimeoutEffect} from "../../global/react.hooks";

export type {SlideChangeEvent} from './type'

const buildComputedStyle = (props: SliderProps) => {
    const computedStyle: CSSProperties = {};
    // 根据width和height设置容器的宽高
    if (props.width !== undefined) {
        computedStyle.width = formatSize(props.width)
    }
    if (props.height !== undefined) {
        computedStyle.height = formatSize(props.height)
    }
    // 纵横比例
    if (props.aspectRatio !== undefined) {
        computedStyle.aspectRatio = props.aspectRatio
    }
    return computedStyle
}

export const SliderItem: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return <div className={`${SliderClassName}-item`} {...props}></div>;
}

/**
 * 滚动组件，需要注意的滚动组件必须有固定的宽高，否则无法正常滚动
 */
export const Slider: FC<SliderProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    // 显示的索引
    const [current, setCurrent] = React.useState(0)
    // last
    const [last, setLast] = React.useState(0)

    const sliderRef = React.useRef<HTMLDivElement>(null)
    // 将子元素转换为数组
    const children = React.Children.toArray(props.children);

    const init = () => {
        if (sliderRef.current === null) {
            return;
        }
        if (current >= children.length) {
            setCurrent(children.length - 1)
            setLast(children.length - 1)
        }
    }
    // resize
    const resize = async () => {
        if (sliderRef.current === null) {
            return;
        }
        setLast(current);
        const currentSlide = sliderRef.current.children[current] as HTMLElement;
        const lastSlide = sliderRef.current.children[(last + children.length) % children.length] as HTMLElement;
        const currentSlideChild = currentSlide.children[0] as HTMLElement;
        const lastSlideChild = lastSlide.children[0] as HTMLElement;
        if (props.beforeChange && current !== last) {
            try {
                await props.beforeChange({
                    from: last,
                    to: current,
                    fromSlide: lastSlideChild,
                    toSlide: currentSlideChild
                })
            } catch (e) {
                console.error(e)
            }
        }
        currentSlide.classList.add(`${SliderClassName}-item-active`);
        if (last < current) {
            currentSlide.classList.add(`${SliderClassName}-item-next`);
            setTimeout(() => {
                currentSlide.classList.remove(`${SliderClassName}-item-next`);
                lastSlide.classList.add(`${SliderClassName}-item-prev`);
                lastSlide.addEventListener("transitionend", () => {
                    lastSlide.classList.remove(`${SliderClassName}-item-prev`);
                    lastSlide.classList.remove(`${SliderClassName}-item-active`);
                    if (props.afterChange) {
                        props.afterChange({
                            from: last,
                            to: current,
                            fromSlide: lastSlideChild,
                            toSlide: currentSlideChild
                        })
                    }
                    if (props.afterSlideShow) {
                        props.afterSlideShow({
                            from: last,
                            to: current,
                            fromSlide: lastSlideChild,
                            toSlide: currentSlideChild
                        })
                    }
                }, {once: true});
            }, 0);
        } else if (last > current) {
            currentSlide.classList.add(`${SliderClassName}-item-prev`);
            setTimeout(() => {
                currentSlide.classList.remove(`${SliderClassName}-item-prev`);
                lastSlide.classList.add(`${SliderClassName}-item-next`);
                lastSlide.addEventListener("transitionend", () => {
                    lastSlide.classList.remove(`${SliderClassName}-item-next`);
                    lastSlide.classList.remove(`${SliderClassName}-item-active`);
                    if (props.afterChange) {
                        props.afterChange({
                            from: last,
                            to: current,
                            fromSlide: lastSlideChild,
                            toSlide: currentSlideChild
                        })
                    }
                    if (props.afterSlideShow) {
                        props.afterSlideShow({
                            from: last,
                            to: current,
                            fromSlide: lastSlideChild,
                            toSlide: currentSlideChild
                        })
                    }
                }, {once: true});
            }, 0);
        } else {
            if (props.afterSlideShow) {
                props.afterSlideShow({from: last, to: current, fromSlide: lastSlideChild, toSlide: currentSlideChild})
            }
        }
    }

    // 下一个
    const next = () => {
        if (current < children.length - 1) {
            setCurrent(current + 1)
        } else if (props.loop) {
            setLast(-1);
            setCurrent(0)
        }
    }

    // 上一个
    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1)
        } else if (props.loop) {
            setLast(children.length);
            setCurrent(children.length - 1)
        }
    }

    // 自动滚动
    useTimeoutEffect(() => {
        if (props.autoPlay) {
            next()
        }
    }, props.duration ?? 3000, [current, children.length, props.autoPlay, props.duration])

    // 监听current的变化,并且重新计算滚动位置
    useEffect(() => {
        resize()
    }, [current])

    useEffect(init, [children.length]);

    // 将组件的基础类名和传入的类名进行合并
    const className = mixClassName(SliderClassName, props.className)

    return <StyledSlider {...props} className={className} style={{...props.style, ...buildComputedStyle(props)}}>

        {props.arrow && <div>
            <ArrowForwardIcon className={`${SliderClassName}-btn ${SliderClassName}-next-btn`} onClick={next}/>
            <ArrowBackIcon className={`${SliderClassName}-btn ${SliderClassName}-prev-btn`} onClick={prev}/>
        </div>}

        {props.indicator && <div className={`${SliderClassName}-item-line-group`}>
            {children.map((_, index) => <LineIcon key={index}
                                                  className={`${SliderClassName}-item-line` + (current === index ? " active" : "")}
                                                  onClick={() => setCurrent(index)}/>)}
        </div>}


        <div
            className={`${SliderClassName}-item-wrapper ${props.direction ? `${SliderClassName}-item-wrapper-${props.direction}` : ""}`}
            ref={sliderRef}
            style={{flexDirection: props.direction === "vertical" ? "row" : "column"}}>
            {children.map((child, index) => <SliderItem key={index}>{child}</SliderItem>)}
        </div>
    </StyledSlider>
}
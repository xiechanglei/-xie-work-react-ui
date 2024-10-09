import React, {FC, useEffect, useState} from "react";
import {RippleElementProps} from "./type";
import {rippleFirstAnimationTime, rippleHideAnimationTime, StyledRippleWrapper, WaveRippleWrapper} from "./style";
import {useRippleReducer} from "./hook";

export const WaveRipple: FC<React.HTMLAttributes<HTMLElement>> = () => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const {rippleElementProps, rippleElementAction} = useRippleReducer();
    const addRipple = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        const rippleKey = Date.now();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const width = rect.width * 2;
        const height = rect.height * 2;
        //对角线的长度
        const size = Math.sqrt(width * width + height * height);
        const newRippleProps = {
            x,
            y,
            size,
            rippleKey,
            onHidden: (rk: number) => rippleElementAction({type: "remove", payload: rk})
        };
        rippleElementAction({type: "show", payload: newRippleProps});
    }

    useEffect(() => {
        if (wrapperRef.current !== null) {
            const target = wrapperRef.current.parentElement!
            const targetPosition = window.getComputedStyle(target).position;
            if (targetPosition !== "relative" && targetPosition !== "absolute" && targetPosition !== "fixed" && targetPosition !== "sticky") {
                target.style.position = "relative";
            }
            if (target.style.overflow !== "hidden") {
                target.style.overflow = "hidden";
            }

            target.addEventListener("mousedown", addRipple)
            return () => {
                target.removeEventListener("mousedown", addRipple)
            }
        }
    }, [wrapperRef.current]);
    return <StyledRippleWrapper ref={wrapperRef}>{rippleElementProps.map(props => <RippleElement
        key={props.rippleKey} {...props}/>)}</StyledRippleWrapper>
}

export const RippleElement: FC<RippleElementProps> = (props) => {
    const {x, y, size, rippleKey} = props
    const [close, setClose] = useState(false);
    const rippleRef = React.useRef<HTMLDivElement>(null);
    const [complete, setComplete] = React.useState(false);
    useEffect(() => {
        const delayClosedTimer = setTimeout(() => setComplete(true), rippleFirstAnimationTime);
        const parentElement = rippleRef.current?.parentElement?.parentElement;
        if (parentElement) {
            const closeRipple = () => {
                setClose(true);
                parentElement.removeEventListener("mouseup", closeRipple);
                parentElement.removeEventListener("mouseleave", closeRipple);
            }
            parentElement.addEventListener("mouseup", closeRipple);
            parentElement.addEventListener("mouseleave", closeRipple);
        }
        return () => clearTimeout(delayClosedTimer);
    }, []);

    useEffect(() => {
        if (complete && close) {
            rippleRef.current?.classList.add("waves-ripple-hide");
            const delayClosedTimer = setTimeout(() => props.onHidden(rippleKey), rippleHideAnimationTime);
            return () => clearTimeout(delayClosedTimer);
        }
    }, [complete, close]);
    return <WaveRippleWrapper ref={rippleRef} style={{
        left: x - size / 2 + "px",
        top: y - size / 2 + "px",
        width: size + "px",
        height: size + "px"
    }}>
        <div className="waves-ripple-first"/>
        <div className="waves-ripple-second"/>
    </WaveRippleWrapper>
}
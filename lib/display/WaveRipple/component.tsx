import React, {FC, useEffect} from "react";
import {RippleElementProps} from "./type";
import {rippleFirstAnimationTime, rippleHideAnimationTime, WaveRippleWrapper} from "./style";

export const RippleElement: FC<RippleElementProps> = (props) => {
    const {x, y, size, close, rippleKey} = props
    const rippleRef = React.useRef<HTMLDivElement>(null);
    const [complete, setComplete] = React.useState(false);
    useEffect(() => {
        const delayClosedTimer = setTimeout(() => setComplete(true), rippleFirstAnimationTime);
        return () => clearTimeout(delayClosedTimer);
    }, []);

    useEffect(() => {
        if (close && complete) {
            rippleRef.current?.classList.add("waves-ripple-hide");
            const delayClosedTimer = setTimeout(() => props.onHidden(rippleKey), rippleHideAnimationTime);
            return () => clearTimeout(delayClosedTimer);
        }
    }, [close, complete]);
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
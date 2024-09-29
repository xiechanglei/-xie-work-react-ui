import React, {FC, useEffect, useReducer} from "react";
import {rippleFirstAnimationTime, rippleHideAnimationTime, WaveRippleWrapper} from "./style";
import {RippleElementAction, RippleElementProps} from "./type";


const RippleElement: FC<RippleElementProps> = (props) => {
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


const useRippleReducer = () => {

    const [rippleElementProps, rippleElementAction] = useReducer((state: RippleElementProps[], action: RippleElementAction) => {
        if (action.type === "hide") {
            if (state.length > 0) {
                const newRippleProps = state.pop();
                if (newRippleProps) {
                    newRippleProps.close = true;
                    return [...state, newRippleProps];
                }
            }
        } else if (action.type === "remove") {
            return state.filter(props => props.rippleKey !== action.payload);
        } else {
            return [...state, action.payload as RippleElementProps];
        }
        return state;

    }, []);
    return {rippleElementProps, rippleElementAction}
}


export const useRipple = () => {
    //useReducer
    const {rippleElementProps, rippleElementAction} = useRippleReducer();

    const rippleShow = (event: React.MouseEvent<HTMLElement>) => {
        const targetPosition = window.getComputedStyle(event.currentTarget).position;
        if (targetPosition !== "relative" && targetPosition !== "absolute" && targetPosition !== "fixed" && targetPosition !== "sticky") {
            event.currentTarget.style.position = "relative";
        }
        if (event.currentTarget.style.overflow !== "hidden") {
            event.currentTarget.style.overflow = "hidden";
        }
        const rect = event.currentTarget.getBoundingClientRect();
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
            close: false,
            rippleKey,
            onHidden: (rk: number) => rippleElementAction({type: "remove", payload: rk})
        };
        rippleElementAction({type: "show", payload: newRippleProps});
    }

    const rippleHide = () => {
        //将最后一个元素的close设置为true
        if (rippleElementProps.length > 0) {
            rippleElementAction({type: "hide"})
        }
    }

    const rippleElement = rippleElementProps.map(props => <RippleElement key={props.rippleKey} {...props}/>);

    return {rippleShow, rippleHide, rippleElement}
}
import React, {useEffect} from "react";
import {WaveRippleWrapper} from "./style";

/**
 * 要求父元素有定位属性，overflow为hidden
 * position: relative;
 *     overflow: hidden;
 *     user-select: auto;
 *     -webkit-tap-highlight-color: transparent;
 */
export const useRipple = () => {
    const [showRipple, setShowRipple] = React.useState(false);
    const rippleRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({x: 0, y: 0, size: 0});
    const [rippleActive, setRippleActive] = React.useState(false);
    const [hideRipple, setHideRipple] = React.useState(false);
    const [playingTime, setPlayingTime] = React.useState(0);
    const [playTimeOut, setPlayTimeOut] = React.useState(0);

    const rippleShow = (event: React.MouseEvent<HTMLElement>) => {
        event.currentTarget.style.position = "relative";
        event.currentTarget.style.overflow = "hidden";
        event.currentTarget.style.animation = "waves-ripple-shaking 6s linear infinite";
        clearTimeout(playTimeOut);
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const width = rect.width * 2;
        const height = rect.height * 2;
        const size = Math.max(width, height);
        setPosition({x, y, size});

        if (showRipple && rippleRef.current !== null) { // ripple 还存在
            // setRippleActive(false);
            const ripple = rippleRef.current;
            ripple.style.display = "none";
            ripple.classList.remove("waves-ripple-active");
            ripple.classList.remove("waves-ripple-hide");
            setHideRipple(false);
            setRippleActive(true);
            requestAnimationFrame(() => {
                ripple.style.display = "block";
                requestAnimationFrame(() => {
                    ripple.classList.add("waves-ripple-active");
                });
            });

        } else {
            setShowRipple(true);
        }
        setPlayingTime(Date.now());
        const timeOut = setTimeout(() => {
            setPlayingTime(0);
        }, 900);
        setPlayTimeOut(timeOut as unknown as number);
    }
    const closeRipple = () => {
        if (showRipple) {
            setHideRipple(true);
            setPlayingTime(0);
            setTimeout(() => {
                setShowRipple(false);
                setRippleActive(false);
                setHideRipple(false);
            }, 300);
        }
    }

    const rippleHide = (event: React.MouseEvent<HTMLElement>) => {
        event.currentTarget.style.animation = "none";
        //保证动画结束后再隐藏
        if (playingTime !== 0) {
            const time = Date.now() - playingTime;
            clearTimeout(playTimeOut);
            if (time < 300) {
                const timeout = setTimeout(() => {
                    closeRipple();
                }, 300 - time);
                setPlayTimeOut(timeout as unknown as number);
            } else {
                closeRipple();
            }
        } else {
            closeRipple();
        }
    }
    useEffect(() => {
        if (rippleRef.current !== null) {
            requestAnimationFrame(() => setRippleActive(true));
        }
    }, [showRipple])
    const rippleElement = <>
        {showRipple && <WaveRippleWrapper style={{
            left: position.x - position.size / 2 + "px",
            top: position.y - position.size / 2 + "px",
            width: position.size + "px",
            height: position.size + "px"
        }}
                                          className={`waves-ripple${rippleActive ? " waves-ripple-active" : ""}${hideRipple ? " waves-ripple-hide" : ""}`}
                                          ref={rippleRef}/>}
    </>
    return {rippleShow, rippleHide, rippleElement}
}

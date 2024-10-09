import styled from "@emotion/styled";

export const rippleFirstAnimationTime: number = 400;
export const rippleSecondAnimationTime: number = 300;
export const rippleHideAnimationTime: number = 400;

export const StyledRippleWrapper = styled.div`
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`

export const WaveRippleWrapper = styled.div`
    & {
        position: absolute;
        opacity: 1;
        transition: opacity ${rippleHideAnimationTime}ms ease-out;
    }

    &.waves-ripple-hide {
        opacity: 0;
    }

    & .waves-ripple-first, & .waves-ripple-second {
        position: absolute;
        z-index: 9999;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        opacity: 0;
        transform-origin: center;
        pointer-events: none;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }

    & .waves-ripple-first {
        animation-duration: ${rippleFirstAnimationTime}ms;
        animation-name: waves-ripple;
        transform: scale(0) translate(0, 0);
        background: rgba(255, 255, 255, .2);
        background: radial-gradient(rgba(255, 255, 255, .2) 0, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .4) 50%, rgba(255, 255, 255, .5) 75%, rgba(255, 255, 255, 0) 100%);
    }

    & .waves-ripple-second {
        animation-name: waves-ripple;
        animation-delay: ${rippleFirstAnimationTime}ms;
        animation-duration: ${rippleSecondAnimationTime}ms;
        background: rgba(255, 255, 255, .2);
        background: radial-gradient(rgba(255, 255, 255, .3) 0, rgba(255, 255, 255, .2) 25%, rgba(255, 255, 255, .1) 50%, rgba(255, 255, 255, .0) 75%, rgba(255, 255, 255, 0) 100%);
    }

    @keyframes waves-ripple {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: scale(1) translate(0, 0);
        }
    }
`
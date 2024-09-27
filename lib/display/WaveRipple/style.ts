import styled from "@emotion/styled";

export const WaveRippleWrapper = styled.div`
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    background: radial-gradient(rgba(255, 255, 255, .2) 0, rgba(255, 255, 255, .3) 40%, rgba(255, 255, 255, .4) 50%, rgba(255, 255, 255, .5) 60%, rgba(255, 255, 255, 0) 70%);
    transform: scale(0) translate(0, 0);
    transform-origin: center;
    transition: all 0.3s ease-out;
    pointer-events: none;

    &.waves-ripple-active {
        opacity: 1;
        transform: scale(1) translate(0, 0);
        animation: waves-ripple .6s ease-out forwards 1;
        transition: all 0.3s ease-out;
    }

    &.waves-ripple-hide {
        opacity: 0;
        transform: scale(1) translate(0, 0);
    }

    @keyframes waves-ripple {
        0%, 50% {
            background: rgba(255, 255, 255, .2);
        }
        100% {
            background: rgba(255, 255, 255, .4);
        }
    }
`
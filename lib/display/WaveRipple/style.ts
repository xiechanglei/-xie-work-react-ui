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

    @keyframes waves-ripple-shaking {
        //shaking 从10%到100%的时间段内，每隔10%的时间段，都会有一个抖动
        50%, 100% {
            transform: rotateZ(0deg);
        }
        51%, 53%, 55%, 57%, 59%, 61%, 63%, 65%, 67%, 69%, 71%, 73%, 75%, 77%, 79%, 81%, 83%, 85%, 87%, 89%, 91%, 93%, 95%, 97%, 99% {
            transform: rotateZ(-3deg);
        }
        52%, 54%, 56%, 58%, 60%, 62%, 64%, 66%, 68%, 70%, 72%, 74%, 76%, 78%, 80%, 82%, 84%, 86%, 88%, 90%, 92%, 94%, 96%, 98% {
            transform: rotateZ(3deg);
        }
    }
`
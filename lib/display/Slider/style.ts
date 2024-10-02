import styled from "@emotion/styled";
import {uiClassName} from "../../global/components";

export const SliderClassName = uiClassName("slider")

export const StyledSlider = styled.div`
    overflow: hidden;
    position: relative;

    .${SliderClassName}-item-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .${SliderClassName}-item {
        float: left;
        width: 100%;
        height: 100%;
        margin-right: -100%;
        overflow: hidden;
        display: none;
        transition: transform 0.3s ease-in-out;
    }

    .${SliderClassName}-item-active {
        display: block;
    }

    .${SliderClassName}-item-next {
        transform: translateX(100%);
    }

    .${SliderClassName}-item-wrapper-vertical .${SliderClassName}-item-next {
        transform: translateY(100%);
    }

    .${SliderClassName}-item-prev {
        transform: translateX(-100%);
    }

    .${SliderClassName}-item-wrapper-vertical .${SliderClassName}-item-prev {
        transform: translateY(-100%);
    }

    .${SliderClassName}-btn, .${SliderClassName}-item-line-group {
        position: absolute;
        cursor: pointer;
        font-size: 3rem;
        z-index: 100;
        color: #ffffff77;
    }

    .${SliderClassName}-prev-btn {
        top: 50%;
        transform: translateY(-50%);
        left: 2rem;
    }

    .${SliderClassName}-next-btn {
        top: 50%;
        transform: translateY(-50%);
        right: 2rem;
    }

    .${SliderClassName}-item-line-group {
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .${SliderClassName}-btn:hover {
        color: #ffffff;
    }

    .${SliderClassName}-item-line.active {
        color: #ffffff;
    }
`
import styled from "@emotion/styled";
import {uiClassName} from "../../global/components";

export const SliderClassName = uiClassName("slider")

export const StyledSlider = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    position: relative;

    & .${SliderClassName}-item {
        position: relative;
        width: 100%;
        height: 100%;
    }
`
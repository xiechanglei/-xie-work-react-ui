import styled from "@emotion/styled";
import {ThemeConfig} from "../../theme";

export const StyledButton = styled.button<{ theme: ThemeConfig,mainColor:string }>`
    outline: none;
    padding: 0.3em 1.2em;
    line-height: 1.5em;
    cursor: pointer;
    background: ${props => props.mainColor + "e1"};
    border: 1rem solid ${props => props.mainColor + "00"};
    color: #ffffff;
    box-sizing: border-box;
    transition: all 200ms ease;

    // wave effect
    position: relative;
    overflow: hidden;
    user-select: auto;
    -webkit-tap-highlight-color: transparent;

    &.btn-small {
        font-size: 12rem;
    }

    &.btn-medium {
        font-size: 16rem;
    }

    &.btn-large {
        font-size: 20rem;
    }

    &.btn-filled:hover {
        background: ${props => props.mainColor};
    }

    &.btn-outline {
        background: transparent !important;
        border: 1rem solid ${props => props.mainColor + "ff"};
        color: ${props => props.mainColor} !important;

        &:hover {
            background: ${props => props.mainColor} !important;
            border: 1rem solid ${props => props.mainColor} !important;
            color: #ffffff !important;
        }
    }


    &.btn-soft {
        background: ${props => props.mainColor}20 !important;
        border: 1rem solid ${props => props.mainColor}00 !important;
        color: ${props => props.mainColor} !important;

        &:hover {
            background: ${props => props.mainColor} !important;
            border: 1rem solid ${props => props.mainColor} !important;
            color: #ffffff !important;
        }
    }


    &.btn-link {
        background: transparent !important;
        color: ${props => props.mainColor} !important;
        border: none;

        &:hover {
            text-decoration: underline;
        }
    }

    &.btn-rect {
        border-radius: 0;
    }

    &.btn-radius {
        border-radius: 0.2em;
    }

    &.btn-circle {
        border-radius: 100em;
    }

    &.btn-shadow {
        box-shadow: ${props => props.theme.boxShadow};

        &:hover {

        }
    }
`
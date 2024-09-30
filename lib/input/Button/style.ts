import styled from "@emotion/styled";
import {ThemeConfig} from "../../theme";

export const StyledButton = styled.button<{ theme: ThemeConfig,mainColor:string }>`
    outline: none;
    padding: 0.6em;
    line-height: 1.2em;
    cursor: pointer;
    background: ${props => props.mainColor + "e1"};
    border: 0.1em solid ${props => props.mainColor + "00"};
    color: #ffffff;
    box-sizing: border-box;
    transition: all 200ms ease;
    user-select: auto;
    -webkit-tap-highlight-color: transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    & .btn-icon {
        display: inline-flex;
    }

    & .btn-icon, & .btn-icon svg {
        font-size: 1.14em !important;
    }

    & > .btn-icon:not(:last-child) {
        margin-right: 0.3em;
    }

    &.btn-small {
        font-size: 1.2rem;
    }

    &.btn-medium {
        font-size: 1.6rem;
    }

    &.btn-large {
        font-size: 2rem;
    }

    &.btn-filled:hover {
        background: ${props => props.mainColor};
    }

    &.btn-outline {
        background: transparent !important;
        border: 0.1em solid ${props => props.mainColor + "ff"};
        color: ${props => props.mainColor} !important;

        &:hover {
            background: ${props => props.mainColor} !important;
            border: 0.1em solid ${props => props.mainColor} !important;
            color: #ffffff !important;
        }
    }


    &.btn-soft {
        background: ${props => props.mainColor}20 !important;
        border: 0.1em solid ${props => props.mainColor}00 !important;
        color: ${props => props.mainColor} !important;

        &:hover {
            background: ${props => props.mainColor} !important;
            border: 0.1em solid ${props => props.mainColor} !important;
            color: #ffffff !important;
        }
    }


    &.btn-link {
        background: transparent !important;
        color: ${props => props.mainColor} !important;
        border: none;

        &:hover {
            background: ${props => props.mainColor}10 !important;
        }
    }

    &.btn-rect {
        border-radius: 0;
    }

    &.btn-radius {
        border-radius: 0.2em;
    }

    &.btn-circle {
        border-radius: 10em;
    }

    &.btn-shadow {
        box-shadow: ${props => props.theme.boxShadow};
    }
`
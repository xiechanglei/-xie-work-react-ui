import styled from "@emotion/styled";

export const StyledInput = styled.input<{mainColor:string}>`
    outline: none;
    padding: 0.6em;
    line-height: 1.2em;
    color: inherit;
    font-family: inherit;
    background: transparent;
    border: 2px solid ${props => props.mainColor + "00"};
    box-sizing: border-box;
    transition: all 200ms ease;
    -webkit-tap-highlight-color: transparent;

    &.input-small {
        font-size: 1.2rem;
    }

    &.input-medium {
        font-size: 1.6rem;
    }

    &.input-large {
        font-size: 2rem;
    }

    //"filled" | "outline" | "soft" | "link"

    &.input-filled {
        border: 2px solid ${props => props.mainColor + "ff"};
        background: ${props => props.mainColor + "e1"};
        color: #ffffff;
    }

    &.input-outline {
        border: 2px solid ${props => props.mainColor + "ff"};
    }

    &.input-soft {
        border: 2px solid ${props => props.mainColor + "00"};
    }

    &.input-link {

    }

    &.input-full {
        width: 100%;
    }


    &.input-radius {
        border-radius: 0.2em;
    }

    &.input-circle {
        border-radius: 10em;
    }

`
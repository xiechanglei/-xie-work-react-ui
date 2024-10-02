import {IconClassName, StyledSvg} from "./style";
import {mixClassName} from "../global/components";
import {IconProps} from "./type";

export const ArrowBackIcon = (props: IconProps) => {
    const className = mixClassName(IconClassName, props.className)
    return <StyledSvg {...props} className={className} focusable="false" aria-hidden="true" viewBox="0 0 16 16">
        <path
            d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/>
    </StyledSvg>
}

export const ArrowForwardIcon = (props: IconProps) => {
    const className = mixClassName(IconClassName, props.className)
    return <StyledSvg {...props} className={className} focusable="false" aria-hidden="true" viewBox="0 0 16 16">
        <path
            d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/>
    </StyledSvg>
}
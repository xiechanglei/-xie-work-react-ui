import {IconClassName, StyledDiv} from "./style";
import {mixClassName} from "../global/components";
import {IconProps} from "./type";


export const LineIcon = (props: IconProps) => {
    return <StyledDiv {...props} className={mixClassName(IconClassName, props.className)}>
        <div style={{height: "10%", width: "90%", background: "currentcolor"}}></div>
    </StyledDiv>
}
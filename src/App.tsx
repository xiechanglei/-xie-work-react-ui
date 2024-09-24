// import {Button} from "../lib";
import "./app.css"
import {Container} from "../lib/layout/Container";
import {Aside} from "../lib/layout/Aside";
import styled from "@emotion/styled";

const StyledAside = styled(Aside)`
    background: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
`

export const App = () => {
    return (
        <Container direction="column" gap={5}>
            <StyledAside size={70}>
                <div>333</div>
                <div>444</div>
            </StyledAside>
            <Aside>
                <StyledAside size={100}>
                    <div>111</div>
                    <div>222</div>
                </StyledAside>
                <StyledAside>
                    <div>111</div>
                    <div>222</div>
                </StyledAside>
            </Aside>
        </Container>
    )
}
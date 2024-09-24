import "./app.css"
import "./bx-icon.css"
import {Container} from "../lib/layout/Container";
import {Aside} from "../lib/layout/Aside";
import styled from "@emotion/styled";
import {NavMenu} from "../lib/display/NavMenu";

const StyledAside = styled(Aside)`
    background: #f1f1f1;
    border-radius: 3px;
    padding: 10px;
`
// bx-terminal bx-calendar bx-briefcase-alt-2 bx-receipt bx-task
const menuData = [
    {
        icon: "bx-icon bx-home-alt",
        title: '首页',
        link: '/'
    },
    {
        icon: 'bx-icon bx-message-rounded',
        title: '用户管理',
        link: '/user'
    },
    {
        icon: 'bx-icon bx-heart',
        title: '系统设置',
        link: '/setting'
    }
]


export const App = () => {
    return (
        <Container flex="column" gap={1}>
            <StyledAside size={50} align="center">
            </StyledAside>
            <Aside flex="row">
                <StyledAside size={200}>
                    <div>here is logo</div>
                    <NavMenu menuData={menuData} />
                </StyledAside>
                <StyledAside>

                </StyledAside>
            </Aside>
        </Container>
    )
}
import {Container, LayoutAside, ContentAside, TreeMenu, matrix, Button, Flex, setTheme, Slider} from "../lib";
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';
import {useState} from "react";
import {menuData} from "./menu.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import logo from "./assert/logo-sm.svg"


const TopButton = matrix(Button, {size: 13, mode: "link"})

export const App = () => {
    const [themeStatus, setThemeStatus] = useState(true)
    const [iconMode, setIconMode] = useState(false)
    const toggleTheme = () => {
        setTheme({model: themeStatus ? "dark" : "light"})
        setThemeStatus(!themeStatus)
    }
    return (
        <Container flex={"column"} spacing={3}>

            <ContentAside size={"auto"} align={"center"}>
                {/*logo and search*/}
                <img src={logo} width="20px" alt="logo"/>
                <span style={{fontSize: "16px", marginLeft: "20px"}}>Minia</span>
                <TopButton icon={<MenuIcon/>} onClick={() => setIconMode(!iconMode)}></TopButton>

                {/*controls*/}
                <Flex align={"center"} spacing={3} right>
                    <TopButton icon={<TuneIcon/>}></TopButton>
                    <Button onClick={toggleTheme}>Change Theme</Button>
                </Flex>
            </ContentAside>

            <LayoutAside flex={"row"}>
                {/* menu left side*/}
                <ContentAside size={"auto"}>
                    <TreeMenu menuData={menuData}
                              iconMode={iconMode}
                              minWidth={240}/>
                </ContentAside>

                <ContentAside>
                    <Slider style={{width:200,height:200,background:"#e1e1e1"}} >
                        <div>Hello</div>
                        <div>World</div>
                        <div>Foo</div>
                        <div>Bar</div>
                    </Slider>
                </ContentAside>
            </LayoutAside>
        </Container>
    )
}
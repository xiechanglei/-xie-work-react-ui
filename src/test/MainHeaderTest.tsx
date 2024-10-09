import {Button, ContentAside, Flex, matrix, setTheme} from "../../lib";
import MenuIcon from "@mui/icons-material/Menu";
import TuneIcon from "@mui/icons-material/Tune";
import {useState} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import logo from "../assert/logo-sm.svg"



const TopButton = matrix(Button, {size: 13, mode: "link"})

export const MainHeaderTest = ()=>{
    const [iconMode, setIconMode] = useState(false)
    const [themeStatus, setThemeStatus] = useState(true)

    const toggleTheme = () => {
        setTheme({model:"dark"})
        setTheme({model: themeStatus ? "dark" : "light"})
        setThemeStatus(!themeStatus)
    }
    return    <ContentAside size={"auto"} align={"center"}>
        {/*logo and search*/}
        <img src={logo} width="20px" alt="logo"/>
        <span style={{fontSize: "16px", marginLeft: "20px"}}>Minia</span>
        <div>here is content</div>
        <TopButton icon={<MenuIcon/>} onClick={() => setIconMode(!iconMode)}></TopButton>

        {/*controls*/}
        <Flex align={"center"} spacing={3} right>
            <TopButton icon={<TuneIcon/>}></TopButton>
            <Button onClick={toggleTheme}>Change Theme</Button>
        </Flex>
    </ContentAside>

}
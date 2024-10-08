import {
    Container,
    LayoutAside,
    ContentAside,
    TreeMenu,
    matrix,
    Button,
    Flex,
    setTheme,
    Slider, TypoH6, TypoH4, SlideChangeEvent
} from "../lib";
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';
import {useState} from "react";
import {menuData} from "./menu.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import logo from "./assert/logo-sm.svg"
import styled from "@emotion/styled";

const TestSlideBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const TestSlideImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
`

const TestSlideText = styled.div`
    position: absolute;
    left: 0;
    bottom: 8rem;
    width: 100%;
    z-index: 200;
    text-align: center;
    color: white;
    opacity: 0;
    transition: opacity 1s ease-in-out;

    &.show {
        opacity: 1;
    }
`


const TopButton = matrix(Button, {size: 13, mode: "link"})

export const App = () => {
    const [themeStatus, setThemeStatus] = useState(true)
    const [iconMode, setIconMode] = useState(false)
    const toggleTheme = () => {
        setTheme({model: themeStatus ? "dark" : "light"})
        setThemeStatus(!themeStatus)
    }

    const onBeforeChange = ({fromSlide, toSlide}: SlideChangeEvent) => {
        const child = fromSlide.querySelector("div")
        const toChild = toSlide.querySelector("div")
        if (child !== null) {
            child.classList.remove("show")
        }
        if (toChild !== null) {
            toChild.classList.remove("show")
        }
    }

    const onAfterChange = ({toSlide}: SlideChangeEvent) => {
        const child = toSlide.querySelector("div")
        if (child !== null) {
            child.classList.add("show")
        }
    }
    return (
        <Container flex={"column"} spacing={3}>

            <ContentAside size={"auto"} align={"center"}>
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

            <LayoutAside flex={"row"}>
                {/* menu left side*/}
                <ContentAside size={"auto"}>
                    <TreeMenu menuData={menuData}
                              iconMode={iconMode}
                              minWidth={240}/>
                </ContentAside>

                <ContentAside>
                    <Slider width={"66%"} aspectRatio={5 / 3} loop
                            indicator
                            beforeChange={onBeforeChange}
                            afterSlideShow={onAfterChange}>
                        <TestSlideBlock>
                            <TestSlideImage style={{width: "100%"}}
                                            src={"http://view.jqueryfuns.com/2023/3/6/499645bc04e396f0b7bf573bdbe46f0d/static/picture/img-1.jpg"}/>
                            <TestSlideText>
                                <TypoH4>" IBM Plex Sans"</TypoH4>
                                <TypoH6>All HTML headings,sans-serif, h1 through h6, are available.</TypoH6>
                            </TestSlideText>
                        </TestSlideBlock>
                        <TestSlideBlock>
                            <TestSlideImage style={{width: "100%"}}
                                            src={"http://view.jqueryfuns.com/2023/3/6/499645bc04e396f0b7bf573bdbe46f0d/static/picture/img-2.jpg"}/>
                            <TestSlideText>
                                <TypoH4>" IBM Plex Sans"</TypoH4>
                                <TypoH6>All HTML headings,sans-serif, h1 through h6, are available.</TypoH6>
                            </TestSlideText>
                        </TestSlideBlock>
                        <TestSlideBlock>
                            <TestSlideImage style={{width: "100%"}}
                                            src={"http://view.jqueryfuns.com/2023/3/6/499645bc04e396f0b7bf573bdbe46f0d/static/picture/img-3.jpg"}/>
                            <TestSlideText>
                                <TypoH4>" IBM Plex Sans"</TypoH4>
                                <TypoH6>All HTML headings,sans-serif, h1 through h6, are available.</TypoH6>
                            </TestSlideText>
                        </TestSlideBlock>
                        <TestSlideBlock>
                            <TestSlideImage style={{width: "100%"}}
                                            src={"http://view.jqueryfuns.com/2023/3/6/499645bc04e396f0b7bf573bdbe46f0d/static/picture/img-4.jpg"}/>
                            <TestSlideText>
                                <TypoH4>" IBM Plex Sans"</TypoH4>
                                <TypoH6>All HTML headings,sans-serif, h1 through h6, are available.</TypoH6>
                            </TestSlideText>
                        </TestSlideBlock>
                        <TestSlideBlock>
                            <TestSlideImage style={{width: "100%"}}
                                            src={"http://view.jqueryfuns.com/2023/3/6/499645bc04e396f0b7bf573bdbe46f0d/static/picture/img-5.jpg"}/>
                            <TestSlideText>
                                <TypoH4>" IBM Plex Sans"</TypoH4>
                                <TypoH6>All HTML headings,sans-serif, h1 through h6, are available.</TypoH6>
                            </TestSlideText>
                        </TestSlideBlock>
                        <TestSlideBlock>
                            <TestSlideImage style={{width: "100%"}}
                                            src={"http://view.jqueryfuns.com/2023/3/6/499645bc04e396f0b7bf573bdbe46f0d/static/picture/img-6.jpg"}/>
                            <TestSlideText>
                                <TypoH4>" IBM Plex Sans"</TypoH4>
                                <TypoH6>All HTML headings,sans-serif, h1 through h6, are available.</TypoH6>
                            </TestSlideText>
                        </TestSlideBlock>
                    </Slider>
                </ContentAside>
            </LayoutAside>
        </Container>
    )
}
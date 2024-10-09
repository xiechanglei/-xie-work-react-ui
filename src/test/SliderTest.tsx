import {SlideChangeEvent, Slider, TypoH4, TypoH6} from "../../lib";
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
export const SliderTest = () => {

    const onBeforeChange = ({fromSlide,toSlide}: SlideChangeEvent) => {
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
    return <Slider width={"66%"} aspectRatio={5 / 3} loop
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
}
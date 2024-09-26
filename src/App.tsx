import "./app.css"
import {Container} from "../lib/layout/Container";
import {LayoutAside, ContentAside} from "../lib/layout/Aside";
import styled from "@emotion/styled";
import {TreeMenu} from "../lib/display/TreeMenu";
import {
    CottageTwoTone,
    AssignmentIndTwoTone,
    SettingsTwoTone,
    ListAltTwoTone,
    TvTwoTone,
    GppGoodTwoTone,
    VpnKeyTwoTone,
    BadgeTwoTone,
    CardTravelTwoTone,
    CloudTwoTone,
    AnalyticsTwoTone
} from '@mui/icons-material';
import {useState} from "react";
import {setTheme} from "../lib";
// bx-terminal bx-calendar bx-briefcase-alt-2 bx-receipt bx-task
const menuData = [
    {
        id: "1",
        icon: <CottageTwoTone/>,
        title: 'Dashboard',
        children: [
            {
                id: "1-1",
                icon: <CottageTwoTone/>,
                title: 'Login',
                children: [
                    {
                        id: "1-1-1",
                        icon: <CottageTwoTone/>,
                        title: 'Login',
                    },
                    {
                        id: "1-2-1",
                        icon: <AssignmentIndTwoTone/>,
                        title: 'Register',
                    },
                    {
                        id: "1-3-1",
                        icon: <SettingsTwoTone/>,
                        title: 'Email Verification',
                    }
                ]
            },
            {
                id: "1-2",
                icon: <AssignmentIndTwoTone/>,
                title: 'Register',
            },
            {
                id: "1-3",
                icon: <SettingsTwoTone/>,
                title: 'Email Verification',
            }
        ]
    },
    {
        id: "2",
        icon: <AssignmentIndTwoTone/>,
        title: 'Apps',
        children: [
            {
                id: "2-1",
                icon: <CottageTwoTone/>,
                title: 'Login',
                children: [
                    {
                        id: "2-1-1",
                        icon: <CottageTwoTone/>,
                        title: 'Login',
                    },
                    {
                        id: "2-2-1",
                        icon: <AssignmentIndTwoTone/>,
                        title: 'Register',
                    },
                    {
                        id: "2-3-1",
                        icon: <SettingsTwoTone/>,
                        title: 'Email Verification',
                    }
                ]
            }
        ]
    },
    {
        id: "3",
        icon: <SettingsTwoTone/>,
        title: 'Authentication', children: [
            {
                id: "3-1",
                icon: <CottageTwoTone/>,
                title: 'Login',
                children: [
                    {
                        id: "3-1-1",
                        icon: <CottageTwoTone/>,
                        title: 'Login',
                    },
                    {
                        id: "3-2-1",
                        icon: <AssignmentIndTwoTone/>,
                        title: 'Register',
                    },
                    {
                        id: "3-3-1",
                        icon: <SettingsTwoTone/>,
                        title: 'Email Verification',
                    }
                ]
            }
        ]
    },
    {
        id: "4",
        icon: <ListAltTwoTone/>,
        title: 'Pages',
        children: [
            {
                id: "4-1",
                icon: <CottageTwoTone/>,
                title: 'Login',
                children: [
                    {
                        id: "4-1-1",
                        icon: <CottageTwoTone/>,
                        title: 'Login',
                    },
                    {
                        id: "4-2-1",
                        icon: <AssignmentIndTwoTone/>,
                        title: 'Register',
                    },
                    {
                        id: "4-3-1",
                        icon: <SettingsTwoTone/>,
                        title: 'Email Verification',
                    }
                ]
            }
        ]
    }, {
        id: "5",
        icon: <TvTwoTone/>,
        title: 'Components',
    }, {
        id: "6",
        icon: <GppGoodTwoTone/>,
        title: 'Extended',
    }
    , {
        id: "7",
        icon: <CloudTwoTone/>,
        title: 'Forms',
    }
    , {
        id: "8",
        icon: <CardTravelTwoTone/>,
        title: 'Tables',
    }
    , {
        id: "9",
        icon: <BadgeTwoTone/>,
        title: 'Icons',
    }
    , {
        id: "10",
        icon: <VpnKeyTwoTone/>,
        title: 'Multi Level',
    }, {
        id: "11",
        icon: <AnalyticsTwoTone/>,
        title: 'Charts',
    }
]

const ToggleThemeButton = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    background: #009933;
    color: #ffffff;
    z-index: 1000;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
`


export const App = () => {
    const [themeStatus, setThemeStatus] = useState(true)
    const [iconMode, setIconMode] = useState(false)
    const toggleTheme = () => {
        setTheme({model: themeStatus ? "dark" : "light"})
        setThemeStatus(!themeStatus)
    }
    const toggleIconMode = () => {
        setIconMode(!iconMode)
    }
    return (
        <Container flex={"column"} gap={1}>
            <ToggleThemeButton onClick={toggleTheme}>change theme</ToggleThemeButton>
            <ContentAside size={50}>
                header
            </ContentAside>
            <LayoutAside flex={"row"}>
                <ContentAside size={"auto"}>
                    <TreeMenu menuData={menuData} iconMode={iconMode} minWidth={220} onOpenMenu={console.log}/>
                </ContentAside>
                <ContentAside>
                    <button onClick={toggleIconMode}>click me</button>
                </ContentAside>
            </LayoutAside>
        </Container>
    )
}
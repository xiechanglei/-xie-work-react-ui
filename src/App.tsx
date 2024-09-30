import {Container} from "../lib/layout/Container";
import {LayoutAside, ContentAside} from "../lib/layout/Aside";
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
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';
import {useState} from "react";
import {Button, Flex, setTheme} from "../lib";
import {matrix} from "../lib/global";

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
                <TopButton icon={<MenuIcon/>} onClick={() => setIconMode(!iconMode)}></TopButton>
                <Flex align={"center"} spacing={3} right>
                    <TopButton icon={<TuneIcon/>}></TopButton>
                    <Button onClick={toggleTheme}>Change Theme</Button>
                </Flex>
            </ContentAside>
            <LayoutAside flex={"row"}>
                <ContentAside size={"auto"}>
                    <TreeMenu menuData={menuData}
                              iconMode={iconMode}
                              minWidth={240}/>
                </ContentAside>
                <ContentAside>
                    <div>
                        <Button size={"small"} mode={"outline"} icon={<AccessAlarmsIcon fontSize={"large"}/>}>Test
                            Animation</Button>
                    </div>
                </ContentAside>
            </LayoutAside>
        </Container>
    )
}
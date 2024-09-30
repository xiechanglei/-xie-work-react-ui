import {
    AnalyticsTwoTone,
    AssignmentIndTwoTone, BadgeTwoTone, CardTravelTwoTone, CloudTwoTone,
    CottageTwoTone,
    GppGoodTwoTone,
    ListAltTwoTone,
    SettingsTwoTone,
    TvTwoTone, VpnKeyTwoTone
} from "@mui/icons-material";

export const menuData = [
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
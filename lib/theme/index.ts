export * from "./type";
import {useEffect, useId, useState} from "react";

export type {ThemeConfig} from "./type";
import {ThemeConfig} from "./type";
import {appendBaseStyle} from "./base";

export const UI_PREFIX = "xui-";

// 深色主题必须要修改的配置
const darkTheme: ThemeConfig = {
    model: "dark",
    background: "#323437",
    subText: "#99a4b1",
    text: "#adb5bd",
    boxShadow: "0.1rem 0.1rem 0.3rem #000",
}

// 浅色主题必须要修改的配置
const lightTheme: ThemeConfig = {
    model: "light",
    background: "#ffffff",
    subText: "#545a6d",
    text: "#000000",
    boxShadow: "0.1rem 0.1rem 0.3rem #333",
}


// 主题配置，默认为浅色主题
const themeConfig: ThemeConfig = {
    ...lightTheme,
    primary: "#5156be",
    info: "#4ba6ef",
    secondary: "#74788d",
    success: "#2ab57d",
    warning: "#ffbf53",
    error: "#fd625e",
    borderRadius: "0",
    contentPadding: "0.5rem",
}
const themeChangeCallbacks = new Map<string, () => void>()


export const setTheme = (config: ThemeConfig) => {
    if (config.model === "dark") {
        Object.assign(themeConfig, darkTheme)
    } else if (config.model === "light") {
        Object.assign(themeConfig, lightTheme)
    }
    Object.assign(themeConfig, config)
    for (const callBack of themeChangeCallbacks.values()) {
        callBack();
    }
}


export const useTheme = () => {
    const id = useId();
    const [theme, setTheme] = useState({...themeConfig});
    useEffect(() => {
        themeChangeCallbacks.set(id, () => setTheme({...themeConfig}))
        return () => {
            themeChangeCallbacks.delete(id)
        }
    }, [])
    return theme
}

appendBaseStyle();
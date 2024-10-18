import {useEffect, useId, useState} from "react";
import {ThemeConfig} from "./type";
import {appendBaseStyle} from "./base";
export type {ThemeConfig} from "./type";

export const UI_PREFIX = "xui-";

// 深色主题必须要修改的配置
const darkTheme: ThemeConfig = {
    model: "dark",
    background: "#323437",
    subText: "#99a4b1",
    text: "#dddddd",
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
    borderRadius: "3px",
    contentPadding: "0.5rem",
    componentShape: "radius",
    contentShape: "radius",
}
const themeChangeCallbacks = new Map<string, () => void>()

/**
 * 设置主题，
 * 如果需要静态定制主题，建议在应用初始化的时候设置，比如main.tsx中全局初始化，不建议在组件的useEffect中设置，这样会导致组件的重复渲染，影响性能
 * 当然，动态渲染可以在专门的组件中进行设置，比如更换黑夜模式等
 * @param config
 */
export const setTheme = (config: ThemeConfig) => {
    if (config.model === "dark") {
        Object.assign(themeConfig, darkTheme)
    } else if (config.model === "light") {
        Object.assign(themeConfig, lightTheme)
    }
    Object.assign(themeConfig, config)
    // 下一次渲染时，会自动更新主题
    themeChangeCallbacks.forEach(callback => callback())
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
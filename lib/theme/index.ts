import {useEffect, useId, useState} from "react";

export const UI_PREFIX = "xui-";

export type ThemeConfig = {
    model?: "dark" | "light",// 主题模式
    borderRadius?: string, // 边框圆角
    contentPadding?: string, // 内容的padding
    background?: string, // 背景色，#FFFFFF 格式
    boxShadow?: string, // 阴影
    primary?: string, // 主色，#FFFFFF 格式
    text?: string, // 文本色，#FFFFFF 格式
    subText?: string, // 次文本色，#FFFFFF 格式
    secondary?: string, // 辅色，#FFFFFF 格式
    success?: string, // 成功色，#FFFFFF 格式
    warning?: string, // 警告色，#FFFFFF 格式
    error?: string, // 错误色，#FFFFFF 格式
}

// 深色主题必须要修改的配置
const darkTheme: ThemeConfig = {
    model: "dark",
    background: "#313533",
    subText: "#99a4b1",
    boxShadow: "0 0 5rem #000",
}

// 浅色主题必须要修改的配置
const lightTheme: ThemeConfig = {
    model: "light",
    background: "#ffffff",
    subText: "#545a6d",
    boxShadow: "0 0 5rem #aaa",
}


// 主题配置，默认为浅色主题
const themeConfig: ThemeConfig = {
    ...lightTheme,
    primary: "#5156be",
    // borderRadius: "0.2em",
    borderRadius: "none",
    contentPadding: "5rem",
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
    const [theme, setTheme] = useState(themeConfig);
    useEffect(() => {
        themeChangeCallbacks.set(id, () => setTheme(themeConfig))
        return () => {
            themeChangeCallbacks.delete(id)
        }
    }, [])
    return theme
}

const autoSetRem = () => {
    // const baseSize = 14;
    // const baseWidth = 1920;
    // const clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = "1px";
}


window.addEventListener("resize", () => {
    // todo 防抖
    autoSetRem();
});

autoSetRem();
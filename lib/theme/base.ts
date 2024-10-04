// todo 适配移动端
import {debounce} from "../global/performance";

export const autoSetRem = () => {
    // const baseSize = 14;
    // const baseWidth = 1920;
    // const clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = "10px";
}

/**
 * 页面加载之后自动添加基础样式
 */
export const appendBaseStyle = () => {
    const baseStyle = document.createElement("style");
    baseStyle.innerHTML = `
     body, #root {
            height: 100vh;
            margin: 0;
            padding: 0;
            line-height: 1.5;
            font-size: 1.5rem;
        }
        
        * {
            scroll-behavior: smooth;
        }
       
        ::-webkit-scrollbar {
            width: 0.3rem;
            height: 0.31rem;
        }
        ::-webkit-scrollbar-thumb {
            background: #e1e1e1;
            border-radius: 0.15rem;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #999;
        }
        
    `;
    document.head.appendChild(baseStyle);
    autoSetRem();
    window.addEventListener("resize", debounce(autoSetRem, 300));
}
import React, {ReactNode} from "react";
import {UI_PREFIX} from "../theme";

/**
 * Add prefix to class name
 * @param currentName
 */
export const uiClassName = (currentName: string) => {
    return UI_PREFIX + currentName
}

/**
 * 合并所有的className
 * @param classNames
 */
export const mixClassName = (...classNames: (string | undefined)[]) => {
    return classNames.filter(Boolean).join(" ")
}

/**
 * 获取组件的属性类型声明
 * @param T 组件类型
 *
 * @auther xie
 */
export type inferComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * 对组件进行公共参数的封装，形成模板组件
 * @param component
 * @param commonProps
 *
 * @auther xie
 */
export function matrix<T extends React.FunctionComponent | React.ComponentClass>(component: T, commonProps: inferComponentProps<T>): (props: inferComponentProps<T>) => ReactNode {
    return (props: inferComponentProps<T>) => {
        return React.createElement(component, {...commonProps, ...props}) as unknown as ReactNode;
    }
}
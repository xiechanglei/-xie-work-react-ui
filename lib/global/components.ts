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
 * add prefix to class name and merge with props
 * @param props
 * @param currentName
 */
export const mixinClassName = (props: React.HTMLAttributes<HTMLElement>, currentName: string) => {
    currentName = uiClassName(currentName);
    return props.className ? currentName + " " + props.className : currentName
}

/**
 * Get component props type
 */
export type inferComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * 对组件进行公共参数的封装，形成模板组件
 * @param component
 * @param commonProps
 */
export function matrix<T extends React.FunctionComponent | React.ComponentClass>(component: T, commonProps: inferComponentProps<T>): (props: inferComponentProps<T>) => ReactNode {
    return (props: inferComponentProps<T>) => {
        return React.createElement(component, {...commonProps, ...props}) as unknown as ReactNode;
    }
}

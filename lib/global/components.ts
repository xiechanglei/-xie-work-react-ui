import React from "react";
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
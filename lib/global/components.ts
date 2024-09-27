import React from "react";
import {UI_PREFIX} from "../theme";

export const uiClassName = (currentName: string) => {
    return UI_PREFIX + currentName
}

export const mixinClassName = (props: React.HTMLAttributes<HTMLElement>, currentName: string) => {
    currentName = uiClassName(currentName);
    return props.className ? currentName + " " + props.className : currentName
}
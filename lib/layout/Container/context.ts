import React from "react";
import {FlexDirection} from "../../global/enums";

export const ContainerContext = React.createContext<{ direction?: FlexDirection, spacing?: number | string }>({})
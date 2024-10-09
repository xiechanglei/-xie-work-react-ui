import {useReducer} from "react";
import {RippleElementAction, RippleElementProps} from "./type";

export const useRippleReducer = () => {
    const [rippleElementProps, rippleElementAction] = useReducer((state: RippleElementProps[], action: RippleElementAction) => {
        if (action.type === "remove") {
            return state.filter(props => props.rippleKey !== action.payload);
        } else {
            return [...state, action.payload as RippleElementProps];
        }
    }, []);
    return {rippleElementProps, rippleElementAction}
}


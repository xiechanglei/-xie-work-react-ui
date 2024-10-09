export type RippleElementProps = {
    x: number,
    y: number,
    size: number,
    onHidden: (rippleKey: number) => void,
    rippleKey: number
}

export type RippleElementAction = {
    type: "show" | "hide" | "remove",
    payload?: RippleElementProps | number
}
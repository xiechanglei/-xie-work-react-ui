export const formatSize = (size?: number | string) => {
    if (size === undefined) {
        return 0;
    }
    if (typeof size === "number") {
        return size + "px"
    }
    return size
}
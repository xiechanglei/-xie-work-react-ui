/**
 * 对元素的尺寸单位进行格式化，如果是数字则加上px单位
 * @param size
 */
export const formatSize = (size?: number | string) => {
    if (size === undefined) {
        return 0;
    }
    if (typeof size === "number") {
        return size + "px"
    }
    return size
}
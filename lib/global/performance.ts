/**
 * 防抖函数
 */
export function debounce(fn: () => void, delay: number) {
    let timer: unknown = 0;
    return function () {
        if (timer) {
            clearTimeout(timer as number);
        }
        timer = setTimeout(() => fn(), delay);
    };
}
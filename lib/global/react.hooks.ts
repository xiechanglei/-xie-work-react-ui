import {useEffect} from "react";

/**
 * 挂载时执行的effect
 * @param callback
 */
export const useMountEffect = (callback: () => void) => {
    useEffect(callback, []);
}

export const useAsyncEffect = (callback: () => Promise<void>, deps: unknown[] = []) => {
    useEffect(() => {
        callback();
    }, deps);
}

/**
 * 延迟执行的effect
 */
export const useTimeoutEffect = (callback: () => void, delay: number, deps: unknown[] = []) => {
    useEffect(() => {
        const timer = setTimeout(callback, delay);
        return () => clearTimeout(timer);
    }, deps);
}

/**
 * 间隔执行的effect
 */
export const useIntervalEffect = (callback: () => void, delay: number, deps: unknown[] = []) => {
    useEffect(() => {
        const timer = setInterval(callback, delay);
        return () => clearInterval(timer);
    }, deps);
}
import {EffectCallback, useEffect, useState} from "react";
import {randomId} from "./random.ts";

/**
 * 挂载时执行的effect
 * @param callback
 */
export const useMountEffect = (callback: EffectCallback) => useEffect(callback, []);

/**
 * 异步effect，简化代码
 * @param callback
 * @param deps
 */
export const useAsyncEffect = (callback: () => Promise<void>, deps: unknown[] = []) => {
    useEffect(() => {
        callback();
    }, deps);
}

/**
 * 挂载时的异步effect
 * @param callback
 */
export const useAsyncMountEffect = (callback: () => Promise<void>) => {
    useEffect(() => {
        callback();
    }, []);
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

/**
 * 产生随机id
 */
export function useId(): string {
    const [id,] = useState<string>(randomId(16))
    return id
}

/**
 * 控制加载状态的hook，同时只有一个请求在进行
 */
export const usePending = () => {
    const [isPending, setIsPending] = useState(false);
    const withPending = function <T extends (...args: never[]) => G, G>(func: T): T {

        const composeFunction = async (...args: never[]) => {
            if (isPending) {
                throw new Error("pending,please wait");
            }
            setIsPending(true);
            try {
                const result = await func(...args);
                setIsPending(false);
                return result;
            } catch (e) {
                setIsPending(false);
                throw e;
            }
        };
        return composeFunction as T;
    }
    return {isPending, withPending}
}
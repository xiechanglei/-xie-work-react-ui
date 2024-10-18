/**
 * 将对应的属性从对象中删除, 返回新的对象
 */
export function omitProperties<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
    const result = {...obj};
    keys.forEach((key) => delete result[key]);
    return result;
}

/**
 * 默认值函数
 * @param value
 * @param defaultValue
 */
export function withDefault<T>(value: T | undefined | null, defaultValue: T): T {
    return value === undefined || value === null ? defaultValue : value;
}
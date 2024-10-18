const stringSeed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/**
 * 随机生成指定长度的字符串
 */
export function randomString(min: number, max: number = min): string {
    let result = ''
    for (let i = 0; i < Math.floor(Math.random() * (max - min + 1) + min); i++) {
        result += stringSeed.charAt(Math.floor(Math.random() * stringSeed.length))
    }
    return result
}

/**
 * 随机生成数字字符串
 */
export function randomNumberString(min: number, max: number = min): string {
    let result = ''
    for (let i = 0; i < Math.floor(Math.random() * (max - min + 1) + min); i++) {
        result += Math.floor(Math.random() * 10)
    }
    return result
}

/**
 * 随机生成数字
 */
export function randomNumber(min: number, max: number = min): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 随机电话号码
 */
const numberPrefixDict = ['13', '14', '15', '16', '17', '18', '19']

export function randomPhone(): string {
    return randomArrayElement(...numberPrefixDict) + randomNumberString(9)
}


/**
 * 随机生成布尔值
 */
export function randomBoolean(): boolean {
    return Math.random() > 0.5
}

/**
 * 随机生成指定数组内的元素
 */
export function randomArrayElement<T>(...array: T[]): T {
    return array[Math.floor(Math.random() * array.length)]
}


const seed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function randomId(length: number = 32): string {
    let generatedId = ""
    for (let i = 0; i < length; i++) {
        generatedId += seed.charAt(Math.floor(Math.random() * seed.length))
    }
    return generatedId
}
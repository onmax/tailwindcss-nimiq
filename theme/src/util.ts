// This functions add alpha values given to an hexadecimal color
export function hexOpacity(color: string, alpha: number) {
    if (alpha < 0 || alpha > 100) {
        throw new Error('Invalid alpha, use a value between 0 and 100')
    }
    const normalized = Math.round((alpha * 255) / 100)
    return `${color}${normalized.toString(16).padStart(2, '0')}`
}

export function round(num: number) {    
    return num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, '$1')
        .replace(/\.0$/, '')
}

export const rem = (px: number) => `${round(px / 16)}rem`
export const em = (px: number, base: number) => `${round(px / base)}em`

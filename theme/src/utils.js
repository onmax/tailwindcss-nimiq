// This functions add alpha values given to an hexadecimal color
// @param color
// @param alpha must be value between 0 and 100
const hexOpacity = (
    /** @type {string} */ color,
    /** @type {number} */ alpha
) => {
    if (alpha < 0 || alpha > 100) {
        throw new Error('Invalid alpha, use a value between 0 and 100')
    }
    const normalized = Math.round((alpha * 255) / 100)
    return `${color}${normalized.toString(16).padStart(2, '0')}`
}

const round = (num) =>
    num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, '$1')
        .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
    hexOpacity,
    round,
    rem,
    em
}
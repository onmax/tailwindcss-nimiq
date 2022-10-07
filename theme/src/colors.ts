import { hexOpacity } from "./util"

export const opacitiesValues = [6, 10, 15, 20, 40, 60, 70, 80]
const levels = opacitiesValues.map((_, i) => (i + 1) * 100)

// Given the baseColor, generate a list of colors with different opacities
// and put it in an object with a number(100-900) for each one
function getLevels(baseColor: `#${string}`, name: string) {
    return opacitiesValues
        .map((_, i) => hexOpacity(baseColor, opacitiesValues[i]))
        .reduce((acc, color, i) =>
            ({ ...acc, [`${name}-${levels[i]}`]: color }),
            { DEFAULT: baseColor }) as Record<string, string>
}

const gold = getLevels('#E9B213', 'gold')
const honey = getLevels('#E5A212', 'honey')

const carrot = getLevels('#EB971C', 'carrot')
const pumpkin = getLevels('#FC8702', 'pumpkin')
const fire = getLevels('#FC7500', 'fire')

const cherry = getLevels('#D94432', 'cherry')
const tomato = getLevels('#D13030', 'tomato')
const salmon = getLevels('#FF5C48', 'salmon')

const mint = getLevels('#2CC78F', 'mint')
const algae = getLevels('#21BCA5', 'algae')
const keppel = getLevels('#20B29E', 'keppel')
const pistachio = getLevels('#88B04B', 'pistachio')

const soil = getLevels('#795548', 'soil')
const grape = getLevels('#5F4B8B', 'grape')
const flamingo = getLevels('#FA7268', 'flamingo')

const space = getLevels('#1F2348', 'space')
const sky = getLevels('#0582CA', 'sky')
const ocean = getLevels('#2C72C7', 'ocean')

// We leave out for now:
// - darker space: 151833
// - darker sky: 0071C3
// - 'blue-on-dark': '#0CA6FE',
// - 'darker-blue-on-dark': '#0E99EC',
// - darker grey EDF1F7
// - darker platinum 3B4C6A
// space dimmed: 2A2E51
// keppel darker: '#13B59D'
// orange darkenned #d67302

export const colors = {
    transparent: 'transparent',
    current: 'currentColor',

    white: '#fff',
    black: '#000',

    btc: '#F7931A',
    nim: '#F6C430',

    snow: '#F8F8F8',
    fog: '#F1F1F1',
    ash: '#E9E9EB',

    gold,
    honey,

    carrot,
    pumpkin,
    fire,

    cherry,
    tomato,
    salmon,

    flamingo,

    mint,
    pistachio,
    algae,
    keppel,

    sky,
    ocean,
    space,

    grape,

    soil,
}
import { theme } from '../../../../theme/src/theme'
import { opacitiesValues as opacitiesValues_ } from '../../../../theme/src/colors'

export const opacitiesValues = opacitiesValues_;
export const { colors, backgroundImage: bgGradients, spacing, borderRadius } = theme

const extractNumber = (name: string) => name.match(/\d+/)?.[0] || ''

const colorsBlackList = ['transparent', 'current', 'black', 'white']
const greysList = ['snow', 'fog', 'ash']
const entitiesList = ['btc', 'nim'] // s3...

type Variant = { name: string, color: string }
type Color = { name: string, primary?: string, colors?: Variant[] }
export function getColors() {
    const colorsWithVariants = [] as Color[]
    const entities = [] as Variant[]
    const greys = [] as Variant[]

    Object.entries<Record<string, string | Variant>>(colors as {}).forEach(([key, value]) => {
        if (colorsBlackList.includes(key)) return
        if (greysList.includes(key)) {
            greys.push({ name: key, color: value as unknown as string })
        } else if (entitiesList.includes(key)) {
            entities.push({ name: key, color: value as unknown as string })
        } else {
            const primary = value.DEFAULT as string
            // remove .DEFAULT and save new object in variable
            const colors = Object.entries(value)
                .filter(([k, _]) => k !== 'DEFAULT')
                .map(([name, color]) => ({ name: extractNumber(name), color } as Variant))
            colorsWithVariants.push({ name: key, primary, colors })
        }
    })

    colorsWithVariants.unshift({
        name: 'Mono',
        colors: [
            ...greys,
            { name: 'white', color: '#ffffff' },
            { name: 'black', color: '#000000' }
        ]
    })


    colorsWithVariants.unshift({ name: 'Entities', colors: entities })

    return {
        colorsWithVariants,
        entities,
        greys,
    }
}

export function getGradients() {
    const { colorsWithVariants } = getColors()
    const colorsNames = colorsWithVariants.map(({ name }) => name)
    const nimiqGradients = Object.entries(bgGradients as {}).filter(([k, _]) => colorsNames.includes(k.split('-')[1]))
    return { nimiqGradients }
}


export const remToPixel = (input: string) => {
    if (!input.includes('rem')) return input
    const rem = input.replace('rem', '')
    return `${parseFloat(rem) * 16}px`
}
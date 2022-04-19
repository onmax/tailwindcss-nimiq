// ***************************************************************************
// ***************************************************************************
// This file will be DELETED!!
// ***************************************************************************
// ***************************************************************************

const plugin = require('tailwindcss/plugin')

const NIMIQ_COMPONENTS_PREXIX = 'nq_'

module.exports = {
    content: [
        `.slicemachine/**/*.{js,ts}`,
        `assets/css/*.css`,
        `components/**/*.{vue,js,ts}`,
        `slices/**/*.{vue,js,ts}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `slices/**/*.{vue,js,ts}`,
        `nuxt.config.{js,ts}`,
    ],
    safelist: [
        {
            pattern:
                /bg-radial-(white|grey|blue-light|blue-dark|gold|green|red|brown|purple|pink|lime)/,
        },
    ],
    theme: {
        colors: {
            current: {
                DEFAULT: 'currentColor',
            },
            white: {
                DEFAULT: '#ffffff',
            },
            grey: {
                light: '#FAFAFA',
                DEFAULT: '#F3F3F3',
                dark: '#E9E9EA',
            },
            black: {
                DEFAULT: '#000000',
            },
            gold: {
                DEFAULT: '#E9B213',
                darkened: '#E5A212',
            },
            blue: {
                light: '#0582CA',
                'light-darkened': '#0071C3',
                'light-on-dark': '#0CA6FE',
                'light-on-dark-darkened': '#0E99EC',
                dark: '#1F2348',
                'dark-darkened': '#151833',
            },
            green: {
                DEFAULT: '#21BCA5',
                darkened: '#20B29E',
            },
            orange: {
                DEFAULT: '#FC8702',
                darkened: '#FC7500',
            },
            red: {
                DEFAULT: '#D94432',
                darkened: '#D13030',
                'on-dark': '#FF5C48',
            },
            brown: {
                DEFAULT: '#795548',
            },
            purple: {
                DEFAULT: '#5F4B8B',
            },
            pink: {
                DEFAULT: '#FA7268',
            },
            lime: {
                DEFAULT: '#88B04B',
            },

            // Utilities
            transparent: {
                DEFAULT: 'transparent',
            },
        },
        spacing: {
            0: '0rem',
            1: '0.0625rem',
            2: '0.125rem',
            4: '0.25rem',
            6: '0.375rem',
            8: '0.5rem',
            10: '0.625rem',
            12: '0.75rem',
            14: '0.875rem',
            16: '1rem',
            18: '1.125rem',
            20: '1.25rem',
            22: '1.375rem',
            24: '1.5rem',
            26: '1.625rem',
            28: '1.75rem',
            32: '2rem',
            40: '2.5rem',
            48: '3rem',
            56: '3.5rem',
            64: '4rem',
            72: '4.5rem',
            80: '5rem',
            96: '6rem',
            104: '6.5rem',
            112: '7rem',
            120: '7.5rem',
            128: '8rem',
            136: '8.5rem',
            144: '9rem',
            160: '10rem',
            192: '12rem',
            200: '12.5rem',
            240: '15rem',
            280: '17.5rem',
            300: '18.75rem',
            320: '20rem',
            360: '22.5rem',

            // Utilities
            full: '100%',
            unset: 'unset',
            intrinsic: 'intrinsic',
            'fit-content': 'fit-content',
        },
        fontFamily: {
            sans: [
                'Mulish',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
            ],
            mono: [
                'Fira Code',
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace',
            ],
        },
        fontWeight: {
            extralight: '200',
            light: '300',
            regular: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
            extrablack: '1000',
        },
        fontSize: {
            12: '0.75rem',
            13: '0.8125rem',
            14: '0.875rem',
            15: '0.9375rem',
            16: '1rem',
            17: '1.0625rem',
            18: '1.125rem',
            20: '1.25rem',
            21: '1.3125rem',
            22: '1.375rem',
            24: '1.5rem',
            26: '1.625rem',
            28: '1.75rem',
            32: '2rem',
            36: '2.25rem',
            40: '2.5rem',
            44: '2.75rem',
            48: '3rem',
        },
        letterSpacing: {
            normal: '0em',
            wide: '.095em',
            wider: '.17em',
        },
        lineHeight: {
            1: '1',
            1.1: '1.1',
            1.2: '1.2',
            1.3: '1.3',
            1.4: '1.4',
            1.5: '1.5',
            1.6: '1.6',
        },
        screens: {
            '2xs': '360px',
            xs: '420px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1152px',
            '2xl': '1440px',
        },
        boxShadow: {
            DEFAULT:
                '0px 18px 38px rgba(31, 35, 72, 0.07), 0px 7px 8.5px rgba(31, 35, 72, 0.04), 0px 2px 2.5px rgba(31, 35, 72, 0.02)',
            around:
                '0px 6px 20px rgba(59, 76, 106, 0.13), 0px 1.34018px 4.46726px rgba(59, 76, 106, 0.0774939), 0px 0.399006px 1.33002px rgba(59, 76, 106, 0.0525061)',
        },
        borderRadius: {
            0: '0rem',
            2: '0.125rem',
            4: '0.25rem',
            6: '0.375rem',
            8: '0.5rem',
            DEFAULT: '625rem',
        },
        borderWidth: {
            0: '0rem',
            1: '0.0625rem',
            1.5: '0.09375rem',
            2: '0.125rem',
            4: '0.25rem',
            6: '0.375rem',
            8: '0.5rem',
            DEFAULT: '0.0625rem',
        },
        extend: {
            backgroundImage: {
                'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',

                // Radial gradient backgrounds based on the previously defined theme colors
                'radial-white':
                    'radial-gradient(100% 100% at 100% 100%, theme(colors.grey.light), theme(colors.white.DEFAULT))',
                'radial-grey':
                    'radial-gradient(100% 100% at 100% 100%, #EAE9EA, theme(colors.grey.DEFAULT))',
                'radial-gold':
                    'radial-gradient(100% 100% at 100% 100%, #EC991C, theme(colors.gold.DEFAULT))',
                'radial-gold-darkened':
                    'radial-gradient(100% 100% at 100% 100%, #E58A1B, theme(colors.gold.darkened))',
                'radial-blue-dark':
                    'radial-gradient(100% 100% at 100% 100%, #260133, theme(colors.blue.dark))',
                'radial-blue-dark-darkened':
                    'radial-gradient(100% 100% at 100% 100%, #180021, theme(colors.blue.dark-darkened))',
                'radial-blue-light':
                    'radial-gradient(100% 100% at 100% 100%, #265DD7, theme(colors.blue.light))',
                'radial-blue-light-darkened':
                    'radial-gradient(100% 100% at 100% 100%, #2355C4, theme(colors.blue.light-darkened))',
                'radial-green':
                    'radial-gradient(100% 100% at 100% 100%, #41A38E, theme(colors.green.DEFAULT))',
                'radial-green-darkened':
                    'radial-gradient(100% 100% at 100% 100%, #3D9988, theme(colors.green.darkened))',
                'radial-orange':
                    'radial-gradient(100% 100% at 100% 100%, #FD6216, theme(colors.orange.DEFAULT))',
                'radial-orange-darkened':
                    'radial-gradient(100% 100% at 100% 100%, #EA5200, theme(colors.orange.darkened))',
                'radial-red':
                    'radial-gradient(100% 100% at 100% 100%, #CC3047, theme(colors.red.DEFAULT))',
                'radial-red-darkened':
                    'radial-gradient(100% 100% at 100% 100%, #BF2D46, theme(colors.red.darkened))',
                'radial-brown':
                    'radial-gradient(100% 100% at 100% 100%, #724147, theme(colors.brown.DEFAULT))',
                'radial-purple':
                    'radial-gradient(100% 100% at 100% 100%, #4D4C96, theme(colors.purple.DEFAULT))',
                'radial-pink':
                    'radial-gradient(100% 100% at 100% 100%, #E0516B, theme(colors.pink.DEFAULT))',
                'radial-lime':
                    'radial-gradient(100% 100% at 100% 100%, #70B069, theme(colors.lime.DEFAULT))',
                'radial-transparent':
                    'radial-gradient(100% 100% at 100% 100%, transparent, transparent)',
            },
            transitionProperty: {
                'transform-opacity': 'transform, opacity',
                height: 'height',
                'transform-width': 'transform, width',
                'colors-opacity':
                    'background-color, border-color, color, fill, stroke, opacity',
                'border-radius': 'border-radius',
            },
            transitionTimingFunction: {
                DEFAULT: 'cubic-bezier(0.25, 0, 0, 1)',
            },
            transitionDuration: {
                DEFAULT: '400ms',
                0: '0ms',
            },
            zIndex: {
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
            },
            aspectRatio: {
                initial: 'initial',
            },
        },
    },
    plugins: [
        require('tailwindcss-pseudo-elements'),
        require('tailwindcss-counter')(),
        function ({ addVariant }) {
            addVariant('hocus', ['&:hover', '&:focus'])
        },
        addNimiqComponents(),
        addNimiqUtilities(),
        function ({ addVariant }) {
            addVariant(
                'supports-backdrop-blur',
                '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
            )
            addVariant(
                'supports-scrollbars',
                '@supports selector(::-webkit-scrollbar)'
            )
            addVariant('children', '& > *')
            addVariant('scrollbar', '&::-webkit-scrollbar')
            addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
            addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
        },
    ],
}

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

const colors = (theme) => {
    const colorsNames = Object.keys(theme('colors'))
    return {
        darkColors: colorsNames.filter((n) =>
            [
                'black',
                'gold',
                'blue',
                'green',
                'orange',
                'red',
                'brown',
                'purple',
                'pink',
                'lime',
            ].includes(n)
        ),
        lightColors: colorsNames.filter((n) => ['white', 'grey'].includes(n)),
    }
}

const applyTextColor = (parentColors, color, alpha, alphaActive) => {
    const classes = parentColors
        .map((darkColor) => ({
            [`.nq_bg-${darkColor} &`]: {
                color: hexOpacity(color, alpha),
            },
            [`.nq_bg-${darkColor} &:hover`]: {
                color: hexOpacity(color, alphaActive),
            },
            [`.nq_bg-${darkColor} &:focus`]: {
                color: hexOpacity(color, alphaActive),
            },
            [`.nq_bg-${darkColor} .group:hover &`]: {
                color: hexOpacity(color, alphaActive),
            },
            [`.nq_bg-${darkColor} .group:focus &`]: {
                color: hexOpacity(color, alphaActive),
            },
            [`.nq_bg-${darkColor}.group:hover &`]: {
                color: hexOpacity(color, alphaActive),
            },
            [`.nq_bg-${darkColor}.group:focus &`]: {
                color: hexOpacity(color, alphaActive),
            },
        }))
        .reduce((p, n) => ({ ...p, ...n }), {})
    return classes
}

function addNimiqUtilities() {
    return plugin(function ({ addUtilities }) {
        const utilities = {
            '.text-shadow': {
                textShadow: '0px 0px 64px #000000',
            },
        }
        addUtilities(utilities)
    })
}

function addNimiqComponents() {
    return plugin(function ({ addComponents, theme: _theme }) {
        const theme = (/** @type {string} */ v) => _theme(v, '')
        const largeLabel = {
            fontWeight: theme('fontWeight.bold'),
            lineHeight: theme('lineHeight.1'),
            letterSpacing: theme('letterSpacing.wider'),
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            fontSize: theme('fontSize.16'),
            [`@media (min-width: ${theme('screens.xl')})`]: {
                fontSize: theme('fontSize.17'),
            },
            [`@media (min-width: ${theme('screens.2xl')})`]: {
                fontSize: theme('fontSize.18'),
            },
        }

        const components = {
            '.hero-subline': {
                fontWeight: theme('fontWeight.bold'),
                fontSize: theme('fontSize.20'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    fontSize: theme('fontSize.22'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    fontSize: theme('fontSize.24'),
                },
            },
            '.subline': {
                fontSize: theme('fontSize.20'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    fontSize: theme('fontSize.22'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    fontSize: theme('fontSize.24'),
                },
            },
            '.boldline': {
                fontWeight: theme('fontWeight.bold'),
                lineHeight: theme('lineHeight.1.6'),
                fontSize: theme('fontSize.20'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    fontSize: theme('fontSize.22'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    fontSize: theme('fontSize.24'),
                },
            },
            '.large-text': {
                fontSize: theme('fontSize.26'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    fontSize: theme('fontSize.28'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    fontSize: theme('fontSize.32'),
                },
            },
            '.medium-text': {
                fontSize: theme('fontSize.16'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    fontSize: theme('fontSize.18'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    fontSize: theme('fontSize.20'),
                },
            },
            '.small-text': {
                fontSize: theme('fontSize.14'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    fontSize: theme('fontSize.15'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    fontSize: theme('fontSize.16'),
                },
            },
            '.large-label': { ...largeLabel },
            '.small-label': {
                fontWeight: theme('fontWeight.bold'),
                lineHeight: theme('lineHeight.1'),
                letterSpacing: theme('letterSpacing.wide'),
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                fontSize: theme('fontSize.12'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    fontSize: theme('fontSize.13'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    fontSize: theme('fontSize.14'),
                },
            },
            // TODO Rename to is-pill to pill
            '.pill': {
                width: 'fit-content',
                padding: `${theme('spacing.10')} ${theme('spacing.20')}`,
                borderColor: hexOpacity(theme('colors.blue.dark'), 50),
                borderWidth: theme('borderWidth.1.5'),
                borderStyle: 'solid',
                ...largeLabel,
            },
            '.header-link': {
                // TODO Rename this class
                fontWeight: theme('fontWeight.bold'),
                transitionProperty: theme('transitionProperty.colors-opacity'),
                transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
                transitionDuration: theme('transitionDuration.DEFAULT'),
                cursor: 'default',
                fontSize: theme('fontSize.14'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    fontSize: theme('fontSize.15'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    fontSize: theme('fontSize.16'),
                },
                ...applyTextColor(
                    colors(theme).lightColors,
                    theme('colors.white.DEFAULT'),
                    70,
                    100
                ),
                ...applyTextColor(
                    colors(theme).darkColors,
                    theme('colors.blue.dark'),
                    50,
                    80
                ),
            },
            '.r-mt-96': {
                marginTop: theme('spacing.80'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.96'),
                },
            },
            '.r-mt-72': {
                marginTop: theme('spacing.64'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.72'),
                },
            },
            '.r-mt-48': {
                marginTop: theme('spacing.32'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.40'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    marginTop: theme('spacing.48'),
                },
            },
            '.r-mt-40': {
                marginTop: theme('spacing.32'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.40'),
                },
            },
            '.r-mt-32': {
                marginTop: theme('spacing.24'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.32'),
                },
            },
            '.r-mt-24': {
                marginTop: theme('spacing.16'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.24'),
                },
            },
            '.r-mt-16': {
                marginTop: theme('spacing.12'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.16'),
                },
            },
            '.r-mt-12': {
                marginTop: theme('spacing.8'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.12'),
                },
            },
            '.pt-360': {
                paddingTop: theme('spacing.300'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.360'),
                },
            },
            '.pt-240': {
                paddingTop: theme('spacing.200'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.240'),
                },
            },
            '.pt-136': {
                paddingTop: theme('spacing.104'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.120'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    marginTop: theme('spacing.136'),
                },
            },
            '.pt-96': {
                paddingTop: theme('spacing.80'),
                [`@media (min-width: ${theme('screens.xl')})`]: {
                    marginTop: theme('spacing.96'),
                },
            },
            '.absolutely-centered': {
                // TODO Move to utility
                position: 'absolute',
                left: '50%',
                top: '50%',
                '--tw-translate-x': '-50%',
                '--tw-translate-y': '-50%',
                transform:
                    'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));',
            },
            '.shadow-border': {
                // TODO Move to utility
                borderWidth: theme('borderWidth.1'),
                borderStyle: 'solid',
                borderColor: theme('colors.grey.DEFAULT'),
                shadow: theme('boxShadow.DEFAULT'),
            },
            '.two-blocks': {
                // TODO Review this sizing
                display: 'grid',
                columnGap: theme('spacing.160'),
                rowGap: theme('spacing.160'),
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                [`@media (min-width: ${theme('screens.md')})`]: {
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                },
            },
            '.three-blocks': {
                // TODO Review this sizing
                display: 'grid',
                gap: theme('spacing.48'),
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                [`@media (min-width: ${theme('screens.md')})`]: {
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                },
                [`@media (min-width: ${theme('screens.lg')})`]: {
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: theme('spacing.72'),
                },
                [`@media (min-width: ${theme('screens.2xl')})`]: {
                    gap: theme('spacing.80'),
                },
            },
        }

        const nqComponents = Object.keys(components).reduce(
            (acc, key) => ({
                ...acc,
                [key.replace('.', `.${NIMIQ_COMPONENTS_PREXIX}`)]: components[key],
            }),
            {}
        )
        addComponents(nqComponents)
    })
}

const colors = require('./colors')
const { rem, hexOpacity } = require('./utils')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    ...colors,
    screens: {
        '2xs': '360px',
        xs: '420px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1152px',
        '2xl': '1440px',
    },
    spacing: ({ theme }) => ({
        ...theme.screens,
        'inherit': 'inherit',
        'unset': 'unset',
        'initial': 'initial',
        0: '0px',
        px: '1px',
        0.5: rem(2),
        1: rem(4),
        1.5: rem(6),
        2: rem(8),
        2.5: rem(10),
        3: rem(12),
        3.5: rem(14),
        4: rem(16),
        5: rem(20),
        6: rem(24),
        7: rem(28),
        8: rem(32),
        9: rem(36),
        10: rem(40),
        11: rem(44),
        12: rem(48),
        14: rem(56),
        16: rem(64),
        20: rem(80),
        24: rem(96),
        28: rem(112),
        32: rem(128),
        36: rem(144),
        40: rem(160),
        44: rem(176),
        48: rem(192),
        52: rem(208),
        56: rem(224),
        60: rem(240),
        64: rem(256),
        72: rem(288),
        80: rem(320),
        96: rem(384),
    }),
    aspectRatio: {
        auto: 'auto',
        inherit: 'inherit',
        initial: 'initial',

        ...defaultTheme.aspectRatio,
    },
    backgroundImage: {
        // Default Tailwind gradient
        ...defaultTheme.backgroundImage,

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
    borderColor: () => ({
        ...colors,
        DEFAULT: colors.grey,
    }),
    borderRadius: {
        0: '0',
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
        full: '9999px',
    },
    borderWidth: {
        0: '0',
        DEFAULT: rem(1),
        1.5: rem(1.5),
        2: rem(2),
        4: rem(4),
        6: rem(6),
        8: rem(8),
        12: rem(12),
        16: rem(16),
    },
    boxShadow: {
        // Our default shadows are not great, so we allow tw's defaults
        ...defaultTheme.boxShadow,
        'tw-default': defaultTheme.boxShadow.DEFAULT,

        DEFAULT:
            '0px 18px 38px rgba(31, 35, 72, 0.07), 0px 7px 8.5px rgba(31, 35, 72, 0.04), 0px 2px 2.5px rgba(31, 35, 72, 0.02)',
        around:
            '0px 6px 20px rgba(59, 76, 106, 0.13), 0px 1.34018px 4.46726px rgba(59, 76, 106, 0.0774939), 0px 0.399006px 1.33002px rgba(59, 76, 106, 0.0525061)',

    },
    fontFamily: {
        sans: [
            'Mulish',
            ...defaultTheme.fontFamily.sans,
        ],
        mono: [
            'Fira Code',
            ...defaultTheme.fontFamily.mono,
        ],
    },
    fontSize: {
        xs: [rem(12), { lineHeight: rem(16) }],
        sm: [rem(14), { lineHeight: rem(20) }],
        base: [rem(16), { lineHeight: rem(24) }],
        lg: [rem(18), { lineHeight: rem(28) }],
        xl: [rem(20), { lineHeight: rem(28) }],
        '2xl': [rem(24), { lineHeight: rem(32) }],
        '3xl': [rem(30), { lineHeight: rem(46) }],
        '4xl': [rem(36), { lineHeight: rem(64) }],
        '5xl': [rem(48), { lineHeight: '1' }],
        '6xl': [rem(60), { lineHeight: '1' }],
        '7xl': [rem(72), { lineHeight: '1' }],
        '8xl': [rem(96), { lineHeight: '1' }],
        '9xl': [rem(128), { lineHeight: '1' }],
    },
    fontWeight: {
        thin: '100',
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
    letterSpacing: {
        tighter: '-0.095em',
        tight: '-0.025em',
        normal: '0em',
        wide: '.025em',
        wider: '.095em',
        widest: '.17em',
    },
    lineHeight: {
        none: '1',
        sm: '1.25',
        md: '1.375',
        normal: '1.5',
        lg: '1.625',
        xl: '2',
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
    },
    ringColor: () => ({
        DEFAULT: hexOpacity(colors['dark-blue'], 75),
        ...colors,
    }),
    transitionDuration: {
        DEFAULT: '400ms',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
    },

    transitionProperty: {
        height: 'height',
        'transform-width': 'transform, width',
        'border-radius': 'border-radius',
        ...defaultTheme.transitionProperty,
    },

    transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.25, 0, 0, 1)',
        ...defaultTheme.transitionTimingFunction,
    },

    zIndex: {
        // generate JSON object such as { 1: 1, 2: 2 ...} to 9
        ...Array.from({ length: 9 }, (_, k) => k + 1).reduce((acc, val) => ({ ...acc, [val]: val }), {}),

        ...defaultTheme.zIndex,
    },
};

const colors = require('./colors')
const { rem, hexOpacity } = require('./utils')

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
    spacing: {
        px: '1px',
        0: '0px',
        0.5: rem(0.5),
        1: rem(1),
        1.5: rem(1.5),
        2: rem(2),
        2.5: rem(2.5),
        3: rem(3),
        3.5: rem(3.5),
        4: rem(4),
        4.5: rem(4.5),
        5: rem(5),
        5.5: rem(5.5),
        6: rem(6),
        6.5: rem(6.5),
        7: rem(7),
        8: rem(8),
        9: rem(9),
        10: rem(10),
        11: rem(11),
        12: rem(12),
        14: rem(14),
        16: rem(16),
        18: rem(18),
        20: rem(20),
        22: rem(22),
        24: rem(24),
        26: rem(26),
        28: rem(28),
        30: rem(30),
        32: rem(32),
        34: rem(34),
        36: rem(36),
        40: rem(40),
        44: rem(44),
        48: rem(48),
        52: rem(52),
        56: rem(56),
        60: rem(60),
        64: rem(64),
        72: rem(72),
        80: rem(80),
        88: rem(88),
        96: rem(96),
    },
    aspectRatio: {
        auto: 'auto',
        inherit: 'inherit',
        initial: 'initial',

        // TODO Try to get the defaults from TW automatically
        video: '16 / 9',
    },
    backgroundImage: {
        // Default Tailwind gradient
        // TODO Try to get the defaults from TW automatically
        none: 'none',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',

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
    borderColor: ({ theme }) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray', 'currentColor'),
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
        DEFAULT:
            '0px 18px 38px rgba(31, 35, 72, 0.07), 0px 7px 8.5px rgba(31, 35, 72, 0.04), 0px 2px 2.5px rgba(31, 35, 72, 0.02)',
        around:
            '0px 6px 20px rgba(59, 76, 106, 0.13), 0px 1.34018px 4.46726px rgba(59, 76, 106, 0.0774939), 0px 0.399006px 1.33002px rgba(59, 76, 106, 0.0525061)',
        tw: {
            // Our default shadows are not great, so we allow tw's defaults
            // TODO Try to get the defaults from TW automatically
            sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
            none: 'none',
        }
    },
    fontFamily: {
        sans: [
            'Mulish',
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
        ],
        mono: [
            'Fira Code',
            'ui-monospace',
            'SFMono-Regular',
            'Menlo',
            'Monaco',
            'Consolas',
            '"Liberation Mono"',
            '"Courier New"',
            'monospace'
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
    ringColor: ({ theme }) => ({
        DEFAULT: theme(hexOpacity(colors['dark-blue'], 75)),
        ...theme('colors'),
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

        // TODO Try to get the defaults from TW automatically
        none: 'none',
        all: 'all',
        DEFAULT:
            'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        opacity: 'opacity',
        shadow: 'box-shadow',
        transform: 'transform',
    },

    transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.25, 0, 0, 1)',

        // TODO Try to get the defaults from TW automatically
        linear: 'linear',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    zIndex: {
        1: 1,

        // TODO Try to get the defaults from TW automatically
        auto: 'auto',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
    },
};

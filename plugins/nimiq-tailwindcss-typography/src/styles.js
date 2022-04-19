const colorsTw = require('tailwindcss/colors')
const colors = require('../../../src/colors')
const { hexOpacity, round, em, rem } = require('../../../src/utils')

let defaultModifiers = {
  xs: {
    css: [
      {
        fontSize: rem(14),
        lineHeight: round(26 / 14),
        p: {
          marginTop: em(16, 14),
          marginBottom: em(16, 14),
        },
        '[class~="lead"]': {
          fontSize: em(18, 14),
          lineHeight: round(28 / 18),
          marginTop: em(16, 18),
          marginBottom: em(16, 18),
        },
        blockquote: {
          marginTop: em(24, 14),
          marginBottom: em(24, 14),
          paddingLeft: em(20, 14),
        },
        h1: {
          fontSize: em(26, 14),
          marginTop: '0',
          marginBottom: em(18, 26),
          lineHeight: round(32 / 26),
        },
        h2: {
          fontSize: em(22, 14),
          marginTop: em(32, 22),
          marginBottom: em(16, 22),
          lineHeight: round(28 / 22),
        },
        h3: {
          fontSize: em(18, 14),
          marginTop: em(24, 18),
          marginBottom: em(20, 18),
          lineHeight: round(26 / 18),
        },
        h4: {
          fontSize: em(16, 14),
          marginTop: em(20, 16),
          marginBottom: em(16, 16),
          lineHeight: round(20 / 16),
        },
        img: {
          marginTop: em(20, 14),
          marginBottom: em(20, 14),
        },
        video: {
          marginTop: em(20, 14),
          marginBottom: em(20, 14),
        },
        figure: {
          marginTop: em(20, 14),
          marginBottom: em(20, 14),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: em(12, 14),
          lineHeight: round(16 / 14),
          marginTop: em(14, 14),
        },
        code: {
          fontSize: em(14, 14),
        },
        'h2 code': {
          fontSize: em(18, 22),
        },
        'h3 code': {
          fontSize: em(16, 18),
        },
        pre: {
          fontSize: em(14, 14),
          lineHeight: round(20 / 14),
          marginTop: em(20, 14),
          marginBottom: em(20, 14),
          borderRadius: rem(4),
          paddingTop: em(14, 14),
          paddingRight: em(14, 14),
          paddingBottom: em(14, 14),
          paddingLeft: em(14, 14),
        },
        ol: {
          marginTop: em(18, 14),
          marginBottom: em(18, 14),
          paddingLeft: em(22, 14),
        },
        ul: {
          marginTop: em(18, 14),
          marginBottom: em(18, 14),
          paddingLeft: em(22, 14),
        },
        li: {
          marginTop: em(4, 14),
          marginBottom: em(4, 14),
        },
        'ol > li': {
          paddingLeft: em(6, 14),
        },
        'ul > li': {
          paddingLeft: em(6, 14),
        },
        '> ul > li p': {
          marginTop: em(8, 14),
          marginBottom: em(8, 14),
        },
        '> ul > li > *:first-child': {
          marginTop: em(16, 14),
        },
        '> ul > li > *:last-child': {
          marginBottom: em(16, 14),
        },
        '> ol > li > *:first-child': {
          marginTop: em(16, 14),
        },
        '> ol > li > *:last-child': {
          marginBottom: em(16, 14),
        },
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: em(8, 14),
          marginBottom: em(8, 14),
        },
        hr: {
          marginTop: em(40, 14),
          marginBottom: em(40, 14),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: em(12, 14),
          lineHeight: round(18 / 12),
        },
        'thead th': {
          paddingRight: em(12, 12),
          paddingBottom: em(8, 12),
          paddingLeft: em(12, 12),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: em(8, 12),
          paddingRight: em(12, 12),
          paddingBottom: em(8, 12),
          paddingLeft: em(12, 12),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  // sm: { // TODO
  //   css: [
  //     {
  //       fontSize: rem(16),
  //       lineHeight: round(28 / 16),
  //       p: {
  //         marginTop: em(20, 16),
  //         marginBottom: em(20, 16),
  //       },
  //       '[class~="lead"]': {
  //         fontSize: em(20, 16),
  //         lineHeight: round(32 / 20),
  //         marginTop: em(24, 20),
  //         marginBottom: em(24, 20),
  //       },
  //       blockquote: {
  //         marginTop: em(32, 20),
  //         marginBottom: em(32, 20),
  //         paddingLeft: em(20, 20),
  //       },
  //       h1: {
  //         fontSize: em(36, 16),
  //         marginTop: '0',
  //         marginBottom: em(32, 36),
  //         lineHeight: round(40 / 36),
  //       },
  //       h2: {
  //         fontSize: em(24, 16),
  //         marginTop: em(48, 24),
  //         marginBottom: em(24, 24),
  //         lineHeight: round(32 / 24),
  //       },
  //       h3: {
  //         fontSize: em(20, 16),
  //         marginTop: em(32, 20),
  //         marginBottom: em(12, 20),
  //         lineHeight: round(32 / 20),
  //       },
  //       h4: {
  //         marginTop: em(24, 16),
  //         marginBottom: em(8, 16),
  //         lineHeight: round(24 / 16),
  //       },
  //       img: {
  //         marginTop: em(32, 16),
  //         marginBottom: em(32, 16),
  //       },
  //       video: {
  //         marginTop: em(32, 16),
  //         marginBottom: em(32, 16),
  //       },
  //       figure: {
  //         marginTop: em(32, 16),
  //         marginBottom: em(32, 16),
  //       },
  //       'figure > *': {
  //         marginTop: '0',
  //         marginBottom: '0',
  //       },
  //       figcaption: {
  //         fontSize: em(14, 16),
  //         lineHeight: round(20 / 14),
  //         marginTop: em(12, 14),
  //       },
  //       code: {
  //         fontSize: em(14, 16),
  //       },
  //       'h2 code': {
  //         fontSize: em(21, 24),
  //       },
  //       'h3 code': {
  //         fontSize: em(18, 20),
  //       },
  //       pre: {
  //         fontSize: em(14, 16),
  //         lineHeight: round(24 / 14),
  //         marginTop: em(24, 14),
  //         marginBottom: em(24, 14),
  //         borderRadius: rem(6),
  //         paddingTop: em(12, 14),
  //         paddingRight: em(16, 14),
  //         paddingBottom: em(12, 14),
  //         paddingLeft: em(16, 14),
  //       },
  //       ol: {
  //         marginTop: em(20, 16),
  //         marginBottom: em(20, 16),
  //         paddingLeft: em(26, 16),
  //       },
  //       ul: {
  //         marginTop: em(20, 16),
  //         marginBottom: em(20, 16),
  //         paddingLeft: em(26, 16),
  //       },
  //       li: {
  //         marginTop: em(8, 16),
  //         marginBottom: em(8, 16),
  //       },
  //       'ol > li': {
  //         paddingLeft: em(6, 16),
  //       },
  //       'ul > li': {
  //         paddingLeft: em(6, 16),
  //       },
  //       '> ul > li p': {
  //         marginTop: em(12, 16),
  //         marginBottom: em(12, 16),
  //       },
  //       '> ul > li > *:first-child': {
  //         marginTop: em(20, 16),
  //       },
  //       '> ul > li > *:last-child': {
  //         marginBottom: em(20, 16),
  //       },
  //       '> ol > li > *:first-child': {
  //         marginTop: em(20, 16),
  //       },
  //       '> ol > li > *:last-child': {
  //         marginBottom: em(20, 16),
  //       },
  //       'ul ul, ul ol, ol ul, ol ol': {
  //         marginTop: em(12, 16),
  //         marginBottom: em(12, 16),
  //       },
  //       hr: {
  //         marginTop: em(48, 16),
  //         marginBottom: em(48, 16),
  //       },
  //       'hr + *': {
  //         marginTop: '0',
  //       },
  //       'h2 + *': {
  //         marginTop: '0',
  //       },
  //       'h3 + *': {
  //         marginTop: '0',
  //       },
  //       'h4 + *': {
  //         marginTop: '0',
  //       },
  //       table: {
  //         fontSize: em(14, 16),
  //         lineHeight: round(24 / 14),
  //       },
  //       'thead th': {
  //         paddingRight: em(8, 14),
  //         paddingBottom: em(8, 14),
  //         paddingLeft: em(8, 14),
  //       },
  //       'thead th:first-child': {
  //         paddingLeft: '0',
  //       },
  //       'thead th:last-child': {
  //         paddingRight: '0',
  //       },
  //       'tbody td, tfoot td': {
  //         paddingTop: em(8, 14),
  //         paddingRight: em(8, 14),
  //         paddingBottom: em(8, 14),
  //         paddingLeft: em(8, 14),
  //       },
  //       'tbody td:first-child, tfoot td:first-child': {
  //         paddingLeft: '0',
  //       },
  //       'tbody td:last-child, tfoot td:last-child': {
  //         paddingRight: '0',
  //       },
  //     },
  //     {
  //       '> :first-child': {
  //         marginTop: '0',
  //       },
  //       '> :last-child': {
  //         marginBottom: '0',
  //       },
  //     },
  //   ],
  // },
  // md: { // TODO
  //   css: [
  //     {
  //       fontSize: rem(17),
  //       lineHeight: round(27 / 17),
  //       p: {
  //         marginTop: em(24, 18),
  //         marginBottom: em(24, 18),
  //       },
  //       '[class~="lead"]': {
  //         fontSize: em(22, 18),
  //         lineHeight: round(32 / 22),
  //         marginTop: em(24, 22),
  //         marginBottom: em(24, 22),
  //       },
  //       blockquote: {
  //         marginTop: em(32, 18),
  //         marginBottom: em(32, 18),
  //         paddingLeft: em(32, 18),
  //         paddingRight: em(32, 18),
  //       },
  //       h1: {
  //         fontSize: em(40, 18),
  //         marginTop: '0',
  //         marginBottom: em(18, 30),
  //         lineHeight: round(48 / 40),
  //       },
  //       h2: {
  //         fontSize: em(32, 18),
  //         marginTop: em(96, 32),
  //         marginBottom: em(32, 32),
  //         lineHeight: round(42 / 32),
  //       },
  //       h3: {
  //         fontSize: em(22, 18),
  //         marginTop: em(80, 22),
  //         marginBottom: em(24, 22),
  //         lineHeight: round(28.6 / 22),
  //       },
  //       h4: {
  //         fontSize: em(20, 18),
  //         marginTop: em(64, 20),
  //         marginBottom: em(20, 20),
  //         lineHeight: round(26 / 20),
  //       },
  //       img: {
  //         marginTop: em(24, 18),
  //         marginBottom: em(24, 18),
  //       },
  //       video: {
  //         marginTop: em(24, 18),
  //         marginBottom: em(24, 18),
  //       },
  //       figure: {
  //         marginTop: em(24, 18),
  //         marginBottom: em(24, 18),
  //       },
  //       'figure > *': {
  //         marginTop: '0',
  //         marginBottom: '0',
  //       },
  //       figcaption: {
  //         fontSize: em(14, 18),
  //         lineHeight: round(21 / 18),
  //         marginTop: em(16, 16),
  //       },
  //       code: {
  //         fontSize: em(18, 18),
  //       },
  //       'h2 code': {
  //         fontSize: em(24, 32),
  //       },
  //       'h3 code': {
  //         fontSize: em(20, 22),
  //       },
  //       pre: {
  //         fontSize: em(18, 18),
  //         lineHeight: round(27 / 18),
  //         marginTop: em(24, 18),
  //         marginBottom: em(24, 18),
  //         borderRadius: rem(6),
  //         paddingTop: em(16, 16),
  //         paddingRight: em(24, 16),
  //         paddingBottom: em(16, 16),
  //         paddingLeft: em(24, 16),
  //       },
  //       ol: {
  //         marginTop: em(24, 18),
  //         marginBottom: em(24, 18),
  //         paddingLeft: em(32, 18),
  //       },
  //       ul: {
  //         marginTop: em(24, 18),
  //         marginBottom: em(24, 18),
  //         paddingLeft: em(32, 18),
  //       },
  //       li: {
  //         marginTop: em(12, 18),
  //         marginBottom: em(12, 18),
  //       },
  //       'ol > li': {
  //         paddingLeft: em(8, 18),
  //       },
  //       'ul > li': {
  //         paddingLeft: em(8, 18),
  //       },
  //       '> ul > li p': {
  //         marginTop: em(16, 18),
  //         marginBottom: em(16, 18),
  //       },
  //       '> ul > li > *:first-child': {
  //         marginTop: em(24, 18),
  //       },
  //       '> ul > li > *:last-child': {
  //         marginBottom: em(24, 18),
  //       },
  //       '> ol > li > *:first-child': {
  //         marginTop: em(24, 18),
  //       },
  //       '> ol > li > *:last-child': {
  //         marginBottom: em(24, 18),
  //       },
  //       'ul ul, ul ol, ol ul, ol ol': {
  //         marginTop: em(16, 18),
  //         marginBottom: em(16, 18),
  //       },
  //       hr: {
  //         marginTop: em(56, 18),
  //         marginBottom: em(56, 18),
  //       },
  //       'hr + *': {
  //         marginTop: '0',
  //       },
  //       'h2 + *': {
  //         marginTop: '0',
  //       },
  //       'h3 + *': {
  //         marginTop: '0',
  //       },
  //       'h4 + *': {
  //         marginTop: '0',
  //       },
  //       table: {
  //         fontSize: em(16, 18),
  //         lineHeight: round(24 / 16),
  //       },
  //       'thead th': {
  //         paddingRight: em(12, 16),
  //         paddingBottom: em(12, 16),
  //         paddingLeft: em(12, 16),
  //       },
  //       'thead th:first-child': {
  //         paddingLeft: '0',
  //       },
  //       'thead th:last-child': {
  //         paddingRight: '0',
  //       },
  //       'tbody td, tfoot td': {
  //         paddingTop: em(12, 16),
  //         paddingRight: em(12, 16),
  //         paddingBottom: em(12, 16),
  //         paddingLeft: em(12, 16),
  //       },
  //       'tbody td:first-child, tfoot td:first-child': {
  //         paddingLeft: '0',
  //       },
  //       'tbody td:last-child, tfoot td:last-child': {
  //         paddingRight: '0',
  //       },
  //     },
  //     {
  //       '> :first-child': {
  //         marginTop: '0',
  //       },
  //       '> :last-child': {
  //         marginBottom: '0',
  //       },
  //     },
  //   ],
  // },
  base: {
    css: [
      {
        fontSize: rem(18),
        lineHeight: round(27 / 18),
        p: {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
        },
        '[class~="lead"]': { // TODO
          fontSize: em(22, 18),
          lineHeight: round(32 / 22),
          marginTop: em(24, 22),
          marginBottom: em(24, 22),
        },
        blockquote: {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
          paddingLeft: em(24, 18),
          paddingRight: em(24, 18),
          lineHeight: round(36 / 18),
        },
        h1: {
          fontSize: em(40, 18),
          marginTop: '0',
          marginBottom: em(18, 30),
          lineHeight: round(48 / 40),
        },
        h2: {
          fontSize: em(32, 18),
          marginTop: em(80, 32),
          marginBottom: em(32, 32),
          lineHeight: round(42 / 32),
        },
        h3: {
          fontSize: em(22, 18),
          marginTop: em(64, 22),
          marginBottom: em(24, 22),
          lineHeight: round(28.6 / 22),
        },
        h4: {
          fontSize: em(20, 18),
          marginTop: em(48, 20),
          marginBottom: em(20, 20),
          lineHeight: round(26 / 20),
        },
        img: {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
        },
        video: {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
        },
        figure: {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: em(14, 18),
          lineHeight: round(21 / 18),
          marginTop: em(16, 16),
        },
        code: {
          fontSize: em(18, 18),
        },
        'h2 code': {
          fontSize: em(24, 32),
        },
        'h3 code': {
          fontSize: em(20, 22),
        },
        pre: {
          fontSize: em(18, 18),
          lineHeight: round(27 / 18),
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
          borderRadius: rem(6),
          paddingTop: em(24, 16),
          paddingRight: em(24, 16),
          paddingBottom: em(24, 16),
          paddingLeft: em(24, 16),
        },
        ol: {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
          paddingLeft: em(32, 18),
        },
        ul: {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
          paddingLeft: em(32, 18),
        },
        li: {
          marginTop: em(12, 18),
          marginBottom: em(12, 18),
        },
        'ol > li': {
          paddingLeft: em(8, 18),
        },
        'ul > li': {
          paddingLeft: em(8, 18),
        },
        '> ul > li p': {
          marginTop: em(16, 18),
          marginBottom: em(16, 18),
        },
        '> ul > li > *:first-child': {
          marginTop: em(24, 18),
        },
        '> ul > li > *:last-child': {
          marginBottom: em(24, 18),
        },
        '> ol > li > *:first-child': {
          marginTop: em(24, 18),
        },
        '> ol > li > *:last-child': {
          marginBottom: em(24, 18),
        },
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: em(16, 18),
          marginBottom: em(16, 18),
        },
        hr: {
          marginTop: em(56, 18),
          marginBottom: em(56, 18),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: em(16, 18),
          lineHeight: round(24 / 16),
        },
        'thead th': {
          paddingRight: em(12, 16),
          paddingBottom: em(12, 16),
          paddingLeft: em(12, 16),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: em(12, 16),
          paddingRight: em(12, 16),
          paddingBottom: em(12, 16),
          paddingLeft: em(12, 16),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  lg: {
    css: [
      {
        fontSize: rem(19),
        lineHeight: round(28.5 / 19),
        p: {
          marginTop: em(24, 19),
          marginBottom: em(24, 19),
        },
        '[class~="lead"]': {
          fontSize: em(24, 19),
          lineHeight: round(32 / 24),
          marginTop: em(24, 24),
          marginBottom: em(24, 24),
        },
        blockquote: {
          marginTop: em(28, 19),
          marginBottom: em(28, 19),
          paddingLeft: em(28, 19),
          paddingRight: em(28, 19),
          lineHeight: round(38 / 19),
        },
        h1: {
          fontSize: em(44, 19),
          marginTop: '0',
          marginBottom: em(52, 44),
          lineHeight: round(52 / 44),
        },
        h2: {
          fontSize: em(36, 19),
          marginTop: em(96, 36),
          marginBottom: em(36, 36),
          lineHeight: round(46 / 36),
        },
        h3: {
          fontSize: em(26, 19),
          marginTop: em(80, 22),
          marginBottom: em(32, 26),
          lineHeight: round(28.5 / 26),
        },
        h4: {
          fontSize: em(22, 19),
          marginTop: em(64, 19),
          marginBottom: em(24, 19),
          lineHeight: round(28.5 / 19),
        },
        img: {
          marginTop: em(32, 19),
          marginBottom: em(32, 19),
        },
        video: {
          marginTop: em(32, 19),
          marginBottom: em(32, 19),
        },
        figure: {
          marginTop: em(32, 19),
          marginBottom: em(32, 19),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: em(15, 19),
          lineHeight: round(22.5 / 19),
          marginTop: em(16, 16),
        },
        code: {
          fontSize: em(19, 19),
        },
        'h2 code': {
          fontSize: em(28, 36),
        },
        'h3 code': {
          fontSize: em(20, 26),
        },
        pre: {
          fontSize: em(19, 19),
          lineHeight: round(28.5 / 19),
          marginTop: em(32, 19),
          marginBottom: em(32, 19),
          borderRadius: rem(6),
          paddingTop: em(28, 19),
          paddingRight: em(28, 19),
          paddingBottom: em(28, 19),
          paddingLeft: em(28, 19),
        },
        ol: {
          marginTop: em(28, 19),
          marginBottom: em(28, 19),
          paddingLeft: em(48, 19),
        },
        ul: {
          marginTop: em(28, 19),
          marginBottom: em(28, 19),
          paddingLeft: em(48, 19),
        },
        li: {
          marginTop: em(16, 19),
          marginBottom: em(16, 19),
        },
        'ol > li': {
          paddingLeft: em(8, 19),
        },
        'ul > li': {
          paddingLeft: em(8, 19),
        },
        '> ul > li p': {
          marginTop: em(16, 19),
          marginBottom: em(16, 19),
        },
        '> ul > li > *:first-child': {
          marginTop: em(24, 19),
        },
        '> ul > li > *:last-child': {
          marginBottom: em(24, 19),
        },
        '> ol > li > *:first-child': {
          marginTop: em(24, 19),
        },
        '> ol > li > *:last-child': {
          marginBottom: em(24, 19),
        },
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: em(16, 19),
          marginBottom: em(16, 19),
        },
        hr: {
          marginTop: em(56, 19),
          marginBottom: em(56, 19),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: em(16, 19),
          lineHeight: round(28 / 16),
        },
        'thead th': {
          paddingRight: em(12, 16),
          paddingBottom: em(12, 16),
          paddingLeft: em(12, 16),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: em(12, 16),
          paddingRight: em(12, 16),
          paddingBottom: em(12, 16),
          paddingLeft: em(12, 16),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  xl: {
    css: [
      {
        fontSize: rem(20),
        lineHeight: round(30 / 20),
        p: {
          marginTop: em(32, 20),
          marginBottom: em(32, 20),
        },
        '[class~="lead"]': {
          fontSize: em(32, 20),
          lineHeight: round(36 / 32),
          marginTop: em(32, 32),
          marginBottom: em(32, 32),
        },
        blockquote: {
          marginTop: em(32, 20),
          marginBottom: em(32, 20),
          paddingLeft: em(32, 20),
          paddingRight: em(32, 20),
        },
        h1: {
          fontSize: em(48, 20),
          marginTop: '0',
          marginBottom: em(56, 48),
          lineHeight: round(48 / 48),
        },
        h2: {
          fontSize: em(40, 20),
          marginTop: em(104, 40),
          marginBottom: em(40, 40),
          lineHeight: round(52 / 40),
        },
        h3: {
          fontSize: em(30, 20),
          marginTop: em(96, 30),
          marginBottom: em(36, 30),
          lineHeight: round(40 / 30),
        },
        h4: {
          fontSize: em(22, 19),
          marginTop: em(80, 20),
          marginBottom: em(32, 20),
          lineHeight: round(30 / 20),
        },
        img: {
          marginTop: em(36, 20),
          marginBottom: em(36, 20),
        },
        video: {
          marginTop: em(36, 20),
          marginBottom: em(36, 20),
        },
        figure: {
          marginTop: em(36, 20),
          marginBottom: em(36, 20),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: em(16, 20),
          lineHeight: round(24 / 18),
          marginTop: em(18, 18),
        },
        code: {
          fontSize: em(20, 20),
        },
        'h2 code': {
          fontSize: em(36, 40),
        },
        'h3 code': {
          fontSize: em(27, 30),
        },
        pre: {
          fontSize: em(20, 20),
          lineHeight: round(32 / 20),
          marginTop: em(36, 20),
          marginBottom: em(36, 20),
          borderRadius: rem(8),
          paddingTop: em(32, 20),
          paddingRight: em(32, 20),
          paddingBottom: em(32, 20),
          paddingLeft: em(32, 20),
        },
        ol: {
          marginTop: em(32, 20),
          marginBottom: em(32, 20),
          paddingLeft: em(52, 20),
        },
        ul: {
          marginTop: em(32, 20),
          marginBottom: em(32, 20),
          paddingLeft: em(52, 20),
        },
        li: {
          marginTop: em(18, 20),
          marginBottom: em(18, 20),
        },
        'ol > li': {
          paddingLeft: em(8, 20),
        },
        'ul > li': {
          paddingLeft: em(8, 20),
        },
        '> ul > li p': {
          marginTop: em(16, 20),
          marginBottom: em(16, 20),
        },
        '> ul > li > *:first-child': {
          marginTop: em(24, 20),
        },
        '> ul > li > *:last-child': {
          marginBottom: em(24, 20),
        },
        '> ol > li > *:first-child': {
          marginTop: em(24, 20),
        },
        '> ol > li > *:last-child': {
          marginBottom: em(24, 20),
        },
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: em(16, 20),
          marginBottom: em(16, 20),
        },
        hr: {
          marginTop: em(56, 20),
          marginBottom: em(56, 20),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: em(18, 20),
          lineHeight: round(28 / 18),
        },
        'thead th': {
          paddingRight: em(12, 18),
          paddingBottom: em(16, 18),
          paddingLeft: em(12, 18),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: em(16, 18),
          paddingRight: em(12, 18),
          paddingBottom: em(16, 18),
          paddingLeft: em(12, 18),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  // '2xl': { // TODO
  //   css: [
  //     {
  //       fontSize: rem(22),
  //       lineHeight: round(36 / 20),
  //       p: {
  //         marginTop: em(24, 20),
  //         marginBottom: em(24, 20),
  //       },
  //       '[class~="lead"]': {
  //         fontSize: em(24, 20),
  //         lineHeight: round(36 / 24),
  //         marginTop: em(24, 24),
  //         marginBottom: em(24, 24),
  //       },
  //       blockquote: {
  //         marginTop: em(48, 30),
  //         marginBottom: em(48, 30),
  //         paddingLeft: em(32, 30),
  //       },
  //       h1: {
  //         fontSize: em(56, 20),
  //         marginTop: '0',
  //         marginBottom: em(48, 56),
  //         lineHeight: round(56 / 56),
  //       },
  //       h2: {
  //         fontSize: em(36, 20),
  //         marginTop: em(56, 36),
  //         marginBottom: em(32, 36),
  //         lineHeight: round(40 / 36),
  //       },
  //       h3: {
  //         fontSize: em(30, 20),
  //         marginTop: em(48, 30),
  //         marginBottom: em(20, 30),
  //         lineHeight: round(40 / 30),
  //       },
  //       h4: {
  //         marginTop: em(36, 20),
  //         marginBottom: em(12, 20),
  //         lineHeight: round(32 / 20),
  //       },
  //       img: {
  //         marginTop: em(40, 20),
  //         marginBottom: em(40, 20),
  //       },
  //       video: {
  //         marginTop: em(40, 20),
  //         marginBottom: em(40, 20),
  //       },
  //       figure: {
  //         marginTop: em(40, 20),
  //         marginBottom: em(40, 20),
  //       },
  //       'figure > *': {
  //         marginTop: '0',
  //         marginBottom: '0',
  //       },
  //       figcaption: {
  //         fontSize: em(18, 20),
  //         lineHeight: round(28 / 18),
  //         marginTop: em(18, 18),
  //       },
  //       code: {
  //         fontSize: em(18, 20),
  //       },
  //       'h2 code': {
  //         fontSize: em(31, 36),
  //       },
  //       'h3 code': {
  //         fontSize: em(27, 30),
  //       },
  //       pre: {
  //         fontSize: em(18, 20),
  //         lineHeight: round(32 / 18),
  //         marginTop: em(36, 18),
  //         marginBottom: em(36, 18),
  //         borderRadius: rem(8),
  //         paddingTop: em(20, 18),
  //         paddingRight: em(24, 18),
  //         paddingBottom: em(20, 18),
  //         paddingLeft: em(24, 18),
  //       },
  //       ol: {
  //         marginTop: em(24, 20),
  //         marginBottom: em(24, 20),
  //         paddingLeft: em(32, 20),
  //       },
  //       ul: {
  //         marginTop: em(24, 20),
  //         marginBottom: em(24, 20),
  //         paddingLeft: em(32, 20),
  //       },
  //       li: {
  //         marginTop: em(12, 20),
  //         marginBottom: em(12, 20),
  //       },
  //       'ol > li': {
  //         paddingLeft: em(8, 20),
  //       },
  //       'ul > li': {
  //         paddingLeft: em(8, 20),
  //       },
  //       '> ul > li p': {
  //         marginTop: em(16, 20),
  //         marginBottom: em(16, 20),
  //       },
  //       '> ul > li > *:first-child': {
  //         marginTop: em(24, 20),
  //       },
  //       '> ul > li > *:last-child': {
  //         marginBottom: em(24, 20),
  //       },
  //       '> ol > li > *:first-child': {
  //         marginTop: em(24, 20),
  //       },
  //       '> ol > li > *:last-child': {
  //         marginBottom: em(24, 20),
  //       },
  //       'ul ul, ul ol, ol ul, ol ol': {
  //         marginTop: em(16, 20),
  //         marginBottom: em(16, 20),
  //       },
  //       hr: {
  //         marginTop: em(56, 20),
  //         marginBottom: em(56, 20),
  //       },
  //       'hr + *': {
  //         marginTop: '0',
  //       },
  //       'h2 + *': {
  //         marginTop: '0',
  //       },
  //       'h3 + *': {
  //         marginTop: '0',
  //       },
  //       'h4 + *': {
  //         marginTop: '0',
  //       },
  //       table: {
  //         fontSize: em(18, 20),
  //         lineHeight: round(28 / 18),
  //       },
  //       'thead th': {
  //         paddingRight: em(12, 18),
  //         paddingBottom: em(16, 18),
  //         paddingLeft: em(12, 18),
  //       },
  //       'thead th:first-child': {
  //         paddingLeft: '0',
  //       },
  //       'thead th:last-child': {
  //         paddingRight: '0',
  //       },
  //       'tbody td, tfoot td': {
  //         paddingTop: em(16, 18),
  //         paddingRight: em(12, 18),
  //         paddingBottom: em(16, 18),
  //         paddingLeft: em(12, 18),
  //       },
  //       'tbody td:first-child, tfoot td:first-child': {
  //         paddingLeft: '0',
  //       },
  //       'tbody td:last-child, tfoot td:last-child': {
  //         paddingRight: '0',
  //       },
  //     },
  //     {
  //       '> :first-child': {
  //         marginTop: '0',
  //       },
  //       '> :last-child': {
  //         marginBottom: '0',
  //       },
  //     },
  //   ],
  // },
  // '3xl': { // TODO
  //   css: [
  //     {
  //       fontSize: rem(24),
  //       lineHeight: round(40 / 24),
  //       p: {
  //         marginTop: em(32, 24),
  //         marginBottom: em(32, 24),
  //       },
  //       '[class~="lead"]': {
  //         fontSize: em(30, 24),
  //         lineHeight: round(44 / 30),
  //         marginTop: em(32, 30),
  //         marginBottom: em(32, 30),
  //       },
  //       blockquote: {
  //         marginTop: em(64, 36),
  //         marginBottom: em(64, 36),
  //         paddingLeft: em(40, 36),
  //       },
  //       h1: {
  //         fontSize: em(64, 24),
  //         marginTop: '0',
  //         marginBottom: em(56, 64),
  //         lineHeight: round(64 / 64),
  //       },
  //       h2: {
  //         fontSize: em(48, 24),
  //         marginTop: em(72, 48),
  //         marginBottom: em(40, 48),
  //         lineHeight: round(52 / 48),
  //       },
  //       h3: {
  //         fontSize: em(36, 24),
  //         marginTop: em(56, 36),
  //         marginBottom: em(24, 36),
  //         lineHeight: round(44 / 36),
  //       },
  //       h4: {
  //         marginTop: em(40, 24),
  //         marginBottom: em(16, 24),
  //         lineHeight: round(36 / 24),
  //       },
  //       img: {
  //         marginTop: em(48, 24),
  //         marginBottom: em(48, 24),
  //       },
  //       video: {
  //         marginTop: em(48, 24),
  //         marginBottom: em(48, 24),
  //       },
  //       figure: {
  //         marginTop: em(48, 24),
  //         marginBottom: em(48, 24),
  //       },
  //       'figure > *': {
  //         marginTop: '0',
  //         marginBottom: '0',
  //       },
  //       figcaption: {
  //         fontSize: em(20, 24),
  //         lineHeight: round(32 / 20),
  //         marginTop: em(20, 20),
  //       },
  //       code: {
  //         fontSize: em(20, 24),
  //       },
  //       'h2 code': {
  //         fontSize: em(42, 48),
  //       },
  //       'h3 code': {
  //         fontSize: em(32, 36),
  //       },
  //       pre: {
  //         fontSize: em(20, 24),
  //         lineHeight: round(36 / 20),
  //         marginTop: em(40, 20),
  //         marginBottom: em(40, 20),
  //         borderRadius: rem(8),
  //         paddingTop: em(24, 20),
  //         paddingRight: em(32, 20),
  //         paddingBottom: em(24, 20),
  //         paddingLeft: em(32, 20),
  //       },
  //       ol: {
  //         marginTop: em(32, 24),
  //         marginBottom: em(32, 24),
  //         paddingLeft: em(38, 24),
  //       },
  //       ul: {
  //         marginTop: em(32, 24),
  //         marginBottom: em(32, 24),
  //         paddingLeft: em(38, 24),
  //       },
  //       li: {
  //         marginTop: em(12, 24),
  //         marginBottom: em(12, 24),
  //       },
  //       'ol > li': {
  //         paddingLeft: em(10, 24),
  //       },
  //       'ul > li': {
  //         paddingLeft: em(10, 24),
  //       },
  //       '> ul > li p': {
  //         marginTop: em(20, 24),
  //         marginBottom: em(20, 24),
  //       },
  //       '> ul > li > *:first-child': {
  //         marginTop: em(32, 24),
  //       },
  //       '> ul > li > *:last-child': {
  //         marginBottom: em(32, 24),
  //       },
  //       '> ol > li > *:first-child': {
  //         marginTop: em(32, 24),
  //       },
  //       '> ol > li > *:last-child': {
  //         marginBottom: em(32, 24),
  //       },
  //       'ul ul, ul ol, ol ul, ol ol': {
  //         marginTop: em(16, 24),
  //         marginBottom: em(16, 24),
  //       },
  //       hr: {
  //         marginTop: em(72, 24),
  //         marginBottom: em(72, 24),
  //       },
  //       'hr + *': {
  //         marginTop: '0',
  //       },
  //       'h2 + *': {
  //         marginTop: '0',
  //       },
  //       'h3 + *': {
  //         marginTop: '0',
  //       },
  //       'h4 + *': {
  //         marginTop: '0',
  //       },
  //       table: {
  //         fontSize: em(20, 24),
  //         lineHeight: round(28 / 20),
  //       },
  //       'thead th': {
  //         paddingRight: em(12, 20),
  //         paddingBottom: em(16, 20),
  //         paddingLeft: em(12, 20),
  //       },
  //       'thead th:first-child': {
  //         paddingLeft: '0',
  //       },
  //       'thead th:last-child': {
  //         paddingRight: '0',
  //       },
  //       'tbody td, tfoot td': {
  //         paddingTop: em(16, 20),
  //         paddingRight: em(12, 20),
  //         paddingBottom: em(16, 20),
  //         paddingLeft: em(12, 20),
  //       },
  //       'tbody td:first-child, tfoot td:first-child': {
  //         paddingLeft: '0',
  //       },
  //       'tbody td:last-child, tfoot td:last-child': {
  //         paddingRight: '0',
  //       },
  //     },
  //     {
  //       '> :first-child': {
  //         marginTop: '0',
  //       },
  //       '> :last-child': {
  //         marginBottom: '0',
  //       },
  //     },
  //   ],
  // },


  // Invert (for dark mode)
  invert: {
    css: {
      '--tw-prose-body': 'var(--tw-prose-invert-body)',
      '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
      '--tw-prose-lead': 'var(--tw-prose-invert-lead)',
      '--tw-prose-links': 'var(--tw-prose-invert-links)',
      '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
      '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
      '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
      '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
      '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
      '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
      '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
      '--tw-prose-code': 'var(--tw-prose-invert-code)',
      '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
      '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
      '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
      '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
    },
  },

  // Gray color themes

  gray: {
    css: {
      '--tw-prose-body': colorsTw.gray[700],
      '--tw-prose-headings': colorsTw.gray[900],
      '--tw-prose-lead': colorsTw.gray[600],
      '--tw-prose-links': colorsTw.gray[900],
      '--tw-prose-bold': colorsTw.gray[900],
      '--tw-prose-counters': colorsTw.gray[500],
      '--tw-prose-bullets': colorsTw.gray[300],
      '--tw-prose-hr': colorsTw.gray[200],
      '--tw-prose-quotes': colors.green,
      '--tw-prose-quote-borders': colors.green,
      '--tw-prose-captions': colorsTw.gray[500],
      '--tw-prose-code': colorsTw.gray[900],
      '--tw-prose-pre-code': colorsTw.gray[200],
      '--tw-prose-pre-bg': colorsTw.gray[800],
      '--tw-prose-th-borders': colorsTw.gray[300],
      '--tw-prose-td-borders': colorsTw.gray[200],
      '--tw-prose-invert-body': colorsTw.gray[300],
      '--tw-prose-invert-headings': colorsTw.white,
      '--tw-prose-invert-lead': colorsTw.gray[400],
      '--tw-prose-invert-links': colorsTw.white,
      '--tw-prose-invert-bold': colorsTw.white,
      '--tw-prose-invert-counters': colorsTw.gray[400],
      '--tw-prose-invert-bullets': colorsTw.gray[600],
      '--tw-prose-invert-hr': colorsTw.gray[700],
      '--tw-prose-invert-quotes': colorsTw.gray[100],
      '--tw-prose-invert-quote-borders': colorsTw.gray[700],
      '--tw-prose-invert-captions': colorsTw.gray[400],
      '--tw-prose-invert-code': colorsTw.white,
      '--tw-prose-invert-pre-code': colorsTw.gray[300],
      '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
      '--tw-prose-invert-th-borders': colorsTw.gray[600],
      '--tw-prose-invert-td-borders': colorsTw.gray[700],
    },
  },

  // TODO Review if this is necessary

  red: {
    css: { // TODO Test this colors
      '--tw-prose-links': colors.red,
      '--tw-prose-invert-links': hexOpacity(colors.red, 90),
    },
  },

  orange: {
    css: {
      '--tw-prose-links': colors.orange,
      '--tw-prose-invert-links': hexOpacity(colors.orange, 90),
    },
  },

  black: {
    css: {
      '--tw-prose-links': colors.black,
      '--tw-prose-invert-links': hexOpacity(colors.black, 90),
    },
  },

  yellow: {
    css: {
      '--tw-prose-links': colors.yellow,
      '--tw-prose-invert-links': hexOpacity(colors.yellow, 90),
    },
  },

  lime: {
    css: {
      '--tw-prose-links': colors.lime,
      '--tw-prose-invert-links': hexOpacity(colors.lime, 90),
    },
  },

  brown: {
    css: {
      '--tw-prose-links': colors.brown,
      '--tw-prose-invert-links': hexOpacity(colors.brown, 90),
    },
  },

  green: {
    css: {
      '--tw-prose-links': colors.green,
      '--tw-prose-invert-links': hexOpacity(colors.green, 90),
    },
  },

  gold: {
    css: {
      '--tw-prose-links': colors.gold,
      '--tw-prose-invert-links': hexOpacity(colors.gold, 90),
    },
  },

  blue: {
    css: {
      '--tw-prose-links': colors.blue,
      '--tw-prose-invert-links': hexOpacity(colors.blue, 90),
    },
  },

  'dark-blue': {
    css: {
      '--tw-prose-links': colors['dark-blue'],
      '--tw-prose-invert-links': hexOpacity(colors['dark-blue'], 90),
    },
  },

  pink: {
    css: {
      '--tw-prose-links': colors.pink,
      '--tw-prose-invert-links': hexOpacity(colors.pink, 90),
    },
  },

  purple: {
    css: {
      '--tw-prose-links': colors.purple,
      '--tw-prose-invert-links': hexOpacity(colors.purple, 90),
    },
  },

  white: {
    css: {
      '--tw-prose-links': colors.white,
      '--tw-prose-invert-links': hexOpacity(colors.white, 90),
    },
  },
}

module.exports = {
  DEFAULT: {
    css: [
      {
        color: 'var(--tw-prose-body)',
        maxWidth: '65ch',
        '[class~="lead"]': {
          color: 'var(--tw-prose-lead)',
        },
        a: {
          color: 'var(--tw-prose-links)',
          textDecoration: 'underline',
          fontWeight: '500',
        },
        strong: {
          color: 'var(--tw-prose-bold)',
          fontWeight: '600',
        },
        ol: {
          listStyleType: 'decimal',
        },
        'ol[type="A"]': {
          listStyleType: 'upper-alpha',
        },
        'ol[type="a"]': {
          listStyleType: 'lower-alpha',
        },
        'ol[type="A" s]': {
          listStyleType: 'upper-alpha',
        },
        'ol[type="a" s]': {
          listStyleType: 'lower-alpha',
        },
        'ol[type="I"]': {
          listStyleType: 'upper-roman',
        },
        'ol[type="i"]': {
          listStyleType: 'lower-roman',
        },
        'ol[type="I" s]': {
          listStyleType: 'upper-roman',
        },
        'ol[type="i" s]': {
          listStyleType: 'lower-roman',
        },
        'ol[type="1"]': {
          listStyleType: 'decimal',
        },
        ul: {
          listStyleType: 'disc',
        },
        'ol > li::marker': {
          fontWeight: '400',
          color: 'var(--tw-prose-counters)',
        },
        'ul > li::marker': {
          color: 'var(--tw-prose-bullets)',
        },
        hr: {
          borderColor: 'var(--tw-prose-hr)',
          borderTopWidth: 1,
        },
        blockquote: {
          fontWeight: '500',
          color: 'var(--tw-prose-quotes)',
          borderTopWidth: '0.125rem',
          borderTopColor: 'var(--tw-prose-quote-borders)',
          borderBottomWidth: '0.125rem',
          borderBottomColor: 'var(--tw-prose-quote-borders)',
          quotes: '"\\201C""\\201D""\\2018""\\2019"',
        },
        'blockquote p:first-of-type::before': {
          content: 'open-quote',
        },
        'blockquote p:last-of-type::after': {
          content: 'close-quote',
        },
        h1: {
          color: 'var(--tw-prose-headings)',
          fontWeight: '800',
        },
        'h1 strong': {
          fontWeight: '900',
        },
        h2: {
          color: 'var(--tw-prose-headings)',
          fontWeight: '700',
        },
        'h2 strong': {
          fontWeight: '800',
        },
        h3: {
          color: 'var(--tw-prose-headings)',
          fontWeight: '600',
        },
        'h3 strong': {
          fontWeight: '700',
        },
        h4: {
          color: 'var(--tw-prose-headings)',
          fontWeight: '600',
        },
        'h4 strong': {
          fontWeight: '700',
        },
        // TODO: Figure out how to not need this, it's a merging issue
        'figure > *': {},
        figcaption: {
          color: 'var(--tw-prose-captions)',
        },
        code: {
          color: 'var(--tw-prose-code)',
          fontWeight: '600',
        },
        'code::before': {
          content: '"`"',
        },
        'code::after': {
          content: '"`"',
        },
        'a code': {
          color: 'var(--tw-prose-links)',
        },
        pre: {
          color: 'var(--tw-prose-pre-code)',
          backgroundColor: 'var(--tw-prose-pre-bg)',
          overflowX: 'auto',
          fontWeight: '400',
        },
        'pre code': {
          backgroundColor: 'transparent',
          borderWidth: '0',
          borderRadius: '0',
          padding: '0',
          fontWeight: 'inherit',
          color: 'inherit',
          fontSize: 'inherit',
          fontFamily: 'inherit',
          lineHeight: 'inherit',
        },
        'pre code::before': {
          content: 'none',
        },
        'pre code::after': {
          content: 'none',
        },
        table: {
          width: '100%',
          tableLayout: 'auto',
          textAlign: 'left',
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
        },
        thead: {
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--tw-prose-th-borders)',
        },
        'thead th': {
          color: 'var(--tw-prose-headings)',
          fontWeight: '600',
          verticalAlign: 'bottom',
        },
        'tbody tr': {
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--tw-prose-td-borders)',
        },
        'tbody tr:last-child': {
          borderBottomWidth: '0',
        },
        'tbody td': {
          verticalAlign: 'baseline',
        },
        tfoot: {
          borderTopWidth: '1px',
          borderTopColor: 'var(--tw-prose-th-borders)',
        },
        'tfoot td': {
          verticalAlign: 'top',
        },
      },
      defaultModifiers.gray.css,
      ...defaultModifiers.base.css,
    ],
  },
  ...defaultModifiers,
}
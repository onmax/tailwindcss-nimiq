const mdx = require('@mdx-js/mdx')
const theme = require('../../../src/tailwind.config')

module.exports = {
  content: ['./demo/pages/**/*.{js,mdx}', './demo/components/**/*.{js,mdx}'],
  transform: {
    mdx: (content) => mdx.sync(content),
  },
  theme,
  variants: {},
  plugins: [require('../src/index.js')],
}
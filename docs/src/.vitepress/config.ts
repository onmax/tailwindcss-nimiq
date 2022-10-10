const Theme = [
    { text: 'Get Started', link: '/theme/' },
]

const DefaultSideBar = [
    { text: 'Theme', items: Theme },
]

export default {
    title: 'TailwindCSS Nimiq',
    description: 'A custom Tailwind CSS config with Nimiq styles.',
    base: process.env.NODE_ENV === 'production' ? '/tailwindcss-nimiq/' : '/',

    themeConfig: {
        logo: '/favicon.svg',
        editLink: {
            pattern: 'https://github.com/onmax/tailwindcss-nimiq/tree/main/docs/src/:path',
            text: 'Suggest changes to this page',
        }
    },

    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2020-PRESENT @onmax and other contributors',
    },

    socialLinks: [
        { icon: 'github', link: 'https://github.com/onmax/tailwindcss-nimiq' },
        { icon: 'twitter', link: 'https://twitter.com/nimiq' },
    ],

    nav: [
        {
            text: 'Theme',
            items: [{ text: 'Theme', items: Theme }],
        },
        {
            text: 'Playground',
            link: 'https://play.vueuse.org',
        },
    ],

    sidebar: {
        '/theme/': DefaultSideBar
    },
}
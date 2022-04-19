# Nimiq TailwindCSS theme

A custom TailwindCSS config with Nimiq styles.

## Theme

1. Install TailwindCSS in your project. See [official docs](https://tailwindcss.com/docs/installation)
2. Copy and paste [old.tailwind.config.js](./tailwind.config.js) in your own project.
3. Copy and paste [tailwind.css](./tailwind.css) as well as [.fonts.css](./fonts.css).
    - You can also download [./fonts](./fonts/) and host the fonts yourself. Remember to update `fonts.css` path.
    - In tailwind.css, we are using `@import` which is not recommendable at all. Instead you could import with different method. For example, [see this](https://github.com/tailwindlabs/tailwindcss.com/blob/6d6ee63ba619a78955e6e39a46535f80128d839d/src/pages/_app.js#L1).


> Highly recommendable using Tailwind CSS IntelliSense extension in your IDE


### Made by

- [@onmax](https://github.com/onmax)

### Based on the initial work by

- [@joaocdvr](https://github.com/joaocdvr)
# Nimiq TailwindCSS theme

A custom TailwindCSS theme with Nimiq styles.

## Installation

> Make sure to install TailwindCSS and create a `tailwind.config.js` file. See [official docs](https://tailwindcss.com/docs/installation)

1. Install the theme

```npm
npm i -D tailwindcss-nimiq-styles
```

```yarn
yarn add -D tailwindcss-nimiq-styles
```

2. Update your `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    ...require('tailwindcss-nimiq-theme'),
    
    // Your custom configuration here
  },
  plugins: [
    // ...
  ],
}
```

Now, you are using the defaults from Nimiq and you can edit the configuration as you would do normally

> Highly recommendable using Tailwind CSS IntelliSense extension in your IDE


### Made by

- [@onmax](https://github.com/onmax)

### Based on the initial work by

- [@joaocdvr](https://github.com/joaocdvr)
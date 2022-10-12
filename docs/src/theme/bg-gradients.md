---
category: Theme
---

# Background gradients

Tailwind Nimiq includes a gradient palette that we use to create Nimiq Apps.


<script setup lang="ts">
import BgGradients from './components/BgGradients.vue'
</script>

<BgGradients />

## Changing the gradient

These styles are based on Tailwind's [gradient system](https://tailwindcss.com/docs/background-image#gradient-color-stops) where you can use the `from-` and `to-` prefixes to control the direction of the gradient.

For example, you can use any of the gradients from Nimiq, but you can change one of the colors to create a new gradient.

```html
<div class="bg-gradient-space from-honey"></div>
```

## Learn more

You can learn more about Nimiq's Style Guide in the [Nimiq Style Guide](https://nimiq.github.io/nimiq-style/) website.
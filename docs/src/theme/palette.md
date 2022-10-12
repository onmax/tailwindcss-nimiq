---
category: Theme
---

<script setup lang="ts">
import { opacitiesValues } from './components/utils.ts'
import Palette from './components/Palette.vue'
</script>

# Nimiq Palette

Tailwind Nimiq includes a color palette that we use to create Nimiq Apps.

For each color, we add different opacities values, to create lighter variants of this same color. The opacity values that we use are (in percentage):

<pre>{{ JSON.stringify(opacitiesValues) }}</pre>

<Palette />
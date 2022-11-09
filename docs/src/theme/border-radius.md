---
category: Theme
---

<script setup lang="ts">
import Cards from './components/Cards.vue'
import { borderRadius, remToPixel  } from './components/utils'
const items = Object.entries(borderRadius as Record<string, string>).map(([key, value]) => ({
  label: key,
  style: { borderRadius: remToPixel(value) },
}))
</script>

## Border radius
<Cards :items="items" show-value/>

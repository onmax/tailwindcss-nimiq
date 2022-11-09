---
category: Theme
---

<script setup lang="ts">
import Table from './components/Table.vue'
import Cards from './components/Cards.vue'
import { boxShadow } from './components/utils'

const items = Object.entries(boxShadow as Record<string, string>).map(([key, value]) => ({
  label: key,
  style: { boxShadow: value },
}))
</script>

## Box shadow
<Table :items="boxShadow"/>
<Cards class="mt-8" :items="items"/>

---
category: Theme
---

<script setup lang="ts">
import Table from './components/Table.vue'
import { spacing } from './components/utils'

const items = (spacing as Function)()
</script>

## Spacing
<Table :items="items"/>

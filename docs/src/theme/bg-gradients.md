---
category: Theme
---

<script setup lang="ts">
import { nimiqGradients } from '../util.ts'
</script>

## Background gradients

Tailwind Nimiq includes a gradient palette that we use to create Nimiq Apps.

<ul class="!my-0 !px-0 !list-none grid grid-cols-4 gap-8">
    <li v-for="([name, gradient]) in nimiqGradients" class="flex-1 !mt-0">
        <div class="h-24 w-24 mx-auto rounded-lg dark:ring-1 dark:ring-inset dark:ring-white/10" :style="`background: ${gradient}`"></div>
        <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block text-center">
            <div class="text-sm font-mono opacity-60 2xl:w-full lowercase h-6 whitespace-nowrap mx-auto">
                bg-{{ name }}
            </div>
        </div>
    </li>
</ul>
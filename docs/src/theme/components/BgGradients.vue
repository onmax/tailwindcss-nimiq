<script setup lang="ts">
import { getGradients } from './utils'

const { nimiqGradients } = getGradients()

</script>

<template>
    <ul class="!my-0 !px-0 !list-none flex flex-col gap-y-4">
        <li v-for="([name, gradient]) in nimiqGradients" class="flex-1 !mt-0">
            <div class="h-10 w-full mx-auto rounded-lg dark:ring-1 dark:ring-inset dark:ring-white/10" :style="`background: ${gradient}`">
                <div class="text-sm font-mono opacity-80 text-white grid place-content-center h-full lowercase whitespace-nowrap">
                    bg-{{ name }}
                </div>
            </div>
        </li>
    </ul>
</template>
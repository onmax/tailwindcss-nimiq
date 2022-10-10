---
category: Theme
---

<script setup lang="ts">
import { getColors, opacitiesValues } from '../util.ts'

const { colorsWithVariants } = getColors()
</script>

# Nimiq Palette

Tailwind Nimiq includes a color palette that we use to create Nimiq Apps.

For each color, we add different opacities values, to create lighter variants of this same color. The opacity values that we use are (in percentage):

<pre>{{ JSON.stringify(opacitiesValues) }}</pre>

<div class="grid grid-cols-1 gap-8 mt-12">
    <div class="flex flex-col md:flex-row" v-for="({name, primary, colors }) in colorsWithVariants">
        <div class="w-16 shrink-0 flex flex-col">
            <div class="flex flex-col justify-center">
                <h4 class="text-sm font-semibold capitalize">
                    {{ name }}
                </h4>
            </div>
            <div v-if="primary" class="h-10 flex-1 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10" :style="`background-color: ${primary}`"></div>
            <div class="text-sm font-mono opacity-60">
                {{ primary }}
            </div>
        </div>
        <ul class="!my-0 !list-none min-w-0 flex-1 grid grid-cols-4 2xl:grid-cols-8 gap-x-4 gap-y-3 2xl:gap-x-2 md:mt-10">
            <li v-for="({color, name}, i) in colors" class="flex flex-col gap-1.5 cursor-pointer !mt-0">
                <div class="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10" :style="`background-color: ${color}`"></div>
                <div class="px-0.5 flex md:justify-between md:space-x-2 items-start" :class="{'flex-col': !primary }">
                    <div class="text-sm font-medium 2xl:w-full dark:text-white lowercase">
                        {{ name }}
                    </div>
                    <div class="text-sm font-mono opacity-60 lowercase !ml-0">
                        {{  primary ? `${opacitiesValues[i]}%` : color }}
                    </div>
                </div>
            </li>
        </ul>
    </div>      
</div>

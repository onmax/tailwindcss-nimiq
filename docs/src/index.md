<script setup lang="ts">
import { theme } from '../../theme/src/theme.ts'
import { opacitiesValues } from '../../theme/src/colors.ts'
import defaultConfig from 'tailwindcss/defaultConfig'

const { colors, backgroundImage: bgGradients, spacing, borderRadius } = theme

const extractNumber = (name: string) => name.match(/\d+/)[0] || ''

const colorsWithVariants = []
const entities = []
const greys = []

const colorsBlackList = ['transparent', 'current', 'black', 'white']
const greysList = ['snow', 'fog', 'ash']
const entitiesList = ['btc', 'nim'] // s3...

Object.entries(colors).forEach(([key, value]) => {
    if(colorsBlackList.includes(key)) return
    if(greysList.includes(key)) {
        greys.push({ name: key, color: value })
    } else if(entitiesList.includes(key)) {
        entities.push({ name: key, color: value })
    } else {
        const primary = value.DEFAULT
        // remove .DEFAULT and save new object in variable
        const colors = Object.entries(value)
            .filter(([k, _]) => k !== 'DEFAULT')
            .map(([name, color]) => ({ name: extractNumber(name), color }))
        colorsWithVariants.push({ name: key, primary, colors })
    }
})

colorsWithVariants.unshift({
    name: 'Mono',
    colors: [
        ...greys,
        { name: 'white', color: '#ffffff' },
        { name: 'black', color: '#000000' }
    ]
})

const colorsNames = colorsWithVariants.map(({ name }) => name)

colorsWithVariants.unshift({ name: 'Entities', colors: entities })
const nimiqGradients = Object.entries(bgGradients).filter(([k, _]) => colorsNames.includes(k.split('-')[1]))

const remToPixel = (input: string) => {
    if(!input.includes('rem')) return input
    const rem = input.replace('rem', '')
    return `${parseFloat(rem) * 16}px`
}
</script>

# Nimiq TailwindCSS

## Palette

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

<div class="grid grid-cols-1 lg:grid-cols-2 justify-between gap-x-16">
    <div class="flex-1">
        <h2 id="spacing" tabindex="-1">Spacing<a class="header-anchor" href="#spacing" aria-hidden="true">#</a></h2>
        <div class="relative overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 supports-scrollbars:pr-2 lg:max-h-96">
            <table class="text-left border-collapse">
                <thead>
                    <tr>
                        <th class="sticky z-10 top-0 text-sm leading-6 font-semibold p-0">
                            <div class="py-2 pr-2 border-b">
                                Class
                            </div>
                        </th>
                        <th class="sticky z-10 top-0 text-sm leading-6 font-semibold p-0">
                            <div class="py-2 pl-2 border-b">
                                Properties
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="align-baseline">
                    <tr v-for="(value, key) in spacing()" class="">
                        <td translate="no" class="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400">
                            {{ key }}
                        </td>
                        <td translate="no" class="w-full py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300">
                            {{ remToPixel(value) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="flex-1">
        <h2 id="border-radius" tabindex="-1">Border Radius<a class="header-anchor" href="#border-radius" aria-hidden="true">#</a></h2>
        <div class="relative overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 supports-scrollbars:pr-2 lg:max-h-96">
            <table class="text-left border-collapse">
                <thead>
                    <tr>
                        <th class="sticky z-10 top-0 text-sm leading-6 font-semibold p-0">
                            <div class="py-2 pr-2">
                                Class
                            </div>
                        </th>
                        <th class="sticky z-10 top-0 text-sm leading-6 font-semibold p-0">
                            <div class="py-2 pl-2">
                                Properties
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="align-baseline">
                    <tr v-for="(value, key) in borderRadius" class="">
                        <td translate="no" class="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400">
                            {{ key }}
                        </td>
                        <td translate="no" class="w-full py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300">
                            {{ remToPixel(value) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

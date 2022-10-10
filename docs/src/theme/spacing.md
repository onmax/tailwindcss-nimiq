---
category: Theme
---

<script setup lang="ts">
import { spacing, remToPixel } from '../util.ts'
</script>

## Spacing

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
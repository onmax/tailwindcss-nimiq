<script setup lang="ts">
defineProps({
    items: {
        type: Array as () => { label: string, style: CSSStyleDeclaration }[],
        default: []
    },
    showValue: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <ul class="!mt-1 !mb-0 !list-none flex-1 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-16 md:mt-10 !p-0">
        <li v-for="item in items" class="!bg-gray-200 w-full aspect-square cursor-pointer !mt-0 rounded-full grid place-content-center flex flex-col justify-center text-center" v-bind="item">
            <span>{{ item.label }}</span>
            <span class="!text-xs" v-if="showValue && Object.values(item.style)[0] !== item.label">{{ Object.values(item.style)[0] }}</span>
        </li>
    </ul>

</template>
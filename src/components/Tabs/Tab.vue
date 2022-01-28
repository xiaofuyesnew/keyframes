<template>
  <div class="w-[100px] h-full flex flex-col bg-slate-200 dark:bg-indigo-400">
    <div class="w-full h-[60px] flex items-center justify-center divide-y-2 divide-white divide-solid" :class="{'dark:text-white dark:bg-indigo-700 bg-white text-slate-900': current === index}" v-for="(item, index) in tabs">{{item.text}}</div>
  </div>
</template>

<script setup>
defineProps({
  current: {
    type: Number,
    default: 0
  },
  tabs: {
    type: Array,
    default: () => []
  }
})
</script>
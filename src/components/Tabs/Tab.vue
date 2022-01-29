<template>
  <div class="w-[100px] h-full flex flex-col bg-slate-200 dark:bg-indigo-400">
    <div class="w-full h-[60px] flex items-center justify-center divide-y-2 divide-white divide-solid cursor-pointer hover:opacity-50" :class="{'dark:text-white dark:bg-indigo-700 bg-white text-slate-900': state.current === index}" v-for="(item, index) in state.tabs" :key="index" @click="commit('tabChange', index)">{{item.text}}</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const {state, commit} = useStore()


</script>
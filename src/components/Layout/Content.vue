<template>
  <main class="w-full h-screen pt-[50px] pb-[40px] dark:bg-indigo-700" :class="{'w-[calc(100%-100px)]': state.asideShow}">
    <slot></slot>
  </main>
</template>

<script setup>
import { useStore } from 'vuex'

const {state, commit} = useStore()


</script>
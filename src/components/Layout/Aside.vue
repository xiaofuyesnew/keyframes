<template>
  <aside class="h-full w-[400px] absolute top-0 right-0 pt-[50px] pb-[40px]">
    <slot></slot>
  </aside>
</template>

<script setup>
import { useStore } from 'vuex'

const { state, commit } = useStore()

</script>
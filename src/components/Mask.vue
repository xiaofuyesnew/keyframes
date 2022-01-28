<template>
  <div class="w-screen h-screen fixed top-0 left-0 bg-black/60 overflow-x-hidden overflow-y-auto" v-show="state.showMask">
    <slot></slot>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const { state } = useStore()
</script>
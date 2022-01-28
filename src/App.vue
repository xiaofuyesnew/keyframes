<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const { commit } = useStore()

const mode = localStorage.getItem('mode')

onBeforeMount(() => {
  if (mode) {
    commit('setMode', mode)
    if (mode === 'dark') {
      document.body.classList.add('dark')
    }
  } else {
    localStorage.setItem('mode', 'dark')
    commit('setMode', 'dark')
    document.body.classList.add('dark')
  }
})

</script>
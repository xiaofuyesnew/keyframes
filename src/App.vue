<template>
  <router-view></router-view>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

const { commit } = useStore()

const theme = localStorage.getItem('theme')

onBeforeMount(() => {
  if (theme) {
    commit('setMode', theme)
    if (theme === 'dark') {
      document.body.classList.add('dark')
    }
  } else {
    localStorage.setItem('theme', 'dark')
    commit('setMode', 'dark')
    document.body.classList.add('dark')
  }
})

</script>
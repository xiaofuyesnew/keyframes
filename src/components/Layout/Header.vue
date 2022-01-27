<template>
  <div
    class="w-full w-max-[800px] h-[50px] dark:bg-slate-800 px-[20px] flex items-center justify-between"
  >
    <div class="flex items-center">
      <img class="w-[30px] h-[30px]" src="/images/logo.svg" />
      <div class="text-slate-900 dark:text-white font-semibold text-[18px] pl-[10px]">Keyframes</div>
    </div>
    <div class="flex items-center">
      <a href="https://github.com/xiaofuyesnew/keyframes">
        <Github class="w-[30px] fill-slate-900 dark:fill-white" />
      </a>
      <button
        @click="commit('toggleMode')"
        class="ml-[20px]"
        :title="state.mode === 'dark'
        ? '上帝说要有光'
        : '黑夜给了我黑色的眼睛'"
      >
        <moon
          class="w-[30px] stroke-sky-500 fill-sky-500/20 hover:stroke-sky-300"
          v-if="state.mode === 'dark'"
        />
        <sun
          class="w-[30px] stroke-orange-500 fill-orange-500/20 hover:stroke-orange-700"
          v-if="state.mode === 'light'"
        />
      </button>
    </div>
  </div>
</template>

<script setup>

import { useStore } from 'vuex'

import Github from '@/components/Icons/Github.vue'
import Moon from '@/components/Icons/Moon.vue'
import Sun from '@/components/Icons/Sun.vue'

const { state, commit } = useStore()

</script>
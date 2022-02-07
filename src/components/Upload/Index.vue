<template>
  <div class="w-full h-full">
    <div class="w-full h-[60px] flex items-center">
      <button class="button relative">
        <input class="absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer" type="file" multiple accept="image/*" @change="fileChange">
        <span>上传图片</span>
      </button>
      <button class="button ml-[12px]" @click="commit('emptyFileList')">清空</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import List from './List.vue'

const {state, commit} = useStore()


const fileChange = (e) => {
  console.log(e)
}


</script>
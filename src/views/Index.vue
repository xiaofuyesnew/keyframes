<template>
  <layout>
    <template #content>
      <div class="w-full h-full flex items-center">
        <tab :tabs="data.tabs" />
        <tab-page></tab-page>
      </div>
    </template>
  </layout>
  <l-mask>
    <close-button @click="commit('toggleMask')" />
  </l-mask>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import Layout from '@/components/Layout.vue'
import LMask from '@/components/Mask.vue'
import CloseButton from '@/components/CloseButton.vue'
import Tab from '@/components/Tabs/Tab.vue'
import TabPage from '@/components/Tabs/Page.vue'
import MyCanvas from '@/components/Canvas.vue'

const { commit } = useStore()

const data = reactive({
  tabs: [
    {
      text: '上传图片'
    },
    {
      text: '图片排序'
    },
    {
      text: '合成预览'
    },
    {
      text: '代码预览'
    }
  ]

})
</script>
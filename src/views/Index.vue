<template>
  <layout>
    <template #content>
      <div class="w-full h-full flex items-center">
        <tab />
        <tab-page>
          <div class="w-full h-full flex items-center justify-center" v-if="state.current === 0">
        
          </div>
          <div v-if="state.current === 1">合成预览</div>
          <div v-if="state.current === 2">代码预览</div>
        </tab-page>
      </div>
    </template>
  </layout>
  <l-mask>
    <close-button @click="commit('toggleMask')" />
  </l-mask>
</template>

<script setup>
import { useStore } from 'vuex'
import Layout from '@/components/Layout.vue'
import LMask from '@/components/Mask.vue'
import CloseButton from '@/components/CloseButton.vue'
import Tab from '@/components/Tabs/Tab.vue'
import TabPage from '@/components/Tabs/Page.vue'
import MyCanvas from '@/components/Canvas.vue'

const { state, commit } = useStore()

</script>
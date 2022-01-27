<template>
  <div class="w-screen h-screen overflow-hidden flex flex-col">
    <l-header />
    <l-content>
      <slot></slot>
      <l-aside />
    </l-content>
    <l-footer />
  </div>
</template>

<script setup>
import LHeader from './Layout/Header.vue'
import LFooter from './Layout/Footer.vue'
import LContent from './Layout/Content.vue'
import LAside from './Layout/Aside.vue'
</script>
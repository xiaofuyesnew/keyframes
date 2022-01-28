<template>
  <l-header />
  <!-- <l-content class="w-[calc(100%-400px)]"> -->
  <l-content>
    <slot name="content"></slot>
  </l-content>
  <!-- <l-aside>
    <slot name="aside"></slot>
  </l-aside> -->
  <l-footer />
</template>

<script setup>
import LHeader from './Layout/Header.vue'
import LFooter from './Layout/Footer.vue'
import LContent from './Layout/Content.vue'
import LAside from './Layout/Aside.vue'
</script>
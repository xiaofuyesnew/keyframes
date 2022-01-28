<template>
  <canvas id="cvs" :width="width" :height="height"></canvas>
</template>

<script setup>

defineProps({
  width: {
    type: Number,
    default: 800
  },
  height: {
    type: Number,
    default: 600
  }
})

</script>
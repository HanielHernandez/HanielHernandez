<template>
  <div class="flex justify-center items-center" :class="[backgroundColor]">
    <div
      class="flex items-strech container container-xl items-center"
      style="min-height: 100vh; height: 100%"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
defineProps({
  backgroundColor: {
    type: String,
    default: () => ''
  }
})
</script>

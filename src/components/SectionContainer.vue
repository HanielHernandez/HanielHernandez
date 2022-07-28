<template>
  <div class="flex justify-center items-center" :class="[backgroundColor]">
    <div
      class="flex items-strech items-center"
      style="min-height: 100vh; height: 100%; max-width: 1024px"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  backgroundColor: {
    type: String,
    default: () => ''
  }
})
</script>

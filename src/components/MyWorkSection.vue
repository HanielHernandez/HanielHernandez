<script setup>
import WorkCard from './WorkCard.vue'
</script>
<template lang="">
  <div class="px-4 flex flex-col">
    <h4 class="text-center font-black text-3xl my-6 md:my-12 text-gray-900">
      My work
    </h4>
    <div class="flex flex-row mb-8 w-full md:w-1/4 lg:1/6 card-column">
      <work-card>something</work-card>
    </div>
  </div>
</template>

<style lang="scss">
.card-column {
}
</style>

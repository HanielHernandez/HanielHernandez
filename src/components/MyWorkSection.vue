<script setup>
import WorkCard from './WorkCard.vue'
</script>
<template lang="">
  <div id="about_me" class="h-screen w-screen bg-opacity-10">
    <div class="container container-xl mx-auto">
      <div class="px-4 py-16 flex flex-col">
        <h4
          class="text-center font-black mb-4 md:mb-6 text-3xl md:text-5xl text-gray-800"
        >
          {{ $t('myWork.title') }}
        </h4>
        <h6 class="text-center text-gray-600 text-xl">
          {{ $t('myWork.subtitle') }}
        </h6>
        <div
          class="flex mt-16 flex-row mb-8 w-full md:w-1/4 lg:1/6 card-column"
        >
          <work-card>something</work-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-column {
}
</style>

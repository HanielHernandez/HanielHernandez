<template>
  <section-container>
    <div
      class="flex flex-col-reverse md:flex-row md:py-16 justify-center flex-nowrap md:justify-start"
      style="height: 100%"
    >
      <div
        id="rightSide"
        class="flex justify-center flex-col w-full md:w-1/2 md:h-full px-4 py-10"
      >
        <h2
          class="text-2xl font-bold md:text-4xl text-blue-600 mb-8 md:mb-12 dark:text-white"
        >
          {{ $t('home.firstLine') }}
        </h2>
        <h1
          class="leading-tight font-black text-5xl md:text-6xl lg:text-7xl mb-8 text-gray-800 md:mb-12 dark:text-white"
        >
          {{ $t('home.secondLine') }}
        </h1>
        <p class="text-gray-600 mb-8" style="max-width: 650px">
          {{ $t('home.paragraph') }}
        </p>
        <div class="flex items-center">
          <a
            href
            class="bg-blue-600 md:text-lg lg:text-2xl font-bold transition-all ease-in-out btn shadow-md duration-300 hover:bg-blue-800 mr-4 border-ra text-white px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-sm"
            >{{ $t('home.myWorkBtn') }}</a
          >
          <a
            href
            class="border border-blue-600 md:text-lg lg:text-2xl font-bold btn transition-all ease-in-out rounded-sm duration-300 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5"
            >{{ $t('contactMe') }}</a
          >
        </div>
      </div>
      <div
        class="flex justify-center items-center w-full md:w-1/2 md:h-full px-4"
      >
        <img src="../assets/img/home_graph.svg" class="w-full h-auto" />
      </div>
    </div>
  </section-container>
</template>

<script setup>
import SectionContainer from '../components/SectionContainer.vue'
</script>
<style lang="scss">
.section {
  height: 100vh;
}
</style>

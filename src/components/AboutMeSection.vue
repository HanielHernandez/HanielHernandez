<script setup lang="ts"></script>
<template>
  <section-container background-color="bg-blue-600 bg-opacity-10">
    <!-- <div id="about_me" class="h-screen w-screen bg-blue-600 bg-opacity-10">
    <div class="container container-xl mx-auto"> -->
    <div
      class="flex flex-col md:flex-row md:justify-between justify-center items-center section h-screen mx-4"
    >
      <div class="w-full md:w-1/2 py-4">
        <img
          src="https://via.placeholder.com/500x550"
          alt=""
          class="mx-auto w-56 md:w-96"
        />
      </div>
      <div class="w-full md:w-1/2 flex px-6 flex-col align-center">
        <h4 class="font-black text-3xl mb-6 md:text-5xl my-4 text-gray-800">
          {{ $t('aboutMe.title') }}
        </h4>
        <p class="md:text-xl mb-6 text-gray-600 font-normal">
          {{ $t('aboutMe.paragraph1') }}
        </p>
        <p class="md:text-xl mb-6 text-gray-600 font-normal">
          {{ $t('aboutMe.paragraph2') }}
        </p>
        <p class="md:text-xl mb-6 text-gray-600 font-normal">
          {{ $t('aboutMe.paragraph3') }}
        </p>
        <h5 class="font-medium text-3xl mb-6 text-gray-700">
          {{ $t('aboutMe.knowlege.title') }}
        </h5>
        <ul
          class="list-disc px-6 text-gray-600 text-xl w-full"
          style="columns: 2"
        >
          <li
            v-for="tech in techs"
            :key="'tech-' + tech"
            style="margin-right: -1rem"
          >
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </section-container>
  <!-- </div>
  </div> -->
</template>
<script setup lang="ts">
import SectionContainer from './SectionContainer.vue'

const techs = [
  'Angular',
  'Vue',
  'Nuxt',
  'SASS',
  'Typescript',
  'Bootstrap',
  'Bulma',
  'Tailwind',
  'Git/Github'
]
</script>

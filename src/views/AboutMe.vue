<script lang="ts" setup>
import { ref } from 'vue'
import SkillsSection from '../components/SkillsSection.vue'
const paragraphs = ref([
  'aboutMe.paragraph1',
  'aboutMe.paragraph2',
  'aboutMe.paragraph3'
])
</script>
<template>
  <div>
    <div class="flex flex-col md:flex-row">
      <div
        class="flex flex-col items-center w-full md:pr-4 lg:pr-8 md:w-2/5 p-4 md:p-0"
      >
        <div class="border-4 rounded-full border-blue-500 border-collapse">
          <img
            class="rounded-full w-48 h-48 md:h-auto md:w-full shadow-md border-white border-4"
            src="../assets/img/profile_picture.jpg"
            alt="profile piceture"
          />
        </div>
      </div>
      <div class="flex flex-col ritems-center w-full md:w-3/5 p-4 lg:p-0">
        <div class="title relative mb-4">
          <h1
            class="font-bold text-2xl text-gray-900 foreground dark:text-white"
          >
            {{ $t('aboutMe.title') }}
          </h1>
        </div>
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="`${index}-pagraph`"
          class="dark:text-gray-400 text-justify text-gray-600 mb-2 text-md font-regular description"
          v-html="$t(paragraph)"
        ></p>
      </div>
    </div>
    <!-- Skills Section -->
    <SkillsSection />
  </div>
</template>

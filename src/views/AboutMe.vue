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
    <div class="pt-36 flex flex-col md:flex-row">
      <div class="flex flex-col items-center w-2/5 p-4 md:p-0">
        <div class="border-4 rounded-full border-blue-500 border-collapse">
          <img
            class="rounded-full w-72 h-72 shadow-md border-white border-4"
            src="../assets/img/profile_picture.jpg"
            alt="profile piceture"
          />
        </div>
      </div>
      <div class="flex flex-col ritems-center w-3/5 p-4 md:p-0">
        <div class="title relative mb-4">
          <h1
            class="font-bold text-2xl text-gray-900 mb-4 foreground dark:text-white"
          >
            {{ $t('aboutMe.title') }}
          </h1>
          <p
            v-for="(paragraph, index) in paragraphs"
            :key="`${index}-pagraph`"
            class="dark:text-gray-400 text-justify text-gray-600 mb-2 text-md font-regular description"
            v-html="$t(paragraph)"
          ></p>
        </div>
      </div>
    </div>
    <!-- Skills Section -->
    <SkillsSection />
  </div>
</template>

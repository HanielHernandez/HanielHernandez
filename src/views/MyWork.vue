<!-- eslint-disable vue/no-v-html -->
<script lang="ts" setup>
import { ref } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
const experiences = ref([
  {
    companyName: 'FullStacklabs',
    from: 'Mar. 2022',
    to: 'Jul. 2022',
    position: 'myWork.professionalExperience.fsl.title',
    backgroundColor: '',
    id: 'fsl'
  },
  {
    companyName: 'AIM services',
    from: 'Feb. 2019',
    to: 'Mar. 2022',
    id: 'aims',
    backgroundColor: 'bg-yellow-100 border-orange-300'
  },
  {
    companyName: 'Discovery Real State',
    from: 'Nov. 2017',
    to: 'Jun. 2018',
    id: 'drs',
    backgroundColor: 'bg-green-200 border-green-400'
  }
])
</script>
<template>
  <div>
    <div class="px-3 lg:px-0">
      <SectionTitle>
        {{ $t('myWork.professionalExperience.title') }}
      </SectionTitle>
    </div>

    <div class="flex flex-col">
      <div
        v-for="(experience, index) in experiences"
        :key="`${index}-experience`"
        class="flex flex-col md:flex-row cursor-default items-center opacity-75 duration-300 hover:opacity-100 transition-all ease-in-out"
      >
        <div
          class="md:w-2/6 px-3 lg:px-0 py-4 font-bold text-gray-500 dark:text-gray-400"
        >
          <p>{{ experience.from }} - {{ experience.to }}</p>
        </div>
        <div class="w-full md:w-4/6 px-3 lg:px-0 py-4">
          <div
            class="bg-blue-200 border-cyan-600 border p-4 rounded-sm transition-all ease-in-out duration-300 hover:shadow-md"
          >
            <h4 class="text-lg font-bold text-gray-800">
              {{ $t(`myWork.professionalExperience.${experience.id}.title`) }}
            </h4>
            <h3 class="text-gray-500 text-sm my-1">
              {{ experience.companyName }}
            </h3>
            <p
              class="text-gray-600 text-justify"
              v-html="
                $t(`myWork.professionalExperience.${experience.id}.description`)
              "
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

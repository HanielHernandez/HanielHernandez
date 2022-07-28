<script lang="ts" setup>
import { ref } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
const experiences = ref([
  {
    companyName: 'FullStacklabs',
    from: 'Mar. 2022',
    to: 'Jul. 2022',
    position: 'Mid-level Front End',
    backgroundColor: 'bg-blue-200 border-cyan-600',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi nunc, feugiat consequat neque sit amet, fermentum tincidunt lacus. Etiam blandit mi urna, in placerat turpis fermentum et. Donec rutrum orci ut turpis aliquam, quis vulputate eros vulputate. Suspendisse ornare volutpat ante id rhoncus. In semper arcu sapien, sit amet elementum lectus tempor non. Nullam sit amet luctus risus, non suscipit turpis. Nullam sit amet auctor lorem. Maecenas vel justo mauris.'
  },
  {
    companyName: 'AIM services',
    from: 'Feb. 2019',
    to: 'Mar. 2022',
    position: 'Desarrollador Front End',
    description: '',
    backgroundColor: 'bg-yellow-100 border-orange-300'
  },
  {
    companyName: 'Discovery Real State',
    from: 'Nov. 2017',
    to: 'Jun. 2018',
    position: 'Junior Front End',
    description: '',
    backgroundColor: 'bg-green-200 border-green-400'
  }
])
</script>
<template>
  <div>
    <table class="w-full text-base">
      <SectionTitle>
        {{ $t('myWork.professionalExperience.title') }}
      </SectionTitle>
      <tr
        v-for="(experience, index) in experiences"
        :key="`${index}-experience`"
      >
        <td class="w-2/6 py-4 font-bold text-gray-500">
          <p>{{ experience.from }} - {{ experience.to }}</p>
        </td>
        <td class="w-4/6 pl-4 py-4">
          <div :class="['border  p-4 rounded-sm', experience.backgroundColor]">
            <h4 class="text-lg font-bold text-gray-800">
              {{ $t(experience.position) }}
            </h4>
            <h3 class="text-gray-500 text-sm my-1">
              {{ experience.companyName }}
            </h3>
            <p class="text-gray-600 text-justify">
              {{ experience.description }}
            </p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

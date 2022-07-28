<script setup lang="ts">
import ExperienceSection from '../components/ExperienceSection.vue'
import { ref } from 'vue'

// const experiences = ref([
//   {
//     companyName: 'FullStacklabs',
//     from: 'Mar. 2022',
//     to: 'Jul. 2022',
//     position: 'Desarrollador Front End'
//   },
//   {
//     companyName: 'AIM services',
//     from: 'Feb. 2019',
//     to: 'Mar. 2022',
//     position: 'Desarrollador Front End'
//   },
//   {
//     companyName: 'Discovery Real State',
//     from: 'Nov. 2017',
//     to: 'Jun. 2018',
//     position: 'Desarrollador Front End'
//   }
// ])

const personaInfo = ref([
  {
    label: 'cv.sidebar.birthDate.label',
    text: 'cv.sidebar.birthDate.text'
  },
  {
    label: 'cv.sidebar.birthPlace.label',
    text: 'cv.sidebar.birthPlace.text'
  },
  {
    label: 'cv.sidebar.gender.label',
    text: 'cv.sidebar.gender.text'
  }
])

const contactInfoData = ref([
  {
    icon: 'mail',
    text: 'haniel1121@outlook.com'
  },
  {
    icon: 'phone',
    text: '+505 76336507'
  }
])

const education = ref([
  {
    name: 'Universidad Centroamericana UCA',
    from: '2013',
    to: '2017'
  }
])
</script>
<template>
  <div class="flex flex-row my-cv">
    <div class="flex flex-col w-2/5 sidebar px-4 pt-10 bg-blue-900 text-white">
      <div class="">
        <img
          src="https://via.placeholder.com/150"
          class="border border-lg rounded-full w-48 h-48"
          alt=""
        />
      </div>
      <h3
        class="text-lg my-2 font-bold text-center border-b pb-4 border-b-white uppercase"
      >
        {{ $t('cv.sidebar.personalInfo') }}
      </h3>
      <div class="text-sm">
        <!-- Pesonal Info section-->
        <table class="w-full mb-4">
          <tbody>
            <tr v-for="info in personaInfo" :key="info.label">
              <td class="w-12 py-1 align-middle">
                <b>{{ $t(info.label) }}</b>
              </td>
              <td class="w-1/2 py-1 align-middle">
                <p>
                  {{ $t(info.text) }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <!--End of Pesonal Info section-->
      </div>

      <h3
        class="text-lg my-2 font-bold text-center border-b pb-4 border-b-white uppercase"
      >
        {{ $t('cv.sidebar.contactInfo') }}
      </h3>
      <div class="text-sm">
        <!-- Pesonal Info section-->
        <table>
          <tbody>
            <tr v-for="contactInfo in contactInfoData" :key="contactInfo.icon">
              <td class="py-1 align-middle">
                <span class="material-symbols-rounded">
                  {{ contactInfo.icon }}
                </span>
              </td>
              <td class="pl-2 py-1 align-middle">
                <p>
                  {{ contactInfo.text }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <!--End of Pesonal Info section-->
      </div>
    </div>

    <div class="flex flex-col w-3/5">
      <div class="py-4 px-4 text-center">
        <h1 class="text-3xl font-black">Haniel Hernández</h1>
        <h5 class="text-xl font-medium text-gray-600">Front end developer</h5>
      </div>
      <div class="w-full px-8">
        <h4
          class="uppercase text-2xl border-b-4 pb-2 border-blue-900 font-black text-blue-900 my-2"
        >
          Experiencia
        </h4>
        <ExperienceSection />

        <!-- <div
          v-for="(experience, index) in experiences"
          :key="'exp-' + index"
          class="mb-6"
        >
          <h5>
            <span class="font-bold mr-4"> {{ experience.companyName }}</span>
            <span class="opacity-75">
              {{ experience.from }} - {{ experience.to }}
            </span>
          </h5>
          <h6 class="text-sm font-medium opacity-75">
            {{ experience.position }}
          </h6>
        </div>-->
      </div>

      <div class="px-8">
        <h4 class="uppercase font-black text-blue-900 text-xs my-2">
          {{ $t('education') }}
        </h4>
        <div v-for="(ed, index) in education" :key="'ed-' + index" class="mb-6">
          <h5>
            <span class="font-bold mr-4"> {{ ed.name }}</span>
          </h5>
          <h6 class="text-sm font-medium opacity-75">
            {{ ed.from }} - {{ ed.to }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-cv {
  font-size: 12px;
  max-width: 1024px;
  height: 100vh;
  .sidebar {
    width: 250px;
  }
}
</style>

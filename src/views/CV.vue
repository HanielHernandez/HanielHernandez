<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    companyName: 'FullStacklabs',
    from: 'Mar. 2022',
    to: 'Jul. 2022',
    position: 'Desarrollador Front End'
  },
  {
    companyName: 'AIM services',
    from: 'Feb. 2019',
    to: 'Mar. 2022',
    position: 'Desarrollador Front End'
  },
  {
    companyName: 'Discovery Real State',
    from: 'Nov. 2017',
    to: 'Jun. 2018',
    position: 'Desarrollador Front End'
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
<template lang="">
  <div class="flex flex-row my-cv">
    <div class="flex flex-col w-1/3 px-4 pt-10 bg-blue-900 text-white">
      <div class="">
        <img
          src="https://via.placeholder.com/150"
          class="border border-lg rounded-full w-48 h-48"
          alt=""
        />
      </div>

      <h3 class="text-lg font-bold text-center my-10 uppercase">
        Información de contacto
      </h3>
      <div class="text-sm">
        <p><b>Celular:</b> 7633-6507</p>
        <p>
          <b>{{ $t('email') }}:</b> haniel1121@outlook.com
        </p>
      </div>
    </div>
    <div class="flex flex-col w-2/3">
      <div class="py-8 px-4 text-center">
        <h1 class="text-3xl font-black">Haniel Hernández</h1>
        <h5 class="text-xl font-medium text-gray-600">Front end developer</h5>
      </div>
      <div class="pt-8 px-8">
        <h4 class="uppercase font-black text-blue-900 text-xs my-2">
          Experiencia
        </h4>
        <div
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
        </div>
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
  max-width: 670px;
  height: 100vh;
}
</style>

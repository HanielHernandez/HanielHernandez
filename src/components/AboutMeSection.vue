<script setup></script>
<template>
  <div class="h-screen w-screen bg-blue-600 bg-opacity-10">
    <div class="container container-xl mx-auto">
      <div
        class="flex flex-col md:flex-row md:justify-start justify-center items-center section h-screen mx-4"
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
            About me
          </h4>
          <p class="md:text-xl mb-6 text-gray-600 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            commodi minus corporis pariatur quam? Aliquid sed aliquam nobis
            voluptatem. Quaerat suscipit repellat inventore ex sit adipisci
            labore maxime exercitationem recusandae?ellat inventore ex sit
            adipisci labore maxime exercitationem recusandae?
          </p>
          <h5 class="font-medium text-3xl mb-6 text-gray-700">What I know</h5>
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
    </div>
  </div>
</template>
<script setup>
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

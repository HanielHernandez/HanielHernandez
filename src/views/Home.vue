<template>
  <div
    class="flex flex-col-reverse md:flex-row justify-center flex-nowrap md:justify-start section h-full"
  >
    <div
      id="rightSide"
      class="flex justify-center flex-col w-full md:w-1/2 md:h-full px-4 py-10"
    >
      <h2
        class="text-2xl font-bold md:text-4xl text-blue-600 mb-8 md:mb-12 dark:text-white"
      >
        Lorem ipsum dolor
      </h2>
      <h1
        class="font-black text-5xl md:text-6xl lg:text-7xl mb-8 text-neutral-800 md:mb-12 dark:text-white"
      >
        Lorem ipsum dolor
      </h1>
      <p class="text-neutral-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nisi
        excepturi ratione aliquid repellat esse ad ipsum quasi! Perspiciatis,
        nostrum nobis! Eveniet reprehenderit quidem excepturi quisquam
        laudantium nostrum quod necessitatibus.
      </p>
      <div class="flex items-center">
        <a
          href=""
          class="bg-blue-600 md:text-lg lg:text-2xl font-bold transition-all ease-in-out btn shadow-md duration-300 hover:bg-blue-800 mr-4 border-ra text-white px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 rounded-sm"
        >
          {{ $t('home.myWorkBtn') }}
        </a>
        <a
          href=""
          class="border border-blue-600 md:text-lg lg:text-2xl font-bold btn transition-all ease-in-out rounded-sm duration-300 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5"
        >
          {{ $t('contactMe') }}
        </a>
      </div>
    </div>
    <div
      class="flex justify-center items-center w-full md:w-1/2 md:h-full px-4"
    >
      <img
        src="https://via.placeholder.com/450x450"
        alt=""
        class="w-full h-auto"
      />
    </div>
  </div>
  <!--###### About me section #######+##--->

  <!--###### End of about me section #########--->
</template>

<script>
// import AboutMeSection from '../components/AboutMeSection.vue'

export default {
  name: 'Home',
  // components: { AboutMeSection },
  props: {
    el: {
      type: Object,
      default: () => {
        return {}
      }
    },
    done: {
      type: Function,
      default: () => {
        return () => {}
      }
    }
  },
  setup() {},
  mounted() {
    console.log()
  }
}
</script>
<style lang="scss">
.section {
  height: 100vh;
}
</style>

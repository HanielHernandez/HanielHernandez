<template>
  <div class="fixed z-50 top-0 left-0 p-6 flex w-full">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <a href="" class="text-3xl uppercase font-black logo text-blue-600">
          Logo
        </a>

        <div>
          <ul id="navMenu" class="flex">
            <li
              v-for="(route, index) in routes"
              :key="`route-${index}`"
              :ref="(el) => (links[index] = el)"
              class="nav-link-container"
            >
              <navbar-link
                :to="route.route"
                :active="currentRoute == route.route.name"
              >
                {{ route.text }}
              </navbar-link>
            </li>
            <li class="border-l-2 border-blue-600 px-4 dark:text-white">
              <select v-model="$i18n.locale">
                <option value="es-ES">ES</option>
                <option value="en-US">EN</option>
              </select>

              <!-- <a href="#" class="bold mr-4" @click="$i18n.locale = 'es-ES'"
                >ES</a
              >
              <a href="#" class="bold" @click="$i18n.locale = 'en-US'">EN</a> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
export default {
  setup() {
    const links = ref([])
    onMounted(() => {
      console.log(links.value)
      let tl = gsap.timeline()
      tl.from(
        '#navMenu >*',
        {
          y: -30,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'back.inOut(5)'
        },
        0
      ),
        tl.from(
          '.logo',
          {
            y: -30,
            opacity: 0,
            duration: 1,
            ease: 'back.inOut(5)'
          },
          0
        )
      tl.play()
    })
    return {
      links
    }
  },
  computed: {
    routes() {
      return this.$config.navbarRoutes
    },
    currentRoute() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
select {
  &:focus {
    outline: none;
  }
}
</style>

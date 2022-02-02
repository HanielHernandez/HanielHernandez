<template>
  <div class="fixed z-50 top-0 left-0 p-3 lg:p-6 flex w-full">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <a href="" class="text-3xl uppercase font-black logo text-blue-600">
          Logo
        </a>

        <div>
          <ul
            id="navMenu"
            class="
              shadow-lg
              dark:bg-gray-900
              transitions
              md:shadow-none md:py-0
              w-100
              bg-white
              border-gray-300
              md:flex
              dark:text-white
            "
          >
            <li
              v-for="(route, index) in routes"
              :key="`route-${index}`"
              :ref="(el) => (links[index] = el)"
              class="nav-link-container text-center"
            >
              <navbar-link
                :to="route.route"
                :active="currentRoute == route.route.name"
              >
                {{ $t(route.text) }}
              </navbar-link>
            </li>
            <li class="border-l-2 border-blue-600 px-4 dark:text-white">
              <select
                v-model="$i18n.locale"
                :class="[
                  'transitionates',
                  darkMode ? 'bg-gray-900' : 'bg-white'
                ]"
              >
                <option value="es-ES">ES</option>
                <option value="en-US">EN</option>
              </select>

              <!-- <a href="#" class="bold mr-4" @click="$i18n.locale = 'es-ES'"
                >ES</a
              >
              <a href="#" class="bold" @click="$i18n.locale = 'en-US'">EN</a> -->
            </li>
            <li class="border-l-2 border-blue-600 px-4 transitionates">
              <button alt="night-mode" @click="changeLightMode">
                <span class="material-icons-round" alt="night-mode">
                  {{ darkMode ? 'light_mode' : 'nightlight_round' }}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button class="menu-button">
        <span class="material-icons-round"> menu </span>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
export default {
  props: {
    darkMode: {
      type: Boolean,
      default: () => false
    }
  },
  emits: ['onChangeLightMode'],
  setup(props, { emit }) {
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
    const changeLightMode = () => {
      emit('onChangeLightMode', true)
    }

    return {
      links,
      changeLightMode
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
.transitionates {
  @apply ease-in-out;
  @apply transition-all;
  @apply duration-300;
}
.menu-button {
  border: 1px solid rgba(0, 0, 0, 0.12);
  @apply px-3 py-1;
  position: absolute;
  top: 0.75rem;
  vertical-align: middle;
  right: 0.75rem;
  z-index: 60;
  .span.material-icons-round {
    line-height: 100%;
  }
}
</style>

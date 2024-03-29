<script lang="ts" setup>
import { computed, ref } from 'vue'
import Btn from './Btn.vue'
import gsap from 'gsap'
import config from '../config'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale: localLang } = useI18n()
const routes = computed(() => config.navbarRoutes)
const currentRoute = computed(() => route.path)

const links = ref<any[]>([])
const menuOpen = ref(false)

const openMenu = () => {
  menuOpen.value = !menuOpen.value
}

const getTimeline = (el: HTMLElement, done: () => void) => {
  const tl = gsap.timeline({
    onComplete: done
  })
  tl.fromTo(
    el,
    {
      y: '-100%',
      x: '100%',
      borderBottomLeftRadius: '9999px',
      opacity: 0
    },
    {
      y: 0,
      x: 0,
      opacity: 1,
      borderBottomLeftRadius: 0,
      ease: 'power4.inOut',
      duration: 0.3
    },
    0
  )

  tl.to(
    '#line-2',
    {
      opacity: 0,
      duration: 0.2
    },
    0
  )
  tl.to(
    '#line-1',
    {
      transformOrigin: 'center',
      y: '0.37rem',
      duration: 0.2
    },
    0
  )
  tl.to(
    '#line-3',
    {
      transformOrigin: 'center',
      y: '-0.37rem',
      duration: 0.2
    },
    0
  )
  tl.to(
    '#line-1',
    {
      rotate: 45
    },
    0.2
  )
  tl.to(
    '#line-3',
    {
      rotate: -45
    },
    0.2
  )

  tl.from(
    el.getElementsByClassName('nav-link-container'),
    {
      x: '-30px',
      opacity: 0,
      stagger: 0.1,
      duration: 0.3
    },
    0.25
  )

  return tl
}

const onEnter = (el: HTMLElement, done: () => void) => {
  const tl = getTimeline(el, done)
  tl.play()
  // console.log(' ENTER', el)
  // const tl = gsap.timeline({
  //   onComplete: done
  // })
  // tl.fromTo(
  //   el,
  //   {
  //     y: '-100%',
  //     x: 0,
  //     opacity: 0
  //   },
  //   {
  //     y: 0,
  //     x: 0,
  //     opacity: 1,
  //     ease: 'power4.inOut',
  //     duration: 0.3
  //   },
  //   0
  // )

  // tl.to(
  //   '#line-2',
  //   {
  //     opacity: 0,
  //     duration: 0.2
  //   },
  //   0
  // )
  // tl.to(
  //   '#line-1',
  //   {
  //     transformOrigin: 'center',
  //     y: '0.37rem',
  //     duration: 0.2
  //   },
  //   0
  // )
  // tl.to(
  //   '#line-3',
  //   {
  //     transformOrigin: 'center',
  //     y: '-0.37rem',
  //     duration: 0.2
  //   },
  //   0
  // )
  // tl.to(
  //   '#line-1',
  //   {
  //     rotate: 45
  //   },
  //   0.2
  // )
  // tl.to(
  //   '#line-3',
  //   {
  //     rotate: -45
  //   },
  //   0.2
  // )

  // tl.from(
  //   '.nav-link-container',
  //   {
  //     x: '-30px',
  //     opacity: 0,
  //     stagger: 0.1,
  //     duration: 0.3
  //   },
  //   0.25
  // )
  // tl.play()
}
const onLeave = (el: HTMLElement, done: () => void) => {
  const tl = gsap.timeline({
    onComplete: done
  })
  tl.to(
    el.getElementsByClassName('nav-link-container'),
    {
      x: '-30px',
      opacity: 0,
      stagger: 0.1,
      duration: 0.3
    },
    0
  )

  tl.to(
    '#line-2',
    {
      opacity: 1,
      duration: 0.2
    },
    0.2
  )
  tl.to(
    '#line-1',
    {
      rotate: 0,
      duration: 0.2
    },
    0.2
  )
  tl.to(
    '#line-3',
    {
      rotate: 0,
      duration: 0.2
    },
    0.2
  )
  tl.to(
    '#line-1,#line-3',
    {
      y: 0
    },
    0.6
  )

  tl.to(
    el,
    {
      y: '-100%',
      x: '100%',
      borderBottomLeftRadius: '9999px',
      opacity: 0,
      ease: 'power4.inOut',
      duration: 0.3
    },
    0.6
  )

  tl.play()
}

const setLang = () => {
  localStorage.setItem('lang', localLang.value)
}
</script>
<template>
  <div
    class="fixed z-50 top-0 left-0 p-3 lg:p-6 flex w-full dark:bg-neutral-900/90 transition-all ease-in-out duration-300 bg-white"
  >
    <div class="mx-auto w-full" style="max-width: 1024px">
      <div class="flex w-full md:flex-row justify-between items-center">
        <a href="" class="md:text-xl uppercase font-black logo text-blue-600">
          Haniel FED
        </a>

        <div>
          <ul
            id="navMenu"
            class="hidden transitions md:shadow-none md:py-0 w-100 md:flex dark:text-white"
          >
            <li
              v-for="(route, index) in routes"
              :key="`route-${index}`"
              :ref="(el) => (links[index] = el)"
              class="nav-link-container text-center"
            >
              <navbar-link
                :to="route.path"
                :active="route.path == currentRoute"
              >
                {{ $t(route.text) }}
              </navbar-link>
            </li>
          </ul>
        </div>
        <div>
          <select
            id="lang-select"
            v-model="$i18n.locale"
            class="hidden md:inline-block transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-600 rounded-sm p-1 font-bold dark:text-white"
            name="language"
            @change="setLang()"
          >
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale.toUpperCase() }}
            </option>
          </select>

          <span class="hidden md:inline-block mx-3 dark:text-white/20">|</span>

          <btn
            link
            href="mailto:haniel1121@outlook.com"
            class="hidden md:inline-block"
          >
            {{ $t('navbar.contactMe') }}
          </btn>
        </div>

        <button
          class="p-2 dark:bg-white/10 rounded-full w-12 h-12 bg-gray-200 md:hidden z-50"
          @click="openMenu()"
        >
          <div
            id="line-1"
            class="border mb-1 mx-auto rounded-xl dark:border-white border-black w-6"
          />
          <div
            id="line-2"
            class="border mb-1 mx-auto rounded-xl dark:border-white border-black w-6"
          />
          <div
            id="line-3"
            class="border mx-auto rounded-xl dark:border-white border-black w-6"
          />
        </button>
      </div>
    </div>
    <transition :css="false" mode="out-in" @enter="onEnter" @leave="onLeave">
      <div
        v-if="menuOpen"
        class="menu z-40 ease-out bg-white dark:bg-black/80 w-screen h-screen bg-opacity-90 fixed top-0 left-0"
      >
        <ul class="flex h-full flex-col justify-center items-center">
          <li
            v-for="(route, index) in routes"
            :key="`route-${index}`"
            :ref="(el) => (links[index] = el)"
            class="nav-link-container text-center"
          >
            <navbar-link
              :active="route.path == currentRoute"
              :to="route.path"
              @click="menuOpen = false"
            >
              {{ $t(route.text) }}
            </navbar-link>
          </li>
          <li class="nav-link-container text-center py-4">
            <select
              id="lang-select"
              v-model="$i18n.locale"
              class="transition-all text-xl duration-300 ease-in-out bg-gray-100 dark:bg-gray-600 rounded-sm p-1 font-bold dark:text-white"
              name="language"
              @change="setLang()"
            >
              <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
              >
                {{ locale.toUpperCase() }}
              </option>
            </select>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

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

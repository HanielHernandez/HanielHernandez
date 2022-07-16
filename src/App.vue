<template>
  <div :class="{ dark: darkmode, 'bg-gray-900': darkmode }">
    <!-- <the-navbar
      v-if="routeName != 'MyCv'"
      id="navbar"
      :dark-mode="darkmode"
      :class="{ dark: darkmode }"
      @on-change-light-mode="changeLightMode"
    /> -->

    <router-view />

    <!-- <Home />
    <about-me-section />
    <my-work-section /> -->
    <!-- <transition
          mode="out-in"
          @enter="onTransitionEnter"
          @leave="onTransitionLeave"
        >
          <component :is="Component" ref="component" />
        </transition> -->
  </div>
</template>
<script setup>
// import animations from '@/animations'
import { ref } from 'vue'
// import { useRoute } from 'vue-router'
// import Home from './views/Home.vue'
// import AboutMeSection from './components/AboutMeSection.vue'
// import MyWorkSection from './components/MyWorkSection.vue'
//const route = useRoute()
const darkmode = ref(false)

// const routeName = computed(() => {
//   return route.name
// })
// const currentRoute = ref(route.name)
// const oldRoute = ref(route.name)

// watch(routeName, (newval, oldval) => {
//   currentRoute.value = newval
//   oldRoute.value = oldval
// })

// const changeLightMode = () => {
//   darkmode.value = darkmode.value == true ? false : true
// }
</script>
<style lang="scss"></style>

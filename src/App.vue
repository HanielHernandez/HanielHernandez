<template>
  <div :class="{ dark: darkmode, 'bg-gray-900': darkmode }">
    <div
      class="container container-xl mx-auto h-screen w-screen"
      style="padding-top: 84px"
      :class="{ dark: darkmode }"
    >
      <the-navbar
        v-if="routeName != 'MyCv'"
        id="navbar"
        :dark-mode="darkmode"
        :class="{ dark: darkmode }"
        @onChangeLightMode="changeLightMode"
      />
      <Home />
      <about-me-section />
      <my-work-section />
      <!-- <transition
          mode="out-in"
          @enter="onTransitionEnter"
          @leave="onTransitionLeave"
        >
          <component :is="Component" ref="component" />
        </transition> -->
    </div>
  </div>
</template>
<script setup>
// import animations from '@/animations'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Home from './views/Home.vue'
import AboutMeSection from './components/AboutMeSection.vue'
import MyWorkSection from './components/MyWorkSection.vue'
const route = useRoute()
const routeName = computed(() => {
  return route.name
})
const currentRoute = ref(route.name)
const oldRoute = ref(route.name)
const darkmode = ref(false)
watch(routeName, (newval, oldval) => {
  console.log(newval, oldval)
  currentRoute.value = newval
  oldRoute.value = oldval
})

// const onTransitionEnter = (el, done) => {
//   animations[currentRoute.value.toLowerCase()].onEnter(el, done)
// }
// const onTransitionLeave = (el, done) => {
//   animations[oldRoute.value.toLowerCase()].onLeave(el, done)
// }
const changeLightMode = () => {
  darkmode.value = darkmode.value == true ? false : true
}
</script>
<style lang="scss"></style>

<template>
  <div
    :class="{ dark: darkmode, 'bg-gray-900': darkmode }"
    class="transition-all ease-in-out duration-300"
  >
    <the-navbar
      id="navbar"
      :dark-mode="darkmode"
      :class="{ dark: darkmode }"
      @onChangeLightMode="changeLightMode"
    />
    <div
      class="container container-xl mx-auto h-screen"
      style="padding-top: 84px"
      :class="{ dark: darkmode }"
    >
      <router-view v-slot="{ Component }">
        <transition
          mode="out-in"
          @enter="onTransitionEnter"
          @leave="onTransitionLeave"
        >
          <component :is="Component" ref="component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup>
import animations from '@/animations'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
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

const onTransitionEnter = (el, done) => {
  animations[currentRoute.value.toLowerCase()].onEnter(el, done)
}
const onTransitionLeave = (el, done) => {
  animations[oldRoute.value.toLowerCase()].onLeave(el, done)
}
const changeLightMode = () => {
  darkmode.value = darkmode.value == true ? false : true
}
</script>
<style lang="scss"></style>

<template>
  <div :class="{ dark: darkmode, 'bg-gray-900': darkmode }">
    <the-navbar
      v-if="routeName != 'MyCV'"
      id="navbar"
      :dark-mode="darkmode"
      :class="{ dark: darkmode }"
      @on-change-light-mode="changeLightMode"
    />
    <div class="w-full mx-auto pt-36" style="max-width: 1024px">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import animations from '@/animations'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const darkmode = ref(false)

const routeName = computed(() => {
  return route.name
})
// const currentRoute = ref(route.name)
// const oldRoute = ref(route.name)

// watch(routeName, (newval, oldval) => {
//   currentRoute.value = newval
//   oldRoute.value = oldval
// })

const changeLightMode = () => {
  darkmode.value = darkmode.value == true ? false : true
}
</script>
<style lang="scss"></style>

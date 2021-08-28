<template>
  <div class="fixed z-50 top-0 left-0 p-6 flex w-full">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <a href="" class="text-3xl uppercase font-black text-blue-600">
          Logo
        </a>

        <div>
          <ul class="flex">
            <li v-for="(route, index) in routes" :key="`route-${index}`">
              <navbar-link>
                {{ route.text }}
              </navbar-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    console.log(context)
    return {}
  },
  computed: {
    routes() {
      return this.$config.navbarRoutes
    }
  }
}
</script>

<style lang="scss" scoped></style>

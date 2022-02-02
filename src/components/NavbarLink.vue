<template>
  <router-link
    :to="to"
    :v-bind="$attrs"
    href=""
    class="
      px-6
      py-4
      md:px-4 md:py-0
      text-center text-2xl
      md:text-md
      nav-link
      font-bold
      dark:text-white dark:hover:text-gray-100
      hover:text-gray-600
      text-gray-900
      transition-all
      ease-in-out
      duration-300
    "
    :class="{ active: active }"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'NavbarLink',
  props: {
    active: {
      type: Boolean,
      default: () => false
    },
    to: {
      type: [Object, String],
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped></style>

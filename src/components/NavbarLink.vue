<template>
  <a
    :v-bind="$attrs"
    href=""
    class="
      px-6
      text-md
      nav-link
      font-bold
      hover:text-gray-600
      text-gray-900
      transition-all
      ease-in-out
      duration-300
    "
    :class="{ border: active }"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'NavbarLink',
  props: {
    active: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped></style>

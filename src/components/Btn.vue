<template>
  <component :is="link ? 'a' : 'button'">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped></style>

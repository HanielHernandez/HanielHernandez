<template>
  <div class="border relative w-full card-container">
    <img src="https://via.placeholder.com/150" alt="" class="w-full" />
    <div
      class="card-content p-4 opacity-0 absolute w-full h-full bottom-0"
    ></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.card {
  &-container {
    &:hover {
      .card-content {
        @apply bg-white;
        @apply opacity-100;
        @apply bg-opacity-50;
      }
    }
  }
  &-content {
    transition: all 0.3s ease-in-out;
  }
}
</style>

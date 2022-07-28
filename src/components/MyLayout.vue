<script></script>
<template>
  <div>
    <the-navbar
      v-if="routeName != 'MyCv'"
      id="navbar"
      :dark-mode="darkmode"
      :class="{ dark: darkmode }"
      @on-change-light-mode="changeLightMode"
    />
    <slot></slot>
  </div>
</template>

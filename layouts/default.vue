<script setup lang="ts">
import Nav from '~/components/Nav.vue';
</script>

<template>
  <div>
    <Nav />
    <slot />
  </div>
</template>
<style>
@font-face {
  font-family: 'Inika'; /* Font name */
  src: url('../assets/fonts/Inika/Inika-Regular.ttf') format('truetype'); /* Use 'truetype' for .ttf files */
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inika', sans-serif; /* Fallback to a safe font */
}
</style>

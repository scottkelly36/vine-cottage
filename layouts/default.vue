<script setup lang="ts">
import Nav from "~/components/Nav.vue";
</script>

<template>
  <div>
    <Nav />
    <slot />
  </div>
</template>
<style>
@font-face {
  font-family: "Inika"; /* Font name */
  src: url("../assets/fonts/Inika/Inika-Regular.ttf") format("truetype"); /* Use 'truetype' for .ttf files */
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Abigail"; /* Font name */
  src: url("../assets/fonts/abigail-font-v4/abigail-v4.woff") format("woff"),
    /* WOFF format */ url("../assets/fonts/abigail-font-v4/abigail-v4.ttf")
      format("truetype"),
    /* TTF format */ url("../assets/fonts/abigail-font-v4/abigail-v4.otf")
      format("opentype"); /* OTF format */
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Abigail", sans-serif; /* Fallback to a safe font */
}

html {
  scroll-behavior: smooth;
}
</style>

<script setup lang="ts">
import Nav from '~/components/Nav.vue';
</script>

<template>
    <div>
        <Nav/>
        <slot/>
    </div>
</template>
<style>

@font-face {
    font-family: 'Abigail'; /* Font name */
    src: url('../assets/fonts/abigail-modern-serif/Abigail.ttf') format('truetype'); /* Use 'truetype' for .ttf files */
    font-weight: normal;
    font-style: normal;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Abigail', sans-serif; /* Fallback to a safe font */
}
</style>
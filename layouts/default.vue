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
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
</style>
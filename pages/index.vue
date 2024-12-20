<template>
  <div>
    <text-split :componentData="data.textSplit1" />
    <parallax />
    <text-split :componentData="data.textSplit2" />
    <text-split :componentData="data.textSplit3" />
    <Footer :componentData="data.footer" />
  </div>
</template>

<script setup>
import pageData from '../assets/content.json';
import Footer from '~/components/Footer.vue';

const data = pageData;
</script>

<style></style>

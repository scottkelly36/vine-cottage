<template>
  <div class="page-layout">
    <Hero :componentData="data.hero" />
    <text-split :componentData="data.textSplit1" />
    <parallax />
    <text-split :componentData="data.textSplit2" />
    <Carousel :componentData="data.carousel" />
    <text-split :componentData="data.textSplit3" />
    <Accordion :componentData="data.Accordion" />
    <Footer :componentData="data.footer" />
  </div>
</template>

<script setup>
import pageData from "../assets/content.json";
import Footer from "~/components/Footer.vue";

const data = pageData;
</script>

<style>
.page-layout {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>

<template>
  <div class="page-layout">
    <Hero :componentData="data.hero" />
    <text-split
      :componentData="data.textSplit1"
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
    />
    <parallax />
    <section v-scroll-reveal="{ origin: 'left', distance: '200px' }">
      <text-split :componentData="data.textSplit2" />
      <Carousel :componentData="data.carousel" />
    </section>
    <section
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
      class="text-split3-section"
    >
      <text-split :componentData="data.textSplit3" />
      <FourImageBlock :componentData="data.fourImageBlock" />
    </section>
    <section
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
      class="features-section"
    >
      <Accordion :componentData="data.Accordion" />
      <Warning :componentData="data.warnings" />
    </section>
    <section v-scroll-reveal="{ origin: 'left', distance: '200px' }">
      <text-split :component-data="data.exploreNorthumberland" />
    </section>

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

.features-section {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.text-split3-section {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>

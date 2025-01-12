<template>
  <div class="page-layout">
    <Hero :componentData="data.hero" />
    <text-split
      :componentData="data.textSplit1"
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
    />
    <parallax />
    <section
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
      class="text-split2-section"
    >
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
    <section
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
      class="northumberland-section"
    >
      <text-split :componentData="data.exploreNorthumberland" />
      <LargeImageGrid :componentData="data.largeImageGrid" />
    </section>

    <Footer :componentData="data.footer" />
  </div>
</template>

<script setup>
import pageData from "../assets/content.json";
import Footer from "~/components/Footer.vue";

const data = pageData;
useHead({
  title: "Vine Cottage",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "./favicons/favicon-32x32.png",
    },
  ],
});
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

.text-split2-section {
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 1024px) {
    gap: 75px;
  }
}

.text-split3-section {
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 1024px) {
    gap: 75px;
  }
}

.northumberland-section {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>

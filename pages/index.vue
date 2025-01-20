<template>
  <div class="page-layout">
    <Hero :componentData="data.hero" id="Home" :onClick="smoothScrollTo" />
    <text-split
      :componentData="data.textSplit1"
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
      id="About"
    />
    <parallax />
    <section
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
      class="text-split2-section"
      id="Book-now"
    >
      <text-split :componentData="data.textSplit2" />
      <Carousel :componentData="data.carousel" />
    </section>
    <section
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
      class="text-split3-section"
      id="Perfect-for-single-travelers"
    >
      <text-split :componentData="data.textSplit3" />
      <div class="cta__container">
        <primary-cta
          :text="'Book Your Stay'"
          :link="'#Book-now'"
          :onClick="smoothScrollTo"
        />
      </div>
      <FourImageBlock :componentData="data.fourImageBlock" />
    </section>
    <section
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
      class="features-section"
      id="Features"
    >
      <Accordion :componentData="data.Accordion" />
      <Warning :componentData="data.warnings" :onClick="smoothScrollTo" />
    </section>
    <section>
      <Reviews :componentData="data.testimonials" />
    </section>
    <section
      v-scroll-reveal="{ origin: 'left', distance: '200px' }"
      class="northumberland-section"
      id="Explore-the-north"
    >
      <text-split :componentData="data.exploreNorthumberland" />
      <div class="cta__container">
        <primary-cta
          :text="'Book Your Stay'"
          :link="'#Book-now'"
          :onClick="smoothScrollTo"
        />
      </div>
      <LargeImageGrid :componentData="data.largeImageGrid" />
    </section>

    <Footer :componentData="data.footer" />
  </div>
</template>

<script setup>
import pageData from "../assets/content.json";
import Footer from "~/components/Footer.vue";
import primaryCta from "~/components/buttons/primary-cta.vue";

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

const smoothScrollTo = (id) => {
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });

    // Reinitialize Vue Scroll Reveal for the target section
    setTimeout(() => {
      const { $vueScrollReveal } = useNuxtApp();
      const elements = target.querySelectorAll(".v-scroll-reveal");
      elements.forEach((el) => {
        $vueScrollReveal.reveal(el);
      });
    }, 500); // Wait for scroll to complete
  }
};
</script>

<style>
.page-layout {
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (min-width: 700px) {
    gap: 150px;
  }

  @media (min-width: 700px) {
    gap: 200px;
  }
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

.cta__container {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

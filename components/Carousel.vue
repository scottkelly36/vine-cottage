<template>
  <Splide :options="options" class="carousel-container">
    <SplideSlide
      v-for="(image, index) in componentData.images"
      :key="index"
      class="carousel-slide"
    >
      <img :src="image" alt="" />
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const props = defineProps({
  componentData: { type: Object, required: true },
});

const options = {
  autoplay: true,
  type: "loop",
  arrows: false,
  pagination: false,
  perPage: 1.5,
  focus: "center",
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 300px; /* Adjust height as needed */
  display: flex;
  align-items: center; /* Vertically centers slides */
}

.carousel-slide {
  width: 200px !important; /* Default width */
  height: 200px; /* Default height */
  overflow: hidden;
  margin: 0 20px;
  transition: all 0.5s ease; /* Smooth transition for size changes */
  opacity: 0.7; /* Dim non-active slides */

  @media (min-width: 1024px) {
    width: 300px !important;
    height: 300px;
  }
}

.carousel-slide.is-active {
  width: 220px !important; /* Larger width for active slide */
  height: 220px; /* Larger height for active slide */
  opacity: 1; /* Highlight active slide */

  @media (min-width: 1024px) {
    width: 330px !important;
    height: 330px;
  }
}

.splide__list {
  display: flex;
  align-items: center;
}

.carousel-slide img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease; /* Smooth inner image scaling */
}
</style>
